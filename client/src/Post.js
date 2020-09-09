import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import { connect } from 'react-redux';
import { setPosts } from './actions'
import './Post.css';

function Post(props) {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const getData = async () => {
            await axios.get('http://localhost:4000/api/v1/posts').then(res => {
                props.setPosts(res.data.posts);
            });
        }
        getData();
    }, [props.setPosts]);
    return (
        <>
            {props.posts?.length === 0 ? <p className="msg">Sorry, No Posts are available!</p> : ""}
            {props.posts &&
                props.posts.map(({ image, caption, username, status }, index) => (
                    <div className="post" key={index + 'key'}>
                        <div className="post__header">
                            <Avatar className="post__avatar" alt="Ayyandurai" src="" />
                            <div className="post__header--detail">
                                <h4 className="name">{username}</h4>
                                <p className="title">{status}</p>
                            </div>
                            <p className="post__time">Just Now</p>
                        </div>
                        <p className="post__caption">{caption}</p>
                        <img className="post__image"
                            src={image}
                            alt="post-img" />
                        <div className="post__icons">
                            <div>
                                {liked ? (
                                    <FavoriteIcon className="fav-red" onClick={(e) => { setLiked(false); setLikes(index) }} />
                                ) : (
                                        <FavoriteBorderIcon className="fav-icon" onClick={(e) => { setLiked(true); setLikes(index + 1) }} />
                                    )}
                            </div>
                            <img src="https://img.icons8.com/ios/50/000000/speech-bubble-with-dots.png" alt="comments" />
                            <img src="https://img.icons8.com/ios/50/000000/right2.png" alt="share" />
                            <p>{likes} likes </p>
                            <p>{index + 20} comments</p>
                        </div>
                    </div >
                ))
            }
        </>
    )
}


const mapStateToProps = (state) => {
    console.log(state.posts);
    return { posts: state.posts };
}

export default connect(mapStateToProps, { setPosts })(Post);
