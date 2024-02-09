import { styled } from "@mui/material/styles";
import TextField from '@mui/material/TextField';

export const Input = styled(TextField)({
    "& label.Mui-focused": {
        color: "#B4B4B4"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#B4B4B4"
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#B4B4B4",
            borderRadius: "0"
        },
        "&:hover fieldset": {
            borderColor: "#B4B4B4"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#B4B4B4"
        }
    }
});