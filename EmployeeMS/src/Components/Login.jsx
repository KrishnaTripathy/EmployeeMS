import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state on each submit

    // Validate inputs
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    try {
      // Call the backend login endpoint
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      // Check if the login was successful
      if (response.ok) {
        alert('Login successful!');
        
        // Handle successful login (e.g., redirect to the dashboard page)
        navigate('/dashboard'); // Redirect to the dashboard using useNavigate
      } else {
        // If login failed, display error message
        setError(data.message || 'Invalid login details');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred while logging in. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold">Login Page</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-2 font-medium text-gray-700">
            User Name
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </form>
      {error && (
        <div className="mt-4 p-3 text-red-700 bg-red-100 border border-red-400 rounded">
          {error}
        </div>
      )}
    </div>
  );
}
