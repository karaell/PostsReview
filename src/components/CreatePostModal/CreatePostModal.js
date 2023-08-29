import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { Textarea } from "../Layouts/Textarea";
import { styled } from "@mui/material";

const StyledModalWrapper = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: '#ffffff',
    boxShadow: 24,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    borderRadius: '8px'
})

export function CreatePostModal({openModal, setOpenModal, handleCreatePost}) {
    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const handleCloseModal = () => setOpenModal(false);
    
    const handleChangeTitleValue = (e) => {
        const newValue = e.target.value;
        setTitleValue(newValue)
    }
    
    const handleChangeDescriptionValue = (e) => {
        const newValue = e.target.value;
        setDescriptionValue(newValue)
    }
    
    const handleClickCreatePost = () => {
        const newPost = {
            userId: 1,
            id: new Date(),
            title: titleValue,
            body: descriptionValue
        }
        handleCreatePost(newPost)
        setTitleValue('')
        setDescriptionValue('')
        handleCloseModal()
    }

    return (
        <Box>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
            >
                <StyledModalWrapper>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create new post
                    </Typography>
                    <TextField id="outlined-basic" label="Title" variant="outlined" pl onChange={handleChangeTitleValue} value={titleValue}/>
                    <Textarea placeholder='Description' handleChangeDescriptionValue={handleChangeDescriptionValue} descriptionValue={descriptionValue} /> 
                    <Button onClick={handleClickCreatePost}>Create</Button>
                </StyledModalWrapper>
            </Modal>
        </Box>
    );
}
