import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CancelIcon from '@material-ui/icons/Cancel';
import Post from './Post';
import { addPost } from './actions';
import { connect } from 'react-redux';
import axios from 'axios';
import './Posts.css';

function Posts(props) {
    const [caption, setCaption] = useState('');
    const [textarea_Count, setTextareaCount] = useState(0);
    const [image, setImage] = useState('');
    const [isDisable, setIsDisable] = useState(true);
    const [loading, setLoading] = useState(false);

    const lettersCount = (e) => {
        let text = e.target.value;
        let count = e.target.value.length;
        setTextareaCount(count);
        setCaption(text);
        if (count !== 0)
            setIsDisable(false);
        else
            setIsDisable(true);
    }

    const handleImageChange = (e) => {
        console.log(URL.createObjectURL(e.target.files[0]));
        setImage(URL.createObjectURL(e.target.files[0]));
        setIsDisable(false);
    }

    const handleClose = () => {
        setIsDisable(true);
        setImage('');
    }

    const handleSubmit = async () => {
        setLoading(true);
        await axios.post('http://localhost:4000/api/v1/posts',
            {
                username: "Ayyandurai",
                caption: caption,
                image: image,
                status: "Passinate Programmar"
            }).then(res => {
                setTimeout(() => {
                    props.addPost(res.data.post);
                    setLoading(false);
                }, 2500);
            });
        setImage('');
        setCaption('');
        setTextareaCount(0);
        setIsDisable(true);
    }
    return (
        <div className="posts">
            <div className="posts__header">
                <div className="header">
                    <Avatar className="posts__avatar" alt="Ayyan" src="" />
                    <div className="posts__header--detail">
                        <h4 className="name">Ayyandurai</h4>
                        <p className="title">Passionate Developer</p>
                    </div>
                    <div className="posts__header--btns">
                        <input type="file" className="custom-file-input" onChange={handleImageChange} />
                        <button
                            className="disable_btn"
                            onClick={handleSubmit}
                            disabled={isDisable}>Post</button>
                    </div>
                </div>
                <div className="posts__details">
                    {image && (
                        <div className="posts_info">
                            <img className="posts_image" src={image} alt="img" />
                            <CancelIcon className="close" onClick={handleClose} />
                        </div>
                    )}
                    <textarea
                        onChange={lettersCount}
                        maxLength="120"
                        cols="59"
                        rows="1"
                        value={caption}
                        placeholder="Hey! Try Something here" />
                    <p>{textarea_Count}/120</p>
                </div>

            </div>
            {loading ? <i className="fa fa-refresh load" aria-hidden="true"></i> : ""}
            <Post />

        </div>
    )
}

const mapStateToProps = (state) => {
    return { post: state.posts };
}

export default connect(mapStateToProps, { addPost })(Posts);
