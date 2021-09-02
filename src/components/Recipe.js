import React from 'react'
import Styles from './Recipe.module.css'

const Recipe = ({recipe}) => {
    console.log(recipe)
    return (
        <div className={Styles.recipe}>
            <h1>{recipe.recipe.label}</h1>
            <ol>
                {recipe.recipe.ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}       
            </ol>
            <p>{recipe.recipe.calories}</p>
            <img src ={recipe.recipe.image} alt='' className={Styles.image}/>
        </div>
    )
}

export default Recipe
