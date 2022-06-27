import { TextField, Container, Typography, Grid, Button, Box, TextareaAutosize } from '@mui/material';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AddBlog } from '../helpers/firebase';



const NewBlog = () => {
  
  const initialValues={title:"",url:"",content:""}

  const [blogInfo, setBlogInfo] = useState(initialValues)
  const navigate = useNavigate()
  
    const handleChange = (e) => {
      
      const {name, value} = e.target
      setBlogInfo({...blogInfo,[name]:value})
    }

const handleSubmit=(e)=>{
  e.preventDefault()
  AddBlog({...blogInfo})
  //console.log();
  setBlogInfo("")
  navigate("/")
}

  return (
    <Container maxWidth="sm">
       <Box
      sx={{
        height: "100vh",
        marginTop: "20vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom:"2rem"
      }}
    >
      <Typography variant="h4" component="h1" sx={{ m: 4 }}>
         {"<<------ New Blog ------>>"}
      </Typography>
      <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                id="title"
                label="Title"
                name="title"
                variant="outlined"
                type="text"
                value={blogInfo.title}
                autoComplete="on"
                required
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="url"
                label="Image URL"
                name="url"
                variant="outlined"
                type="url"
                autoComplete="on"
                value={blogInfo.url}
                required
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                id="content"
                label="Content"
                name="content"
                variant="outlined"
                multiline
                rows={15}
                type="text"
                autoComplete="on"
                value={blogInfo.content}
                required
                fullWidth
                onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type='submit'
                fullWidth
                rows={15}
              >
                Submit
              </Button>
            </Grid>
            
            
          </Grid>
        </form>
      
    </Box>
    </Container>
  )
}

export default NewBlog



