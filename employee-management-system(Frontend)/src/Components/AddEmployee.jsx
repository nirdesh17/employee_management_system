import React, { useEffect, useState } from 'react'
import { Link,useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService'

const AddEmployee = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const Navigate= useNavigate();
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = { firstName, lastName, emailId }
        if(id){
            EmployeeService.updateEmployee(id,employee).then((response)=>{
                Navigate('/employees')
            }).catch(error => {
            console.log(error)});
        }
        else{
        EmployeeService.createEmployee(employee).then((response)=>{
            console.log(response.data)
            Navigate('/employees')
        }).catch(error => {
            console.log(error)
        })
    }
    }

    useEffect(()=>{
        EmployeeService.getEmployeeByID(id).then((response)=>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const title=()=>{
         if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }
        else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

    return (
        <div>
            <br/><br/>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {
                            title()
                        }
                        <div className='card-body'>
                            
                            <form>
                                <div className='form-group md-2'>
                                    <label className='form-label'>First Name:</label>
                                    <input
                                        type= "text"
                                        placeholder="Enter first Name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}   >
                                    </input>
                                </div>

                                <div className='form-group md-2'>
                                    <label className='form-label'>Last Name:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter last Name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}   >
                                    </input>
                                </div>

                                <div className='form-group md-2'>
                                    <label className='form-label'>Email Id:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter email id"
                                        name="emailId"
                                        className="form-control"
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}   >
                                    </input>
                                </div>
                                <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                                <Link to="/employees" className="btn btn-danger">Cancel</Link>
                            </form>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddEmployee