import React, { Component } from 'react'
import {Redirect, Route} from "react-router-dom"

export default class Routing extends Component {
    render() {
        return (
            <div>
                Routing Example
                <Switch>
                    <Route path="/home/profile" component={Profile}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Redirect path="/" to="/home" exact ></Redirect>
                    <Route path="/Listing" component={Listing}></Route>
                    <Route  component={Error}></Route>
                </Switch>
            </div>
        )
    }
}

class Home extends Componet{
    render(){
        return (
            <div>
                Home
            </div>
        )
    }
}


class Profile extends Componet{
    render(){
        return (
            <div>
                Profile
            </div>
        )
    }
}

class Home extends Componet{
    render(){
        return (
            <div>
                Home
            </div>
        )
    }
}

class Home extends Componet{
    render(){
        return (
            <div>
                Home
            </div>
        )
    }
}