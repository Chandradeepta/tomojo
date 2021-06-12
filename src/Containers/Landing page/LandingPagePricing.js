import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CustomSelect from "../../Components/Common/CustomSelect";
import SlideTabs from "../../Components/Common/SlideTabs";
import PricingInfoCard from "../../Components/Landing page/PricingInfoCard";
import axios from "axios";
import rootReducer from "../../Redux/Reducers/rootReducer";
import { LandingPageTypes } from "../../Redux/Types/landingPageTypes";

const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  headline: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: theme.spacing(2),
    },
  },
  selectionContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      flexDirection: "column-reverse",
      paddingTop: theme.spacing(2),
    },
  },
  mobileResponsive: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(5),
    },
  },
}));
export default function LandingPagePricing(props) {
  const classes = useStyles();
  const { classPackages, competitivePackages } = useSelector(
    (state) => state.landingPageState
  );
  const dispatch = useDispatch();

  const [selectedPackage, setSelectedPackage] = useState({});
  const [studentClasses, setClasses] = useState([]);

  const handleSelectedClass = (index) => {
    setSelectedPackage(
      classPackages.filter(
        (each) => each.className === studentClasses[index]
      )[0]
    );
  };

  useEffect(() => {
    dispatch({ type: LandingPageTypes.GET_PRICING_PACKAGES });
  }, []);

  useEffect(() => {
    setSelectedPackage(classPackages[0]);
    setClasses(
      classPackages.map((each) => {
        return each.className;
      })
    );
  }, [classPackages]);

  return (
    <>
      <Grid
        container
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        style={{ display: "flex", alignItems: "center", marginTop: "2%" }}
      >
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <Typography
            variant="h3"
            className={clsx(
              classes.bold,
              classes.headline,
              classes.animated,
              classes.animatedFade,
              classes.fadeInUp
            )}
            color="textPrimary"
          >
            Let's Get Started
          </Typography>
        </Grid>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <Box className={classes.selectionContainer}>
            <Box className={classes.mobileResponsive}>
              <CustomSelect
                items={studentClasses}
                getSelectedClass={handleSelectedClass}
              />
            </Box>
            <SlideTabs />
          </Box>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={2}
            flexWrap="wrap"
          >
            {PricingModel.map((each, i) => {
              return (
                <PricingInfoCard
                  model={each}
                  selectedPackage={selectedPackage}
                  key={i}
                />
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

const PricingModel = [
  {
    type: "Free",
    planIncludes: [
      "National Ranks",
      "Scholership tests",
      "Test Analysis and report",
      "Chapter and topic wise questions",
    ],
  },
  {
    type: "Premium",
    planIncludes: [
      "National Ranks",
      "Scholership Tests",
      "Test Analysis and report",
      "Chapter and topic wise questions",
    ],
  },
];
