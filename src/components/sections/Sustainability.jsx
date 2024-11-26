import React from "react";
import { motion } from "framer-motion";
import sustainable_dev from "../../assets/images/sustainable-dev.jpg";
import Gots_Cert from "../../assets/images/Gots_Cert.jpg";
import FSC_Cert from "../../assets/images/FSC_Cert.jpg";
import Ecovadis_Cert from "../../assets/images/Ecovadis_Cert.jpg";
import Grs_Cert from "../../assets/images/Grs_Cert.jpg";
import UNglobal_Cert from "../../assets/images/UNglobal_Cert.jpg";
import Ocean_Cert from "../../assets/images/Ocean_Cert.jpg";
import Smeta_Cert from "../../assets/images/Smeta_Cert.jpg";

const Sustainability = () => {
	const features = [
		"Materiali eco-sostenibili certificati",
		"Packaging plastic-free",
		"Produzione on-demand per ridurre gli sprechi",
		"Collaborazioni con fornitori locali",
		"Sistema di riciclo del merchandising usato",
	];

	const certifications = [
		{ image: Gots_Cert, name: "GOTS Certified" },
		{ image: FSC_Cert, name: "FSC Certified" },
		{ image: Ecovadis_Cert, name: "Ecovadis Certified" },
		{ image: Grs_Cert, name: "Global Recycled Standard" },
		{ image: UNglobal_Cert, name: "UN Global Compact" },
		{ image: Ocean_Cert, name: "Ocean Bound Plastic" },
		{ image: Smeta_Cert, name: "SMETA" },
	];

	return (
		<section className="py-24 bg-ym-beige">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl font-bold text-ym-gray-dark mb-4">
						Impegno per la Sostenibilità e Certificazioni
					</h2>
					<div className="w-24 h-1 bg-ym-red mx-auto" />
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Colonna testo */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<h3 className="text-2xl font-bold text-ym-blue mb-6">
							Il Nostro Impegno Verde
						</h3>
						<p className="text-ym-gray-text mb-8">
							Il nostro impegno verso la sostenibilità si traduce in azioni
							concrete per ridurre l'impatto ambientale e promuovere pratiche
							responsabili.
						</p>

						<ul className="space-y-4 mb-8">
							{features.map((feature, index) => (
								<motion.li
									key={index}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="flex items-center gap-3"
								>
									<div className="w-2 h-2 rounded-full bg-ym-red" />
									<span className="text-ym-gray-text">{feature}</span>
								</motion.li>
							))}
						</ul>

						<div>
							<h4 className="text-xl font-bold text-ym-blue mb-6">
								Le Nostre Certificazioni
							</h4>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
								{certifications.slice(0, 4).map((cert, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.1 }}
										className="flex flex-col items-center"
									>
										<img
											src={cert.image}
											alt={cert.name}
											className="h-16 w-auto mb-2 transition-transform hover:scale-110"
										/>
										<p className="text-xs text-center text-ym-gray-text">
											{cert.name}
										</p>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>

					{/* Colonna immagine */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="relative"
					>
						<div className="relative rounded-2xl overflow-hidden shadow-xl">
							<img
								src={sustainable_dev}
								alt="Sostenibilità"
								className="w-full h-[600px] object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
						</div>

						{/* Badge sostenibilità */}
						<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ym-red text-white rounded-full flex flex-col items-center justify-center shadow-xl">
							<div className="text-3xl font-bold">100%</div>
							<div className="text-sm">Sostenibile</div>
						</div>
					</motion.div>
				</div>

				{/* Certificazioni aggiuntive */}
				<div className="mt-16 grid grid-cols-3 gap-4">
					{certifications.slice(4).map((cert, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="flex flex-col items-center"
						>
							<img
								src={cert.image}
								alt={cert.name}
								className="h-16 w-auto mb-2 transition-transform hover:scale-110"
							/>
							<p className="text-xs text-center text-ym-gray-text">
								{cert.name}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Sustainability;
