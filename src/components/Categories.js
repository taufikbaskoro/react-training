import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
 
const Categories = () => {
    const [categories, setCategories] = useState(null);

    const fetching = async () => {
        const data = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const result = await data.json();
        // await console.log(result)
        setCategories(result.categories)
        // console.log(result.categories)
    }

    useEffect(() => {
        fetching()
    }, [])

    // console.log(categories)

    return(
        <div>
            <h2 className="title">Our Food Menu</h2>
            <div className="category-list">
            {categories && 
                categories.map((category) => {
                    return (
                        <div key={category.idCategory} className="category-item">
                            <Link to={`/category/${category.strCategory}`}>
                            {
                                category.idCategory % 2 === 0 ? (<p className="bold">{category.strCategory}</p>) : (<p className="italic">{category.strCategory}</p>)
                            }
                            
                            <img src={category.strCategoryThumb} alt={category.strCategory} className="category-img" />
                            </Link>
                        </div>
                    )
                })
                || 'loading. . .'
            } 
            </div>
        </div>
    )
}

export default Categories;