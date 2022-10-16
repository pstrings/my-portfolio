import { FC } from "react";

const Header: FC = () => {
	return (
		<>
			<header>
				<nav>
					<ul className="list-none">
						<li>Home</li>
						<li>Skills</li>
						<li>Projects</li>
						<li>Contact Me</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
