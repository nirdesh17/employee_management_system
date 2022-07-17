import axios from "axios";

const BASE_URL='http://localhost:8081/employees';

class EmployeeService{

    getAllEmployee(){
        return axios.get(BASE_URL)
    }

    createEmployee(employee){
        return axios.post(BASE_URL,employee)
    }
    
    getEmployeeByID(employeeId){
        return axios.get(BASE_URL+'/'+employeeId)
    }

    updateEmployee(employeeId,employee){
        return axios.put(BASE_URL+'/'+employeeId,employee)
    }

    deleteEmployee(employeeId){
        return axios.delete(BASE_URL+'/'+employeeId)
    }
}

export default new EmployeeService();