import React,{useEffect,useState} from 'react'
import Recipe from './components/Recipe'
import './App.css'; 

const App = ()=>{

  const App_ID ='dafd55eb'
  const App_Key ='8c0a0412055d36eb2ab5c5ca27779853'
  
  const[recipes,setRecipes] = useState([]);
  const[search,setSearch] = useState('');
  const[query,setQuery] = useState('chicken');


  useEffect(()=>{
    getRecipes()
  },[query])
  
  

  const getRecipes = async()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Key}`)   
    const data = await response.json();
     
    setRecipes(data.hits)
  }
  
  const getSearch= e =>{
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return(
    <div className="App">
  <form onSubmit={getSearch} className='search-form'>
        <input type="text" value={search} className='search-bar' onChange={e=>setSearch(e.target.value)}/>
        <button type="submit" className='search-button'>Search</button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe=><Recipe key={recipe.recipe.label} recipe={recipe}/>)}
      </div>
    
    </div>
  
  )
}

export default App;
