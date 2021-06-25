import { Typography, Divider } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { commonTypes } from "../../Redux/types/commonTypes";
import { getPrivacyPolicy } from "../../Services/Landing Page API/LandingPageService";

export default function PrivacyPolicy(props) {
  const dispatch = useDispatch();
  const [privacyPolicy, setPrivacyPolicy] = useState({});

  useEffect(() => {
    getPrivacyPolicy()
      .then((response) => {
        setPrivacyPolicy(response.data.results.Content);
      })
      .catch((error) => {
        dispatch({
          type: commonTypes.SHOW_NOTIFICATION_ASYNC,
          message: "Network Error",
          snackType: "error",
        });
      });
  }, []);
  return (
    <>
      <Grid container style={styles.container}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h3" color="textPrimary" style={styles.bold} gutterBottom>
            Privacy Policy
          </Typography>
          <Divider style={styles.divider}/>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            dangerouslySetInnerHTML={{ __html: privacyPolicy }}
          />
        </Grid>
      </Grid>
    </>
  );
}

const styles = {
  container: {
    paddingTop: "3%",
  },
  bold: {
    fontWeight: 700,
  },
  divider:{
      height: '2px'
  }
};
