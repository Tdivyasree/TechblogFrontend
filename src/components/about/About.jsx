//const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

// https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg

// https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80

// https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80

// https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

//const url = 'https://static.thenounproject.com/png/12017-200.png'

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
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

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Welcome to TechTailsHub!</Typography>
                <br></br>
                <Text variant='h4'>We're your one-stop destination for tech interview experiences, tips, and career advice.</Text>
                <br></br>
                <br></br>
                <Typography variant='h4'>What we offer?
                <Text variant="h5"><br/>Interview Experiences:Get firsthand insights into tech interviews at top companies.<br />
                    Tech Tips:Stay updated with the latest trends and tutorials across various tech fields.<br/>
                    Career Guidance:Navigate your tech career with expert advice and resources.
                    {/* <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box> */}
                </Text></Typography>
                <br/>
                <Typography variant='h4'>Why Choose Us?
                <Text variant="h5">
                    <br/>We welcome contributions from everyone, ensuring a rich and inclusive experience.<br/>
                    Quality content:Trustworthy, reliable, and expertly curated content.
                    {/* <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>   */}
                        {/* or send me an Email 
                        <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>. */}
                </Text></Typography>
                <br/>
                <Typography variant='h4'>Join Us Today!
                <Text variant='h5'><br/>Empower your tech journey with TechTailsHub. Explore, engage, and succeed with us!</Text>
                </Typography>
            </Wrapper>
        </Box>
    )
}

export default About;
