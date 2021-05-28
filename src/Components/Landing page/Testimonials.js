import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import AutoSwipe from "../Common/AutoSwipe";

const useStyles = makeStyles((theme) => ({
  Paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: theme.spacing(2),
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    textAlign: "justify",
    minHeight: 200,
    backgroundColor: theme.palette.background.default,
    boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
    "&:hover": {
      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      transition: "box-shadow 0.3s ease-in-out",
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
      <Typography
        variant="body1"
        align="center"
        className={classes.bold}
        gutterBottom
      >
        {`"${props.testimonial.feedback}"`}
      </Typography>
      <Box>
        <Typography variant="subtitle1" align="center" color="textPrimary">
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
      <AutoSwipe listLength={testimonials.length}>
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
