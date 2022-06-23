import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import EmployeeServices from "../EmployeeServices/EmployeeServices";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  // const history = useHistory();
  const { id } = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, emailId };
    // console.log(employee);
    if (id) {
      EmployeeServices.updateEmployee(id, employee)
        .then((response) => {
          console.log(response.data);
          // history.push("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      EmployeeServices.createEmployee(employee)
        .then((response) => {
          console.log(response.data);
          // history.push("/employees");
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
  });

  const title = () => {
    if (id) {
      return <h2>Update Employee</h2>;
    } else {
      return <h2>Add Employee</h2>;
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div>
            {title()}
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
                    saveOrUpdateEmployee(e);
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
