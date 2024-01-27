import React from "react";

export default function SearchForm({ searchTerm, onSearchChange }) {
    return (
        <div className="d-flex justify-content-center">
            <form className="d-flex align-items-center" role="search" style={{ maxWidth: "100%" }}>
                <input className="form-control me-2 border border-dark" type="search" placeholder="Find Recipes" aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </form>
        </div>
    );
}