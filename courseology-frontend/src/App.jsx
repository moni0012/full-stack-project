import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import AddEmployee from "./components/AddEmployee/AddEmployee";
import ViewEmployee from "./components/ViewEmployee/ViewEmployee";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Search />
        <div>
          <Routes>
            <Route path="/" element={<EmployeeList />}></Route>
            <Route path="/employees" element={<EmployeeList />}></Route>
            <Route path="/add-employee" element={<AddEmployee />}></Route>
            <Route path="/edit-employee/:id" element={<AddEmployee />}></Route>
            <Route path="/view-employee/:id" element={<ViewEmployee />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};
export default App;
