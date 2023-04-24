import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import './Navdrawer.css'
import { connect } from 'react-redux';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});




const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function NavDrawer({open,setTypeofnotes,dispatch}) {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
     
     <Drawer variant="permanent" open={open}>
        <List>
      
            <ListItem key={'Notes'} onClick={()=>{setTypeofnotes('Notes');dispatch({type:"Notes"})}} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <LightbulbOutlinedIcon /> 
                </ListItemIcon>
                <ListItemText primary={'Notes'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Archive'} onClick={()=>{setTypeofnotes('Archive');dispatch({type:"Archive"})}} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary={'Archive'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
  
            <ListItem key={'Trash'} onClick={()=>{setTypeofnotes('Trash');dispatch({type:"Trash"})}} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <DeleteIcon /> 
                </ListItemIcon>
                <ListItemText primary={'Trash'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
  
  
        </List>
      </Drawer>

    </Box>
  );
}

 
 export default connect()(NavDrawer)