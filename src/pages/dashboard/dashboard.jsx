import React from 'react'
import Header from '../../components/header/header'
import Takenoteone from '../../components/takenoteone/Takenoteone'
import Takenotetwo from '../../components/takenotetwo/Takenotetwo'
import { getNotes } from '../../services/userservices'
import './dashboard.css'
import Takenotethree from '../../components/Takenotethree/Takenotethree';
import NavDrawer from '../../components/navdrawer/Navdrawer'
import { Grid } from "@mui/material";


export default function Dashboard() {
    const [display,setDisplay] = React.useState(true)
    const [open, setOpen] = React.useState(false);
    const [typeofnotes,setTypeofnotes]=React.useState("Notes")

    const [notes,setNotes] = React.useState([])
    React. useEffect(()=>{ getData() },[typeofnotes])

   async function getData(){
    let response=await getNotes()
    
    if(typeofnotes==="Notes"){
      let arr=response.data.data.filter((note)=>note.archive===false&& note.trash===false)
      setNotes(arr)
      console.log(arr)
    }else if(typeofnotes==="Archive"){
      let arr=response.data.data.filter((note)=>note.archive===true&& note.trash===false)
      setNotes(arr)
      console.log(arr)
    }else{
      let arr=response.data.data.filter((note)=>note.archive===false&& note.trash===true)
      setNotes(arr)
      console.log(arr)
    }
   }
  
  function listenToHeader(){
    setOpen(!open)
  }

  return (
    <div>
        <Header listenToHeader={listenToHeader}/>
        <NavDrawer open={open} setTypeofnotes={setTypeofnotes}/>
        {display ? <Takenoteone setDisplay={setDisplay}/> : <Takenotetwo setDisplay={setDisplay} getData={getData}/>}

        <div className='container'>     
          <Grid container spacing={3} direction={'row'} justifyContent={'flex-start'}>
            { notes.map((note)=>(
              <Grid item xs={12} sm={6} md={4} lg={3} >
              <Takenotethree note={note} getData={getData}/>
              </Grid>
            ))}
          </Grid>   
        </div>
        
    </div>
  )
}
