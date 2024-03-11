// AdminProfilePage.jsx
import axios from 'axios';
import { useState } from 'react';
import './AdminProfile.css';
import { useEffect } from 'react';

const Userman = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    fullName: '',
    email: '',
    Mobile: ''
  });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
   
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/students/all'); 
        
        const filteredUsers = response.data.filter(user => user.role.includes('USER'));
        setUsers(filteredUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/students/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    setFormData(user);
    setIsEdit(true);
  };

  const handleSave = async () => {
    if (isEdit) {
      try {
        await axios.put(`http://localhost:8080/api/students/update/${formData.id}`, formData); // Replace with your actual API endpoint
        setUsers(users.map(user => (user.id === formData.id ? formData : user)));
      } catch (error) {
        console.error('Error updating user:', error);
      }
    }

    setFormData({ id: '', fullName: '', email: '', Mobile: '' });
    setIsEdit(false);
  };


  return (
    <div>
    <center><h2 className='adpan'>ADMINISTRATION PANEL</h2></center>

<div className="admin-dashboard">
    <div className="sidebar">
      <ul>
        <li><a href="/ad-db">Profile</a></li>
        <li><a href="/users">Users Management</a></li>
        <li><a href="/courseMan">Course Management</a></li>
        <li><a href="/appMan">Applicant Management</a></li>
        <li><a href="/">LogOut</a></li>
      </ul>
    </div>
    {/* <div className="main-content">
      <Admindetails/>
    </div> */}
    <div className="admin-profile-container">
      <div className="admin-profile-header">
        <h1>Welcome, Admin</h1>
        
      </div>
      <div className="admin-profile-content">
        <div className="user-table">
          <h2>Users</h2>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>
                      <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button> 
                      <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {isEdit && (
            <div className="user-form">
              <h2>Edit User</h2>
              <input
                type="text"
                placeholder="Username"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, FullName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={formData.Mobile}
                onChange={(e) => setFormData({ ...formData, Mobile: e.target.value })}
              />
              <button onClick={handleSave} className='save-button'>Save</button>
            </div>
          )}

      </div>
    </div>
    </div>
    </div>
  );
};

export default Userman;