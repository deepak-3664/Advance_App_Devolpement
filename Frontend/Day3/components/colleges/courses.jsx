import '../../assets/css/Courses.css';


const Courses = () => {
  return (
    <div>
      <center><h1>Under-Graduate Courses</h1></center>
      <div className="course-container">
        <div className="course-card">
          <div className="course-card-content">
            B.Tech Information Technology
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
      <footer>
      </footer>
    </div>
  );
}

export default Courses;