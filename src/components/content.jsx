import React from "react";
import { useNavigate } from "react-router-dom";
import ApiService from './../data/api_service';
import SearchForm from "./search-form";
import MealCard from "./card";


export default function Content() {
    const [post, setPost] = React.useState(null);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [displayedMeals, setDisplayedMeals] = React.useState([]);
    const navigate = useNavigate();
    const displayLimit = 12;

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const ingredients = await ApiService.fetchIngredientsList();
                setPost(ingredients);
                setDisplayedMeals(ingredients.meals.slice(0, displayLimit));
            } catch (error) {
                // Handle error if needed
            }
        };

        fetchData();
    }, [displayLimit]);

    const performSearch = (value) => {
        if (!post) return;

        const filteredMeals = post.meals.filter((meal) =>
            meal.strIngredient.toLowerCase().includes(value.toLowerCase())
        );

        setDisplayedMeals(filteredMeals.slice(0, displayLimit));
    };

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        performSearch(value);
    };

    const handleClick = (ingredientName) => {
        navigate(`/details/${encodeURIComponent(ingredientName)}`);
    };

    return (
        <div className="container-sm shadow pt-4" style={{ marginTop: "50px", borderRadius: "20px" }}>
            <div className="row mb-4">
                <SearchForm searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            </div>
            <div className="row">
                {displayedMeals.map((meal) => (
                    <MealCard key={meal.idMeal} meal={meal} onClick={() => handleClick(meal.strIngredient)} />
                ))}
            </div>
        </div>
    );
}





