import * as React from 'react';
import { useState } from 'react';
import { Paper, Typography, Box} from '@mui/material';
import kvimg from "../resources/images/kv2.png";
import ssimg from "../resources/images/sssihl.png";
import sssimg from "../resources/images/sssihl.jpg";
import kvd from "../resources/images/kvd.jpg";

function Academics() {
  const [hoveredPaper, setHoveredPaper] = useState(null);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',gap:7,margin: '20px',borderRadius:'20px', height: '70vh', backgroundColor: '#ffffffba',flexDirection:'row', }}>
      <Paper
        elevation={4}
        sx={{
          padding: '20px',
          maxWidth: '400px',
          backgroundColor: '#fff', 
          borderRadius:'20px',
          position: 'relative', // This allows absolute positioning for the image
          overflow: 'hidden',    // Hide overflow to prevent scrolling
          cursor: 'pointer'
        }}
        onMouseEnter={() => setHoveredPaper('school')} // Show image on hover
        onMouseLeave={() => setHoveredPaper(null)} // Hide image when not hovered
      >
          {hoveredPaper==='school' ? (
          <img
            src={kvd} // Replace with your image URL
            alt="School Memories"
            style={{
              width: '100%',
              height: 'auto',
              position:'inherit', // Position it absolutely within the Paper
              /*top: 0,
              left: 0,
              zIndex: 1, // Ensure the image is on top*/
            }}
          />
        
          ):(
          <>
            <img src={kvimg} alt='kvdantewada' style={{height:150,width:150,display:'block',margin:'0 auto'}} />

            <Typography variant="h4" component="h2" gutterBottom sx={{textAlign: 'center'}}>
              Kendriya Vidyalaya
            </Typography>

            <Typography paragraph>
              I went to an amazing school where I learned the basics. My love for problem-solving
              started here. I was a curious student, always eager to learn something new, whether it was a cool science project or acing a tough math quiz.
            </Typography>
          </>
         )}
      </Paper>

      <Paper
        elevation={4}
        sx={{
          padding: '20px',
          maxWidth: '400px',
          backgroundColor: '#fff',
          borderRadius:'20px',
          position: 'relative', // This allows absolute positioning for the image
          overflow: 'hidden',    // Hide overflow to prevent scrolling
          cursor: 'pointer'
        }}
        onMouseEnter={() => setHoveredPaper('college')} // Show image on hover
        onMouseLeave={() => setHoveredPaper(null)} // Hide image when not hovered
      >

        {hoveredPaper==='college' ? (
          <img
            src={sssimg} // Replace with your image URL
            alt="School Memories"
            style={{
              width: '100%',
              height: 'auto',
              position:'inherit', // Position it absolutely within the Paper
              /*top: 0,
              left: 0,
              zIndex: 1, // Ensure the image is on top*/
            }}
          />
        
          ):(
          <>

            <img src={ssimg} alt='sssihl' style={{height:150,width:150,display:'block',margin:'0 auto'}} />
            <Typography variant="h4" component="h2" gutterBottom sx={{textAlign:'center'}}>
              SSSIHL
            </Typography>
            

            <Typography paragraph>
              Currently, I'm pursuing my Bachelors in Computer Science from Sri Sathya Sai Institute Of Higher Learning.
              This Institute has helped me nurture the curiosty and drive it towards understanding more complex concepts and problems.
            </Typography>
          </>
          )}
    
      </Paper>
    </Box>
  );
}

export default Academics;
