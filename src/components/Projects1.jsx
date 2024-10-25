import {
  Avatar,
  ButtonBase,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { PROJECTS_DETAILS } from "../Utils/projectDetails";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import '../resources/css/projects.css'

function Projects() {
  return (
    <>
      <div className="outside">
      <List
        sx={{
          // boxSizing:"1",
          display: "flex",
          flexDirection:'column',
          justifyContent:'space-evenly',
          
          // flexWrap: "wrap",
          gap: '5px',
        }}
      >
        {PROJECTS_DETAILS.map((data, index) => (
          // <div className="listItem">
            <ListItem
              // alignItems="flex-start"
              sx={{
                width: "60%",
                height: "10vh",
                cursor: "pointer",
                overflow:'clip'
              }}
              
            >
              <DescriptionIcon sx={{ width: '10%', height:' 50%' }} />
              <ListItemText
                primary={data.name}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "text.primary", display: "inline" }}
                    >
                      {data.date}
                    </Typography>
                    <br />
                    {data.description}
                    
                  </>
                }
              />
            </ListItem>
          // </div>
          
        ))}
      </List>
      </div>
    </>
  );
}

export default Projects;
