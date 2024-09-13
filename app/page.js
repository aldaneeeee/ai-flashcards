'user client'
import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import Head from "next/head";
import { Button, Toolbar, Typography, Container,AppBar,Box,Grid} from "@mui/material";


export default function Home() {
  return (
        <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >

        <Head>
            <title>BrainDeck</title>
            <meta name = "description" content = "Create flashcards from your text"/>
        </Head>

        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{flexGrow: 1}}>
                    BrainDeck</Typography>
                <SignedOut>
                    <Button color="inherit" href="/sign-in">
                    {' '}
                    Login</Button>
                    <Button color="inherit" href="/sign-up">
                    {' '}
                    Sign up</Button>
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
            </Toolbar>
        </AppBar>

     
        <Box sx = {{
            textAlign: 'center',
            my : 4
        }}>
            <Typography variant="h2">Welcome to BrainDeck</Typography>
            <Typography variant="h5">
                {' '}
                The easiest way to make flashcards from your text
            </Typography>
            <Button variant="contained" color='primary' sx = {{mt:2}}>Get Started</Button>
        </Box>
        <Box sx ={{my: 6}}>
           <Typography variant = "h2" components="h2">
            Features
           </Typography>
           <Grid container spacing = {4} sx={{mt: 4}}>
            <Grid item xs = {12} md={4}>
               <Typography variant="h6">Easy Text Input</Typography>
               <Typography>Simply input your text and let our software do the rest. Creating flashcards has never been easier.</Typography>
            </Grid>
            {/* -------------- */}
            <Grid item xs = {12} md={4}>
               <Typography variant="h6">Smart flashcards</Typography>
               <Typography>Our Ai intelligently breaks down our text into concise flashcards, perfect for studying</Typography>
            </Grid>
            {/* --------------- */}
            <Grid item xs = {12} md={4}>
               <Typography variant="h6">Accessible Anywhere </Typography>
               <Typography>Access your flashcards from any device, at any time. Study on the go with ease.</Typography>
            </Grid>
           </Grid>
        </Box>

        {/* PRICING */}
        <Box sx={{ my: 6, textAlign: 'center' }}>
  <Typography variant="h4">Pricing</Typography>
  <Grid container spacing={4} sx={{ mt: 4 }}>
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: 2,
          textAlign: 'center', // Center text within the box
          boxShadow: 2, // Optional: Add shadow for a more pronounced look
        }}
      >
        <Typography variant="h5" gutterBottom>
          Basic
        </Typography>
        <Typography variant="h6" gutterBottom>
          $5 / month
        </Typography>
        <Typography gutterBottom>
          Access to basic features & limited storage.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Choose Basic
        </Button>
      </Box>
    </Grid>
    {/* -------------- */}
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: 2,
          textAlign: 'center', // Center text within the box
          boxShadow: 2, // Optional: Add shadow for a more pronounced look
        }}
      >
        <Typography variant="h5" gutterBottom>
          Standard
        </Typography>
        <Typography variant="h6" gutterBottom>
          $10 / month
        </Typography>
        <Typography>
          Unlimited flashcard & storage, priority support.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Choose Standard
        </Button>
      </Box>
    </Grid>
  </Grid>
</Box>
 
    </Container>
  )


}
