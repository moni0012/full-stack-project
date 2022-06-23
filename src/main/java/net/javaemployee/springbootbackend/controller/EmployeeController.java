package net.javaemployee.springbootbackend.controller;

import net.javaemployee.springbootbackend.exception.ResourceNotFoundException;
import net.javaemployee.springbootbackend.model.Employee;
import net.javaemployee.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("api/v1/employees")
 // @CrossOrigin(origins  =  {"http://localhost:3000/"})
@CrossOrigin(origins  =  "*")
public class EmployeeController {
    @Autowired

    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @PostMapping
    public String createEmployee(@RequestBody Employee employee) {
        employeeRepository.save(employee);
        return "New Employee Added: + employee";
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id){
        Employee employee = employeeRepository.findById(id).
        orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
        return ResponseEntity.ok(employee);
    }

    //build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employeeDetails){
        Employee updateEmployee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("employee not exist wit id :" + id));

        updateEmployee.setFirstName(employeeDetails.getFirstName());
        updateEmployee.setLastName(employeeDetails.getLastName());
        updateEmployee.setEmailId(employeeDetails.getEmailId());

        employeeRepository.save(updateEmployee);
        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable int id){
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist wit id :" + id));
        employeeRepository.delete(employee);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
