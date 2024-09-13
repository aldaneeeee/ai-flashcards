import { SignIn,SignUp } from "@clerk/nextjs";
import { AppBar, Box, Container, Toolbar, Typography,Button,Link } from "@mui/material";

export default function SignInPage(){
   return <Container  maxWidth= "100vw">
    <AppBar position="static" sx= {{background: "#3f51b5"}}>
        <Toolbar>
            <Typography
             variant="h6"
              sx={{ 
                flexGrow : 1,
            }}
            >
                BrainDeck
            </Typography>
            <Button color = "inherit">
                <Link href="/sign-in" passHref>
                 Login
                </Link>
            </Button>
            <Button color = "inherit">
                <Link href="/sign-up" passHref>
                 Sign up
                </Link>
            </Button>
        </Toolbar>
    </AppBar>

    <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    >
        <Typography variant="h4">
        Sign In
        </Typography>
        <SignIn/>

    </Box>
   </Container>


}