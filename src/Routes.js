import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Login} from "./components/Login/Login";
import AllAssignment from "./components/View/allAssignment";
import AllSubmit from "./components/View/AllSubmit";

import Assign from "./components/addNew/Assign";
import Submit from "./components/addNew/Submit";
import Register from "./components/Register/Register";
import AllAssigForAdmin from "./components/View/allAssigForAdmin";
import Admin from "./components/DashBoard/Admin";

export default class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expired: localStorage.getItem('expiry_time') || null,
            isLogin: localStorage.getItem('userinfo') ? !!JSON.parse(localStorage.getItem('userinfo')) : false,
            userinfo: localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo')) : [],
        }
    }

    componentDidMount() {
        this.checkIfExpired()
    }

    checkIfExpired = () => {
        if (this.state.userinfo.length && this.state.expired <= Date.now()) {
            console.log(this.state.userinfo)
            console.log(this.state.expired)
            localStorage.clear()
            window.location.reload();
        }
    }


    render() {
        return (
            <div>
                <Router>

                    {
                        !this.state.isLogin ?
                            <Switch>
                                <Route path="/" exact component={Login}/>
                                <Route path="/register" exact component={Register}/>
                            </Switch> :
                            <Switch>
                                <Route path="/dash" exact component={Admin}/>
                                <Route path="/assign" exact component={Assign}/>
                                <Route path="/assignmentAdmin" exact component={AllAssigForAdmin}/>
                                <Route path="/submitted" exact component={AllSubmit}/>
                                <Route path="/assignment" exact component={AllAssignment}/>
                                <Route path="/submit/:id" exact component={Submit}/>
                            </Switch>

                    }
                </Router>

            </div>

        )
    }
}

