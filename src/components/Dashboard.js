import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
const Dashboard=()=>{

useEffect(()=>{
  let token=localStorage.getItem("token")
      if(token){
            navigate("/")
      }else{
        navigate("/login")
      }
},[])

const logOut=()=>{
  localStorage.removeItem("token")
  navigate("/login")
}
  const navigate=useNavigate()

  //Logout button function
  
    return(

      <Grid   sx={{height:"100vh",backgroundColor:"tan"}}>
      <Grid  sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <Grid md={6} container sx={{backgroundColor:"navajowhite",margin:"8px", paddingTop:"5px",  borderRadius:"12px",padding:"10px"}}>

        <Grid md={12} textAlign={"center"}>
          <h1 className="heading">Dashboard</h1>
        </Grid>

        <Grid md={12} textAlign={"center"}>
               <Button variant="contained" onClickCapture={()=>logOut()}> logout</Button>
        </Grid>

      </Grid>
      </Grid>
      </Grid> 

    )
}

export default Dashboard;

