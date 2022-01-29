import React from 'react';
import './InputOptions.css'
import InputOption from './InputOption';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';

const inputOptions = [
    {
        Icon: InsertPhotoIcon,
        title: "Photo",
        color: "#74b9ff"
    },

    {
        Icon: VideocamIcon,
        title: "Video",
        color: "#e58e26"
    },

    {
        Icon: EventIcon,
        title: "Events",
        color: "#82ccdd"
    },

    {
        Icon: ArticleIcon,
        title: "Writing Articles",
        color: "#f6b93b"
    }
]

function InputOptions() {

  return (
    <div className="input__options">
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
  );
}

export default InputOptions;
