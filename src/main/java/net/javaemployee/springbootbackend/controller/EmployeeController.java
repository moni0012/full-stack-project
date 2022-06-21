package net.javaemployee.springbootbackend.controller;

import net.javaemployee.springbootbackend.model.Employee;
import net.javaemployee.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("api/v1/employees")
@CrossOrigin(origins  =  "http://localhost:3000")
public class EmployeeController {
    @Autowired

    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    @PostMapping
    public String createEmployee(@RequestBody Employee employee){
        employeeRepository.save(employee);
        return "New Employee Added: + employee";
    }
}
