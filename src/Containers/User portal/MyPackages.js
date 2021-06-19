import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import ExamCard from "../../Components/User portal/ExamCard";
import AutoSwipe from "../../Components/Common/AutoSwipe";

const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
export default function MyPackages(props) {
  const classes = useStyles();

  return (
    <>
      <Grid container style={{ paddingLeft: "4%", paddingRight: "4%" }}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {MOCK_MODEL_MY_PACKAGES.map((each) => {
            return (
              <>
                <Grid container>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Box width="100%">
                      <Typography
                        variant="h5"
                        gutterBottom
                        color="textPrimary"
                        className={classes.bold}
                      >
                        {each.class}
                      </Typography>
                    </Box>
                    <AutoSwipe
                      showArrows
                      showDots={false}
                      xl={5}
                      lg={4}
                      md={3}
                      sm={1}
                    >
                      {each.subjects.map((subject) => {
                        return (
                          <Box display="flex" justifyContent="center">
                            <ExamCard subject={subject} />
                          </Box>
                        );
                      })}
                    </AutoSwipe>
                  </Grid>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}

const MOCK_MODEL_MY_PACKAGES = [
  {
    class: "Class X",
    subjects: ["Biology", "All subjects","Chemistry", "Biology", "All subjects"],
  },
  {
    class: "Class IX",
    subjects: ["Physics", "Chemistry", "Biology", "All subjects"],
  },
  {
    class: "Class VIII",
    subjects: ["Science", "Math", "All subjects"],
  },
  {
    class: "Class VII",
    subjects: ["Physics", "Chemistry", "Math"],
  },
];
