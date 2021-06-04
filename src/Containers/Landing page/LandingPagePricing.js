import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useState } from "react";
import CustomSelect from "../../Components/Common/CustomSelect";
import SlideTabs from "../../Components/Common/SlideTabs";
import PricingInfoCard from "../../Components/Landing page/PricingInfoCard";
import axios from "axios";

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
  const [packages, setPackages] = useState([]);
  const [studentClasses, setClasses] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState({});

  const handleSelectedClass = (index) => {
    const selectedClass = studentClasses[index];
    setSelectedPackage(
      packages.filter((each) => each.class === selectedClass)[0]
    );
  };

  useEffect(() => {
    axios
      .get("https://6098e4a399011f001713f9d2.mockapi.io/api/packages")
      .then((response) => {
        const packagesArray = response.data;
        const classArrray = packagesArray.map((each) => {
          return each.class;
        });
        setPackages(packagesArray);
        setClasses(classArrray);
        setSelectedPackage(packagesArray[0]);
      });
  }, []);

  return (
    <>
      <Grid
        container
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        style={{ display: "flex", alignItems: "center", marginTop: "-3%" }}
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
