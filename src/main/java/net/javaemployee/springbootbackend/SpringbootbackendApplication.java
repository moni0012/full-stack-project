package net.javaemployee.springbootbackend;

import net.javaemployee.springbootbackend.model.Employee;
import net.javaemployee.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootbackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootbackendApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
//		Employee employee = new Employee();
//		employee.setFirstName("Moni");
//		employee.setLastName("Kumari");
//		employee.setEmailId("moni@gmail.com");
//		employeeRepository.save(employee);
//
//		Employee employee1 = new Employee();
//		employee1.setFirstName("Rita");
//		employee1.setLastName("Gupta");
//		employee1.setEmailId("rita@gmail.com");
//		employeeRepository.save(employee1);

	}
}
