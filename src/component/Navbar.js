import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, IconButton, Switch, FormControlLabel, FormGroup, MenuItem, Menu } from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { logOut } from '../helpers/firebase';
import bkLogo from "../helpers/bkLogo.png"


export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate()

  const  { currentUser } = React.useContext(AuthContext)

 
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //const currentUser = true;
  //const currentUser = false;


  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static" style={{backgroundColor:"#046582"}}>
        <Toolbar>
         <Link to="/" >
            <img style={{width:"40px", borderRadius:"15px"}} src={bkLogo} alt="logo" />
         </Link>
          <Typography
          onClick={()=>navigate("/")}
          variant="h6" component="div" sx={{ flexGrow: 1, cursor:"pointer",width:"40" }}>
            {"────<SoftwareBlog>────"}
          </Typography>
          {auth && (
            <div >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                
              >
                <AccountCircle  />
              </IconButton >
              <Menu
                
                id="menu-appbar"
                anchorEl={anchorEl}
                
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                  {currentUser ?(
                    <>
                    <MenuItem >Profile</MenuItem>
                    <MenuItem onClick={()=>navigate("/newblog")} >New</MenuItem>
                    <MenuItem onClick={()=>logOut()}>Logout</MenuItem>
                    </>
                ):(
                    <>
                    <MenuItem onClick={()=>navigate("/login")} >Login</MenuItem>
                    <MenuItem onClick={()=>navigate("/register")} >Register</MenuItem>
                    </>
                )}           
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
