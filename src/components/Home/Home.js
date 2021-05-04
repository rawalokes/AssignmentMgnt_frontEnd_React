import React, { Component } from 'react'
import "./style.css";

import Routes from './Routes'
import Admin from './DashBoard/Admin'
import Header from '../HeaderFotter/Header'



export default class Home extends Component {
    render() {
        return (
            <div style={{backgroundColor:'red'}} class="home">

                <div class="grid-container">
                    <div  class="item1"
                         style={{height:'50px',textAlign:"center"}}>  Assignement Management System</div>

                    <div  style={{padding:"0px",margin:"0px"}} class="item2"> <Admin/> </div>

                    <div class="item3"><Routes/></div>
                  
                </div>
            </div>
        )
    }
}
