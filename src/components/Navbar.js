import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles.css/main.css";
import { Link } from "react-router-dom";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header style={{position:"fixed", top:"0", left:"0", right:"0"}}>
			<h3>Ikenna Codes</h3>
			<nav ref={navRef}>
			<Link to="/">
					Home
				</Link>
				<Link to ="/Portfolio">
					My Portfolio Projects
				</Link>
				
				<Link>
				About me
				</Link>
				<Link to="/Contact-Me">
					Contact Me
				</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;