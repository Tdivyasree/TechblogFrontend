import { Box, styled, Typography, Link } from '@mui/material';
import { Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                Have a question, suggestion, or interview experience to share? We'd love to hear from you! Get in touch with the TechTailsHub team through
                    <Link href="https://www.instagram.com/TechTailsHub/" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    or send me an Email 
                    <Link href="mailto:techtailshub@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
                <Text variant='h5'>We're committed to providing you with the best experience on TechTailsHub, and your feedback is invaluable to us.
                 Whether you have a question about our content, want to share your interview experience, or simply want to say hello, don't hesitate to 
                 reach out. We're here to help!
                 <br/></Text>
                 <Typography variant='h4'><br/>Thank you for being part of the TechTailsHub community. We look forward to hearing from you!</Typography>
            </Wrapper>
        </Box>
    );
}

export default Contact;