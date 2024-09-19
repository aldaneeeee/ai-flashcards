'use client';

import { useUser } from "@clerk/nextjs";
import { Container, Paper, TextField, Typography, Box } from "@mui/material";
import { Button } from "bootstrap";
import { writeBatch, doc, collection, getDoc } from "firebase/firestore"; // Added missing imports
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Generate() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [flashcards, setFlashcards] = useState([]);
    const [flipped, setFlipped] = useState({});
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [open, setOpen] = useState(false); // Corrected the default state
    const router = useRouter(); // Corrected invocation

    const handleSubmit = async () => {
        fetch('/api/generate', { // Added missing '/'
            method: 'POST',
            body: JSON.stringify({ text }), // Properly format the request body
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .then((data) => setFlashcards(data)) // Fixed assignment
        .catch((error) => console.error('Error:', error));
    };

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const saveFlashcards = async () => {
        if (!name) {
            alert('Please enter a name');
            return;
        }
        const batch = writeBatch(db);
        const userDocRef = doc(collection(db, 'users'), user.id);
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
            const collections = docSnap.data().flashcards || [];
            if (collections.find((f) => f.name === name)) {
                alert('Flashcard collection with the same name already exists');
                return;
            } else {
                collections.push({ name });
                batch.set(userDocRef, { flashcards: collections });
            }
            const colRef = collection(userDocRef, name);
            flashcards.forEach((flashcard) => {
                const cardDocRef = doc(colRef);
                batch.set(cardDocRef, flashcard);
            });
            await batch.commit();
            handleClose();
            router.push('/flashcards');
        }
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4, mb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant='h4'>Generate Flashcards</Typography>
                <Paper sx={{ p: 4, width: '100%' }}>
                    <TextField
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        label="Enter Text"
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{ mb: 2 }}
                    />
                    <Button
                    variant = "contained"
                    color = "primary"
                    onClick={handleSubmit}
                    fullWidth
                    >
                        {' '}
                        Submit
                    </Button>
                </Paper>
            </Box>

            {flashcards.length}
        </Container>
    );
}
