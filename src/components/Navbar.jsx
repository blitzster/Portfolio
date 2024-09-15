import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import logo from "../assets/logo.png"

function NavBar() {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className="mx-2" width={100} height={55} alt="Logo" />
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-10 text-3xl" >
                <a href="https://www.linkedin.com/in/akshay-s-5388191b9/" target="blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://github.com/blitzster" target="blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>

            </div>
        </nav>
    )
}

export default NavBar