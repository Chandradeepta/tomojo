import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import LandingPage from "./Containers/Landing page/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
