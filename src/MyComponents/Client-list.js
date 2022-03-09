import React from "react";
import { useState,useMemo } from "react";
import axios from "axios";
import "../pages/pages.css";
import { useEffect} from "react";
import {Link} from 'react-router-dom';
import tablebg from "../tablebg.jpg";
import PaginationComponent from './Pagination'


export const Clientlist = (props) => {
  const [clientList, setClientList] = useState([]);

  //pagination
  const[totalItems,setTotalItems]=useState(0);
  const[currentPage,setCurrentPage]=useState(1);
const ITEMS_PER_PAGE=10;

  async function getClients() {
    const res = await axios.get(`http://localhost:8080/client/showclient`);

    console.log(res.data);
    setClientList(res.data);
  }
  
  const commentsData = useMemo(() => {
    let computedComments = clientList;
console.log(computedComments)
    setTotalItems(computedComments.length);

    //Current Page slice
    return computedComments.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
}, [clientList, currentPage]);
  useEffect(() => {
    getClients();
  })
  return (
    <div>
      
     

      <h1>
       
          <div className="Client">
            <table className="ui celled selectable table">
              <caption className="caption">
                <center>
                  <h2>CLIENTS</h2>
                </center>
              </caption>
              
              <thead>
            
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">ClientTypeID</th>
                  <th scope="col">KeyPerson</th>
                </tr>
              </thead>
              <tbody>
              {  clientList.map((clients) => (
                <tr key={clients.id}>
                  <th scope="row">{clients.id}</th>
                  <td>{clients.cName}</td>
                  <td>{clients.client_type}</td>
                  <td>{clients.keyperson}</td>
                </tr>
                
                ))}
              </tbody>
            </table>
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
        

      </h1>
      {/* <PaginationComponent
              total={totalItems}
              itemsPerPage={ITEMS_PER_PAGE}
              currentPage={currentPage}
              onPageChange={page=>setCurrentPage(page)}/> */}
             
    </div>
  );
};
