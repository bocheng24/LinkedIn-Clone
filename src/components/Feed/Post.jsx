import React from 'react';
import { Avatar } from '@mui/material'
import InputOption from './InputOption';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

import './Post.css'

const inputOptions = [
    {
        Icon: ThumbUpIcon,
        title: "Like",
        color: "#78e08f"
    },

    {
        Icon: CommentIcon,
        title: "Comment",
        color: "#e55039"
    },

    {
        Icon: ShareIcon,
        title: "Share",
        color: "#4a69bd"
    },

    {
        Icon: SendIcon,
        title: "Send",
        color: "#fbc531"
    }
]

function Post({ name, description, photo, message, image }) {

  return (
    <div className="post">
        <div className="post__header">
            <Avatar src={ photo } />

            <div className="post__userInfo">
                <h4>{ name }</h4>
                <p>{ description }</p>
            </div>
        </div>

        <div className="post__body">
            <p>{ message }</p>
            { image && <img src={ image } alt="" /> }
        </div>
        
        <div className="post__tail">
            {
                inputOptions.map((option, id)=> (<InputOption 
                    title={ option.title } 
                    Icon={ option.Icon } 
                    color={ option.color }
                    key={ id }
                />)
                )
            }
        </div>
    </div>
  );
}

export default Post;
