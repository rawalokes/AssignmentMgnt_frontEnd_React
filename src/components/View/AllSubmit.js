import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './styleAll.css';
import {getallSubmit} from "../../apiCall/User";
export default class AllSubmit extends Component {

  state={
    submits:[]
  }

  componentDidMount() {
    this.getall();
  }

  getall=()=>{
    let self=this;
    getallSubmit().then(function(res){
      self.setState({submits:res.data},console.log(res.data))
    }).catch((err)=>console.log(err));
  }

  render() {
    return (
      <div>
        <h5>ALL Submitted</h5><hr />

        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Date</th>
             <th>Assignment  Name</th>
            <th>View</th>
          </tr>
          <tbody>
          {this.state.submits.map((item)=>
          <tr>
            <td>{item.id}</td>
            <td> {item.std.name}</td>
            <td>{item.no.name}</td>
            <td>{item.date}</td>
            <td>
             <a target="_blank" href={item.file}> <button >View</button></a>
            </td>
          </tr>
          )}
          </tbody>

        </table>

      </div>
    )
  }
}