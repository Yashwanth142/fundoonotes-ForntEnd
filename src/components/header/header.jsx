import React from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import GoogleIcon from '@mui/icons-material/Google';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import MoreIcon from '@mui/icons-material/MoreVert';
import { connect } from "react-redux";

// export default function Header({listenToHeader}) {
//   const navigate=useNavigate()
//   async function logout(){
//     localStorage.clear()
//     await navigate('/')
//   }
//   return (
//     <div className="test">
//       <div className="menu">
//         <MenuIcon onClick={()=>listenToHeader()}/>
//         <LightbulbCircleIcon/>
//         Keep
//       </div>

//       <div className="search">
//         <SearchIcon/>
//         <div className="input"><input className="se" type="text" placeholder="Search"/></div>
//       </div>
//       <div className="ricon">
//       <RefreshIcon/>
//         <ViewStreamOutlinedIcon/>
//         <SettingsIcon/>
//       </div>

//       <div className="View">
//         <ViewCompactIcon/>
//         <GoogleIcon/>
//         <LogoutIcon onClick={logout}/>
//       </div>
//     </div>
//   );
// }


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Header({listenToHeader,title}) {

  const navigate=useNavigate()
  async function logout(){
    localStorage.clear()
    await navigate('/')
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
        <MenuItem onClick={handleMenuClose}><ViewStreamOutlinedIcon/>ViewStream</MenuItem>
        <MenuItem onClick={handleMenuClose}><SettingsIcon/>Settings</MenuItem>
        <MenuItem onClick={handleMenuClose}><GoogleIcon/>GoogleAccount</MenuItem>
        <MenuItem onClick={logout}> <LogoutIcon onClick={logout}/>Logout</MenuItem>
      
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <MenuItem onClick={handleMobileMenuClose}><RefreshIcon/>Refresh</MenuItem>
        <MenuItem onClick={handleMobileMenuClose}><ViewStreamOutlinedIcon/>ViewStream</MenuItem>
        <MenuItem onClick={handleMobileMenuClose}><SettingsIcon/>Settings</MenuItem>
        <MenuItem onClick={handleMobileMenuClose}><GoogleIcon/>GoogleAccount</MenuItem>
        <MenuItem onClick={logout}> <LogoutIcon onClick={logout}/>Logout</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'white'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            style={{color:'black'}}
          >
           <MenuIcon onClick={()=>listenToHeader()}/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            style={{color:'black',marginTop:'8px'}}
          >
             <img src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png" height="34" width="34" alt="Google"/>
          </Typography>
         
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            style={{color:'black',marginLeft:'10px'}}
          >
          {title}
          </Typography>

          <Search style={{color:'black'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large"  color="inherit" style={{color:'black'}}>
            <RefreshIcon  />
            </IconButton>

            <IconButton size="large"  color="inherit" style={{color:'black'}}>
            <ViewStreamOutlinedIcon />
            </IconButton>
            <IconButton size="large"  color="inherit" style={{color:'black'}}>
            <SettingsIcon/>
            </IconButton>
          
          
            <IconButton
              size="large"
              color="inherit"
              style={{color:'black'}}
            >
              <Badge color="error">
              <ViewCompactIcon onClick={handleProfileMenuOpen}/>
              </Badge>
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              style={{color:'black'}}
            >
              <MoreIcon />
            </IconButton>
          </Box>
          
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

function mapStateToProps(state){
 return {
  title:state.navReducer.title
 }
}

export default connect(mapStateToProps)(Header)