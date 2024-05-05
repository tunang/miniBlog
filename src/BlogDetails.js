import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./usefetch";

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id)
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/');
        })
    }

    const handleEdit = () => {
        history.push(`/blogs/${id}/edit`)
    }

    return ( 
        <div className="block-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div> { blog.body } </div>
                    <button className="btn-delete" onClick={handleDelete}>Delete</button>
                    <button className="btn-edit" onClick={handleEdit}>Edit</button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;