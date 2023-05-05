import React from 'react';
import './Dashboard.css'
import { NavLink } from 'react-router-dom';
import { Box, width } from '@mui/system';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useNavigate } from 'react-router-dom';

import user from './stepone.png'
import { Typography } from '@mui/material';
import Navbar from '../../Components/Navbar';

function Dashboard() {
  const { collapseSidebar,toggleSidebar } = useProSidebar();

const navigate= useNavigate();
  

  return (
    <>

<div id="app" style={({ height: "100vh", backgroundColor:""})}>
  <Navbar/>
<Sidebar style={{ height: "100vh",backgroundColor:"#F3BCAF " }}>
       
            

         
          <Menu>
          <MenuItem  style={{marginLeft:"3em"}}>
          <img src={user} style={{height:'50px', width:"50px",justifyContent:"center", marginTop:"4em", padding:"5px",
            borderRadius:"50%"}} />
            
            
            <h2 style={{color:"#691905 " , fontWeight:'bold' , fontSize:"23px"
            }}>Aarvi</h2>
          
          </MenuItem>

          <MenuItem style={{ marginTop:"4px"}}icon={<HomeOutlinedIcon />}>
           
            Home
            </MenuItem  >
          <MenuItem  onClick={()=>{navigate("/applicants")}} icon={<PeopleOutlinedIcon />}>
            Applicants
          
            </MenuItem>
          <MenuItem onClick={()=>{navigate("/addapli")}} icon={<ContactsOutlinedIcon />}>Add Applicant</MenuItem>
          <MenuItem   onClick={()=>{navigate("/interview")}}icon={<ReceiptOutlinedIcon />}>Interviews</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>Help</MenuItem>
         


        </Menu>
      </Sidebar>
     
    </div>
  
     </>
     
    
  );

}

export default Dashboard;
