import { useState } from "react"
import { useAddPostMutation } from "../redux/services/posts";

const AddPost = () => {
    const [title, setTitle] = useState('');

    const [content, setContent] = useState('');

    const [addPost] = useAddPostMutation();

    const handleSubmit = async () => {
        await addPost({title, content});
        setTitle('');
        setContent('');
    }
    
    return (
        <div>
            <input 
                placeholder="Add title" 
                onChange={(e) => setTitle(e.target.value)} 
                value={title} 
                type="text"/>

            <input 
                placeholder="Add Content" 
                onChange={(e) => setContent(e.target.value)} 
                value={content} 
                type="text"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AddPost;