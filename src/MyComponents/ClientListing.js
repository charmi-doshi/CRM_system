import axios from "axios";
import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getClients } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import ClientComponent from "./ClientComponent";
import '../client.css';
import {WaveLoading} from 'react-loadingg'
import MaterialTable from "material-table";

const ClientListing = () => {

  const data = useSelector((state) => state.allClients.clients)
  let cellColor;
  let status = useSelector((state)=>state.allClients.clients.status)
  console.log("status state==>",status)
  //cell css
 
  //column data
  const columns=[{
    title:"ID",field:"id"
  },{
    title:"Name",field:"name", 
  },
  {
    title:"ClientType",field:"type"
  },
  {
    title:"KeyPerson",field:"keyperson"
  },
  {
    title:"Status",field:"status", 
    cellStyle: (e, rowData) => {
      if (rowData.status==="Filed") {
        return { backgroundColor: "green",color:"white" };
      }
      else if(rowData.status==="InProgress" || rowData.status==="Final")
      {
        return { backgroundColor: "blue",color:"white" };
      }
      else if(rowData.status==="DataReceived")
      {
        return { backgroundColor: "red",color:"white" };
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
      .get("http://localhost:8080/client/showclient")
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
        
          title="Clients"
          data={data}
          columns={columns}
          options={
            {filtering:true,
            exportButton:true,}
        }
          />
          <Link to="/client/addclient">
            <center>
              <button
                type="button"
                className="btn btn-primary"
                onClick={getClients}
              >
                Add Client
              </button>
            </center>
          </Link>
        </div>
      </h4>)}
      
    </div>
  );
};
export default ClientListing;
