import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/home";
import Buku from "./pages/buku";
import About from "./pages/about";

export default class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/buku" component={Buku} />
                <Route path="/about" component={About} />
            </Switch>
        )
    }
}