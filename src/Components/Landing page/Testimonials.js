import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import AutoSwipe from "../Common/AutoSwipe";
import TopLeftCorner from "../../Assets/Home/Corner 1.svg";
import BottomRightCorner from "../../Assets/Home/Corner 2.svg";

const useStyles = makeStyles((theme) => ({
  Paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    textAlign: "justify",
    height: 250,
    boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
    "&:hover": {
      boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
      transform: "scale(1.04)",
    },
    [theme.breakpoints.down("md")]: {
      height: 300,
    },
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
export default function Testimonials(props) {
  const classes = useStyles();
  const TestimonialCard = (props) => (
    <Paper className={classes.Paper} elevation={3}>
      <Box position="absolute" width="100px" left="0" top="0">
        <img src={TopLeftCorner} width="100%" height="100%" />
      </Box>
      <Box position="absolute" width="200px" right="0" bottom="-4px">
        <img src={BottomRightCorner} width="100%" height="100%" />
      </Box>
      <Typography
        variant="body1"
        align="center"
        className={classes.bold}
        gutterBottom
      >
        {`"${props.testimonial.feedback}"`}
      </Typography>
      <Box>
        <Typography variant="subtitle1" align="center" color="secondary">
          {props.testimonial.client}
        </Typography>
        <Typography variant="body2" align="center" className={classes.bold}>
          {props.testimonial.class} &nbsp; {props.testimonial.place}
        </Typography>
      </Box>
    </Paper>
  );

  return (
    <>
      <AutoSwipe showDots showArrows={false} xl={4} lg={2} md={2} sm={1}>
        {testimonials.map((testimonial, index) => {
          return <TestimonialCard testimonial={testimonial} key={index} />;
        })}
      </AutoSwipe>
    </>
  );
}

const testimonials = [
  {
    client: "Mohit Patra (Parent)",
    class: "Class IX",
    place: "Orrisa",
    feedback:
      "Tomojo helped my son improving his academics. His score is dramatically improve by practicing daily.",
  },
  {
    client: "Mahi Arora (Parent)",
    class: "Class X",
    place: "Delhi",
    feedback:
      "My daughter was troubling with physics, now she practice daily on Tomojo and has seen improvement",
  },
  {
    client: "Sandeep Sharma (Parent)",
    class: "Class XI",
    place: "Noida",
    feedback:
      "Topic specific question really helped my Son. I would say better way to understand the topic.",
  },
  {
    client: "Ankita (Student)",
    class: "Class X",
    place: "",
    feedback:
      "I really liked the way questions are asked, each topic is thoroughly assessed. Really helped me in improving my biology.",
  },
  {
    client: "Varsha Reddy (Parent)",
    class: "Class X",
    place: "Chennai",
    feedback:
      "My Son was struggling with Physics, Tomojo really helped him to understand the topic in better way. Daily practicing helped him boosting the confidence. Now he is more confident in Physics. ",
  },
  {
    client: "Vartul Pandey (Student)",
    class: "Class X",
    place: "Madhya Pradesh",
    feedback:
      "It’s funny. Just a Month ago, I used Tomojo on a daily basis to practise questions and get doubts solved for my  Competative preparations. Today, I’m the one solving my friend's doubts. It feels really motivated.",
  },
  {
    client: "Vipul Kumar (Parent)",
    class: "Class IX",
    place: "Delhi",
    feedback: `I have seen my Daughter going from hating physics to absolutely loving it. Her marks have improved so much from last year. Even her teachers were surprised seeing the exceptional change.
      Thank You Tomojo for making physics so much fun for my Daughter.`,
  },
];
