import { Box, Button, Typography, useTheme } from "@material-ui/core";

export default function DownloadButton(props) {
  const theme = useTheme();
  const { size, color } = props;
  const buttonStyle = {
    borderRadius: 0,
    margin: theme.spacing(1),
    marginLeft: 0,
    borderColor: theme.palette.primary.main,
  };
  return (
    <>
      <Button
        variant="contained"
        size="small"
        style={buttonStyle}
        color="primary"
      >
        <Box display="flex">
          <Box p={1}>{props.children.logo}</Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
          >
            <Typography variant="body2" style={{ fontWeight: 800 }}>
              {props.children.platform}
            </Typography>
          </Box>
        </Box>
      </Button>
    </>
  );
}
