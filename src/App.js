import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LandingPage from "./Containers/Landing page/LandingPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-multi-carousel/lib/styles.css';

import UserPortal from "./Containers/User portal/UserPortal";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/user">
          <UserPortal />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
