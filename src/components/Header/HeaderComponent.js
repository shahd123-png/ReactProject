import React, { useState, useEffect, Fragment } from 'react'
import bookLogo from '../Images/book.png'
import axios from 'axios'
import style from '../Header/Header.module.css'
import { Link, Typography, AppBar, CssBaseline, Toolbar, Box, Button, Grid } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

const HeaderComponent = ({onSearchResult}) => {
    const [term, setTerm] = useState("");
    const [result, setResult] = useState([]);
  
    useEffect(() => {
      const search = async () => {
        try {
          const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
              q: term,
            },
          });
  
          setResult(response.data.items);
          onSearchResult(response.data.items);
        } 
        catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      const debounceSearch = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1200);
  
      return () => {
        clearTimeout(debounceSearch);
      };
    }, [term, onSearchResult]);
  

    const buttonRequest = {
        display: 'inline-flex',
        padding: '12.017px 32.044px',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'none'
    }

    const seconedHeader = {
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: '0.5',
        paddingRight: '15px'

    }

    return (
        <Fragment>
            <CssBaseline />
            <AppBar className={style.header} sx={{ bgcolor: "white", position: 'relative', alignItems: 'stretch' }}>
                <Toolbar>
                    <Grid container spacing={1}>

                        <Box className={style.textHeader}>
                            <Typography className={style.headingHeader} variant="h5" sx={{ color: 'black' }}>
                                B-W <img className={style.bookImgHeader} src={bookLogo} alt="zeft" />
                                rld
                            </Typography>
                            <div className={style.verticalLine}></div>
                            <Typography variant='body2' className={style.paragraphHeader}>We love<br />books</Typography>
                        </Box>


                        <Box className={style.searchBox}>
                        <input  className={style.searchBar}
                          type="search"
                          placeholder="Type any book here"
                          onChange={(e) => setTerm(e.target.value)}
                          value={term} />
                      </Box>

                        <Box class={style.links}>
                            <Link href="../AppPage/App.js" className={style.linksA} color="neutral" underline="hover" variant="plain" >Privacy policy </Link>
                            <Link href="../AppPage/App.js" className={style.linksA} color="neutral" underline="hover" variant="plain" >Warranty</Link>
                            <Link href="../AppPage/App.js" className={style.linksA} color="neutral" underline="hover" variant="plain" >Shipping </Link>
                            <Link href="../AppPage/App.js" className={style.linksA} color="neutral" underline="hover" variant="plain" >Return </Link>
                        </Box>


                        <Box className={style.icons}>

                            <Box class={style.parentIconShopping}>
                                <span className={style.spanNumber} id="cart-count">0</span>
                                <ShoppingCartIcon color="primary" />
                            </Box>

                            <Box className={style.verticalLineIcon}></Box>


                            <Box className={style.parentFav}>
                                <span className={style.spanNumber} id="fav-count">0</span>
                                <IconButton sx={{padding:'0'}}> <FavoriteIcon color="primary" /></IconButton>
                               
                            </Box>
                            <Box className={style.verticalLineIcon}></Box>

                            <Box className={style.parentUser}>
                                <PersonIcon color="primary" />
                            </Box>
                        </Box>
                    </Grid>

                </Toolbar>
            </AppBar>

            <AppBar sx={{ position: 'relative', bgcolor: "white", borderBottom: '1px solid rgba(147, 125, 194, 255)', boxShadow: 'none' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0.5rem' }}>

                    <Box className={style.secondLinks}>
                        <Link className={style.linksSecondLine} underline="hover" variant="plain" href="../AppPage/App.js">The must read</Link>
                        <Link className={style.linksSecondLine} underline="hover" variant="plain" href="../AppPage/App.js">News</Link>
                        <Link className={style.linksSecondLine} underline="hover" variant="plain" href="../AppPage/App.js">Promotion of the mount </Link>
                        <Link className={style.linksSecondLine} underline="hover" variant="plain" href="../AppPage/App.js">Plublishs</Link>
                        <Link className={style.linksSecondLine} underline="hover" variant="plain" href="../AppPage/App.js">Subscribe to the newsletter</Link>
                    </Box>


                    <Box style={seconedHeader}>
                        <div className={style.phoneCall}>
                            <LocalPhoneIcon color='primary' />
                            <Typography sx={{ color: 'black' }}>+445 87 999 000</Typography>
                        </div>

                        <Button sx={buttonRequest} variant='outlined' color='primary'>Request a call</Button>

                    </Box>
                </Toolbar>

            </AppBar>

        </Fragment>
    )
}

export default HeaderComponent
