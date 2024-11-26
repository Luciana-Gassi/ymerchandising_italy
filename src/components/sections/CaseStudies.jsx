import React from "react";
import { motion } from "framer-motion";
import polimilogo from "../../assets/images/polimilogo.png";
import polimi_img from "../../assets/images/polimi_img.jpg";
import acfFiorentina from "../../assets/images/acfFiorentina.jpg";
import asiago from "../../assets/images/asiago.jpg";
import genoaCricket from "../../assets/images/genoaCricket.jpg";

const CaseStudies = () => {
	const additionalCases = [
		{
			logo: genoaCricket,
			name: "Genoa Cricket and Football Club",
			description:
				"Personalizzazione e distribuzione del merchandising ufficiale per uno dei club più antichi d'Italia.",
		},
		{
			logo: acfFiorentina,
			name: "ACF Fiorentina",
			description:
				"Gestione completa dell'e-commerce per il merchandising ufficiale della squadra viola.",
		},
		{
			logo: asiago,
			name: "Consorzio Tutela Formaggio Asiago",
			description:
				"Sviluppo di una linea merchandising personalizzata per promuovere l'eccellenza del Made in Italy.",
		},
	];

	const polimiFeatures = [
		"Piattaforma e-commerce personalizzata",
		"Gestione completa ordini e consegne",
		"Analytics e reporting in tempo reale",
	];

	return (
		<section className="py-24 bg-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl font-bold text-ym-gray-dark mb-6">
						Storie di Successo
					</h2>
				</motion.div>

				{/* Main Case Study - POLIMI */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
				>
					<div className="grid md:grid-cols-2">
						{/* Image Side */}
						<div className="relative h-64 md:h-auto">
							<img
								src={polimi_img}
								alt="POLIMI Case Study"
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-ym-blue/50 to-transparent" />
						</div>

						{/* Content Side */}
						<div className="p-8 md:p-12">
							<div className="flex items-center gap-4 mb-6">
								<img
									src={polimilogo}
									alt="POLIMI Logo"
									className="h-8 w-auto"
								/>
								<div>
									<h3 className="text-xl font-bold text-ym-blue">
										POLIMI Graduate School of Management
									</h3>
									<p className="text-ym-gray-text">Success Story</p>
								</div>
							</div>

							<blockquote className="mb-8">
								<p className="text-lg text-ym-gray-text italic mb-4">
									"YourMerchandising ci ha permesso di trasformare il nostro
									approccio al merchandising istituzionale con una soluzione
									completa e innovativa. La piattaforma è intuitiva e il
									servizio è eccellente."
								</p>
								<footer className="text-ym-gray-text">
									<cite className="font-semibold text-ym-blue">
										Direzione Marketing
									</cite>{" "}
									- POLIMI Graduate School of Management
								</footer>
							</blockquote>

							<div className="space-y-4">
								{polimiFeatures.map((feature, index) => (
									<div key={index} className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-full bg-ym-blue/10 flex items-center justify-center flex-shrink-0">
											<svg
												className="w-4 h-4 text-ym-blue"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M5 13l4 4L19 7"
												/>
											</svg>
										</div>
										<p className="text-ym-gray-text">{feature}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</motion.div>

				{/* Additional Case Studies */}
				<div className="grid md:grid-cols-3 gap-8">
					{additionalCases.map((caseStudy, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
						>
							<div className="text-center mb-4">
								<img
									src={caseStudy.logo}
									alt={`${caseStudy.name} Logo`}
									className="h-16 w-auto mx-auto mb-3"
								/>
								<h4 className="text-xl font-semibold text-ym-gray-dark">
									{caseStudy.name}
								</h4>
							</div>
							<p className="text-ym-gray-text text-center">
								{caseStudy.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CaseStudies;
