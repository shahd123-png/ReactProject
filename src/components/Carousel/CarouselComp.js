import React,{ useState, useEffect } from 'react';
import CardCom from './CardComp';
import { Box ,Typography} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CarouselComp.css'

const CarouselComp = () => {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=fantasy&maxResults=16&key=AIzaSyCF6ZG48YwmxCuLB6PgGHP9yeevssOKxrU');
        const data = await response.json();
        if (data.items.length > 0) {
          setBooks(data.items);
        } else {
          setBooks([]);
        }
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Box >     
     <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{
        clickable: true
      }}
        spaceBetween={15}
        slidesPerView={4}>
       {books.map((book, index) => (
          <SwiperSlide key={index}>
            <CardCom book={book} />
          </SwiperSlide>
        ))}

       
      </Swiper>
    </Box>

  )
}


export default CarouselComp
