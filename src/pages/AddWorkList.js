import React from 'react'
import './pages.css'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export const AddWorkList = () => {

  // const [wname, setwname] = useState('')
  // const [work_item,setwork_item]=useState('')

  const[client_type,setClient_type]=useState('')
  const[task_id,setTask_id]=useState('')
  
  async function addWorkList(worklist)
  {
    let res;
    try{
      res=await axios.post('http://localhost:8080/worklist/addworklist',worklist)
      console.log("res :=>",res)
      if(res.status==201){
        toast.success('WorkList added..', {
          position: toast.POSITION.TOP_CENTER
        })
        
      }
    
    }
    catch(err){
      toast.error('WorkList not added as data  exists already..', {
        position: toast.POSITION.TOP_CENTER
      })
      console.log("err",worklist);
      
        
    
      }
      
     
  }
  const submit = (e) => {

    e.preventDefault();
    var worklist = {

      client_type:client_type,
      task_id:task_id
    }
    
     addWorkList(worklist);
     console.log(worklist);
     e.target.reset();
    
  }
  
  function click()
  {
    var cid=(document.getElementById("client_type").selectedIndex)+1;
    var tid=(document.getElementById("task_id").selectedIndex)+1;
    setClient_type(cid);
    setTask_id(tid)
  }
  return (
    <div class="container-fluid px-1 py-5 mx-auto">
      <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">

          <div class="card">
            <h5 class="text-center mb-4">Add New Work List </h5>
            <form class="form-card" onSubmit={submit} >
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Task_name<span class="text-danger"> *</span></label>
                 <select className='form-control' id="task_id"  >

                  {/* <option>----Task Name----</option> */}
                  <option>PAN Apply</option>
                  <option>TAN Apply</option>
                  <option>12A Apply</option>
                  <option>80G Apply</option>
                  <option>GST Apply</option>
                  <option>Form 15CB(by CA)</option>
                  <option>Form 15CA(by Client)</option>
                  <option>Certification</option>
                  <option>CMA Data/Projection</option>
                  <option>Scrutiny</option>
                  <option>Appeal</option>
                  <option>E_mail of sheets</option>
                  <option>Hearing/Reply</option>
                  <option>Salary Payroll</option>
                  

                 </select>
                  
                 </div>
              </div>
            
              <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Applied On<span class="text-danger"> *</span></label> 
                  <select class="form-control" id="client_type" >
                    {/* <option>----Applied On----</option> */}
                    <option>Individual</option>
                    <option>Individual 2</option>
                    <option>Partner</option>
                    <option>Proprietor</option>
                    <option>Firm</option>
                    <option>Company</option>
                    <option>Trust</option>
                    <option>Co-op Society</option>
                   
                  </select> 
              </div>
              <div>
                <button type="submit" class="btn btn-info" onClick={click}>Submit</button>
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