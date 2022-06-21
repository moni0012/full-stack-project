import "./App.scss";
import EmployeeList from "./components/EmployeeList/EmployeeList";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <EmployeeList />
    </div>
  );
};
export default App;
