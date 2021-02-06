import { Route, Switch, Redirect } from "react-router-dom";
import Dogs from "./Dogs"
import Dog from "./Dog"

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/dogs"><Dogs /></Route>
            <Route exact path="/dogs/:name"><Dog /></Route>
        </Switch>
    )
}


export default Routes