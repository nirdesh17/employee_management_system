import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../Services/EmployeeService'


const EmployeeList = () => {

    const [employees, setemployees] = useState([])

    useEffect(() => {
            getAllEmployee();
    }, [])

    const getAllEmployee=()=>{
        EmployeeService.getAllEmployee().then((response) => {
            setemployees(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteEmployee=(employeeId)=>{
        EmployeeService.deleteEmployee(employeeId).then((response)=>{
            getAllEmployee();
        }).catch(error => {
            console.log(error);
        })
    }


    return (
        <div className="container">
            <h2 className="text-center">List Employees</h2>
            <Link to='/add-employees' className="btn btn-primary">Add Employee</Link>
            <table className='table table-bordered tale-stripped'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Fisrt Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`/edit-employees/${employee.id}`}>Update</Link>
                                        <button className='btn btn-danger' onClick={()=>deleteEmployee(employee.id)} style={{marginLeft:"10px"}}>Delete</button>
                                    </td>

                                </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default EmployeeList