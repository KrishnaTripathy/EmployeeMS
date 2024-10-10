import { useState } from "react";
import EditEmployee from "./EditEmployee";
import CreateEmployee from "./CreateEmployee";

const EmployeeList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      name: "Hukum",
      email: "hcgupta@cstech.in",
      mobile: "954010044",
      designation: "HR",
      gender: "Male",
      course: "MCA",
      createDate: "13-Feb-21",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      name: "Manish",
      email: "manish@cstech.in",
      mobile: "954010033",
      designation: "Sales",
      gender: "Male",
      course: "BCA",
      createDate: "12-Feb-21",
    },
  ]);

  const [editMode, setEditMode] = useState(false);
  const [createMode, setCreateMode] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (employee) => {
    setEditMode(true);
    setCurrentEmployee(employee);
  };

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const handleSave = (updatedEmployee) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
    setEmployees(updatedEmployees);
    setEditMode(false);
    setCurrentEmployee(null);
  };

  const handleAddEmployee = (newEmployee) => {
    setEmployees([
      ...employees,
      { ...newEmployee, id: employees.length + 1, createDate: new Date().toLocaleDateString() },
    ]);
    setCreateMode(false);
    alert("Employee added successfully!");
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen max-w-full">
      {editMode ? (
        <EditEmployee employee={currentEmployee} onSave={handleSave} />
      ) : createMode ? (
        <CreateEmployee onAddEmployee={handleAddEmployee} />
      ) : (
        <>
          {/* Employee List Header */}
          <div className="bg-blue-600 py-3 px-4 mb-4 rounded-lg shadow-sm text-white flex justify-between items-center">
            <h2 className="text-lg font-semibold">Employee List</h2>
            <div>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
                onClick={() => setCreateMode(true)}
              >
                Create Employee
              </button>
            </div>
          </div>

          {/* Employee Search and Total Count */}
          <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg shadow-sm mb-6">
            <span className="font-semibold text-blue-800">
              Total Count: {filteredEmployees.length}
            </span>
            <div>
              <input
                type="text"
                placeholder="Enter Search Keyword"
                className="border border-blue-200 p-2 rounded shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-100"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Employee Table */}
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-500 text-black text-xs">
              <tr>
                <th className="border px-4 py-2">Unique ID</th>
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Mobile No</th>
                <th className="border px-4 py-2">Designation</th>
                <th className="border px-4 py-2">Gender</th>
                <th className="border px-4 py-2">Course</th>
                <th className="border px-4 py-2">Create Date</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-center text-xs">
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{employee.id}</td>
                  <td className="border px-4 py-2">
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="w-10 h-10 mx-auto rounded-full"
                    />
                  </td>
                  <td className="border px-4 py-2">{employee.name}</td>
                  <td className="border px-4 py-2 text-blue-500">
                    <a href={`mailto:${employee.email}`}>{employee.email}</a>
                  </td>
                  <td className="border px-4 py-2">{employee.mobile}</td>
                  <td className="border px-4 py-2">{employee.designation}</td>
                  <td className="border px-4 py-2">{employee.gender}</td>
                  <td className="border px-4 py-2">{employee.course}</td>
                  <td className="border px-4 py-2">{employee.createDate}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-blue-500 text-white py-1 px-2 rounded mx-1 hover:bg-blue-600 transition duration-200"
                      onClick={() => handleEdit(employee)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded mx-1 hover:bg-red-600 transition duration-200"
                      onClick={() => handleDelete(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default EmployeeList;
