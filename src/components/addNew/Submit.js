import React, {Component} from 'react';
import "./addStyle.css"
import axios from "axios";
import { SubmitAsg} from "../../apiCall/Assignment";

class Submit extends Component {
    custom_file_upload_url = "http://localhost:1234/api/upload";
    constructor(props) {
        var today = new Date(),

            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        super(props);
        this.state = {
            currentDate: date,
            "date":'',
            "file":'',
            image_file: null,
            image_preview: '',
            // asg: ["asgid":this.props.match.params.id ],

            id:this.props.match.params.id,
            isLogin:!!localStorage.getItem('userinfo') || false,
            std:JSON.parse(localStorage.getItem('userinfo')) || null,
        }
    }


    componentDidMount() {
        console.log(this.state.std)
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

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        var date = Date.now()
        SubmitAsg(this.state.std.id,this.state.id, this.state.file,this.state.currentDate).then((res) => {
            alert("Submitted")
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

    render() {
        return (
            <div class="center">
                <form onSubmit={(event)=>this.handleSubmit(event)}>
                    <div className="container">
                        <h5>Submit</h5>
                        <hr/>

                        <input
                            type="file"
                            name="file"
                            onChange={(event) => this.handleImagePreview(event)}
                        />

                        <button type="submit" className="registerbtn">Submit</button>
                    </div>

                     </form>

            </div>
        );
    }
}

export default Submit;