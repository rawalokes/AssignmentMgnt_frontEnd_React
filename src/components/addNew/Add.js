import {Component} from "react";
import axios from "axios";

class FileUpload extends Component {
    custom_file_upload_url = "http://localhost:1234/api/upload";

    constructor(props) {
        super(props);
        this.state = {
            image_file: null,
            image_preview: '',
        }
    }

    // Image Preview Handler
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
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }



    render() {
        return (
            <div>


                {/* image preview */}
                {/*<img src={this.state.image_preview} alt="image preview"/>*/}

                {/* image input field */}
                <input
                    type="file"
                    onChange={(event) => this.handleImagePreview(event)}
                />

                {/*<label>Upload file</label>*/}
                {/*<input type="submit" onClick={() => this.handleSubmitFile()} value="submit"/>*/}
            </div>
        );
    }
}

export default FileUpload;