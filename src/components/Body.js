import {FaGithub, FaLinkedin} from "react-icons/fa"

import Avatar from '../assests/Software.png';

const Body = () => {
    return(
        <div id = "body" className = "body">
        <div className = "body-container">
        <div className = "body-portfolio">
        <img className = "body-img" alt = "avatar" src = {Avatar} height = "200px"  width="300px"/>

        <div className = "body-content">
        <div className = "body-headling">Anwar Ahmad</div>
        <div className = "body-text">Software Developer (Fresher)</div>

        </div>
        <div className = "body-icons">
        <a href = "https://github.com/anwar78692" target = "_blank" rel = "noreferrer" className = "icon-link"><i><FaGithub/></i></a>
        <a href="https://www.linkedin.com/in/anwarahmad78692/" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin /></i></a>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Body;