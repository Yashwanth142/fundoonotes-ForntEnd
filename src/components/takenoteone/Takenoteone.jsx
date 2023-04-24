import React from 'react'
import "./Takenoteone.css";
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

export default function Takenoteone({setDisplay}) {
  return (
  <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {  
            width: 600,
            height: 50,
          },
        }}
      >
        
    <div className='noteone' onClick={()=>setDisplay(false)}>
    <Paper elevation={3}>
        <div className='note1'><input className='input1' type="text" size = '75' placeholder="Take a note..." />
        <div className='note2'>
           <IconButton> <div className='icon11'><CheckBoxOutlinedIcon /></div></IconButton>
           <IconButton>  <div className='icon11'><BrushOutlinedIcon /></div></IconButton>
           <IconButton>  <div className='icon11'><InsertPhotoOutlinedIcon /></div></IconButton>
        </div>
        </div>
        </Paper>
       </div> 
       </Box>
       </div>
    
  )
}
