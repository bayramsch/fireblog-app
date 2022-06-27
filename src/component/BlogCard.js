import {useContext} from 'react';
import Details from "../pages/Details"

import {Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext"
import { makeStyles } from '@material-ui/core/styles';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const useStyles = makeStyles(theme => ({

  root:{
    minHeight:340,
    minWidth:340,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    
    
  },
  cardImg:{
    height: "200px",
    width:"300px",
    
    cursor:"pointer"
  },
  cardText:{
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    "text-overflow": "ellipsis",
    overflow: "hidden",
  },
  cardContent:{
    backgroundColor: "#efeefe",
    height: "125px",
  },
  cardButton :{
    marginLeft:"3rem"
  }
  
}));



const BlogCard = ({item}) => {

  const navigate = useNavigate()
  const {currentUser} = useContext(AuthContext)
  
  const classes = useStyles()
  
  

  return (
    
    <Card sx={{ maxWidth: 300, m: 5, maxHeight: 400 }} key={item.id}
      className={classes.root}>
            <CardMedia
              className={classes.cardImg}
              style={{objectFit:"fill"}}
              image={item.url}
              alt="logo"
              onClick={()=>currentUser ? navigate("/details",{state:{item}}):alert("Please log in to see details")}  
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="div"
              /* onClick={()=>currentUser ? navigate("/details/"+ item.id):alert("Please log in to see details")} */ 
              className={classes.title}
              style={{cursor:"pointer"}} >
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               <p className={classes.cardText}> {item.content}</p>
              </Typography>
            </CardContent>
            <CardActions>
              
              <PersonPinIcon/>
              <span>{item.author}</span>
              
              <Button className={classes.cardButton} size="small" target="_blank" 
              onClick={()=>currentUser ? navigate("/details",{state:{item}}):alert("Please log in to see details")}
              >
                Detail
              </Button>
            </CardActions>
            
    </Card>
    
  )
}

export default BlogCard


