import { useState } from "react";
import data from "./MovieData.json";
import "./MovieList.css";

const movieDataList = data.MovieDataList;

function MovieList () {

    const [listOfMovies, setListOfMovies] = useState(movieDataList);

    // add in a little function to add movie
    const addMovie = () => {
        setListOfMovies(
            [
                ...movieDataList, 
                {
                    "Title" : "My name is Sawyer",
                    "Category" : "Hi",
                    "Director" : "Hi",
                    "Rating" :"Hi",
                    "Year" : "4322",
                    "Edited" : "Yes"
                }
            ]
        );
    };

    return (
        <>
            <div className="movie-list-header">
                <h3>Joel Hilton's Movie Collection</h3>
            </div>
            <div className="movie-list-table-container">
                <table className="table movie-list-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Director</th>
                            <th>Rating</th>
                            <th>Category</th>
                            <th>Edited</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* bring in the mapping */}
                        {listOfMovies.map((movie) => (
                            <tr key={movie.Title}>
                                <td>{movie.Title}</td>
                                <td>{movie.Year}</td>
                                <td>{movie.Director}</td>
                                <td>{movie.Rating}</td>
                                <td>{movie.Category}</td>
                                <td>{movie.Edited}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="add-movie-button-container">
                <button className="btn btn-primary" onClick={addMovie}>Add a Movie</button>
            </div>
        </>
    );
}

export default MovieList;
