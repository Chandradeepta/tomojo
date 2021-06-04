import { Grid } from "@material-ui/core";
import ExamCard from "../../Components/User portal/ExamCard";

export default function Dashboard(props) {
  return (
    <>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <ExamCard />
        </Grid>
      </Grid>
    </>
  );
}
