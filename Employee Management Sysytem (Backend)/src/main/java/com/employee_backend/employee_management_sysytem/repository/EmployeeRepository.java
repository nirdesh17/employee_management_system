package com.employee_backend.employee_management_sysytem.repository;

import com.employee_backend.employee_management_sysytem.model.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
//    All crud database method.
}