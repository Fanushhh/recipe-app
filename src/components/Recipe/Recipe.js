import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './recipe.module.css';


export default function Recipe({recipeData}){
    const [clicked, setClicked] = useState(false);


    const handleClick = () => {
        setClicked(!clicked);
    }
    return (
    <div>
        <div className={styles.recipe}>
            <div className={styles.imgContainer}>
                <img src={recipeData.strMealThumb} alt='meal image'/>
            </div>
            <div className={styles.recipeDetails}>
                <Link to={recipeData.idMeal}><h4>{recipeData.strMeal}</h4></Link>
                {clicked ? <FavoriteIcon className={clicked ? styles.favorite: ''} onClick={handleClick}/> : <FavoriteBorderIcon onClick={handleClick} />}
            </div>

        </div>
    </div>
        
    )
}