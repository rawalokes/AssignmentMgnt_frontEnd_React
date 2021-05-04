import React, {Component} from 'react';
import axios from "axios";

export function addAssignemnt(name,Subject,date,expDate,file){
    var input ={
        "name":name,
        "Subject":Subject,
        "date":date,
        "expDate":expDate,
        "file":file

    }
    return new Promise(function (resolve,reject){
        axios.post("http://localhost:1234/api/a",input).then(function (re){
            console.log("respon............")
            console.log(re)
           resolve(re.data)
        }).catch(function (err){
            console.log(err)
            reject(err)
        })
    })
}

// export function SubmitAsg(date,file){
//     var input ={
//         "date":date,
//         "file":file
//
//     }
//     return new Promise(function (resolve,reject){
//         axios.post("http://localhost:1234/api/submit",input).then(function (re){
//             console.log("respon............")
//             console.log(re)
//             resolve(re.data)
//         }).catch(function (err){
//             console.log(err)
//             reject(err)
//         })
//     })
// }
export function SubmitAsg(std,asg,file,date,retryTimes) {
    console.log("add data .....");
    var data = {
        "std": {"id": std},
        "no": {"no": asg},
        "file":file,
        "date":date
    }
    return new Promise(function (resolve, reject) {
        axios.post('http://localhost:1234/api/submit', data).then(function (res) {
            console.log("getting response .....");
            console.log(res)
            resolve(res.data)
        }).catch(function (err) {
            console.log("error")
            console.log(err)
            reject(err)
        });
    })
}