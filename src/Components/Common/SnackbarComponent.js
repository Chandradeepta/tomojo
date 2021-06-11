import { Slide, Snackbar, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { connect, useSelector } from "react-redux";
import { CommonTypes } from "../../Redux/Types/commonTypes";

function SnackbarComponent(props) {
  const { snackBarMessage, snackBarOpen, snackBarType } = useSelector(
    (state) => state.commonState
  );

  function handleClose() {
    props.clearNotification();
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        autoHideDuration={2000}
        open={snackBarOpen}
        TransitionComponent={Slide}
      >
        <Alert variant="filled" onClose={handleClose} severity={snackBarType}>
          <Typography>{snackBarMessage}</Typography>
        </Alert>
      </Snackbar>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearNotification: () =>
      dispatch({
        type: CommonTypes.CLEAR_SNACKBAR,
      }),
  };
};

export default connect(null, mapDispatchToProps)(SnackbarComponent);
