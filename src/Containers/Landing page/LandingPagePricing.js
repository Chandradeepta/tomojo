import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import clsx from "clsx";
import CustomSelect from "../../Components/Common/CustomSelect";
import SlideTabs from "../../Components/Common/SlideTabs";
import PricingInfoCard from "../../Components/Landing page/PricingInfoCard";

const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
export default function LandingPagePricing(props) {
  const classes = useStyles();

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
              classes.animated,
              classes.animatedFade,
              classes.fadeInUp
            )}
            color="textPrimary"
          >
            Let's Get Started
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <CustomSelect />
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <SlideTabs />
        </Grid>
        <br />
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={2}
            flexWrap="wrap"
          >
            {PricingModel.map((each) => {
              return <PricingInfoCard model={each} />;
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
    price: "$0",
    planIncludes: [
      "Scholership tests",
      "Chapter and topic wise questions",
      "In-depth understanding",
    ],
  },
  {
    type: "Premium",
    price: "$39",
    planIncludes: [
      "Test Analysis",
      "National Ranks",
      "Performance Report",
      "Scholership Tests",
      "Chapter and topic wise questions",
    ],
  },
];
