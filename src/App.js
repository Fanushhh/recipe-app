import './App.css';
import RecipeContainer from './components/RecipeContainer/RecipeContainer';
import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [found, setFound] = useState(true);
  const [query, setQuery] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    try{
      const response = await fetch(endpoint);
      const data = await response.json();
      if(data.meals){
        setRecipes(data.meals);
        setFound(true);
        setQuery('');
      }else{
        setFound(false);
        setQuery('');
      }
    }catch(error){
      console.log(error);
    }
  }
  const handleChange = (e) => {
    setQuery(e.target.value);
  }
  console.log(recipes);
  return (
    <main className="app">
      <div className="cta">
          <h1>Feeling clueless?</h1>
          <p>Find something that you might wanna cook today without the struggle of searching through a cook book or actually thinking of what you might wanna eat and estimating the time it will take you to prepare that and end up ordering shortly after.</p>
        </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} placeholder="What are you thinking about?" className="searchBar" type='search' name='search' value={query}/>
          <label htmlFor='search'/>
        </div>
        <button type='submit'>
          <SearchIcon />
        </button>
      </form>
      {found ? 
      <div className="resultsContainer">
        <RecipeContainer recipes={recipes} />
      </div> : 
        <h1 className={`error ${found ? 'hide' : 'show'}`}>No recipe found.</h1>
      }
    </main>
  );
}

export default App;
