import { Button, useTheme } from "@material-ui/core";

export default function RoundedButton(props) {
  const theme = useTheme();
  const buttonStyle = {
    borderRadius: 0,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: theme.palette.primary.main,
  };
  return (
    <>
      <Button
        variant="contained"
        size="small"
        color="primary"
        style={buttonStyle}
      >
        {props.children}
      </Button>
    </>
  );
}
