import  { useState } from "react";

const EditEmployee = ({ employee, onSave }) => {
  
  const [updatedEmployee, setUpdatedEmployee] = useState(employee);

  
  const handleChange = (e) => {
    setUpdatedEmployee({ ...updatedEmployee, [e.target.name]: e.target.value });
  };


  const handleGenderChange = (e) => {
    setUpdatedEmployee({ ...updatedEmployee, gender: e.target.value });
  };

  
  const handleCourseChange = (e) => {
    const { value, checked } = e.target;
    let updatedCourses = updatedEmployee.course.split(","); 
    if (checked) {
      
      updatedCourses.push(value);
    } else {
      
      updatedCourses = updatedCourses.filter((course) => course !== value);
    }
    setUpdatedEmployee({ ...updatedEmployee, course: updatedCourses.join(",") }); 
  };

  
  const handleImageUpload = (e) => {
    const file = URL.createObjectURL(e.target.files[0]); 
    setUpdatedEmployee({ ...updatedEmployee, image: file });
  };

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h2 className="text-lg font-semibold mb-4">Edit Employee</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(updatedEmployee); 
        }}
      >
        
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={updatedEmployee.name}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

      
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={updatedEmployee.email}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        
        <div className="mb-4">
          <label className="block mb-2">Mobile No</label>
          <input
            type="text"
            name="mobile"
            value={updatedEmployee.mobile}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        
        <div className="mb-4">
          <label className="block mb-2">Designation</label>
          <select
            name="designation"
            value={updatedEmployee.designation}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
        </div>

        
        <div className="mb-4">
          <label className="block mb-2">Gender</label>
          <div className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={updatedEmployee.gender === "Male"}
              onChange={handleGenderChange}
              className="mr-2"
            />
            <span className="mr-4">Male</span>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={updatedEmployee.gender === "Female"}
              onChange={handleGenderChange}
              className="mr-2"
            />
            <span>Female</span>
          </div>
        </div>

        
        <div className="mb-4">
          <label className="block mb-2">Course</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="course"
              value="MCA"
              checked={updatedEmployee.course.includes("MCA")}
              onChange={handleCourseChange}
              className="mr-2"
            />
            <span className="mr-4">MCA</span>
            <input
              type="checkbox"
              name="course"
              value="BCA"
              checked={updatedEmployee.course.includes("BCA")}
              onChange={handleCourseChange}
              className="mr-2"
            />
            <span className="mr-4">BCA</span>
            <input
              type="checkbox"
              name="course"
              value="BSC"
              checked={updatedEmployee.course.includes("BSC")}
              onChange={handleCourseChange}
              className="mr-2"
            />
            <span>BSC</span>
          </div>
        </div>

        
        <div className="mb-4">
          <label className="block mb-2">Image Upload</label>
          <input
            type="file"
            accept=".jpg, .png"
            onChange={handleImageUpload}
            className="border p-2 w-full"
          />
        </div>

      
        <div className="text-center">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
