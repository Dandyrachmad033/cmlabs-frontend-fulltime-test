// MealCard.js
import React from "react";
import '../css/component.css'
export default function MealCard({ meal, onClick }) {
    return (
        <div className="col-sm-3">
            <a style={{ textDecoration: "none" }} onClick={onClick}>
                <div className="card mb-4 border border-dark border-1 card-style-content">
                    <div className="card-body">
                        <h5 className="card-title text-center border-bottom border-dark border-1">{meal.strIngredient}</h5>
                        <p className="card-text">{meal.strDescription && meal.strDescription.length > 20 ? `${meal.strDescription.substring(0, 100)}...` : meal.strDescription}</p>
                        <a href="#" className="btn btn-dark btn-sm text-white">Details</a>
                    </div>
                </div>
            </a>
        </div>
    );
}
