import { Box, Grid } from '@mui/material'
import React from 'react'
import BlogCard from '../component/BlogCard'
import {ReadBlog} from "../helpers/firebase"


const Main = () => {

  const {blogList} = ReadBlog()
  
 

  return (
    <Box 
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
      
      {
        blogList?.map((item)=>(
          <BlogCard key={item.id} item={item}  />

        ))
      }
      
      </Box>
  )
}

export default Main