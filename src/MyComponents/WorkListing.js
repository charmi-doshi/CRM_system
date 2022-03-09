import axios from "axios";
import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getClients } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import ClientComponent from "./ClientComponent";
import '../client.css';
import {WaveLoading} from 'react-loadingg'
import MaterialTable from "material-table";

const WorkListing = () => {

  const data = useSelector((state) => state.allClients.clients)
  let cellColor;
  let status = useSelector((state)=>state.allClients.clients.status)
  console.log("status state==>",status)
  //cell css
 
  //column data
  const columns=[{
    title:"task_name",field:"task_name"
  },
  {
    title:"Individual",field:"individual",
    cellStyle: (e, rowData) => {
        if (rowData.individual==="1") {
          return { backgroundColor: "green",color:"white" };
        }
        else 
        {
          return { backgroundColor: "red",color:"white", border: "1px solid #fff" };
        }
  }},
  {
    title:"Individual_2",field:"individual_2",
    cellStyle: (e, rowData) => {
        if (rowData.individual_2==="1") {
          return { backgroundColor: "green",color:"white" };
        }
        else 
        {
          return { backgroundColor: "red",color:"white",border: "1px solid #fff" };
        }
  }},
  {
    title:"Partner",field:"partner",
    cellStyle: (e, rowData) => {
        if (rowData.partner==="1") {
          return { backgroundColor: "green",color:"white" };
        }
        else 
        {
          return { backgroundColor: "red",color:"white",border: "1px solid #fff" };
        }
  }},
  {
    title:"Proprietor",field:"proprietor",
    cellStyle: (e, rowData) => {
        if (rowData.proprietor==="1") {
          return { backgroundColor: "green",color:"white" };
        }
        else 
        {
          return { backgroundColor: "red",color:"white",border: "1px solid #fff" };
        }
  }}, 
  {
    title:"Firm",field:"firm",
    cellStyle: (e, rowData) => {
        if (rowData.firm==="1") {
          return { backgroundColor: "green",color:"white" };
        }
        else 
        {
          return { backgroundColor: "red",color:"white",border: "1px solid #fff" };
        }
  }},
  {
    title:"Company",field:"company",
    cellStyle: (e, rowData) => {
        if (rowData.company==="1") {
          return { backgroundColor: "green",color:"white" };
        }
        else 
        {
          return { backgroundColor: "red",color:"white",border: "1px solid #fff" };
        }
  }},
  {
    title:"Trust",field:"trust",
    cellStyle: (e, rowData) => {
        if (rowData.trust==="1") {
          return { backgroundColor: "green",color:"white" };
        }
        else 
        {
          return { backgroundColor: "red",color:"white",border: "1px solid #fff" };
        }
  }},
  {
    title:"coop_Society",field:"coop_Society",
    cellStyle: (e, rowData) => {
        if (rowData.coop_Society==="1") {
          return { backgroundColor: "green",color:"white" };
        }
        else 
        {
          return { backgroundColor: "red",color:"white",border: "1px solid #fff" };
        }
  },
  //end
}]
  //row data
  const clients = useSelector((state) => state);

  //to dispatch
  const dispatch = useDispatch();
  console.log("clients", clients);
  const fetchClients = async () => {
    const response = await axios
      .get("http://localhost:8080/worklist/showlist")
      .catch((err) => {
        console.log("err", err);
      });
    console.log(response.data);
    
    dispatch(getClients(response.data));
   
  };
 

  useEffect(() => {
  
   
    fetchClients();
    
  }, []);

  
  
  return (
    <div>
{Object.keys(clients).length === 0 ? (
        <WaveLoading/>
      ) : (
      <h4>
        <div className="Client" >
          
           {/* <caption className="caption">
              <center>
                <h2>CLIENTS</h2>
              </center>
            </caption> */}
          <MaterialTable
        
          title="Worklist"
          data={data}
          columns={columns}
          options={
            {filtering:true,
            exportButton:true,}
        }
          />
          <Link to="/worklist/addworklist">
            <center>
              <button
                type="button"
                className="btn btn-primary"
                onClick={getClients}
              >
                Add Worklist
              </button>
            </center>
          </Link>
        </div>
      </h4>)}
      
    </div>
  );
};
export default WorkListing;
