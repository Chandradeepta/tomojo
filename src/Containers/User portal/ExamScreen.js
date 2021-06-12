import React from "react";
import {
  Grid,
  Box,
  Typography,
  withStyles,
  LinearProgress,
} from "@material-ui/core";
import { WatchLater } from "@material-ui/icons";
import QnASection from "../../Components/User portal/QnASection";
import CustomButton from "../../Components/Common/CustomButton";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 5,
    borderRadius: 5,
    flex: 1,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

export default function ExamScreen(props) {
  return (
    <>
      <Grid container style={{ paddingLeft: "4%", paddingRight: "4%" }}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box width="100%" display="flex">
            <Typography variant="h6" color="textPrimary" style={{ flex: 1 }}>
              MCT Mock Test
            </Typography>
            <CustomButton size="small" borderRadius={10} color="primary">
              Finish test
            </CustomButton>
          </Box>
        </Grid>
        <>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <BorderLinearProgress variant="determinate" value={50} />
              <Box p={2}>
                <Typography variant="subtitle1">50%</Typography>
              </Box>
              <Box display="flex" alignItems="center" p={2} pr={0}>
                <WatchLater color="secondary" />
                <Box width="100%" ml={1}>
                  <Typography variant="h6" color="textSecondary">
                    00.00 Min
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <QnASection />
          </Grid>
          <Box width="100%" display="flex" justifyContent="center">
            <Box p={2}>
              <CustomButton size="small" borderRadius={10} color="primary">
                Previous
              </CustomButton>
            </Box>
            <Box p={2}>
              <CustomButton size="small" borderRadius={10} color="primary">
                Next
              </CustomButton>
            </Box>
          </Box>
        </>
      </Grid>
    </>
  );
}
