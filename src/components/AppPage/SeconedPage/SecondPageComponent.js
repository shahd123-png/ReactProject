import React, { Fragment, useState, useEffect } from 'react'
import { Typography, Box, Button, Grid } from '@mui/material';
import Book1 from '../Images/SecBook1.jpeg'
import Book2 from '../Images/SecBook2.jpeg'
import Book3 from '../Images/SecBook3.jpeg'
import Book4 from '../Images/SecBook4.jpeg'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';


const BigDivSeconedPage = styled.div`
display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    padding: 4rem 2rem;
`

const StyledImg = styled.img`
width: 71px;
height: 116px;`

const StyledBox = styled.div`
display: flex;
justify-content: center;
width: 148px;
height: 148px;
border: 0.5px solid rgba(147, 125, 194, 1);
align-items: center;
border-radius: 2px;
`
const ImagesFourDivs = styled.div`
display: flex;
flex-direction: column;
gap: 21px;
`


const StyledBoxBigImage = styled.div`
width: 412px;
height: 653px;
`

const StyledBoxText = styled.div`
display : flex;
flex-direction : column;
gap : 2rem;

`

const ImageAndTestDiv = styled.div`
display: flex;
align-items: flex-start;
gap: 4rem;
`
const ButtonDiv = styled.div`
display: flex;
    justify-content: space-around;
    align-items: stretch;
    gap: 2rem;
`

const buttonStyle = {
    textTransform: 'none',
    fontWeight: 'normal',
    flexGrow: 1,
    borderRadius: '0',
    fontSize: '16px'


};
const buttonRequest = {
    display: 'inline-flex',
    padding: '12.017px 32.044px',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'none',
    flexGrow: 1,
    borderRadius: '0',
    fontSize: '16px'
}

const OtherDetailsAboutApi = styled.div`
border-top: 1px solid rgba(147, 125, 194, 0.6);
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 0;
`

const FirstSectionOfInfo = styled.div`
display : flex;
flex-direction : column;
gap: 3rem;
`
const SecondPageComponent = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState(null);

    const fetchBookDetails = async (id) => {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching book details:', error);
            return null;
        }
    };


    useEffect(() => {
        fetchBookDetails(bookId)
            .then((data) => {
                if (data) {
                    setBook(data.volumeInfo);
                }
                else {
                    setBook(null);
                    console.log(data.items.volumeInfo.title);


                }
            });
    }, [bookId]);


    const imgtest = book?.imageLinks?.smallThumbnail ?? Book4;
    const title = book?.title ?? 'Not Found';
    const description = book?.description ??'Not Found';
    const author = book?.authors?.[0] ?? 'Unknown Author';
    const publisher = book?.publisher?? 'Not Found';
    const language = book?.language ?? 'Not Found';
    const printlength = book?.printlength ?? 'Not Found';
    const publicationdate  = book?.publishedDate ?? 'Not Found';
    const categories = book?.categories?.[0] ?? 'Not Found';
    const contentversion= book?.contentVersion ?? 'Not Found';

    const imageSources = [Book1, Book2, Book3, Book4];

    return (
        <BigDivSeconedPage>
            <ImagesFourDivs>
                {imageSources.map((src, index) => (
                    <StyledBox key={index}>
                        <StyledImg src={src} alt={`Book ${index + 1}`} />
                    </StyledBox>
                ))}
            </ImagesFourDivs>

            <ImageAndTestDiv>
                <StyledBoxBigImage>
                    <img src={imgtest} alt='Big' style={{ width: '412px', height: '653px', borderRadius: '10px' }} />
                </StyledBoxBigImage>

                <StyledBoxText>
                    <Typography variant='h3'>{title}</Typography>
                    <Typography variant='h5'>{author}</Typography>
                    <Typography variant='h4'>12.40$</Typography>

                    <Typography variant='subtitle1' dangerouslySetInnerHTML={{ __html: description }}></Typography>
                    <ButtonDiv>
                        <Button style={buttonStyle} variant="contained">Add to cart</Button>
                        <Button sx={buttonRequest} variant='outlined' color='primary'>Favorite</Button>

                    </ButtonDiv>

                    <OtherDetailsAboutApi>
                        <FirstSectionOfInfo>
                            <Typography color={'rgba(198, 137, 198, 0.70)'} variant='h5'>Publisher : {publisher} </Typography>
                            <Typography color={'rgba(198, 137, 198, 0.70)'} variant='h5'>Language : {language}</Typography>
                            <Typography color={'rgba(198, 137, 198, 0.70)'} variant='h5'>Print length : {printlength}</Typography>
                        </FirstSectionOfInfo>

                        <FirstSectionOfInfo>
                            <Typography color={'rgba(198, 137, 198, 0.70)'} variant='h5'>Publication date : {publicationdate}</Typography>
                            <Typography color={'rgba(198, 137, 198, 0.70)'} variant='h5'>Categories : {categories}</Typography>
                            <Typography color={'rgba(198, 137, 198, 0.70)'} variant='h5'>Content Version : {contentversion}</Typography>
                        </FirstSectionOfInfo>

                    </OtherDetailsAboutApi>
                </StyledBoxText>
            </ImageAndTestDiv>

        </BigDivSeconedPage>
    )

}

export default SecondPageComponent
