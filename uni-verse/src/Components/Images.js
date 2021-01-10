import React, { Component } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { storage } from './Firebase/firebase';

export const FileUpload = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        // console.log(url);
                        setUrl(url);
                    });
            }
        );
    };
    console.log("image: ", image);

    return (
        <div>
            <progress value = {progress} max="100" />
            <br />
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
            <br />
            {/* {url} */}
            <br />
            <img src={url || "https://i.imgur.com/yoHdULe.png" } alt="firebase-img" />
        </div>
    )
};
// class Images extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             image: null,
//             url: '',

//         }
//         this.handleChange = this.handleChange.bind(this);
//     }
//     fileSelectedHandler = event => {
//         this.setState({
//             image: event.target.files[0]
//         })
//         console.log(this.state.image);

//     }

//     fileUploadHandler = () => {
//         axios.post('');

//     }

//     handleChange = e => {
//         if(e.target.files[0]){
//             const image = e.target.files[0];
//             this.setState(() => ({image}));
//         }
//         console.log(this.state.image);
//     }
//     render() {
//         return (
//             <div className="App">
//                 <input type="file" onChange={this.handleChange} />
//                 <button onClick={this.fileUploadHandler}>Upload</button>
//             </div>
//         )
//     }

// }

//  export default Images;
export default FileUpload;