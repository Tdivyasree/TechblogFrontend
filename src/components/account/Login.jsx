import { useState,useContext } from 'react';

import { Box,TextField,Button,styled,Typography} from '@mui/material';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

import { useNavigate} from 'react-router-dom';

//import isAuthenticated from '../../App.js';

const BoxComponent=styled(Box)
`    width:480px;
     margin:auto;
     box-shadow:5px 2px 5px 2px rgb(0 0 0/0.6);
`
const Image=styled('img')({
     width: '350px',
     height:'210px',
     margin:'auto',
     display:'flex',
     padding:'1px 0 0',
});

const LoginButton=styled(Button)`
     text-transform:none;
     background:#fB641F;
     color:#fff;
     height:48px;
     border-radius:2px;
`

const SignupButton=styled(Button)`
     text-transform:none;
     background:#fff;
     color:#2874f0;
     height:48px;
     border-radius:2px;
     box-shadow:0 2px 4px 0 rgb(0 0 0/20%);
`
const Error=styled(Typography)`
     font-size:10px;
     color:#ff6161;
     line-height:0;
     margin-top:10px;
     font-weight:600;     
`

const Text=styled(Typography)`
     color:#878787;
     font-size:16px;`

const Wrapper=styled(Box)
`    padding:25px 35px;
     display:flex;
     flex:1;
     flex-direction:column;
     &>div,&>button,&>p{
          margin-top:20px;
     }
`
const loginInitalValues={
     username:'',
     password:''
}

const signupInitialvalues={
     name:'',
     username:'',
     password:''
}

const Login=({isUserAuthenticated})=>{
     const imageURL="https://1.bp.blogspot.com/-1DEo8K0a_ZE/XW4VHVH4naI/AAAAAAAAAH8/J0Um6dqltlsqJFQyRKgDXNaTOeCtNvxKQCLcBGAs/s1600/blogger-logo.jpg";
     
     const [account,setAccount]=useState('login');
     const [signup,setSignup]=useState(signupInitialvalues);
     const [login,setLogin]=useState(loginInitalValues);
     const [error,setError]=useState('');

     const { setaccount}=useContext(DataContext);
     const navigate=useNavigate();

     const toggleSignup=()=>{
          account==='signup'?setAccount('login'):setAccount('signup');
     }

     const onInputChange=(e)=>{
          setSignup({...signup,[e.target.name]:e.target.value});
     }

        
     const signupUser=async () =>{
          let response=await API.userSignup(signup);
          if (response.isSuccess){
               setError('');
               setSignup(signupInitialvalues);
               setAccount('login')
          }else{
               setError('something went wrong!Please try again later')
          }
     }

     const onValueChange=(e)=>{
          setLogin({...login,[e.target.name]:e.target.value})
     }

     const loginUser=async()=>{
          let response=await API.userLogin(login);
          if (response.isSuccess){
               setError('');

               sessionStorage.setItem('accessToken',`Bearer ${response.data.accessToken}`);
               sessionStorage.setItem('resfreshToken',`Bearer ${response.data.refreshToken}`);

               setaccount({username:response.data.username,name:response.data.name});

               isUserAuthenticated(true);

               navigate('/');
               
          }else{
               setError('Something went wrong!Please try again later');
          }

     }

     return(
          <BoxComponent>
               <Box>
                    <Image src={imageURL} alt="logo" />
                    {
                     account==='login'?
                         <Wrapper>
                              <TextField variant="standard" value={login.username} onChange={(e)=>onValueChange(e)} name='username' label="Enter username"/>
                              <TextField variant="standard" value={login.password} onChange={(e)=>onValueChange(e)} name='password' label="Enter password"/>

                              {error && <Error>{error}</Error>}

                              <LoginButton variant="contained" onClick={()=>loginUser()}>Login</LoginButton>
                              <Text style={{textAlign:'center'}}>OR</Text>
                              <SignupButton onClick={()=>toggleSignup()}>Create an account</SignupButton>
                         </Wrapper>
                     :
                         <Wrapper>
                              <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="name" label="Enter Name"/>
                              <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="username" label="Enter username"/>
                              <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="password" label="Enter password"/>

                              { error && <Error>{error}</Error> }

                              <SignupButton onClick={()=>signupUser()}>Signup</SignupButton>
                              <Text style={{textAlign:'center'}}>OR</Text>
                              <LoginButton onClick={()=>toggleSignup()}variant="contained">Already have an account?</LoginButton>
                         </Wrapper>
                    }
               </Box>
          </BoxComponent>
     )
}
export default Login;