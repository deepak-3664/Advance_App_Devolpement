import '../../assets/css/Courses.css';
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <div>
      <center><h2 className='ug'>Under-Graduate Courses</h2></center>
      <div className="course-container">
        <div className="course-card">
          <div className="course-card-content">
          <Link to="/Form" className='link'> B.Tech Information Technology</Link>
          </div>
        </div>
        {/* Repeat the above div block for each degree card, changing the content as necessary */}
        <div className="course-card">
          <div className="course-card-content">
            B.E Computer Science and Engineering
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
            B.E Mechanical Engineering
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
            B.Tech Artificial Intelligence
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
            B.E Mechatronics Engineering
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
            B.E Civil Engineering
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
            B.E Computer Science and design
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
            Science and Humanities
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
            B.E Computer Science and Engineering(Cyber Security)
          </div>
        </div>
      </div>
      <center><h2 className='pg'>Post-Graduate Courses</h2></center>
      <div className="course-container">
        <div className="course-card">
          <div className="course-card-content">
            M.E Applied Electronics
          </div>
        </div>
        {/* Repeat the above div block for each degree card, changing the content as necessary */}
        <div className="course-card">
          <div className="course-card-content">
            M.E Computer Science and Engineering
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
            Master of Business Administration
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
            M.E Engineer Design
          </div>
        </div>

      <div>
        <center><h1 className='as'>ARTS AND SCIENCE</h1></center>
      </div>


      <center><h2 className='pg1'>Under-Graduate Courses</h2></center>
      <div className="course-container1">
        <div className="course-card1">
          <div className="course-card-content1">
          B.A English Literature
          </div>
        </div>
        {/* Repeat the above div block for each degree card, changing the content as necessary */}
        <div className="course-card1">
          <div className="course-card-content1">
          B.Sc Mathematics
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          B.Sc Electronics & Communication Systems
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          B.Sc Costume Design and Fashion
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          B.Sc Psychology
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          B.Sc Information Technology 
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          B.Sc Data Science
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          B.Com. Commerce with Computer Application
          </div>
        </div>
      </div>


      <center><h2 className='pg1'>Post-Graduate Courses</h2></center>
      <div className="course-container1">
        <div className="course-card1">
          <div className="course-card-content1">
          M.A. English Literature
          </div>
        </div>
        {/* Repeat the above div block for each degree card, changing the content as necessary */}
        <div className="course-card1">
          <div className="course-card-content1">
          M.A Public Administration
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          M.A Public Administration
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          M.Sc Biotechnology
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          M.Sc Information Technology 
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          M.Sc Computer Technology
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          M.Com. International Business
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          M.Com. Commerce
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Courses;