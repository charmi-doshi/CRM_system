import React from 'react'
import './pages.css'
import {useState} from 'react'
import bg from "../bg.jpg"
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import background from './background.jpg';

export const AddClient = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [mobile1, setmobile1] = useState('')
    const [mobile2, setmobile2] = useState('')
    const [address, setaddress] = useState('')
    const [type, setType] = useState('')
    const [status,setStatus]=useState('')
    const [keyperson, setkeyperson] = useState('')

    async function addClient(client)
    {
        try{
        const res=await axios.post('http://localhost:8080/client/addclient',client)
       
        console.log("res :=>",res)
        if(res.status==201){
            toast.success('WorkLog added..', {
              position: toast.POSITION.TOP_CENTER
            })
            
          }
        
        }catch(err){
            toast.error('WorkLog not added check the data..', {
              position: toast.POSITION.TOP_CENTER
            })
            console.log("err",client);
            
              
          
            }
       
    }
    const submit = (e) => {

        e.preventDefault();
        var client = {

            name: name,
            email:email,
            mobile1: mobile1,
            mobile2:mobile2,
            address:address,
            type:type,
            status:status,
            keyperson:keyperson
        }
        console.log(client);
        if(name.trim()=="" | email.trim()=="" |mobile1.trim()==""|mobile1.length<10|mobile2.trim()==""
        |mobile2.length<10|address.trim()==""|status.trim()==""|keyperson.trim()==""){
         
             console.log("null data");
            toast.error('WorkLog has null data..or check the contact length', {
                position: toast.POSITION.TOP_CENTER
              })
        }
           
           
        else{
            addClient(client)
        }

       
        e.target.reset();
        
    }
    function add()
    {
        console.log("add")
        var tid=(document.getElementById("type_id").selectedIndex)+1;
        console.log(tid)
        setType(tid);
    }
    return (
        <div class="container-fluid px-1 py-5 mx-auto">
            <div class="row d-flex justify-content-center">
                <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                    <div class="card">
                        <h5 class="text-center mb-4">Add Client </h5>
                        <form class="form-card" onSubmit={submit}>
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Client name<span class="text-danger"> *</span></label> <input type="text" id="name" name="cname" onChange={(e) => { setname(e.target.value) }} /> </div>
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Keyperson<span class="text-danger"> *</span></label> <input type="text" id="keyperson" name="keyperson" onChange={(e) => { setkeyperson(e.target.value) }} /> </div>
                            </div>
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Contact Number-1<span class="text-danger"> *</span></label> <input type="text" id="mobile1" name="job" onChange={(e)=>{setmobile1(e.target.value)}} required/> </div>
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Contact Number-2<span class="text-danger"> *</span></label> <input type="text" id="mobile2" name="job" onChange={(e)=>{setmobile2(e.target.value)}}/> </div>
                            </div>
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Address<span class="text-danger"> *</span></label> <textarea id="address" name="address" rows="3" cols="30" onChange={(e)=>{setaddress(e.target.value)}}>
                                </textarea></div>
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Email I'd<span class="text-danger"> *</span></label> <input type="text" id="email" name="email" onChange={(e)=>{setemail(e.target.value)}} /> </div>
                            
                            </div>
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Type<span class="text-danger"> *</span></label> 
                                <select class="form-control" id="type_id" onChange={add}>
                                    
                                    <option>Individual</option>
                                    <option>Individual 2</option>
                                    <option>Partner</option>
                                    <option>Proprietor</option>
                                    <option>Firm</option>
                                    <option>Company</option>
                                    <option>Trust</option>
                                    <option>Co-op Society</option>
                                </select> </div>
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Status<span class="text-danger"> *</span></label> 
                            <select class="form-control" id="status" onChange={(e)=>{setStatus(e.target.value)}}>
                                <option>Select Status</option>
                                <option>DataReceived</option>
                                <option>InProgress</option>
                                <option>Final</option>
                                <option>Filed</option>

                            </select> </div>

                            </div>
                            <div>
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

