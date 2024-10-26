import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Container, Card, CardActionArea, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
//images for the projects
import c from "../resources/images/c.png" 
import j from "../resources/images/java.png"
import p from "../resources/images/p.png"

// Cards as array elements
//each card elemnt si part of array, like array's element.
const cards = [
  {
    content:
    (<Box>
      <React.Fragment>
        <CardContent>
          <CardMedia component="img" height="140" src={c} alt="C Project" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Project
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is my Project on data structures, done using concepts of C.
            </Typography>
          </CardContent>
        </CardContent>
      </React.Fragment>
    </Box>
    ),
    link:""
  },
  {
    content:
    (<Box>
      <React.Fragment>
        <CardContent>
          <CardMedia component="img" height="140" src={j} alt="Java Project" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Project with Java
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is my Project done using concepts of Java.
            </Typography>
          </CardContent>
        </CardContent>
      </React.Fragment>
    </Box>
    ),
    link:""
  },
  {
    content: 
    (  <Box>
        <React.Fragment>
          <CardContent>
            <CardMedia  component="img" height="140" src={p} alt="python" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">Python Codes</Typography>
              <Typography variant="body2" color="text.secondary">The porject might look childish but i'm still learning</Typography>
            </CardContent>
          </CardContent>
        </React.Fragment>
      </Box>
    ),
    link: "https://colab.research.google.com/drive/1-3yxzuxli7dBsl0pq55a_aC-3WQOD161?usp=sharing#scrollTo=T6bHpmllrxDT"
  }
];

export default function FolderList() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        flexDirection: 'row',
        borderRadius: '20px',
        margin: '20px',
        backgroundColor: '#ffffffba',
        width: '350px',
        padding: '16px',
      }}
    >
      {/* Left Arrow Button */}
      <IconButton onClick={handlePrev}>
        < NavigateBeforeIcon/>
      </IconButton>

      {/* Clickable Card with Link */}
      <Card variant="outlined" sx={{ width: '300px' }}>
        <CardActionArea href={cards[currentCardIndex].link} target="_blank">
          {cards[currentCardIndex].content}
        </CardActionArea>
      </Card>

      {/* Right Arrow Button */}
      <IconButton onClick={handleNext}>
        <NavigateNextIcon />
      </IconButton>
    </Container>
  );
}
