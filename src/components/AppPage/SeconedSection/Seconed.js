import React from 'react'
import { Container, Typography, Box, Button, Grid,Link } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import style from './Seconed.module.css'


const Seconed = ({ borderLeftStyle }) => {
    const iconSize = {
        width: '3rem',
        height: '3rem'
    }
    return (
        <Box className={style.icons3Details}>

            <Box className = {style.iconAndText}>
                <LocalShippingIcon style={iconSize} />
                <Typography variant='h4'>Free shiping over 50$</Typography>
            </Box>

            <div style={borderLeftStyle} ></div>

            <Box className={style.iconAndText}>
                <StarIcon style={iconSize} />
                <Typography variant='h4'>Save with loyalty points</Typography>
            </Box>

            <div style={borderLeftStyle} ></div>

            <Box className={style.iconAndText}>
                <ImportContactsIcon style={iconSize} />
                <Link underline="always" variant="plain" sx={{color: 'black'}} > <Typography variant='h4'>Read a few pages</Typography></Link>
                
            </Box>

        </Box>

    )
}

export default Seconed
