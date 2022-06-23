import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import EmployeeServices from "../EmployeeServices/EmployeeServices";
import "./AddEmployee.scss";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const { id } = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, emailId };
    if (id) {
      EmployeeServices.updateEmployee(id, employee)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      EmployeeServices.createEmployee(employee)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    EmployeeServices.getEmployeeById(id)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmailId(response.data.emailId);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2>Update Employee</h2>;
    } else {
      return <h2>Add Employee</h2>;
    }
  };

  return (
    <div>
      <div className="employee">
        <div className="employee__information">
          <div>
            {title()}
            <div className="employee__information--details">
              <form>
                <div className="employee__information--fName">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>

                <div className="employee__information--lName">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>

                <div className="employee__information--emailId">
                  <label className="employee__information--label">
                    Email Id
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Email Id"
                    name="emailId"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  ></input>
                </div>

                <button
                  className="employee__information--bSubmit"
                  onClick={(e) => {
                    saveOrUpdateEmployee(e);
                  }}
                >
                  Submit
                </button>

                <Link
                  to="/employees"
                  className="employee__information--bCancel"
                >
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
