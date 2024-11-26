import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import YMLogo from "../../assets/images/YourMerch_logorb.png";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed w-full top-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-white/95 backdrop-blur-sm shadow-lg"
					: "bg-gradient-to-b from-black/50 to-transparent"
			}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between py-2">
					{/* Logo - Opzione 1: Con sfondo chiaro */}
					<div className="flex items-center">
						<Link
							to="/"
							className={`flex items-center transition-transform hover:scale-105 duration-300 rounded-2xl ${
								isScrolled ? "" : "bg-white/90 px-4 py-2"
							}`}
						>
							<img
								src={YMLogo}
								alt="YourMerchandising Logo"
								className={`h-16 transition-all duration-300 ${
									isScrolled ? "brightness-100" : "brightness-110"
								}`}
							/>
						</Link>
					</div>

					{/* Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{[
							{ name: "Soluzioni", href: "#soluzioni" },
							{ name: "Case Studies", href: "#case-studies" },
							{ name: "Tecnologie", href: "#tecnologie" },
							{ name: "Contatti", href: "#contatti" },
						].map((item) => (
							<Link
								key={item.name}
								to={item.href}
								className={`font-medium transition-all duration-300 hover:text-ym-red ${
									isScrolled
										? "text-ym-gray-dark"
										: "text-white hover:text-ym-red"
								}`}
							>
								{item.name}
							</Link>
						))}
						<Link
							to="#demo"
							className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
								isScrolled
									? "bg-ym-red text-white hover:bg-opacity-90"
									: "bg-white text-ym-red hover:bg-ym-red hover:text-white"
							}`}
						>
							Richiedi Demo
						</Link>
					</nav>

					{/* Mobile Menu Button */}
					<button className="md:hidden p-2">
						<svg
							className={`w-6 h-6 transition-colors duration-300 ${
								isScrolled ? "text-ym-gray-dark" : "text-white"
							}`}
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
