import { Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"


const Registration=()=>{
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  console.log("errors", errors);
  
  const onSubmit = (data) =>{
    console.log(data)
    let email=localStorage.setItem("email",data.email)
    let password=localStorage.setItem("password",data.password)
    navigate("/login")
    
  } 

  
    return(
      <>
      <Grid style={{ backgroundColor:"tan",height:"100vh",}} >
        
      <Grid padding={4} sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>


<Grid container md={6} sx={{backgroundColor:"navajowhite",boxShadow:"12px",borderRadius:"12px"}}>
        <Grid md={12} textAlign={"center"} paddingTop={2.5}> 
          <h1 className="heading">Registrationform</h1>
        </Grid>

        <Grid md={4} sx={{marginLeft:"83px",paddingLeft:'58px', paddingTop:"15px",marginTop:"2px"}} >
        <TextField 
        className="textfield" required
        error={errors.firstname}{...register("firstname",{required:"enter your name"})}
        helperText={errors.firstname?errors.firstname.message:""}  size="small"
        id="outlined-basic" label="Firstname" variant="standard" />
        </Grid>

        <Grid md={3.3} sx={{marginTop:"16px",paddingLeft:"18px"}}>
        <TextField  required
        className="textfiled"
        error={errors.lastname}{...register("lastname",{required:"enter your name"})}
        helperText={errors.lastname?errors.lastname.message:""}  size="small"
        id="outlined-basic" label="Lastname" variant="standard" />
        </Grid>


        {/* <Grid  sx={{height:"700PX"}} md={12}  height={45} width={475} > */}
        <Grid md={12} sx={{marginLeft:"83px",paddingLeft:'58px', paddingTop:"15px",marginTop:"2px"}}>
        <TextField  sx={{minWidth:"340px"}}
        error={errors.email} {...register("email",{required:"enteremail"})}
        helperText={errors.email?errors.email.message:""}  size="small" required
          label="Email" variant="standard" />
        </Grid>

        <Grid md={12} sx={{marginLeft:"83px",paddingLeft:'58px',paddingTop:"15px",marginTop:"2px" }}>
        <TextField sx={{minWidth:"342px"}}
        error={errors.password}{...register("password",{required:"enterpassword"})}
        helperText={errors.password?errors.password.message:""}  size="small"
         label="Password" id="fullWidth" variant="standard" required/>
        </Grid>
    

        <Grid md={8.8} textAlign={"end"} sx={{margin:"8px",padding:'2px' }}>
          <Link  to="/login"  size="small">login</Link>
        </Grid>

        
        <Grid md={6} textAlign={"end"}  sx={{margin:"8px",padding:'2px',paddingBottom:"8px" }}>
          <Button variant="contained"  size="small" onClick={handleSubmit(onSubmit)}>submit</Button>
        </Grid>
      

      </Grid>
      </Grid>
      </Grid>
      
        
         </>
  
    );
  }
export default Registration;