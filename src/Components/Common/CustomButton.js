import { Button, useTheme } from "@material-ui/core";

export default function CustomButton({
  size,
  color,
  borderRadius,
  variant,
  fullWidth,
  children,
  ...buttonProps
}) {
  const theme = useTheme();
  const buttonStyle = {
    borderColor: theme.palette.primary.main,
  };
  return (
    <>
      <Button
        variant={variant || "contained"}
        size={size}
        {...(fullWidth && { fullWidth: true })}
        color={color}
        {...buttonProps}
        style={{ ...buttonStyle, borderRadius: borderRadius }}
      >
        {children}
      </Button>
    </>
  );
}
