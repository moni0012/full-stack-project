import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./EmployeeList.scss";
import EmployeeServices from "../EmployeeServices/EmployeeServices";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default EmployeeList;
