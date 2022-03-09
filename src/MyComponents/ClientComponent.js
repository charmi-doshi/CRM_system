import { useSelector } from "react-redux"
const ClientComponent=()=>{
    const clients = useSelector((state) => state.allClients.clients)
    console.log("client",clients)

    const{id,cName}=clients
    console.warn("id-->",id,"cname-->",cName)
    const renderList=clients.map((client)=>{
        const{id,cName,keyperson,client_type,status}=client
console.log(id,cName);
        return(
            // <div key={cName}>
                
                
              <tr key={cName}>
                  
                <th scope="col">{id}</th>
                <th scope="col">{cName}</th>
                <th scope="col">{client_type}</th>
                <th scope="col">{keyperson}</th>
                <th scope="col">{status}</th>
              </tr>
            
                
            // </div>
        )
    })

    //main
    return(
        <>{renderList}</>
    )
}
export default ClientComponent;