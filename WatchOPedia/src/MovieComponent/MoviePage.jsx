import { useState } from "react";
import AddMovie from "./MovieAdd";
import MovieList from "./MovieList";
//movieList: ["Die Hard", "Harry Potter"]
const MoviePage = () => {
    const [moive, setMovie] = useState(() => {
        return {movieList: ["Die Hard", "Harry Potter"]};
    });
    function handleAddMovie(newMovie){
        setMovie((prevState) => {
            return{ ...prevState, movieList: prevState.movieList.concat([newMovie])};
        });
    };
    return (
        <div className="container col-12 col-md-6 my-3 border">
            <AddMovie addMovie={handleAddMovie}/>
            <MovieList movieList={moive.movieList}/>
        </div>
    );
};
export default MoviePage;