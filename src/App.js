import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home, Shows, ShowDetails, NotFound } from "./pages";
import { Navigation } from "./components";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.shows} component={Shows} />
        <Route path={routes.showDetails} component={ShowDetails} />
        {/* <Redirect to="/shows" /> */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
