import React, { useEffect, useState } from "react";
import { Alert, CircularProgress, List, ListItem, Typography, Container, Box } from "@mui/material";

const Users = () => {
  const [users, setUsers] = useState([]); // State to store user data
  const [error, setError] = useState(null); // State to store error message
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Function to fetch users
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users/allusers");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data.users); // Assuming the API response has a `users` field
        setLoading(false); // Stop loading
      } catch (err) {
        setError(err.message); // Set error message
        setLoading(false); // Stop loading
      }
    };

    fetchUsers(); // Call the function
  }, []); // Empty dependency array to fetch data once on component mount

  return (
    <Container className="bg-gray-100 py-10" maxWidth="md">
      <Box className="bg-white shadow-lg p-6 rounded-md">
        <Typography
          variant="h4"
          component="h1"
          className="text-center mb-6 text-blue-500 font-bold"
        >
          User List
        </Typography>
        {loading ? (
          <Box className="flex justify-center items-center my-4">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error" className="my-4">
            {error}
          </Alert>
        ) : users.length > 0 ? (
          <List>
            {users.map((user, index) => (
              <ListItem
                key={index}
                className="my-2 bg-gray-100 hover:bg-blue-50 rounded-lg shadow-sm"
              >
                <Typography
                  variant="body1"
                  component="p"
                  className="text-gray-700 font-medium"
                >
                  {index + 1}. Username: {user.username}
                </Typography>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body1" className="text-center text-gray-500">
            No users found.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Users;
