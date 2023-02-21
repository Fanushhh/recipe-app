import {React} from "react";
import Recipe from '../Recipe/Recipe';
import styles from './recipeContainer.module.css';


export default function RecipeContainer({recipes}){

    return (
        <div className={styles.recipeContainer}>
            
            {recipes.map(recipe => {
                return (
                <Recipe key={recipe.idMeal} recipeData={recipe}/>
                )
            })}
        </div>
        // TODO : De facut carusel cu retete pe diferite categorii
    )
}