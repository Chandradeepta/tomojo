import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import RankingSVG from "../../Assets/Ranking.svg";
import ChapterCoverageSVG from "../../Assets/Chapter_Coverage.svg";
import PerformanceSVG from "../../Assets/Performance.svg";
import AnalysisSVG from "../../Assets/Test_Analysis.svg";
import UnderstandingSVG from "../../Assets/Understanding.svg";
import QuestionsSVG from "../../Assets/topicQuestions.svg";
import clsx from "clsx";
import AutoSwipe from "../Common/AutoSwipe";

const useStyles = makeStyles((theme) => ({
  Paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    background: "transparent",
    textAlign: "justify",
    maxWidth: 200,
    transition: "all 0.3s ease-in-out",
    boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
    "&:hover": {
      boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
      transform: "scale(1.04)",
      background: "rgba(31,117,254,0.5)",
      "& $title": {
        color: theme.palette.background.default,
      },
      "& $subtitle": {
        color: theme.palette.background.default,
      },
    },
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.up("sm")]: {
      color: theme.palette.background.default,
    },
  },
  logo: {
    width: 100,
  },
  subtitle: {
    [theme.breakpoints.up("sm")]: {
      color: theme.palette.background.default,
    },
  },
}));
export default function OfferedServices(props) {
  const classes = useStyles();
  const ServicesCard = (props) => (
    <Paper className={clsx(classes.Paper)} elevation={0}>
      <Box
        display="flex"
        justifyContent="center"
        p={1}
        className={classes.logo}
      >
        {props.service.logo}
      </Box>
      <Typography
        variant="subtitle1"
        align="center"
        className={classes.title}
        color="secondary"
      >
        {props.service.title}
      </Typography>
      <Typography variant="body2" align="center" className={classes.subtitle}>
        {props.service.subtitle}
      </Typography>
    </Paper>
  );

  return (
    <>
      <AutoSwipe xl={5} lg={3} md={2} sm={1} showDots={false} showArrows={true}>
        {services.map((service, index) => {
          return <ServicesCard service={service} key={index} />;
        })}
      </AutoSwipe>
    </>
  );
}

const services = [
  {
    logo: <img src={QuestionsSVG} width="100%" height="100%" />,
    title: "Topic wise Questions",
    subtitle:
      "Whether to override a short description if transcluded. Should be unused or 'noreplace'.",
  },
  {
    logo: <img src={RankingSVG} width="100%" height="100%" />,
    title: "National Ranks",
    subtitle:
      "Whether to override a short description if transcluded. Should be unused or 'noreplace'.",
  },
  {
    logo: <img src={ChapterCoverageSVG} width="100%" height="100%" />,
    title: "Chapters Coverage",
    subtitle:
      "Whether to override a short description if transcluded. Should be unused or 'noreplace'.",
  },
  {
    logo: <img src={UnderstandingSVG} width="100%" height="100%" />,
    title: "In-depth Understanding",
    subtitle:
      "Whether to override a short description if transcluded. Should be unused or 'noreplace'.",
  },
  {
    logo: <img src={AnalysisSVG} width="100%" height="100%" />,
    title: "Test Analysis",
    subtitle:
      "Whether to override a short description if transcluded. Should be unused or 'noreplace'.",
  },
  {
    logo: <img src={PerformanceSVG} width="100%" height="100%" />,
    title: "Performance Report",
    subtitle:
      "Whether to override a short description if transcluded. Should be unused or 'noreplace'.",
  },
];
