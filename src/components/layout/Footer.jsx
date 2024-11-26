import React from "react";
import { Link } from "react-router-dom";
import ymlogoWH from "../../assets/images/ym-logoWH.svg"; // Logo bianco per il footer

const Footer = () => {
	const services = [
		{ name: "Merchandising Événementiel", href: "/merchandising" },
		{ name: "Personnalisation", href: "/personnalisation" },
		{ name: "E-commerce", href: "/ecommerce" },
		{ name: "Solutions Digitales", href: "/solutions" },
	];

	const legal = [
		{ name: "Mentions Légales", href: "/terms" },
		{ name: "Politique de Confidentialité", href: "/privacy" },
		{ name: "CGV", href: "/cgv" },
		{ name: "Cookies", href: "/cookies" },
	];

	return (
		<footer className="bg-ym-blue text-white py-12">
			<div className="container mx-auto px-4">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Column 1 - Logo and Company Info */}
					<div>
						<Link to="/" className="block mb-4">
							<img
								src={ymlogoWH}
								alt="YourMerchandising Logo"
								className="h-16 w-auto"
							/>
						</Link>
						<div>
							<a
								href="https://upsystems.it/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white/80 hover:text-white transition-colors"
							>
								Une marque de Upsystems S.p.A.
							</a>
						</div>
					</div>

					{/* Column 2 - Services */}
					<div>
						<h4 className="font-semibold mb-4">Nos Services</h4>
						<ul className="space-y-2 text-white/80">
							{services.map((service, index) => (
								<li key={index}>
									<Link
										to={service.href}
										className="hover:text-white transition-colors"
									>
										{service.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Column 3 - Legal */}
					<div>
						<h4 className="font-semibold mb-4">Légal</h4>
						<ul className="space-y-2 text-white/80">
							{legal.map((item, index) => (
								<li key={index}>
									<Link
										to={item.href}
										className="hover:text-white transition-colors"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Column 4 - Contact */}
					<div>
						<h4 className="font-semibold mb-4">Contact</h4>
						<ul className="space-y-2 text-white/80">
							<li>+33 (0)6 06 68 67 46</li>
							<li>
								<a
									href="mailto:contact@yminternational.pro"
									className="hover:text-white transition-colors"
								>
									contact@yminternational.pro
								</a>
							</li>
							<li>Sophia Antipolis, France</li>
						</ul>
					</div>
				</div>

				{/* Bottom Footer */}
				<div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
					<p>© 2024 YourMerchandising. Tous droits réservés.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
