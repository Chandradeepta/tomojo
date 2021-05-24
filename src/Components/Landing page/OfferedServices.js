import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import { QuestionAnswer, Milita } from "@material-ui/icons";
// import AutoSwipe from "../Common/AutoSwipe";
import RankingSVG from "../../Assets/Ranking.svg";
import ChapterCoverageSVG from "../../Assets/Chapter_Coverage.svg";
import PerformanceSVG from "../../Assets/Performance.svg";
import AnalysisSVG from "../../Assets/Test_Analysis.svg";
import UnderstandingSVG from "../../Assets/Understanding.svg";
import QuestionsSVG from "../../Assets/topicQuestions.svg";

const useStyles = makeStyles((theme) => ({
  Paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(2),
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    textAlign: "justify",
    maxWidth: 200,
    "&:hover": {
      boxShadow: "1px 6px 15px 0px rgba(0,0,0,0.75)",
    },
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
export default function OfferedServices(props) {
  const classes = useStyles();
  const ServicesCard = (props) => (
    <Paper className={classes.Paper} elevation={0}>
      <Box display="flex" justifyContent="center" p={1}>
        {props.service.logo}
      </Box>
      <Typography variant="subtitle1" align="center" className={classes.bold}>
        {props.service.title}
      </Typography>
      <Typography variant="body2" align="center">
        {props.service.subtitle}
      </Typography>
    </Paper>
  );

  return (
    <>
      <Box
        width="100%"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {services.map((service, index) => {
          return <ServicesCard service={service} key={index} />;
        })}
      </Box>
    </>
  );
}

const services = [
  {
    logo: <img src={QuestionsSVG} width="60%" />,
    title: "Topic wise Questions",
    subtitle:
      "Whether to override a short description if transcluded. Should be unused or 'noreplace'.",
  },
  {
    logo: <img src={RankingSVG} width="60%" />,
    title: "National Ranks",
    subtitle:
      "Whether to override a short description if transcluded. Should be unused or 'noreplace'.",
  },
  {
    logo: <img src={ChapterCoverageSVG} width="60%" />,
    title: "Chapters Coverage",
    subtitle:
      "Whether to override a short description if transcluded. Should be unused or 'noreplace'.",
  },
  {
    logo: <img src={UnderstandingSVG} width="60%" />,
    title: "In-depth Understanding",
    subtitle:
      "Whether to override a short description if transcluded. Should be unused or 'noreplace'.",
  },
  {
    logo: <img src={AnalysisSVG} width="60%" />,
    title: "Test Analysis",
    subtitle:
      "Whether to override a short description if transcluded. Should be unused or 'noreplace'.",
  },
  {
    logo: <img src={PerformanceSVG} width="60%" />,
    title: "Performance Report",
    subtitle:
      "Whether to override a short description if transcluded. Should be unused or 'noreplace'.",
  },
];
