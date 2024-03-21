import { useState, useEffect,useContext} from "react";

import { Box ,styled,FormControl,InputBase,Button,TextareaAutosize} from "@mui/material";
//import {AddCircle as Add} from '@mui/icons-material';

import { useLocation ,useNavigate} from "react-router-dom";

import {DataContext} from '../../context/DataProvider';

import {API} from '../../service/api';

const Container=styled(Box)(({theme})=>({
     margin:'50px 80px',
     [theme.breakpoints.down('md')]:{
          margin:0
     }
}));

const Image=styled('img')({
     width:'100%',
     height:'50vh',
     objectFit:'cover'
})

const StyledFormControl=styled(FormControl)`
     margin-top:10px;
     display:flex;
     flex-direction:row;
`
const InputText=styled(InputBase)`
     flex:1;
     margin:0 30px;
     font-size:25px;
`
const InputTextField=styled(InputBase)`
     flex:1;
     margin:0 30px;
     font-size:25px;
`
const TextArea=styled(TextareaAutosize)`
     width:100%;
     margin-top:50px;
     font-size:18px;
     border:none;
     &:focus-visible{
          outline:none;
     }
`;

const initialPost={
     companyName:'',
     title:'',
     description:'',
     //picture:'',
     username:'',
     categories:'',
     createdDate: new Date()
}

const CreatePost=()=>{
     const url='https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';
     const [post,setPost]=useState(initialPost);
     //const [file,setFile]=useState('');

     const {account}=useContext(DataContext);

     const location=useLocation();
     const navigate=useNavigate();

     // const url=post.picture?post.picture:'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';

     useEffect(()=>{
          // const getImage=async()=>{
          //      if (file){
          //           const data=new FormData();
          //           data.append("name",file.name);
          //           data.append("file",file);

          //           //API CALL
          //           const response=await API.uploadFile(data);
          //           post.picture=response.data;
          //      }
          // }
          // getImage();
          post.categories=location.search?.split('=')[1] || 'All';
          post.username=account.username;
     })

     const handleChange=(e)=>{
          setPost({...post,[e.target.name]:e.target.value})
     }

     const savePost=async()=>{
          let response=await API.createPost(post);
          if(response.isSuccess){
               navigate('/');
          }
     }

     return(
          <Container>
               <Image src={url} alt='post blog'/>

               <StyledFormControl>
                    {/* <label htmlFor="fileInput">
                         <Add  fontSize='large' color='action'/>
                    </label>
                    <input 
                         type="file"
                         id="fileInput"
                         style={{display:'none'}}
                         onChange={(e)=>setFile(e.target.files[0])}
                    /> */}
                    <InputText placeholder="companyName" onChange={(e)=>handleChange(e)} name="companyName"/>
                    <InputTextField placeholder="Title" onChange={(e)=>handleChange(e)} name="title"/>
                    <Button variant='contained' onClick={()=>savePost()}>Publish</Button>

               </StyledFormControl>

               <TextArea 
                    minRows={5} 
                    placeholder="Tell your Experience..." 
                    onChange={(e)=>handleChange(e)} 
                    name="description"/>

          </Container>
     )
}

export default CreatePost;