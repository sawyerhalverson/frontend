import {useState, useEffect} from "react";
import {Movie} from "../types/movie"


function MovieList2 () {
    const [movieData, setMovieData] = useState<Movie[]>([]);

    //useEffect method


    useEffect (() => {
        const fetchMovies = async () => {
            const rsp = await fetch("https://localhost:4000/movies")
            const temp = await rsp.json();
            setMovieData(temp);
        };

        fetchMovies();
    }, []);
    // make the table
    return (

        <> 
            <div className="row">
                <h4>Best Movies</h4>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Director</th>
                        <th>Rating</th>
                        <th>Edited</th>
                        <th>LentTo</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {movieData.map((m) => (
                        <tr key={m.movieId}>

                            <td>{m.category}</td>
                            <td>{m.title}</td>
                            <td>{m.year}</td>
                            <td>{m.director}</td>
                            <td>{m.rating}</td>
                            <td>{m.edited}</td>
                            <td>{m.lentTo}</td>
                            <td>{m.notes}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        
        
        
        </>

    );
}

export default MovieList2;