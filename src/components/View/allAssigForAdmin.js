import React, { Component } from 'react'
import './styleAll.css';
import {getAssignment} from "../../apiCall/User";


export default class AllAssigForAdmin extends Component {

    state={
        assignments:[]
    }

    componentDidMount() {
        this.getall();
    }

    getall=()=>{
        let self=this;
        getAssignment().then(function(res){
            self.setState({assignments:res.data},console.log(res.data))
        }).catch((err)=>console.log(err));
    }


    render() {
        return (
            <div>
                <h5>All Assignment</h5>

                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Date</th>
                        <th>ExpDate</th>
                        <th>Assignment</th>
                        <th>Submitted</th>
                    </tr>
                    <tbody>
                    {this.state.assignments.map((item)=>
                        <tr>
                            <td> {item.no} </td>
                            <td > {item.name} </td>
                            <td >{item.Subject} </td>
                            <td >{item.date} </td>
                            <td >{item.expDate} </td>
                            <td>
                                <a target="_blank" href={item.file}><button>View </button></a>
                            </td>
                            <td>
                                <button onClick={()=>window.location.href='/submitted'}>View</button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>

            </div>
        )
    }
}