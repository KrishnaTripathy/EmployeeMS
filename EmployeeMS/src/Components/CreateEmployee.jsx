import  { useState } from 'react';

const CreateEmployee = ({ onAddEmployee }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    course: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = URL.createObjectURL(e.target.files[0]); 
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEmployee(formData); 
    setFormData({
      name: '',
      email: '',
      mobile: '',
      designation: '',
      gender: '',
      course: '',
      image: ''
    });
  };

  return (
    <div className="create-employee p-4 bg-gray-100 shadow rounded">
      <h2 className="text-lg font-semibold mb-4">Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 w-full mb-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 w-full mb-2"
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
          className="border p-2 w-full mb-2"
        />
        <select
          name="designation"
          onChange={handleChange}
          value={formData.designation}
          required
          className="border p-2 w-full mb-2"
        >
          <option value="">Select Designation</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
        </select>
        <div className="mb-2">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              required
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
              required
            />{" "}
            Female
          </label>
        </div>
        <div className="mb-2">
          <label>
            <input
              type="checkbox"
              name="course"
              value="MCA"
              onChange={handleChange}
            />{" "}
            MCA
          </label>
          <label>
            <input
              type="checkbox"
              name="course"
              value="BCA"
              onChange={handleChange}
            />{" "}
            BCA
          </label>
          <label>
            <input
              type="checkbox"
              name="course"
              value="BSC"
              onChange={handleChange}
            />{" "}
            BSC
          </label>
        </div>
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          accept="image/*"
          className="border p-2 w-full mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateEmployee;
