import { CenterFocusStrong } from "@material-ui/icons";
import React from "react";
import "../pages/pages.css";
import { useState ,useEffect} from "react";
import {Link} from 'react-router-dom';
import tablebg from "../tablebg.jpg";
import axios from "axios";


export const Client = (props) => {

  

  async function getClients(){
    const res= await axios.get(`http://localhost:8080/client/showclient`);
    console.log(res.data)
    
}
  
  //
  return (
    <div>
    
    
    </div>
  );
};