import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { appendErrors, set, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

const Login = () => {
  useEffect(()=>{
    let token=localStorage.getItem("token");
    if(token){
      navigate("/");
    }

  },[])

const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  console.log("errors", errors);

  const onSubmit = (data) => {
  console.log(data)
  let email=localStorage.getItem("email")
  let password=localStorage.getItem("password")
  if(data.email==email && data.password==password){
    let token=localStorage.setItem("token",data.email+data.password);
    navigate("/")
  }else{
    // console.log("plese enter paasword and mail correctly")
    <Alert severity="error">This is an error alert — check it out!</Alert>
  } 
  

  
  };


  // display={"flex"} paddingTop={5}  flexDirection={"column"} alignItems={"center"}
  return (
    
      <form>
        <Grid sx={{backgroundColor:"tan",height:"100vh"}}>
  <Grid container  md={12}   sx={{display: 'inline-block',display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"35px"}}>
 <Grid  sx={{marginTop:"35px",paddingTop:"8px", paddingLeft:"55px",paddingRight:"55px",backgroundColor:"navajowhite",borderRadius:"18px", textAlign:"center"}}>
       <Grid margin={2}>
       <h1 className="heading">LoginForm</h1>
       </Grid >
             <Grid margin={2}>
      <TextField 
         type="email"
          error ={errors.email}{...register("email",{required:"enteremail",pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Please enter a valid email",
          }, })}
          require
          
          id="outlined-error-helper-text"
          label="email"
          helperText={errors.email?errors.email.message:""}
          size="small"
          variant="standard"
  
        />
        
 
             </Grid>

                  <Grid margin={2} >
      <TextField 
      error={errors.password} {...register("password",{required:"enterpassword"})}
          required
          id="outlined-basic"
          label="password"
          variant="standard"
          helperText={errors.password?errors.password.message:""}
          size="small"
        />

        <Grid margin={2} textAlign={"end"}>
         <Link  to="/registration"  size="small">signup</Link>
         </Grid> 

                   </Grid>

                       <Grid margin={2} >
      <Button variant="contained"  size="small"  onClick={handleSubmit(onSubmit)}>Login</Button>
                       </Grid>
              </Grid>
    </Grid>
    </Grid>
    </form>
    
  );
};

export default Login;
