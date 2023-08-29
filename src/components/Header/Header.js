import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { CreatePostModal } from "../CreatePostModal/CreatePostModal";
import { useState } from "react";

const StyledHeader = styled(Box)({
    background: '#CECAFF',
    height: '80px',
    padding: '0 20px',
    fontSize: '20px',
    fontWeight: 600,
    fontFamily: 'Roboto, sans-serif',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '15px'
})

export function Header({handleCreatePost}) {
    const [openModal, setOpenModal] = useState(false);
    
    const handleOpenModal = () => setOpenModal(true);
    
    return (
        <StyledHeader>
            <Box>Posts</Box>
            <IconButton onClick={handleOpenModal}>
                <AddIcon sx={{ color: '#000000' }}/>
            </IconButton>
            <CreatePostModal openModal={openModal} setOpenModal={setOpenModal} handleCreatePost={handleCreatePost}/>
        </StyledHeader>
    )
}