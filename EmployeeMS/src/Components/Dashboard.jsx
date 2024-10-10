
import CreateEmployee from "./CreateEmployee";
import EmployeeList from "./EmployeeList";
import { Link, useNavigate } from 'react-router-dom';


const Dashboard = ({ activeComponent, setActiveComponent }) => {
  const navigate = useNavigate(); 
  const handleLogout = () => {
   
    navigate('/login'); 
  };
  return (
    <div className="dashboard">
     
      <header>
        <h1>Employee Management System</h1>
        <nav>
          <ul>
            <li>
            <li><Link to="/dashboard">Home</Link></li>
            </li>
            <li>
              <a href="#!" onClick={() => setActiveComponent("ShowEmployeeList")}>Employee List</a>
            </li>
            <li>
              <h3>Krishna Tripathy</h3>
            </li>
            <li>
            <li><button onClick={handleLogout}>Logout</button></li>
            </li>
          </ul>
        </nav>
      </header>

      
      <div className="grid grid-cols-6 py-10 gap-10">
        {/* Sidebar */}
        <div className="col-span-2 bg-gray-200 flex flex-col gap-6 items-center py-8">
  <ul className="w-full px-4">
    <li 
      className="cursor-pointer bg-red-300 text-lg py-2 px-4 my-2 text-center rounded-lg shadow-sm hover:bg-red-400 hover:text-white transition-colors"
      onClick={() => setActiveComponent("Dashboard")}
    >
      Dashboard
    </li>
    
    <li 
      className="cursor-pointer bg-red-300 text-lg py-2 px-4 my-2 text-center rounded-lg shadow-sm hover:bg-red-400 hover:text-white transition-colors"
      onClick={() => setActiveComponent("ShowEmployeeList")}
    >
      Show Employee List
    </li>
  </ul>
</div>


       
        <div className="col-span-4 bg-sky-200 p-6">
          {activeComponent === "Dashboard" && (
            <div className="flex justify-center items-center h-full">
              <h2>Welcome Admin Panel</h2>
            </div>
          )}
          {activeComponent === "CreateEmployee" && (
          <CreateEmployee/>
          )}
          {activeComponent === "ShowEmployeeList" && (
        
            <EmployeeList/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
