import { Button as MUIButton } from "@mui/material";
import { useButtonStyles } from "./ButtonStyles";
import { type ButtonProps } from "./ButtonTypes";

const Button = ({
  variant = "green",
  icon,
  children,
  onClick,
}: ButtonProps) => {
  const { classes } = useButtonStyles();
  const styleClass = variant === "green" ? classes.green : classes.gray;
  return (
    <MUIButton
      startIcon={icon ? icon : null}
      onClick={onClick}
      className={styleClass}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
