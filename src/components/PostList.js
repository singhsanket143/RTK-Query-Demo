import { useGetPostsQuery } from "../redux/services/posts"
import PostItem from "./PostItem";
const PostList = () => {
    const {data: posts, error, isLoading} = useGetPostsQuery();
    if(isLoading) {
        return <>Loading...</>
    }
    if(error) {
        return <>Error loading posts</>
    }
    return (
        <div>
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    )
}

export default PostList;