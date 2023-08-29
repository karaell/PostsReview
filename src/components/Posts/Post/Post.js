import Grid  from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {styled} from "@mui/material";
import {PostTitle} from "./PostTitle";

const StyledCardHeader = styled(CardHeader)({
    '.MuiCardHeader-title': {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: '400px',
        textOverflow: 'ellipsis',
    }
})

export function Post ({post, handleDeletePost}) {
    
    return (
        <Grid item xs="6">
            <Card variant="outlined" sx={{height: '100%'}}>
                <StyledCardHeader
                    title={<PostTitle title={post.title} />}
                    action={
                        <IconButton aria-label="delete" onClick={() => handleDeletePost(post.id)}>
                            <DeleteOutlineIcon />
                        </IconButton>
                    }
                />
                <CardContent>
                    {post.body}
                </CardContent>
            </Card>
        </Grid>
    )
}