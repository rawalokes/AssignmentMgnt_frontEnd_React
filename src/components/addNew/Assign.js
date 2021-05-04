import React, {Component} from 'react';
import "./addStyle.css"
import axios from "axios";

import {addAssignemnt} from "../../apiCall/Assignment";

class Assign extends Component {
    custom_file_upload_url = "http://localhost:1234/api/upload";
    constructor(props) {

        var today = new Date(),

            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        super(props);
        this.state = {
            currentDate: date,
            "name":'',
            "Subject":'',
            "date":'',
            "expDate":'',
            "file":'',
            image_file: null,
            image_preview: '',
        }
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        var date = Date.now()
        addAssignemnt(this.state.name, this.state.Subject,  this.state.currentDate, this.state.expDate,this.state.file).then((res) => {
            localStorage.setItem("expiry_time", JSON.stringify(date + 86480000));
            localStorage.setItem("userinfo", JSON.stringify(res));
            console.log(res);
            console.log(localStorage.getItem('userInfo'));
        }).catch((err) => {
                console.log(err);
                if (err.response.status === 404) {
                    this.setState({ username: '', password: '' });
                }
            }
        )
    }





    handleImagePreview = (e) => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image_as_files = e.target.files[0];

        this.setState({
            image_preview: image_as_base64,
            image_file: image_as_files,
        })
        this.handleSubmitFile(image_as_files);

    }


    handleSubmitFile = (image) => {
        console.log("comming")

        if (image) {

            let formData = new FormData();
            formData.append('myfile', image);
            // the image field name should be similar to your api endpoint field name
            // in my case here the field name is customFile

            axios.post(
                this.custom_file_upload_url,
                formData,
                {
                    headers: {

                        "Content-type": "multipart/form-data",
                    },
                }
            )
                .then(res => {
                    console.log('Success' + res.data);
                    this.setState({file:res.data});
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    render() {
        return (
            <div class="center">
                <form onSubmit={(event)=>this.handleSubmit(event)}>
                    <div className="container">
                        <h5>Assign</h5>
                        <hr/>

                        <label htmlFor="name"><b>Name</b></label>
                        <input type="text"
                               placeholder="Enter Name"
                               name="name"
                               onChange={(e) => this.handleChange(e)}
                               required/>

                        <label htmlFor="sub"><b>Subject</b></label>
                        <input type="text" placeholder="Enter Subject"
                               name="Subject"
                               onChange={(e) => this.handleChange(e)}
                               required/>


                        <label htmlFor="expDate"><b>ExpDate</b></label>
                        <input type="Date"
                               placeholder="Enter Submission Date"
                               name="expDate"
                               onChange={(e) => this.handleChange(e)}
                               required/>

                        <input
                            type="file"
                            onChange={(event) => this.handleImagePreview(event)}
                        />

                        <button type="submit" className="registerbtn">Submit</button>
                    </div>


                </form>

            </div>
        );
    }
}

export default Assign;