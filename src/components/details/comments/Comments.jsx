import { useState,useContext,useEffect } from "react";

import { DataContext } from "../../../context/DataProvider";
import { API } from "../../../service/api";

import { Box,TextareaAutosize ,styled,Button} from "@mui/material";

//components
import Comment from "./Comment";

const Image=styled('img')({
     width:'8%',
     height:'15%',
     borderRadius:"50%",
})

const Container=styled(Box)`
     margin-top:100px;
     display:flex;
`
const StyledTextArea=styled(TextareaAutosize)`
     height:100px;
     width:100%;
     margin:0 20px;
`
const initialValues={
     name:'',
     postId:'',
     comments:'',
     date:new Date()
}

export const Comments=({post})=>{

     const url="https://cdn0.iconfinder.com/data/icons/business-blue-series-set-1-1/128/a-21-1024.png";

     const [comment,setComment]=useState(initialValues);
     const [comments,setComments]=useState([]);
     const [toggle,setToggle]=useState(false);

     const {account}=useContext(DataContext);

     useEffect(()=>{
          const getData=async()=>{
               const response=await API.getAllComments(post._id);
               if (response.isSuccess){
                    setComments(response.data);
               }
          }
          getData();
     },[post,toggle])

     const handleChange=(e)=>{
          setComment({
               ...comment,
               name:account.username,
               postId:post._id,
               comments:e.target.value
          })
     }

     const addComment=async(e)=>{
          let response=await API.newComment(comment);
          if(response.isSuccess){
               setComment(initialValues);
          }
          setToggle(prevState=>!prevState);
     }

     return (
          <Box>
               <Container>
                    <Image src={url} alt="dp"/>
                    <StyledTextArea 
                    minRows={5} 
                    placeholder="what's on your mind?"
                    value={comment.comments}
                    onChange={(e)=>handleChange(e)}
                    />
                    <Button variant="contained" 
                    color="primary" 
                    size="medium" 
                    style={{height:40}}
                    onClick={(e)=>addComment(e)}>
                    Post</Button>
               </Container>
               <Box>
                    {
                         comments && comments.length>0 && comments.map(comment=>(
                              <Comment comment={comment} setToggle={setToggle}/>
                         ))
                    }
               </Box>
          </Box>
     )
}

export default Comments;