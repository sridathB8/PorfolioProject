import React from "react";
import "../resources/css/home.css";
import { Avatar, Typography } from "@mui/material";
import { userProfileDefaultData } from "../Utils/Constants";
import defaultImage from "../resources/images/defaultImage.JPG";

function Home() {
  const userName = userProfileDefaultData.Name;
  return (
    <div className="mainContainer">
      <Avatar
        src={defaultImage}
        sx={{ width: "100px", height: "100px", display: "flex", mt: "50px", mb:'30px' }}
      />
      <Typography variant="h5" >I'm</Typography>
      <Typography variant="h1" sx={{ color:"#ffff",fontFamily:'palan',fontStyle:"italic"}}>
        {userName},
      </Typography>
      <Typography variant="h5" sx={{textAlign:'center', m:'50px', mt:'px'}}>
        Someone trying to look things to be added in his profile.
      </Typography>

      {/* </Avatar> */}
    </div>
  );
}

export default Home;
