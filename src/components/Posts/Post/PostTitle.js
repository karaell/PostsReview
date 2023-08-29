import {styled, Tooltip} from "@mui/material";
import Box from "@mui/material/Box";

const StyledTitle = styled(Box)({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '400px',
    textOverflow: 'ellipsis',
})

export function PostTitle ({title}) {
    return (
        <Tooltip title={title} placement="bottom-start">
            <StyledTitle>
                {title}
            </StyledTitle> 
        </Tooltip>
    )
}