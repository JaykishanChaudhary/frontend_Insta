import React from "react";
import "./Post.css";
import { useState } from "react";
// import PostData from "../Data/PostData";
// import image from "../assets/img/cover.jpg";
import heart from '../assets/img/like.png'
import share from '../assets/img/share.png'

const Post = ({data}) => {
  // const {name,location,PostImage,description,date,likes}=data
 
  // console.log(data);
  return (
    <div>
      <div className="PostBox">
        <div className="upperpart">
          <div className="Namepart">
            <div className="name">{data.author}</div>
            <div className="surname">{data.location}</div>
          </div>
          <div className="threedot">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div className="imagediv">
          <img src={data.img} id="postimage" alt="" />
        </div>
        <div className="footerpart">
          <div className="footimage">
          <img src={heart} id='likebutton' alt=''/>
          <img src={share} id='sharebutton' alt=''/>
          </div>
          <div className="date">
          {new Date(data.createdAt).toLocaleString('en-US', { 
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })}
          </div>
        </div>
        <div className="likes">
        <span>30</span>
        <span>likes</span>
        </div>
        <div className="detail">
          <p>{data.description}</p>
        </div>
        </div>
    </div>
  );
};

export default Post;
