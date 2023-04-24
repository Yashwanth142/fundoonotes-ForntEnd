import React from 'react'
import "./Takenotetwo.css";
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { createNote } from '../../services/userservices';
import ColorPopper from '../Colorpopper/Colorpopper';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


export default function Takenotetwo({setDisplay,getData}) {
  
  const [note,setNote] = React.useState({Title:'',description:'',archive:false,trash:false})
  function taketitle(event){
    setNote((prev)=>({...prev,Title:event.target.value}))
  }

  function takedescription(event){
    setNote((prev)=>({...prev,description:event.target.value}))
  }

  async function submit(){
    let response = await createNote(note)
    getData()
    console.log(response)
  }

  return (
    <ClickAwayListener onClickAway={()=>setDisplay(true)}>
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
    <div className='notetwo' >
    <Paper elevation={3} style={{backgroundColor:note.color}}>
        <input className='title' type='title' placeholder='Title' onChange={taketitle}/>
        <input className='title' type='text' placeholder='Take a note...' onChange={takedescription} />
    
        <div className='icons'>
          <div className='icons1'>
          <AddAlertOutlinedIcon/>
          <PersonAddAltIcon/>
           <ColorPopper action='create' setNote={setNote}/>
          <InsertPhotoOutlinedIcon/>
          <ArchiveOutlinedIcon onClick={()=>setNote((prevState)=>({...prevState,archive:true}))} />
          <MoreVertOutlinedIcon/>
           <RedoIcon/>
          </div>
          <div className='close' onClick={submit} > Close</div>
        </div>
        </Paper>
    </div>
    </Box>
    </ClickAwayListener>
  )
}
