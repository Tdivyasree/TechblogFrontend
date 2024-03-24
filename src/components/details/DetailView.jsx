
import {useState,useEffect,useContext} from 'react';

import {Box,Typography,styled} from '@mui/material';
import {Edit,Delete} from '@mui/icons-material';

import { useParams,Link ,useNavigate} from 'react-router-dom';

import { API } from '../../service/api';
import {DataContext} from '../../context/DataProvider';

//components
import Comments from './comments/Comments';

const Container=styled(Box)(({theme})=>({
     margin:'50px 80px',
     [theme.breakpoints.down('md')]:{
          margin:0
     }
}));

const Name=styled(Box)`
     text-align: center;
     border: 1px solid #ccc;
     padding:25px;
     font-size:100px;
     background-color:#F5EDE3;
     //width:100%;
     height:150px;
`;

const Heading=styled(Typography)`
     font-size:38px;
     font-weight:600;
     text-align:center;
     margin:50px 0 10px 0;
     word-break:break-word;
`
const EditIcon=styled(Edit)`
     margin:5px;
     padding:5px;
     border:1px solid #878787;
     border-radius:10px;
`
const DeleteIcon=styled(Delete)`
     margin:5px;
     padding:5px;
     border:1px solid #878787;
     border-radius:10px;
`
const Author=styled(Box)`
     color:#878787;
     margin:20px 0;
     display:flex;

`
const Description=styled(Typography)`
     word-break:break-word;
`
const DetailView=()=>{

     const [post,setPost]=useState({});

     const {id}=useParams();
     const {account}=useContext(DataContext);

     const navigate=useNavigate();

     // const url='https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';

     useEffect(()=>{
          const fetchData=async()=>{
               let response=await API.getPostById(id);
               if(response.isSuccess){
                    setPost(response.data);
               }
          }
          fetchData();
     },[])

     const deleteBlog=async()=>{
          let response=await API.deletePost(post._id);
          if(response.isSuccess){
               navigate('/');
          }
     }

     return(
          
          // {/* <Name>
          //      {post.companyName}
          // </Name> */}
          // {/* <Box style={{float:'right'}}>{
          //      account.username===post.username &&
          //      <>
          //           <EditIcon color="primary"/>
          //           <DeleteIcon color="error"/>
          //      </>
          // }
          // </Box> */}

          <Container>
               <Name>
                    {post.companyName}
               </Name>

               <Box style={{float:'right'}}>{
               account.username===post.username &&
               <>
                    <Link to={`/update/${post._id}`}>
                         <EditIcon color="primary"/>
                    </Link>
                    <DeleteIcon onClick={()=>deleteBlog()} color="error"/>
               </>
               }
               </Box>
               <Heading>{post.title}</Heading>

               <Author>
                    <Typography>Author:<Box component="span" style={{fontWeight:600}}>{post.username}</Box></Typography>
                    <Typography style={{marginLeft:"auto"}}>{new Date(post.createdDate).toDateString()}</Typography>
               </Author>

               <pre><Description>{post.description}</Description></pre>
               <Comments post={post}/>
          </Container>
          
     )
}

export default DetailView;