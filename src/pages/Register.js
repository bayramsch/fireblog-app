import { Button, Container, TextField,Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNewUser } from '../helpers/firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

  image:{
    backgroundImage: "url(https://picsum.photos/1600/900)",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    backgroundPosition:'center',
    height:"100vh",
    //width:"100%"
     
  },
  container:{
    marginTop:"5rem",
    backgroundColor:"rgba(255,255,255, 0.6)",
    padding:"0 3rem 3rem 3rem",
    borderRadius:"1rem"
  },
  button:{
    fontSize:"1rem",
    fontWeight:"bold",
  },
  title:{
    fontFamily: "cursive"
  }
 
  
}));


export default function Register() {

  const classes = useStyles();
  const [firstName, setfirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()


  const handleSubmit =(e)=>{
    e.preventDefault()
    createNewUser( email, password, firstName, lastName, navigate)
    //console.log(firstName, lastName);
  }

  return (
    <div className={classes.image}> 
    <Container maxWidth="sm" >
      <Box 
      sx={{
        //height: "100vh",
        //?marginTop: "20vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      >
      <div className={classes.container}>
      <Typography variant="h4" component="h1" sx={{ m: 4 }} className={classes.title}>
          Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                  id="firstName"
                  label="firstName"
                  name="firstName"
                  variant="outlined"
                  type="text"
                  //value={null}
                  autoComplete="on"
                  onChange={(e)=>setfirstName(e.target.value)}
                  fullWidth
              />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="lastName"
                  label="lastName"
                  name="lastName"
                  variant="outlined"
                  type="text"
                  //value={null}
                  autoComplete="on"
                  onChange={(e)=>setLastName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  //id="email"
                  label="email"
                  name="email"
                  variant="outlined"
                  type="email"
                  //value={null}
                  //autoComplete="on"
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
                  <Button className={classes.button}
                    type='submit'
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                  Register
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
