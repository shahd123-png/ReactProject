import './App.css';
import React, { useState, Fragment } from 'react';
import { Typography } from '@mui/material';
import SearchComp from '../SearchCom/SearchComp'
import Header from '../Header/HeaderComponent';
import First from '../FirstSectionPageOne/FirstSection';
import Corasel from '../Carousel/CarouselComp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Fav from '../Fav/Fav'
import SeconedPage from '../SeconedPage/SecondPageComponent'
import CardComp from '../Carousel/CardComp';

function App() {
  const routes = createBrowserRouter([
    { path: '/', element: <First /> },
    { path: '/Seconed-Page/:bookId', element: <SeconedPage /> },
  ]);

  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResult = (results) => {
    setSearchResults(results);
  };

  const SearchResultText = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 1rem'
  }

  return (

    <Fragment>
        <Header onSearchResult={handleSearchResult} />
      {searchResults.length > 0 ? (
        <Fragment>
          <Typography variant="h3" style={SearchResultText}>Search Results</Typography>
          <SearchComp results={searchResults} />
        </Fragment>) :


        (<Fragment>
          <RouterProvider router={routes} />
          <Typography sx={{ mx: '3rem', marginTop: '2rem' }} variant="h2">
            Selected For You</Typography>
          <Corasel />
          <Typography sx={{ mx: '3rem', marginTop: '2rem' }} variant="h2">
            You must buy it now
          </Typography>
          <Corasel />

        </Fragment>
        )}
    </Fragment>



  );
}

export default App;
