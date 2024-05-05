import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { useEffect, useState } from "react";
import useFetch from "./usefetch";

const Edit = () => {
    const { id } = useParams();
    const { data: Curblog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isEditing, setIsEditing] = useState(false);
    
    
    useEffect(() => {
        console.log(1);
        if (Curblog) {
          setTitle(Curblog.title);
          setBody(Curblog.body);
          setAuthor(Curblog.author); // Assuming this is intended
        }
      }, [Curblog]);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const blog = {title, body, author};
        setIsEditing('true');
        

        fetch('http://localhost:8000/blogs/'+ id, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })
        .then(() => {
            setIsEditing(false);
            history.push('/');
        })
    }

    return ( 
        <div className="edit">
            <h2>Edit current blog</h2>
            <form onSubmit={handleSubmit}>

                <label>Blog title: </label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body: </label>
                <textarea 
                    required
                    value = {body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author: </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isEditing && <button>Edit blog</button>}
                { isEditing && <button disabled>Editing...</button> }
                {/* <p>{author}</p> */}
            </form>
        </div>
    );
}
 
export default Edit;