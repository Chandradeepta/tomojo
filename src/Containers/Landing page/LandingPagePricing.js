import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomSelect from "../../Components/Common/CustomSelect";
import SlideTabs from "../../Components/Common/SlideTabs";
import PricingInfoCard from "../../Components/Landing page/PricingInfoCard";
import { landingPageTypes } from "../../Redux/types/landingPageTypes";

const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  headline: {
    width: '100%',
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
    width: '100%',
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(5),
    },
  },
}));
export default function LandingPagePricing(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { classPackages, competitivePackages } = useSelector(
    (state) => state.landingPageState
  );

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
    dispatch({ type: landingPageTypes.GET_PRICING_PACKAGES });
  }, []);

  // useEffect(() => {
  //   setSelectedPackage(classPackages[0]);
  //   setClasses(
  //     classPackages.map((each) => {
  //       return each.className;
  //     })
  //   );
  // }, [classPackages]);

  return (
    <>
      <Grid
        container
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        style={{ display: "flex", alignItems: "center", marginTop: "3%" }}
      >
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            height="100%"
          >
            <Box p={2} width="100%">
              <Typography
                variant="h4"
                className={clsx(
                  classes.bold,
                  classes.headline,
                  classes.animated,
                  classes.animatedFade,
                  classes.fadeInUp
                )}
                color="textPrimary"
                align="justify"
              >
                Switch to Premium to access all contents
              </Typography>
            </Box>
            <Box p={2} width="100%">
              <SlideTabs />
            </Box>
            <Box className={classes.mobileResponsive} p={2}>
              <CustomSelect
                items={studentClasses}
                getSelected={handleSelectedClass}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            p={2}
            pr={0}
            flexWrap="wrap"
          >
            {PricingModel.map((each, i) => {
              return (
                <PricingInfoCard
                  model={each}
                  selectedPackage={selectedPackage}
                  key={i}
                />
                // <PaymentCard />
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
