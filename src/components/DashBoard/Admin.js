import React, {Component} from 'react'
import "./dash.css";
import Assign from "../addNew/Assign";
import Routes from "../../Routes";

export default class Admin extends Component {


    render() {
        return (

            <div className="grid-container">
                <div className="item2">
                    <a
                        onClick={(e) => "/dashboard"}>
                        <button>
                            Dashboard
                        </button>
                    </a><br/>
                    <a
                        onClick={(e) => "/assign"}>
                        <button>
                            Assign
                        </button>
                    </a><br/>

                    <a onClick={() => window.location.href = 'assignmentAdmin'}>
                        <button>
                            Assignments
                        </button>
                    </a><br/>
                    <a
                        onClick={(e) => "/submitted"}>
                        <button>
                            Submitted
                        </button>
                    </a>
                </div>


                <div className="item3">
                    <Routes/>
                </div>


            </div>

        )
    }
}
