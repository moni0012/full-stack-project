import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmployeeServices from "../EmployeeServices/EmployeeServices";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  const saveEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, emailId };
    // console.log(employee);

    EmployeeServices.createEmployee(employee)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div>
            <h2>Add Employee</h2>
            <div className="body">
              <form>
                <div>
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label>Email Id</label>
                  <input
                    type="text"
                    placeholder="Enter Email Id"
                    name="emailId"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  ></input>
                </div>

                <button
                  onClick={(e) => {
                    saveEmployee(e);
                  }}
                >
                  Submit
                </button>

                <Link to="/employees">Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
