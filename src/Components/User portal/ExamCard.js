import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CustomButton from "../Common/CustomButton";
import Typography from "@material-ui/core/Typography";
import { Avatar, Box, CardHeader, IconButton } from "@material-ui/core";
import { AssignmentSharp } from "@material-ui/icons";
import CompletionBar from "./CompletionBar";
import { Link } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    boxShadow: "none",
    borderRadius: 15,
    transition: "all 0.3s ease-in-out",
    boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
    "&:hover": {
      boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
      transform: "scale(1.04)",
    },
  },
  avatar: {
    color: theme.palette.primary.contrastText,
    backgroundColor: "#77C285",
  },
  cardActions: {
    justifyContent: "center",
    padding: theme.spacing(2),
  },
}));

export default function ExamCard(props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            variant="rounded"
            aria-label="recipe"
            className={classes.avatar}
          >
            <AssignmentSharp />
          </Avatar>
        }
        title="Free"
        subheader={`${props.subject} Test series`}
      />
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Box>
            <CompletionBar />
          </Box>
          <Box p={1}>
            <Typography
              variant="h4"
              color="textPrimary"
              style={{ fontWeight: 800 }}
            >
              22/30
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <CustomButton
          size="small"
          color="primary"
          variant="outlined"
          borderRadius={10}
          onClick={() => history.push("/user/tests")}
        >
          View tests
        </CustomButton>
      </CardActions>
    </Card>
  );
}
