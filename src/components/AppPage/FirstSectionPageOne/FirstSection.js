import React, { useState, useEffect } from 'react'

import { Container, Typography, Box, Button, Grid } from '@mui/material';
import bigBook from '../Images/noc-ognia-book.jpg'
import Seconed from '../SeconedSection/Seconed'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const FirstSection = () => {

    const borderLeftOne = {
        borderLeft: '2px solid rgba(147, 125, 194, 255)',
        height: '70.097px',
        borderRadius: '10px',
        width: '1.001px'
    }

    const updatedBorderLeftStyle = { ...borderLeftOne, height: '80.111px' };

    const borderLeftStyle = {
        borderLeft: '2px solid rgba(227, 221, 239, 255)',
        height: '70.097px',
        width: '1.001px',
        borderRadius: '10px'
    };

    const buttonStyle = {
        textTransform: 'none',
        fontWeight: 'normal'
    };

    const bigBookStyle = {
        width: '314.436px',
        height: '444.617px',
        flexShrink: 0
    }

    const text = {
        textTransform: 'uppercase',
        lineHeight: '28.039px',
        color: 'rgba(32, 31, 31, 0.8)',
        letterSpacing: '1.8px',
        paddingTop: '2rem'

    }

    const TextParStyle = {
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }


    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        const fetchRandomBook = async () => {
            try {
                const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=fantasy&key=AIzaSyCF6ZG48YwmxCuLB6PgGHP9yeevssOKxrU');
                const data = await response.json();

                if (data.items.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.items.length);
                    setBookData(data.items[7]);
                } else {
                    setBookData([]);
                }
            } catch (error) {
                console.error('Error fetching book data:', error);
            }
        };

        fetchRandomBook();
    }, []);


    return (

        <Container sx={{ mt: '3rem' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '2rem' }}>
                <Box sx={{ display: 'flex', flexDirection: ' column', justifyContent: 'space-around', paddingTop: '2rem' }}>
                    <div style={borderLeftOne}></div>
                    <div style={borderLeftStyle}></div>
                    <div style={borderLeftStyle}></div>
                    <div style={borderLeftStyle}></div>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start', paddingTop: '1.5rem' }} >

                    <Button variant='outlined' color='customColor'
                        sx={{
                            padding: '10.014px', display: 'inline-flex',
                            justifyContent: 'center', alignItems: 'center'
                        }} style={buttonStyle}>Author of august</Button>

                    <Typography variant='h1'>{bookData.volumeInfo ? bookData.volumeInfo.title || 'not found' : 'not found'} </Typography>
                    <Typography variant='subtitle1'
                        sx={TextParStyle}>{bookData.volumeInfo ? bookData.volumeInfo.description || 'not found' : 'not found'}</Typography>


                    <Link to={`/Seconed-Page/${bookData.id}`}>
                        <Button variant='contained' style={buttonStyle} sx={{
                            padding: '12.017px 32.044px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '2.003px'
                        }}>View his books</Button>
                    </Link>
                </Box>

                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Typography style={text}> Autographed books + 30% discount</Typography>
                    </Box>

                    <Box style={bigBookStyle}>
                        <img src={bookData.volumeInfo && bookData.volumeInfo.imageLinks ? bookData.volumeInfo.imageLinks.smallThumbnail || 'not found' : bigBook} alt='Big Book' style={bigBookStyle} />
                    </Box>
                </Box>


            </Box>
            <Typography variant='h5' sx={{ display: 'flex', justifyContent: 'flex-end' }}>*within the stock limit</Typography>

            <Seconed borderLeftStyle={updatedBorderLeftStyle} />
        </Container>

    )
}

export default FirstSection
