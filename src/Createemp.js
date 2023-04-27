import React, { useEffect, useState } from 'react'

function Createemp() {

const [id,setEmpid]=useState("");
const [fname,setFname]=useState("");
const [salary,setSalary]=useState("");
const [gender,setGender]=useState("");
const [status,setStatus]=useState("");
const [data,setData] =useState([]);
 
function saveUser()
{
    console.warn({id,fname,salary,gender});
    let data={id, fname,salary,gender}
    fetch("http://localhost:7000/employees/create",{
        method : 'POST',
        headers :{
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(data)
        }).then((result)=>{
            console.warn("statusText ",result.statusText);

            if(result.response.status === 200 || result.response.status === 201){
                setStatus({ type: 'success' });
            }
            else{
                let statusText = result.statusText;
                setStatus({ type: 'error', statusText },result.statusText);
            }
        })
        .catch((error) => {
            console.log(error);
            setStatus({ type: 'error', error });
          });
        
}

function updateUser()
{
    console.warn({id,fname,salary});
    let data={id, fname,salary}
    fetch("http://localhost:7000/employees/update/"+ id,{
        method : 'PUT',
        headers :{
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(data)
        }).then((result)=>{
            console.warn("result",result);
            setStatus({ type: 'successT' });
        })
        .catch((error) => {
            console.log(error);
            setStatus({ type: 'errorT', error });
          });
        
}

function deleteUser()
{
    console.warn({id,fname,salary});
    let data={id, fname,salary}
    fetch("http://localhost:7000/employees/delete/",{
        method : 'DELETE',
        headers :{
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(data)
        }).then((result)=>{
            console.warn("result",result);
            setStatus({ type: 'successD' });
        })
        .catch((error) => {
            console.log(error);
            setStatus({ type: 'errorD', error });
          });
        
}

function searchEmp()
{
  // onClick={useEffect}
      }

  useEffect(()=>{
    fetch("http://localhost:7000/employees/list").then((result)=>{
      result.json().then((resp)=>{
        setData(resp)
      })
    })

    setTimeout(function () {
      console.log('Hello from setTimeout')
  }, 5000)
  },[])

  return (
   <>
   <div className='emp text-center'>
    <div className='container'>
    <div className='row'>
    {/* <form className="login-form"> */}
    <input type="text" value={id} name="empid" onChange={(e)=>{setEmpid(e.target.value)}}/><br/>
    <input type="text" value={fname} name="fname" onChange={(e)=>{setFname(e.target.value)}}/><br/>
    <input type="text" value={salary} name="salary" onChange={(e)=>{setSalary(e.target.value)}}/><br/>
    <label htmlFor="gender"></label>
<select name="gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}>
	<option value="none" >Gender</option>
	<option value="male">Male</option>
	<option value="female">Female</option>
	<option value="other">other</option>
</select><br/><br/>
    <button className='btn btn-primary' onClick={saveUser}>Submit</button>
    <button className='btn btn-primary' onClick={updateUser}>Update</button>
    <button className='btn btn-primary' onClick={deleteUser}>Delete</button>
    <button className='btn btn-primary' onClick={searchEmp}>Search</button>


    {/* </form> */}
    </div>
    </div>
    </div>
    
    <div>
    {status?.type === 'success' && <p>"Employee created successfully"</p>}
      {status?.type === 'error' && (
        <p>"Employee is not created successfully."</p>
      )}
      </div>

      <div>
    {status?.type === 'successT' && <p>"Employee updated successfullyT"</p>}
      {status?.type === 'errorT' && (
        <p>"Employee is not updated successfullyT."</p>
      )}
      </div>

      <div>
    {status?.type === 'successD' && <p>"Employee deleted successfullyD"</p>}
      {status?.type === 'errorD' && (
        <p>"Employee is not deleted successfullyD."</p>
      )}
      </div>

      <div>
        <h1>Api call</h1>
        <table border="1">
          <tr>
            <th>ID</th>
            <th>fname</th>
            <th>salary</th>
            <th>gender</th>
          </tr>
         {
          data.map((item)=>
          <tr>
          <td>{item.id}</td>
          <td>{item.fname}</td>
          <td>{item.salary}</td>
          <td>{item.gender}</td>
        </tr>
          )
         }

        </table>
      </div>
   </>
   
  )
}

export default Createemp
