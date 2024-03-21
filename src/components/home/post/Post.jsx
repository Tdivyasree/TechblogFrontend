
import { Box, Typography ,styled} from "@mui/material";

import { addElipsis } from "../../../utils/common-utils";

const Container=styled(Box)`
     border:1px solid #d3cede;
     border-radius:10px;
     margin:10px;
     height:350px;
     display:flex;
     align-items:center;
     flex-direction:column;
     & >img,& >p{
          padding:5px 5px 5px 5px;
     }
`;

const Name=styled(Box)`
     text-align: center;
     border: 1px solid #ccc;
     padding:20px;
     font-size:50px;
     background-color:#F5EDE3;
     width:85.9%;
     border-radius:10px;
     height:80px;
`;

const Text=styled(Typography)`
     color:#878787;
     font-size:12px;
`;

const Heading=styled(Typography)`
     font-size:18px;
     font-weight:600;
`;

const Details=styled(Typography)`
     font-size:14px;
     word-break:break-word;
`
// const Image=styled('img')({
//      width:'100%'
// })

const Post=({post})=>{
     return (
          <Container>
               {/* <Image src={post.picture} alt="blog"/> */}
               <Name>{post.companyName}</Name>
               <Text>{post.categories}</Text>
               <Heading>{addElipsis(post.title,20)}</Heading>
               <Text>{post.username}</Text>
               <Details>{addElipsis(post.description,200)}</Details>
          </Container>
     )
}

export default Post;