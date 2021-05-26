import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import LandingPage from "./Containers/Landing page/LandingPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
