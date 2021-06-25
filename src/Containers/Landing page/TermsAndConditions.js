import { Typography, Divider } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { commonTypes } from "../../Redux/types/commonTypes";
import { getTermsAndConditions } from "../../Services/Landing Page API/LandingPageService";

export default function TermsAndConditions(props) {
  const dispatch = useDispatch();
  const [terms, setTerms] = useState({});

  useEffect(() => {
    getTermsAndConditions()
      .then((response) => {
        setTerms(response.data.results.Content);
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
            Terms and Conditions
          </Typography>
          <Divider style={styles.divider}/>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            dangerouslySetInnerHTML={{ __html: terms }}
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
