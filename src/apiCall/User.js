import React, { Component } from 'react';
import axios from 'axios';
import {findRenderedDOMComponentWithClass} from "react-dom/test-utils";

export function registerStd(username,password,rollNO,name,retryTimes) {
        console.log("add data .....");
        var data = {
            "username": username,
            "password": password,
            "name":name,
            "roll":rollNO
            
        }
        return new Promise(function (resolve, reject){
            axios.post('http://localhost:1234/api/registerStd', data).then(function(res){
                console.log("getting response .....");
                console.log(res)
                resolve(res.data)
            }).catch(function(err){
                console.log("error")
                console.log(err)
                reject(err)
            });
        })
}



export function addData(username,password,retryTimes) {
    console.log("add data .....");
    var data = {
        "username": username,
        "password": password,
    }
        return new Promise(function (resolve, reject){
        axios.post('http://localhost:1234/api/loginStudent', data).then(function(res){
            console.log("getting response .....");
            console.log(res)
            resolve(res.data)
        }).catch(function(err){
            console.log("error")
            console.log(err)
            reject(err)
        });
    })
}

export function task(){
    return new Promise(function (resolve,reject) {
        axios.get('http://localhost:1234/api/').then((res)=>
            resolve(res)).catch((err)=>reject(err))
    })
}
export  function image(){
    return new Promise(function (resolve, reject){
        axios.get('http://localhost:1234/api/upload').then((res)=>
        resolve(res)).catch()
    })
}


export function getAssignment(){
    return new Promise(function (resolve,reject) {
        axios.get('http://localhost:1234/api/all').then((res)=>
            resolve(res)).catch((err)=>reject(err))
    })
}
export function getallSubmit(){
    return new Promise(function (resolve,reject) {
        axios.get('http://localhost:1234/api/allSubmit').then((res)=>
            resolve(res)).catch((err)=>reject(err))
    })
}
