import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./EmployeeList.scss";
import ViewEmployee from "../ViewEmployee/ViewEmployee";
import EmployeeServices from "../EmployeeServices/EmployeeServices";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  // const { id } = useParams();

  // const url = "http://localhost:8080/employee/id";
  // const [employeeById, setEmployeeById] = useState([]);

  // const getEmployeeId = async () => {
  //   let urlParam = url;
  //   const response = await fetch(urlParam);
  //   const data = await response.json();
  //   setEmployeeById(data);
  // };
  // useEffect(() => {
  //   getEmployeeId(employeeById);
  // }, [employeeById]);

  // const employee = employeeById.find((employee) => employee.idEmployee === id);

  // const url = "http://localhost:8080/employees";
  // const [employee, setEmployee] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   getEmployee(employee, searchTerm);
  // }, [employee, searchTerm]);

  // const getEmployee = async () => {
  //   let finalUrl = url;
  //   const response = await fetch(finalUrl);
  //   const data = await response.json();
  //   setEmployee(data);
  // };

  // const handleInput = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const filteredEmployee = employee.filter((employee) => {
  //   const employeeNameLower = employee.employee.toLowerCase();
  //   const searchTermLower = searchTerm.toLocaleLowerCase();

  //   if (employeeNameLower.includes(searchTermLower)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    EmployeeServices.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmployee = (employeeId) => {
    //console.log(employeeId);
    EmployeeServices.deleteEmployee(employeeId)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const viewEmployee = (employeeId) => {
  //   //console.log(employeeId);
  //   EmployeeServices.viewEmployee(employeeId)
  //     .then((response) => {
  //       getAllEmployees();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="employees">
      <Link to="/add-employee" className="employees__table--add">
        Add Employee
      </Link>
      <table className="employees__table">
        <thead>
          <th className="employees__table--id">Employee Id</th>
          <th className="employees__table--fName">Employee First Name</th>
          <th className="employees__table--lName">Employee Last Name</th>
          <th className="employees__table--emailId">Employee Email Id</th>
          <th className="employees__table--action">Actions</th>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="employees__table--eid">{employee.id}</td>
              <td className="employees__table--fn">{employee.firstName}</td>
              <td className="employees__table--ln">{employee.lastName}</td>
              <td className="employees__table--emails">{employee.emailId}</td>
              <td>
                <Link to={`/edit-employee/${employee.id}`}>Update</Link>
                <button
                  className="employees__table--delete"
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Delete
                </button>
                {/* 
                <button
                  className="employees__table--view"
                  onClick={() => viewEmployee(employee.id)}
                >
                  View
                </button> */}
                <Link to={`/view-employee/${employee.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default EmployeeList;
