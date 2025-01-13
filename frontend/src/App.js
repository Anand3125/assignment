import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, FormHelperText, Input } from '@mui/material';
import './App.css';
import './index.css';

import Homepage from './components/HomePage';
import Users from './components/Users';

// Login Component
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      // Redirect to form page on successful login
      navigate('/form');
    } else {
      setError('Please fill out both fields.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <Button variant="contained" color="primary" fullWidth type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

// Form Component
function FormPage() {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [qualification, setQualification] = useState('');
  const [comments, setComments] = useState('');
  const [otherQualification, setOtherQualification] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !dob || !qualification || !comments) {
      setError('All fields are required!');
      return;
    }

    console.log({
      fullName,
      dob,
      qualification,
      comments,
      otherQualification,
    });

    setFullName('');
    setDob('');
    setQualification('');
    setComments('');
    setOtherQualification('');
    setError('');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-xl font-semibold mb-6">Fill Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Date of Birth"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <FormControl fullWidth required>
              <InputLabel>Qualification</InputLabel>
              <Select
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="MCA">MCA</MenuItem>
                <MenuItem value="BCA">BCA</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
              {qualification === 'Others' && (
                <TextField
                  label="Other Qualification"
                  variant="outlined"
                  fullWidth
                  value={otherQualification}
                  onChange={(e) => setOtherQualification(e.target.value)}
                  className="mt-2"
                />
              )}
            </FormControl>
          </div>
          <div className="mb-4">
            <TextField
              label="Message/Comments"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={comments}
              onChange={(e) => setComments(e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <Button variant="contained" color="primary" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

// Data Table Component
function DataTable() {
  const [data, setData] = useState([
    { fullName: 'John Doe', dob: '1990-01-01', qualification: 'MCA', comments: 'Great!' },
    { fullName: 'Jane Smith', dob: '1992-05-12', qualification: 'BCA', comments: 'Good.' },
  ]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Submitted Data</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Full Name</th>
              <th className="border px-4 py-2">Date of Birth</th>
              <th className="border px-4 py-2">Qualification</th>
              <th className="border px-4 py-2">Comments</th>
            </tr>
          </thead>
          <tbody>
            {data.reverse().map((row, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{row.fullName}</td>
                <td className="border px-4 py-2">{row.dob}</td>
                <td className="border px-4 py-2">{row.qualification}</td>
                <td className="border px-4 py-2">{row.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function App() {
  return (
<>
{/* <Homepage /> */}
<Users />

    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<Login />} />

          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/form" element={<FormPage />} />
          <Route path="/data" element={<DataTable />} />
        </Routes>
      </div>
    </Router>
    
</>
  );
}

export default App;
