import React, {useState, useEffect} from "react";
import './App.css';
import Axios from 'axios';

function App() {
  const [movieName, setMovieName]= useState("");
  const [review, setReview]= useState("");
  const [movieReviewList, setMovieList]=useState([]);
  const [searchMovieName, setSearchMovieName] = useState("");
  const [searchMovie, setSearchMovie] = useState({});
  const [newReview, setNewReview]= useState("");
  const [found, setFound] = useState(true);

  useEffect(()=>{
    const sortByTitle = (data) => {
      const sorted = [...data].sort((a, b)=> {
        return a.movieName > b.movieName;
      });
      return sorted;
    };

    Axios.get("http://localhost:3001/api/get").then((response) => {
      setMovieList(sortByTitle(response.data));
    });
  },[]);


  const submitReview=()=>{

    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review,
    });

      setMovieList([
        ...movieReviewList,
        { movieName: movieName, movieReview: review },
      ]);
 };

 const searchMovieAction = () => {
  movieReviewList.forEach((val) => {
    if (val.movieName === searchMovieName) {
      setSearchMovie(val);
      setFound(true);
      return;
    }
  });
 };

 const deleteReview = (movie) => {
   Axios.delete(`http://localhost:3001/api/delete/${movie}`);
 };

 const updateReview = (movie) => {
   Axios.put("http://localhost:3001/api/update", {
     movieName: movie,
     movieReview: newReview,
   });
   setNewReview("")
 };

  return (
    <div className="App"><h1> SORTED CRUD APPLICATION </h1>
    <div className="form">
      <label>
        Search for a movie:
      </label>
      <input type="text" name="searchMovieName" onChange={(e)=>{
        setSearchMovieName(e.target.value)
      }}/>
    
      <button onClick = {searchMovieAction}> Submit </button>
    </div>
    {!found && 
    <h2> No movie found with this name</h2>
    }

    {searchMovie.movieName != null && 
        <div className="card">
          <h1> {searchMovie.movieName} </h1>
          <p> {searchMovie.movieReview} </p>
        </div>
      
    }

    <br></br>
    <br></br>
    <h2> Add a new movie</h2>
    <div className="form">
    <label>Movie Name:</label>
    <input type="text" name="movieName" onChange={(e)=>{
      setMovieName(e.target.value)
    }}/>
    <label>Review:</label>
    <input type="text" name="Review" onChange={(e)=>{
      setReview(e.target.value)
    }}/>


    <button onClick={submitReview}> Submit </button>

    {movieReviewList.map((val)=>{
      return (
        <div className="card">
          <h1> {val.movieName} </h1>
          <p> {val.movieReview} </p>

          <button onClick={() => {deleteReview(val.movieName)}}>Delete</button>
          <input type="text" id="updateInput" onChange={(e) => {setNewReview(e.target.value)}}/>
          <button onClick={()=> {updateReview(val.movieName)}}>Update</button>
        </div>
      );
    })}
  </div>
</div>
);
}

export default App;
