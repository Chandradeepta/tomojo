import { Grid, Box, Typography } from "@material-ui/core";
import ExamCard from "../../Components/User portal/ExamCard";
import AutoSwipe from "../../Components/Common/AutoSwipe";

export default function Dashboard(props) {
  return (
    <>
      {/* <AutoSwipe>
        {["Physics", "Chemistry", "Math", "Biology", "All subjects"].map((subject) => {
          return (
            <Box p={1}>
              <ExamCard subject={subject} />
            </Box>
          );
        })}
      </AutoSwipe> */}
      <Typography variant="h2" align="center">Dashboard in Progress</Typography>
    </>
  );
}
