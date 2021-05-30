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
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import { CardActions, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    margin: "2%",
    maxWidth: 300,
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    "&:hover": {
      transform: "scale(1.04)",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "4%",
    },
  },
  content: {
    padding: theme.spacing(4),
    paddingBottom: 0,
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export const PricingInfoCard = (props) => {
  const styles = useStyles();
  const theme = useTheme();
  const shadowStyles = useLightTopShadowStyles();
  const { model } = props;
  return (
    <Card
      className={cx(styles.root, shadowStyles.root)}
      style={{
        background: model.type === "Free" ? "#fff" : theme.palette.primary.main,
      }}
    >
      <CardActionArea>
        <CardContent className={styles.content}>
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
              <Typography variant="h6" className={styles.title}>
                {model.type}
              </Typography>
              <Typography variant="h4" className={styles.title}>
                {model.price}
              </Typography>
            </Box>
            <Box display="flex" width="100%" justifyContent="flex-start" p={1}>
              <Typography align="left">Plan Includes:</Typography>
            </Box>
            {model.planIncludes.map((each) => {
              return (
                <>
                  <Box
                    display="flex"
                    width="100%"
                    justifyContent="flex-start"
                    p={1}
                  >
                    <Box pr={1}>
                      <Check fontSize="small" />
                    </Box>
                    <Typography align="left" variant="body2">
                      {each}
                    </Typography>
                  </Box>
                </>
              );
            })}
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box width="100%" m={2} mt={0} display="flex" justifyContent="center">
          <CustomButton
            size="small"
            color={model.type === "Free" ? "primary" : "textSecondary"}
            borderRadius={10}
            fullWidth={true}
          >
            Choose Plan
          </CustomButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default PricingInfoCard;
