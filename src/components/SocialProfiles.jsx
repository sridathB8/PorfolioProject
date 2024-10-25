import React from "react";
import "../resources/css/SocialProfiles.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { socialprofils } from "../Utils/Constants";
import { Box, Paper, Typography } from "@mui/material";
import head from "../resources/images/head.png";

function SocialProfiles() {
  console.log("SocialProfiles component rendered"); // add this debug statement
  console.log("socialprofils object:", socialprofils); // add this debug statement

  return (
    <>
      <Box className="stick_follow_icon">
        {socialprofils.twitter && (
          <a href={socialprofils.twitter}>
            <TwitterIcon sx={{ backgroundColor:"#ffffffba",fontSize:110,borderRadius:'20px',color:'#000'}}/>
          </a>
        )}
        {socialprofils.github && (
          <a href={socialprofils.github}>
            <GitHubIcon sx={{ backgroundColor:"#ffffffba",fontSize:110,borderRadius:'20px',color:'#000'}}  />
          </a>
        )}
        {socialprofils.facebook && (
          <a href={socialprofils.facebook}>
            <FacebookIcon sx={{ backgroundColor:"#ffffffba",fontSize:110,borderRadius:'20px',color:'#3b5998'}} />
          </a>
        )}
        {socialprofils.linkedin && (
          <a href={socialprofils.linkedin}>
            <LinkedInIcon sx={{  backgroundColor:"#ffffffba",fontSize:110,borderRadius:'20px',color:'#0077b5'}} />
          </a>
        )}
      </Box>,
      <Paper
        sx={{
          marginTop: 30,
          marginLeft:30,
          padding: 1,
          backgroundColor: "#f5f5f5",
          width: "500px", // Fixed width
          height: "90px",
          textAlign: "center",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(10px)",
          position: "relative",
        }}
      >
        <Typography variant="body2" color="textSecondary" sx={{fontSize:"15px",fontWeight: "bold",color: "primary.main",textAlign: "center",textTransform: "uppercase",letterSpacing: "2px",lineHeight: 1.5,  }}>
          Follow me on the handles above for more fun updates!
        </Typography>
        <Box
          component="img"
          src={head} // Replace with your image path
          alt="Head"
          sx={{
            position: "absolute",
            bottom: -20,  // Adjust to position it in the corner
            right: -20,   // Adjust to position it in the corner
            width: 80,    // Adjust the size as needed
            height: "auto",
            borderRadius: "50%", // Optional: makes the image round
            animation: "twerk 1.5s ease-in-out infinite",
          }}
        />
      </Paper>
    </>
  );
}

export default SocialProfiles;
