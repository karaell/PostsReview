import Box from "@mui/material/Box";
import Grid  from "@mui/material/Grid";
import { styled } from "@mui/material";
import { Post } from "./Post/Post";

const StyledGridContainer = styled(Grid)({
    padding: '20px',
    fontSize: '16px',
    lineHeight: '18px',
    fontFamily: 'Roboto, sans-serif',
})

export function Posts ({postsList, handleDeletePost}) {
    return (
        <StyledGridContainer container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {postsList.length ? 
                <>
                    {postsList.map(post => (
                        <Post post={post} handleDeletePost={handleDeletePost} key={post.id}/>
                    ))}
                </> 
                : 
                <Box>Посты не найдены</Box>
            }
        </StyledGridContainer>
    )
}