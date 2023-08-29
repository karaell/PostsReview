import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Header } from "./components/Header/Header";
import { Posts } from "./components/Posts/Posts";
import { useEffect, useState } from "react";
import { fetchPosts } from "./api/posts";

function App() {
    const [postsList, setPostsList] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            const posts = await fetchPosts();
            setPostsList(posts);
        }

        getPosts()
    }, []);

    const handleDeletePost = (postId) => {
        const updatedPosts = postsList.filter(item => item.id !== postId);
        setPostsList(updatedPosts);
    }
    
    const handleCreatePost = (newPost) => {
        const updatedPosts = [newPost, ...postsList];
        setPostsList(updatedPosts)
    }
    
    return (
        <Box>
            <Header handleCreatePost={handleCreatePost}/>
            {postsList ? <Posts postsList={postsList} handleDeletePost={handleDeletePost}/> : <CircularProgress />}
        </Box>
    )
}

export default App;
