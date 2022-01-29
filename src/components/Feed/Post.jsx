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

function Post({ image }) {
  console.log(image)
  return (
    <div className="post">
        <div className="post__header">
            <Avatar src="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg" />

            <div className="post__userInfo">
                <h4>Joe Lang</h4>
                <p>Python freelancer, fullstack developer</p>
            </div>
        </div>

        <div className="post__body">
            <p>
            Because RevenueZen works mainly with early-stage companies who are using LinkedIn as a source of revenue, not just another place to show off their brand, our focus is on strategies that lead to revenue and leads.
            </p>
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
