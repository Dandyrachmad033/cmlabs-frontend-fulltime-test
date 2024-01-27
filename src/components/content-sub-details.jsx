
import React from "react";
import ApiService from './../data/api_service';
import { useNavigate } from "react-router-dom";
import '../css/Navbar.css'
export default function Content_sub_details(sub_param) {

    const [post, setPost] = React.useState(null);
    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const ingredients = await ApiService.fetchIngredientssubdetails(sub_param);
                setPost(ingredients);
            } catch (error) {
                // Handle error if needed
            }
        };

        fetchData();
    }, [sub_param.ingredient,]);
    console.log(post);
    if (!post) return null;
    function handleHome() {
        navigate(`/`);
    }

    function handleDetails(ingredientName) {
        navigate(`/details/${encodeURIComponent(ingredientName)}`);
    }
    return (

        <div className="container-sm shadow pb-3 pt-3" style={{ marginTop: "50px", borderRadius: "20px" }}>
            <div className="row">
                <div className="d-flex">
                    <h5 className="m-0">
                        <a className=" m-0 text-dark decoration" onClick={handleHome}>
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </a>
                    </h5>
                    <h5 className="mx-3"> &gt; </h5>
                    <h5>
                        <a className="decoration" onClick={() => handleDetails(sub_param.ingredient)}>
                            {sub_param.ingredient}
                        </a>
                    </h5>
                    <h5 className="mx-3"> &gt; </h5>
                    <h5 style={{ opacity: "0.6" }}>
                        {post.meals[0].strMeal}
                    </h5>
                </div>
            </div>

            <div className="row mb-4 border-bottom border-dark border-1">
                <div className="d-flex">
                    <h1 style={{ marginRight: "10px" }}>{sub_param.ingredient}
                    </h1>
                    <h1 style={{ color: "green" }}>({post.meals[0].strMeal})</h1>
                </div>
            </div>

            {post.meals.map((sub_details_meal) => (
                <div className="container-fluid">
                    <div className="row m-0">
                        <div className="col-sm-6 p-0" key={sub_details_meal.idMeal}>
                            <div className="card mb-4 border border-dark border-1 shadow" style={{ borderRadius: "20px", overflow: "hidden", width: "80%", margin: "auto" }}>
                                <div className="card-body" style={{ backgroundImage: `url(${sub_details_meal.strMealThumb})`, backgroundSize: 'cover', backgroundPosition: 'center', height: "300px", opacity: "1" }}>
                                    <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                                        {/* Konten lainnya */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex justify-content-center">
                                <h3>Instruction</h3>
                            </div>
                            <p>{sub_details_meal.strInstructions}</p>
                            <h3>Recipe</h3>
                            <ul>
                                {Array.from({ length: 20 }, (_, index) => {
                                    const ingredientKey = `strIngredient${index + 1}`;
                                    const measureKey = `strMeasure${index + 1}`;
                                    const ingredient = sub_details_meal[ingredientKey];
                                    const measure = sub_details_meal[measureKey];

                                    if (ingredient && measure) {
                                        return (
                                            <li key={index}>
                                                {measure} {ingredient}
                                            </li>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                            </ul>

                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <h3> Tutorials</h3>
                    </div>

                    <div class="card text-center mb-5 mx-auto" style={{ maxWidth: "50%" }}>
                        <iframe
                            width="400" // lebar iframe
                            height="300" // tinggi iframe
                            src={sub_details_meal.strYoutube.replace("watch?v=", "embed/")} // ganti URL YouTube dengan URL tersemat
                            frameborder="0" // non-border
                            allowfullscreen // izinkan tampilan layar penuh
                            className="card-img-top mx-auto" // kelas untuk styling jika diperlukan
                        ></iframe>
                    </div>





                </div>
            ))}
        </div>
    );
}