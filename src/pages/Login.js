import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signInWithGoogle } from '../helpers/firebase';
import { makeStyles } from '@material-ui/core/styles';

import { Container, TextField, Typography, Grid, Button, Box } from '@mui/material';



const useStyles = makeStyles(theme => ({

  image:{
    backgroundImage: "url(https://picsum.photos/1600/900)",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    backgroundPosition:'center',
    height:"100vh",
     
  },
  container:{
    marginTop:"5rem",
    backgroundColor:"rgba(255,255,255, 0.6)",
    padding:"0 3rem 3rem 3rem",
    borderRadius:"1rem"
  },
  buttonLog:{
    fontSize:"1rem",
    fontWeight:"bold"
  },
  buttonGo:{
    fontSize:"1rem",
    fontWeight:"bold",
    backgroundColor:"lightGray",
    color:"black"
  },
  googleImg :{
    width:"70px",
    marginLeft:"10px" 
  },
  title:{
    fontFamily: "cursive"
  }
 
  
}));

export default function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const classes = useStyles();

  const handleLoginSubmit =(e)=>{
    e.preventDefault()
    signIn(email, password, navigate)
    //console.log(email, password);
  }
  
  return (
    <div className={classes.image}>
    <Container  maxWidth="sm" >
       <Box
      sx={{
        //height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className={classes.container} >
      <Typography variant="h4" component="h1" sx={{ m: 4 }} className={classes.title} >
          Login
      </Typography>
      <form onSubmit={handleLoginSubmit} >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField 
                id="email"
                label="email"
                name="email"
                variant="outlined"
                type="email"
                //value={null}
                autoComplete="on"
               onChange={(e)=>setEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                id="password"
                label="password"
                name="password"
                variant="outlined"
                type="password"
                autoComplete="current-password"
                //value={null}
                onChange={(e)=>setPassword(e.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <Button className={classes.buttonLog}
              type='submit'
                variant="contained"
                
                
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                className={classes.buttonGo}
                variant="contained"
                //color="secondary"
               onClick={()=>signInWithGoogle(navigate)}
                fullWidth
              >
                WITH
                <img className={classes.googleImg}src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"} alt="google" />
              </Button>
            </Grid>
          </Grid>
        </form>
        </div>
    </Box>
    </Container>
    
    </div>
  );
}
