import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./Pages/AllMeetups";
import NewMeetupPage from "./Pages/NewMeetup";
import FavouritesPage from "./Pages/Favourites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route exact path="/" component={AllMeetupsPage} />
        <Route path="/new-meetup" component={NewMeetupPage} />
        <Route path="/favourites" component={FavouritesPage} />
      </Switch>
    </div>
  );
}

export default App;
