import { useDeletePostMutation } from "../redux/services/posts"

const PostItem = ({post}) => {

    const [deletePost] = useDeletePostMutation();

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
    )
}

export default PostItem;