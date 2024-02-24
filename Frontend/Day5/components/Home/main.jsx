import Heading from "./heading"
import "../../assets/css/main.css"
import { Link } from "react-router-dom"

const Main = () => {
  return (
    <div>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='button'>
            <button className='primary-btn'>
                GET STARTED NOW 
              </button>
              <Link to="/college">
              <button >
                VIEW COURSE
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <div className='margin'></div> */}
    </div>
  )
}

export default Main