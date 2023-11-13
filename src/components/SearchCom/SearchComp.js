import { Box, Typography } from '@mui/material';

const SearchComp = ({ results }) => {
  const BoxSearchResult =
  {
    display: 'grid',
    padding: '1rem 5rem',
    gridTemplateColumns: '1fr 1fr',
    justifyItems: 'start',
    gap: '5rem'
  }

  const SingltSearchResultDiv = {
    display : 'flex',
    gap: '1rem'
  }

  const BoxText = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }

  const imgSize = {
    height: '22rem',
    width: '15rem'
  }
  return (
    <Box style={BoxSearchResult}>
      {results.map((result, index) => (

        <div key={index} style={SingltSearchResultDiv} >
          <img style={imgSize} src={result.volumeInfo.imageLinks.thumbnail} alt={result.volumeInfo.title} />
          <Box style ={BoxText}>
            <Typography variant="h4">{result.volumeInfo.title}</Typography>
            <Typography>Author : {result.volumeInfo.authors ? result.volumeInfo.authors[0] : 'Author not found'}</Typography>

            <Typography>Publisher: {result.volumeInfo.publisher || 'Publisher not found'}</Typography>
          </Box>
        </div>
      ))
      }
    </Box>
  )
}

export default SearchComp 