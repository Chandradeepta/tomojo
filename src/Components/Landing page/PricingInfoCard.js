import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CustomButton from "../Common/CustomButton";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Check } from "@material-ui/icons";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import { CardActions, useTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflow: "visible",
    margin: "2%",
    maxWidth: 300,
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    "&:hover": {
      transform: "scale(1.04)",
      borderRadius: 20,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "4%",
    },
  },
  priceTag: {
    width: 68,
    height: 95,
    position: "relative",
    top: -16,
    right: 20,
    background:
      "linear-gradient(80deg, rgba(0,91,255,1) 0%, rgba(0,158,252,1) 100%)",
    zIndex: 1,
    marginLeft: "auto",
    borderBottomColor: "#fff",
    fontSize: 22,
    padding: "auto",
    "&::before": {
      content: '""',
      width: 14,
      height: 16,
      background: "#0f52ba",
      position: "absolute",
      left: -13,
      clipPath: "polygon(100% 0, 0% 100%, 100% 100%);",
    },
    "&::after": {
      content: '"/month"',
      display: "block",
      textAlign: "center",
      whiteSpace: "break-spaces",
      fontSize: 12,
      color: theme.palette.background.paper,
      fontWeight: theme.typography.fontWeightMedium,
      textDecoration: "none",
    },
  },
  priceTagPremium: {
    background: "#fff",
    "&::after": {
      content: '"/month"',
      display: "block",
      textAlign: "center",
      whiteSpace: "break-spaces",
      fontSize: 12,
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium,
      textDecoration: "none",
    },
    "& $triangle": {
      background: theme.palette.primary.main,
      bottom: -1,
    },
    "& $priceContainer": {
      color: theme.palette.primary.main,
    },
    "& $currency": {
      "&::before": {
        content: "",
        color: theme.palette.primary.main,
      },
    },
  },
  currency: {
    "&::before": {
      content: "",
      color: grey[500],
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  triangle: {
    width: 68,
    height: 25,
    position: "absolute",
    bottom: -1,
    background: "white",
    clipPath: "polygon(50% 0%, 0% 102%, 100% 102%);",
    borderBottomColor: "#fff",
  },
  priceContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    paddingTop: "10%",
  },
  CardActionArea: {
    borderRadius: 20,
    "&:hover $focusHighlight": {
      opacity: 0
    }
  },
  focusHighlight: {},
  content: {
    padding: theme.spacing(4),
    paddingBottom: 0,
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
  discount: {
    border: "1px solid white",
    padding: theme.spacing(0.5),
  },
}));

export const PricingInfoCard = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const shadowStyles = useLightTopShadowStyles();
  const { model, selectedPackage } = props;
  return (
    <Card
      className={cx(classes.root, shadowStyles.root)}
      style={{
        background:
          model.type === "Free"
            ? theme.palette.background.paper
            : theme.palette.primary.main,
      }}
    >
      <div style={{ position: "absolute", right: 0 }}>
        <div
          className={
            model.type === "Free"
              ? classes.priceTag
              : clsx(classes.priceTag, classes.priceTagPremium)
          }
        >
          <div
            className={
              model.type === "Free"
                ? classes.priceContainer
                : clsx(classes.priceContainer, classes.priceContainerPremium)
            }
          >
            <div className={classes.currency}>
              <Typography variant="h5">&#36;19</Typography>
            </div>
          </div>
          <div
            className={
              model.type === "Free"
                ? classes.triangle
                : clsx(classes.triangle, classes.trianglePremium)
            }
          ></div>
        </div>
      </div>
      <CardActionArea className={classes.CardActionArea}>
        <CardContent className={classes.content}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            minHeight={280}
            color={"common.white"}
            textAlign={"center"}
            style={{
              color: model.type === "Free" ? "#171959" : "#fff",
            }}
          >
            <Box display="flex" justifyContent="space-between" width="100%">
              <Typography variant="h4" className={classes.title} gutterBottom>
                {model.type}
              </Typography>
              {/* {model.type === "Free" ? (
                <>
                  <Typography
                    variant="h4"
                    className={classes.title}
                    gutterBottom
                  >
                    $0
                  </Typography>
                </>
              ) : (
                <>
                  <Box>
                    <Typography
                      variant="h6"
                      style={{ textDecoration: "line-through" }}
                    >
                      {selectedPackage?.actualPrice}
                    </Typography>
                    <Typography variant="h4" className={classes.title}>
                      {selectedPackage?.discountPrice}
                    </Typography>
                  </Box>
                </>
              )} */}
            </Box>
            <Box m={"auto"}>
              <Box
                display="flex"
                width="100%"
                justifyContent="flex-start"
                p={1}
                pb={"auto"}
              >
                <Typography align="left">Plan Includes:</Typography>
              </Box>
              <Box
                display="flex"
                width="100%"
                justifyContent="flex-start"
                p={0.5}
              >
                <Box pr={1}>
                  <Check fontSize="small" />
                </Box>
                <Typography align="left" variant="body2">
                  {`${
                    model.type === "Free"
                      ? selectedPackage?.freeTestCount
                      : selectedPackage?.premiumTestCount
                  } Tests included`}
                </Typography>
              </Box>
              {model.planIncludes.map((each, i) => {
                return (
                  <Box
                    display="flex"
                    width="100%"
                    justifyContent="flex-start"
                    p={0.5}
                    key={i}
                  >
                    <Box pr={1}>
                      <Check fontSize="small" />
                    </Box>
                    <Typography align="left" variant="body2">
                      {each}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box width="100%" m={2} mt={0} display="flex" justifyContent="center">
          <CustomButton
            size="small"
            color={model.type === "Free" ? "primary" : "default"}
            borderRadius={10}
            fullWidth={true}
          >
            {model.type === "Free"
              ? "Choose"
              : `Save ${selectedPackage?.discountPercentage}`}
          </CustomButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default PricingInfoCard;
