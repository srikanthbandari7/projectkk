import React, {useState} from 'react';
import axios from 'axios';


export default function Signup(props){

    const url =`http://localhost:3009/userdata`;

    const [data, setData] = useState({
        name:'',
        email:'',
        phone:'',
        confirm:''
    })

    let {name, email, phone, confirm} = data;

    let formHandler=(e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }

    let submitHandler=(e)=>{
        e.preventDefault();

        let formData = {

            name:`${data.name}`,
            email:`${data.email}`,
            phone:`${data.phone}`
        }
      alert(JSON.stringify(formData))
       
      axios.post(url, formData).then(()=>props.history.push('/Userdata'))
    }

    return(
        <div className='container my-5' >
            <h4>REGISTRATION FORM</h4>
         <form onSubmit={submitHandler.bind(this)} >
          <div className='mb-3' >
            <label className='form-label' >NAME :</label>
            <input className='form-control' type='text' value={name} name='name' onChange={formHandler.bind(this)} />
          </div>
          <div className='mb-3' >
            <label className='form-label' >EMAIL :</label>
            <input className='form-control' type='email' value={email} name='email' onChange={formHandler.bind(this)} />
          </div>
          <div className='mb-3' >
            <label className='form-label' >PHONE :</label>
            <input className='form-control' type='number' value={phone} name='phone' onChange={formHandler.bind(this)} />
          </div>
          <div className='mb-3' >
            <button type='submit'className='btn btn-success' value='update' >CREATE ACCOUNT</button>
          </div>
         </form>
         <p className='text-success' >{confirm}</p>
        </div>
    )
}