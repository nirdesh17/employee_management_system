package com.employee_backend.employee_management_sysytem.controller;

import com.employee_backend.employee_management_sysytem.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.employee_backend.employee_management_sysytem.repository.EmployeeRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServices {

    @Autowired
    private EmployeeRepository employeeRepository;


//    Get all Employee
    public List<Employee> getallemployee(){
        List<Employee> employees= new ArrayList<>();
        employeeRepository.findAll().forEach(employees::add);
        return employees;
    }
//    Get by id
    public Optional<Employee> findone(Long id){
        return employeeRepository.findById(id);
    }

//    Save all Employee
    public void addemployee(Employee employee){
        employeeRepository.save(employee);
    }
//    update employee
    public void updateemployee(Long id,Employee employee){
        employeeRepository.save(employee);
    }
//    delete employee
    public void deleteemployee(Long id){
        employeeRepository.deleteById(id);
    }
}
