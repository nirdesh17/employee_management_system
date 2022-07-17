package com.employee_backend.employee_management_sysytem.controller;

import com.employee_backend.employee_management_sysytem.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
public class EmployeeController {

    @Autowired
    public EmployeeServices employeeServices;

// Get
        @GetMapping("/employees")
        public List<Employee> getallemployee(){
            return employeeServices.getallemployee();
        }
// Get by id
        @GetMapping("/employees/{id}")
        public Optional<Employee> getemployee(@PathVariable Long id){
            return employeeServices.findone(id);
        }

// Post
        @PostMapping("/employees")
        public void addemployee(@RequestBody Employee employee){
            employeeServices.addemployee(employee);
        }
// Put
        @PutMapping("/employees/{id}")
        public void updateemployee(@PathVariable Long id,@RequestBody Employee employee){

            employeeServices.updateemployee(id,employee);
        }
// Delete
        @DeleteMapping("/employees/{id}")
        public void deleteemployee(@PathVariable Long id){
            employeeServices.deleteemployee(id);
        }
}
