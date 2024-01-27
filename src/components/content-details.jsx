
import React from "react";
import ApiService from './../data/api_service';
import { useNavigate } from "react-router-dom";
import SearchForm from "./search-form";
import '../css/Navbar.css'
import '../css/component.css'
export default function Content_details(name_list) {

    const [post, setPost] = React.useState(null);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [displayedMeals, setDisplayedMeals] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const ingredients = await ApiService.fetchIngredientsdetails(name_list);
                setPost(ingredients);
                setDisplayedMeals(ingredients.meals);
            } catch (error) {
                // Handle error if needed
            }
        };

        fetchData();
    }, [name_list.ingredient]);

    if (!post) return null;

    function handledetails(nameIgnridient, mealid) {
        navigate(`/details/${encodeURIComponent(nameIgnridient)}/${encodeURIComponent(mealid)}`);
    }

    function handleHome() {
        navigate(`/`);
    }

    const performSearch = (value) => {
        if (!post) return;

        const filteredMeals = post.meals.filter((meal) =>
            meal.strMeal.toLowerCase().includes(value.toLowerCase())
        );

        setDisplayedMeals(filteredMeals);
    };

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        performSearch(value);
    };


    return (
        <div className="container-sm shadow pt-4" style={{ marginTop: "50px", borderRadius: "20px" }}>
            <div className="row mb-4">
                <SearchForm searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            </div>
            <div className="row">
                <div className="d-flex">
                    <h5 className="m-0">
                        <a className=" m-0 text-dark decoration" onClick={handleHome}>
                            <i class="fa fa-home" aria-hidden="true"></i>
                        </a>
                    </h5>
                    <h5 className="mx-3"> &gt; </h5>
                    <h5 style={{ opacity: "0.6" }}>
                        {name_list.ingredient}
                    </h5>
                </div>
            </div>

            <div className="row mb-4 border-bottom border-dark border-1">
                <h1>{name_list.ingredient}</h1>
            </div>
            <div className="row">
                {displayedMeals.map((detail_meal) => (
                    <div className="col-sm-3" key={detail_meal.idMeal}>
                        <a className="card-shadow" onClick={() => handledetails(name_list.ingredient, detail_meal.idMeal)}>
                            <div className="card mb-4 border border-dark border-1 card-style">
                                <div className="card-body" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${detail_meal.strMealThumb})`, backgroundSize: 'cover', backgroundPosition: 'center', height: "200px", opacity: "1" }}>
                                    <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
                                        <h5 className="card-title text-white" style={{ zIndex: 1000, color: "white" }}>{detail_meal.strMeal}</h5>
                                    </div>
                                </div>

                            </div>

                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}