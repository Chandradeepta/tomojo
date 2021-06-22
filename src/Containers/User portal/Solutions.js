import { Grid } from "@material-ui/core";
import React from "react";
import QnASection from "../../Components/User portal/QnASection";

export default function Solutions(props) {
  return (
    <>
      <Grid container style={{ paddingLeft: "4%", paddingRight: "4%" }}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <QnASection readonly />
          <br />
          <QnASection readonly />
          <br />
          <QnASection readonly />
          <br />
          <QnASection readonly />
          <br />
          <QnASection readonly />
          <br />
          <QnASection readonly />
          <br />
          <QnASection readonly />
          <br />
          <QnASection readonly />
          <br />
          <QnASection readonly />
        </Grid>
      </Grid>
    </>
  );
}
