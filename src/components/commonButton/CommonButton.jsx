import { Button } from "@mui/material";
// eslint-disable-next-line react/prop-types
function CommonButton({ children, color, disabled, size, sx, variant }) {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      sx={sx}
      variant={variant}
    >
      {children}
    </Button>
  );
}

export default CommonButton;
