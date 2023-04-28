import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/Testing'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby yuccie gatekeep ascot, farm-to-table 90's tote bag craft
            beer synth venmo mukbang cloud bread cray. Franzen tumblr banjo
            thundercats migas trust fund vape hashtag vegan tbh crucifix twee
            gochujang.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
