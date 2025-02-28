import { useState } from "react";

const MovieAdd = (props) => {
    const [name, setName] = useState("");
    function submitAddMovieForm (e){
        e.preventDefault();
        props.addMovie(name);
        setName("");
    }
    return (
        <form onSubmit={(e) => submitAddMovieForm(e)}>
            <div className="row text-white">
                <div className="col-12 text-center py-1 h4 text-success">AddMoive</div>
                <div className="col-8 offset-1">
                    <input type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="col-2">
                    <button className="btn btn-success form_control">Add</button>
                </div>
                <hr className="mt-3"/>
            </div>
        </form>
    )
}
export default MovieAdd;