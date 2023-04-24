import React from 'react'
import './Takenotethree.css'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { addArchive,removeArchive,addTrash,removeTrash } from '../../services/userservices';
import ColorPopper from '../Colorpopper/Colorpopper';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { updateNote } from '../../services/userservices';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function Takenotethree({note,getData}) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    display:'flex',
    'flex-direction': 'column',
    boxShadow: 24,
    p: 2,
    'border-radius': '10px'
  };

  const [noteobj,setNoteObj]= React.useState({})
  const [open, setOpen] = React.useState(false);
  const handleOpen = (note) => {
      setNoteObj(note)
      setOpen(true);    
    }
    const handleClose = () => setOpen(false);
      
   async function updateArchive(){
    if(note.archive===false){
        let responce=await addArchive(note._id)
        getData()
        console.log(responce)
    }else{
        let responce=await removeArchive(note._id)
        getData()
        console.log(responce)
    }
   }

   async function updateTrash(){
    if(note.trash===false){
        let responce=await addTrash(note._id)
        getData()
        console.log(responce)
    }else{
        let responce=await removeTrash(note._id)
        getData()
        console.log(responce)
    }

   }
  async function submit(){
    let response=await updateNote(noteobj)
    getData()
    console.log(response)
   }


  return (
    <div >
    <Card className='sub' style={{backgroundColor:note.color}}>

    <CardContent>
    <div className='t1' onClick={()=>handleOpen(note)}>{note.Title}</div>
    <div className='d1' onClick={()=>handleOpen(note)}>{note.description}</div>
    </CardContent>
    
      <CardActions className='icon2'>
     <AddAlertOutlinedIcon fontSize='small'/>
     <PersonAddAltIcon fontSize='small'/>
     <ColorPopper action='edit' noteid={note._id} getData={getData}/>
     <InsertPhotoOutlinedIcon fontSize='small'/>
     <ArchiveOutlinedIcon fontSize='small' onClick={updateArchive}/>
     <MoreVertOutlinedIcon fontSize='small'/>
     <DeleteIcon fontSize='small' onClick={updateTrash}/>
     </CardActions>
    
    </Card>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{backgroundColor:note.color}}>
          <input className='t2' defaultValue={noteobj.Title} onChange={(e)=>setNoteObj((prev)=>({...prev,Title:e.target.value}))}></input>
          <input className='d2' defaultValue={noteobj.description} onChange={(e)=>setNoteObj((prev)=>({...prev,description:e.target.value}))}></input>
          <div className='icon3'>
          <AddAlertOutlinedIcon fontSize='small'/>
          <PersonAddAltIcon fontSize='small'/>
          <ColorPopper action='edit' noteid={note._id}/>
          <InsertPhotoOutlinedIcon fontSize='small'/>
          <ArchiveOutlinedIcon fontSize='small' onClick={updateArchive}/>
          <MoreVertOutlinedIcon fontSize='small'/>
          <DeleteIcon fontSize='small' onClick={updateTrash}/>
          <button className='close2' onClick={submit}>Close</button>
          </div>
        </Box>
      </Modal>
   </div>
  )
}

export default Takenotethree