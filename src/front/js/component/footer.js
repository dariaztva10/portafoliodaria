import React from "react";
import "../../styles/footer.css";

export const Footer = () => {
	return (
		<footer className="footer py-4 text-center">
			<div className="footer-container">
				<p>Made with ❤️ by Daria</p>



				<div className="social-icons">
					<a href="https://github.com/dariaztva10" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-github"></i>
					</a>
					<a href="https://www.linkedin.com/in/dariadachazotova/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-linkedin"></i>
					</a>
					<a href="mailto:dariaztva@gmail.com">
						<i className="fas fa-envelope"></i>
					</a>
				</div>
			</div>
		</footer>
	);
};
