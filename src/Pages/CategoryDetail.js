import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";

const CategoryDetail = (props) => {
    let params = useParams();
    const [detail, setDetail] = useState(null);

    const fetching = async () => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.id}`);
        const result = await data.json();
        setDetail(result.meals)
        // console.log(result.categories)
    }

    useEffect(() => {
        fetching()
    }, [])

    console.log(params);
    return(
        <>
            <h2 className="title">Search result for "{params.id}"</h2>
            <p>Back to <Link to="/">Home</Link></p>
            <div className="category-list">
            {detail && 
                detail.map((category) => {
                    return (
                        <div key={category.idMeal} className="category-item">
                            <p>{category.strMeal}</p>
                            <img src={category.strMealThumb} alt={category.strMeal} className="category-img" />
                        </div>
                    )
                })
                || 'loading. . .'
            } 
            </div>
        </>
    )
}

export default CategoryDetail;