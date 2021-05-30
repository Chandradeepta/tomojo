import { Button, useTheme } from "@material-ui/core";

export default function CustomButton(props) {
  const theme = useTheme();
  const { size, color } = props;
  const buttonStyle = {
    borderRadius: 0,
    paddingLeft: size === "large" ? 25 : 15,
    paddingRight: size === "large" ? 25 : 15,
    paddingTop: size === "large" ? 10 : 5,
    paddingBottom: size === "large" ? 10 : 5,
    borderColor: theme.palette.primary.main,
  };
  return (
    <>
      <Button
        variant="contained"
        size="small"
        {...(props.fullWidth && { fullWidth: true })}
        color={color}
        style={{ ...buttonStyle, borderRadius: props.borderRadius }}
      >
        {props.children}
      </Button>
    </>
  );
}
