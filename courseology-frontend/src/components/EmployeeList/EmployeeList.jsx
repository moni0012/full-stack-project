// import "./EmployeeList.scss";
// import "../../data/employees";

// //import { useState } from "react";

// const EmployeeList = () => {
//   //  const [employees, setEmployees] = useState([]);

//   return (
//     <div className="employeeList">
//       <h4 className="searchResult">Employee Results...</h4>
//       <div className="employeeSelection">
//         {employees.map((employee, index) => {
//           return (
//             <div className="employeeCard">
//               <h4>{employee.Id}</h4>
//               <h4>{employee.FirstName}</h4>
//               <h4>{employee.LastName}</h4>
//               <h4>{employee.EmailId}</h4>
//               <h4>{employee.Title}</h4>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// export default EmployeeList;

import { useEffect, useState } from "react";
import EmployeeServices from "../EmployeeServices/EmployeeServices";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeServices.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <table className="table table-bordered table-striped">
        <thead>
          <th>Employee Id</th>
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>Employee Email Id</th>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default EmployeeList;
