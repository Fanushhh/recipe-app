
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import YouTubePlayer from "../VideoPlayer/VideoPlayer";
import { Link } from "react-router-dom";
import styles from './RecipePage.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function RecipePage(){
    const [recipe, setRecipe] = useState();
    const [loading, setIsLoading] = useState(true);

    let { recipeId } = useParams();
    let ingredients = [];

    
    useEffect(() => {
        const fetchRecipe = async () => {
            try
            {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
                const data = await response.json();
                setRecipe(data.meals[0]);
                setIsLoading(false);
            }catch(error){
                console.log(error);
            }
            
        }
        fetchRecipe();
    },[recipeId]);

    console.log(recipe)

    const mergeInstructions = async () => {
        try
        {
            for(let i = 1; i< 20; i++){
                if(recipe['strIngredient' + i]){
                    ingredients.push(recipe['strMeasure' + i] + '  ' +  recipe['strIngredient' + i]);
                    }  
                    else{
                        console.log('nien')
                    } 
            }
        }catch(error){
            console.log(error)
        }
    }
    mergeInstructions();
    
    
    return (
        loading ? 
        <h1>Getting data from the db...</h1> :
        <div className={styles.recipePage}>
            <Link to='/' className={styles.backBtn}><ArrowBackIcon />Back</Link>
            <div className={styles.recipeContainer}>
                <h1>{recipe.strMeal}</h1>
                <div className={styles.recipeImg}>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                </div>
                <div>
                    <p>Ingredients: </p>
                    <ul>{ingredients.map((ingredient, index) => {
                        return <li key={index}>{ingredient}</li>
                    })}
                    </ul>
                </div>
                <div className={styles.instructions}>
                    
                    <p>Cousine type: {recipe.strArea}</p>
                    <p className={styles.recipeInstructions}>{recipe.strInstructions}</p>
                </div>
                <div id={styles.playerContainer}>
                    <YouTubePlayer id={styles.player} videoLink={recipe.strYoutube}/>
                </div>

            </div>
        </div>
    
    )
}