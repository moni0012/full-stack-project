import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import EmployeeServices from "../EmployeeServices/EmployeeServices";
import "./ViewEmployee.scss";

const ViewEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const { id } = useParams();

  const updatedViewEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, emailId };
    if (id) {
      EmployeeServices.viewEmployee(id, employee)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      EmployeeServices.viewEmployee(employee)
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
    return <h2>View Employee</h2>;
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
