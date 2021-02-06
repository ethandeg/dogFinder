import { Route, Switch, Redirect } from "react-router-dom";
import Dogs from "./Dogs"

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/dogs"><Dogs /></Route>

        </Switch>
    )
}


export default Routes