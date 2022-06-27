import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useLocation } from 'react-router-dom'
import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";

import { deleteBlog } from '../helpers/firebase';
//import { deleteBlog } from '../helpers/firebase';



const useStyles = makeStyles(theme => ({

  root:{
    marginTop:"3rem", 
    marginBottom:"3rem" 
  },
  cardImg:{
    height:"30rem", 
    cursor:"pointer"
  },
  cardContent:{
    backgroundColor: "#efeefe",
    height: "125px",
  },
  delButton:{
    marginLeft:"2rem",
    backgroundColor:"red",
    color:"white",
    borderRadius:"8px",
  },
  action:{
    display:"flex",
    marginTop:"2rem"
  },

  content:{
  width: "33rem",
  height: "18rem",
  overflow: "scroll",
  scrollbarColor: "rebeccapurple green",
  scrollbarWidth: "thin"
  }
  
  
}));

const Details = () => {
    
  const classes = useStyles()
  const location = useLocation()
  const blogDetails = location.state.item
  const navigate = useNavigate();

  
console.log(blogDetails);

const handleDelete = (id) => {
  deleteBlog(blogDetails.id)
  navigate("/");
}

    
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.root}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
            <Card sx={{ maxWidth: '100vh', height: '100vh' }}>
                <CardMedia
                    className={classes.cardImg}
                    component="img"
                    height="400"
                    image={blogDetails.url}
                    alt="logo"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {blogDetails.title}
                    </Typography>
                    <Typography className={classes.content} variant="body2" color="text.secondary">
                        {blogDetails.content}
                    </Typography>
                </CardContent>    
            </Card>
        </Box>
        <CardActions >
                  <div className={classes.action}>         
                      <Button
                      className={classes.delButton}
                      size="small" onClick={handleDelete}>Delete</Button>
                  </div>
        </CardActions>
      </Container>
    </React.Fragment>
  )
}

export default Details