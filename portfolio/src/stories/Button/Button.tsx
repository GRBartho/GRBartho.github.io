import { Button as MUIButton} from "@mui/material";
import { useButtonStyles } from "./ButtonStyles";
import { type ButtonProps } from "./ButtonTypes";

const Button = ({variant="green", children, onClick}: ButtonProps) => {
    const {classes} = useButtonStyles();
    const styleClass = variant === "green" ? classes.green : classes.gray;
    return (
        <MUIButton color="primary" onClick={onClick} className={styleClass}>{children}</MUIButton>
    );
}

export default Button;