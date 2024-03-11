import  { useState, useEffect } from 'react'
import './AdminCourse.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AHeader from '../header/AdminHeader'


const Coursedet = () => {
  const [users, setUsers] = useState([])
  const [formData, setFormData] = useState({
    cid: '',
    coursename: '',
    college: ''
  })
  const [isEdit, setIsEdit] = useState(false)
  const navigate = useNavigate()



  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/courses')
      setUsers(response.data)
    } catch (error) {
      console.error('Error fetching courses:', error)
    }
  }

  const handleLogout = () => {
    navigate('/')
    console.log('Logged out')
  }

  const deleteUser = async (cid) => {
    try {
      await axios.delete(`http://localhost:8080/api/courses/${cid}`)
      setUsers(users.filter((user) => user.cid !== cid))
    } catch (error) {
      console.error('Error deleting course:', error)
    }
  }

  const handleEdit = (user) => {
    setFormData(user)
    setIsEdit(true)
    
  }

  const handleSave = async () => {
    try {
      if (isEdit) {
        await axios.put(`http://localhost:8080/api/courses/${formData.cid}`, formData)
        setUsers(
          users.map((user) => (user.cid === formData.cid ? formData : user))
        )
      } else {
        const response = await axios.post('http://localhost:8080/api/courses', formData)
        setUsers([...users, { ...response.data }])
      }
      setFormData({ cid: '', coursename: '', college: '' })
      setIsEdit(false)
      
    } catch (error) {
      console.error('Error saving course:', error)
    }
  }

  return (
    <div>
      {/* <center>
        <h2 className="adpan">ADMINISTRATION PANEL</h2>
      </center> */}
      <AHeader/>
      <div className="admin-dashboard">
        {/* <div className="sidebar">
          <ul>
            <li><a href="/ad-db">Profile</a></li>
            <li><a href="/users">Users Management</a></li>
            <li><a href="/courseMan">Course Management</a></li>
            <li><a href="/appMan">Applicant Management</a></li>
            <li><a href="/">LogOut</a></li>
          </ul>
        </div> */}
        <div className="admin-profile-container">
          <div className="admin-profile-header">
            <h1>Welcome, Admin</h1>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
          <div className="admin-profile-content">
            <div className="user-table">
              <h2>Courses</h2>
              <table>
                <thead>
                  <tr>
                    <th>Course ID</th>
                    <th>Course Name</th>
                    <th>College</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.cid}>
                      <td>{user.cid}</td>
                      <td>{user.coursename}</td>
                      <td>{user.college}</td>
                      <td>
                        <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button>
                        <button className="delete-button" onClick={() => deleteUser(user.cid)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
             
            <div className="user-form">
              <h2>{isEdit ? 'Edit Course' : 'Add Course'}</h2>
              <input
                type="text"
                className='b'
                placeholder="Course ID"
                value={formData.cid}
                onChange={(e) => setFormData({ ...formData, cid: e.target.value })}
              />
              <input
                type="text"
                className='b'
                placeholder="Course Name"
                value={formData.coursename}
                onChange={(e) => setFormData({ ...formData, coursename: e.target.value })}
              />
              <input
                type="text"
                className='b'
                placeholder="College"
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
              />
              <button onClick={handleSave} className='save-button'>{isEdit ? 'Save' : 'Add'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coursedet

                  