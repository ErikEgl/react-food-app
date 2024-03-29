import React from "react";
import Landing from "./Landing";
import App from "./App";
import NotFound from "./NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/react-food-app' component={Landing} />
                <Route path='/react-food-app/restaurant/:restaurantId' component={App} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>

    )
}
export default Router;
