import React from 'react'
import './pages.css';
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ToastBody } from 'react-bootstrap';

export const AddDailyWorkLog = () => {

    const [client_name, setclient_name] = useState('')
    const [finyear, setfinyear] = useState('')
    const [hours, sethours] = useState('')
    const [entry_date,setentrydate]=useState('')
    const [work_item,setwork_item]=useState('')
    const [status,setStatus]=useState('')
    const [location,setLocation]=useState('')
    const [remarks,setRemarks]=useState('')

    async function addDailyWork(worklog) {

        try{
        const res=await axios.post('http://localhost:8080/transaction/addworklog',worklog)

        console.log("res =>",res)
        if(res.status==201){
            toast.success('WorkLog added..', {
              position: toast.POSITION.TOP_CENTER
            })
            
          }
        
        }catch(err){
            toast.error('WorkLog not added check the data..', {
              position: toast.POSITION.TOP_CENTER
            })
            console.log("err",worklog);
            
              
          
            }
    }
    const submit=(e)=>{
        e.preventDefault();
        var worklog = {
           client_name:client_name,
           finyear:finyear,
           hours:hours,
           entry_date:entry_date,
           work_item:work_item,
           status:status,
           location:location,
           remarks:remarks
            
        }
        if(client_name.trim()=="" | finyear.trim()=="" |hours.trim()==""|entry_date.trim()==""
        |work_item.trim()==""|status.trim()==""|location.trim()==""|remarks.trim()==""){
         
            toast.error('WorkLog has null data..', {
                position: toast.POSITION.TOP_CENTER
              })
        }
            // console.log("null data");
           
        else{
            addDailyWork(worklog)
        }
        
         
        
     
        
        console.log(worklog)
        e.target.reset();
    }
    
    
    function isEmpty(worklog){
        console.log("empty")
        if(client_name.trim()=="" | finyear.trim()=="" |hours.trim()==""|entry_date.trim()==""
            |work_item.trim()==""|status.trim()==""|location.trim()==""|remarks.trim()==""){
                
                return true;  
        }
    }
    return (
        <div class="container-fluid px-1 py-5 mx-auto">
            <div class="row d-flex justify-content-center">
                <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">

                    <div class="card">
                        <h5 class="text-center mb-4">Daily Worklog Entry </h5>
                        <form class="form-card" onSubmit={submit}>

                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> 
                                <label class="form-control-label px-3">Client Name<span class="text-danger"> *</span></label> 
                                    <input type="text" id="client_name" onChange={(e)=>{setclient_name(e.target.value)}} required/>
                                </div>
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Financial Year<span class="text-danger"> *</span></label> 
                                    <input type="text" id="finyear" onChange={(e)=>{setfinyear(e.target.value)}} required/>
                                </div>

                            </div>
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> 
                                <label class="form-control-label px-3">Entry Date<span class="text-danger"> *</span></label>
                                 <input type="date" id="entry_date" onChange={(e)=>{setentrydate(e.target.value)}} required/> </div>
                                
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Work Item<span class="text-danger"> *</span></label> 
                                <select class="form-control" id="work_item" onChange={(e)=>{setwork_item(e.target.value)}}>
                                    <option>Select the work item</option>
                                    <option>PAN Apply</option>
                                    <option>TAN Apply</option>
                                    <option>12A Apply</option>
                                    <option>80G Apply</option>
                                    <option>GST Apply</option>
                                    <option>Form 15CB(by CA)</option>
                                    <option>Form 15CA(by Client)</option>
                                    <option>Certification</option>
                                </select> </div>
                            </div>


                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> 
                                <label class="form-control-label px-3">Hours Spend<span class="text-danger"> *</span></label>
                                 <input type="number" min="0"id="hours"  onChange={(e)=>{sethours(e.target.value)}} required/>
                                </div>
                                <div class="form-group col-sm-6 flex-column d-flex"> 
                                <label class="form-control-label px-3">Location<span class="text-danger"> *</span></label> 
                                <select class="form-control" id="location" onChange={(e)=>{setLocation(e.target.value)}}>
                                    <option>Select the location</option>
                                    <option>Onsite</option>
                                    <option>OffSite</option>
                                </select> </div>
                            </div>
                            <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Status<span class="text-danger"> *</span></label> 
                            <select class="form-control" id="status" onChange={(e)=>{setStatus(e.target.value)}}>
                                <option>Select Status</option>
                                <option>DataReceived</option>
                                <option>InProgress</option>
                                <option>Final</option>
                                <option>Filed</option>

                            </select> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> 
                                <label class="form-control-label px-3">remarks<span class="text-danger"> *</span></label> 
                                    <input type="text" id="remarks" onChange={(e)=>{setRemarks(e.target.value)}} required/>
                                </div>
                            <div>
                                </div>
                                <button type="submit" class="btn btn-info">Submit</button>
                                <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}