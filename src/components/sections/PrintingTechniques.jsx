import React from "react";
import { motion } from "framer-motion";

const PrintingTechniques = () => {
	const techniques = [
		{
			title: "Stampa Digitale",
			description:
				"Perfetta per loghi multicolore con finiture opache, lucide o in rilievo. Notevole resistenza ai danni e allo scolorimento.",
			features: [
				"Ideale per piccole quantità",
				"Alta qualità dei dettagli",
				"Colori CMYK brillanti",
			],
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
					/>
				</svg>
			),
		},
		{
			title: "Ricamo",
			description:
				"Decorazione di alta qualità con fili di diversi colori. Impatto visivo di grande effetto e massima durabilità.",
			features: [
				"Fino a 12 colori disponibili",
				"Perfetto per tessuti",
				"Effetto premium garantito",
			],
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
					/>
				</svg>
			),
		},
		{
			title: "Incisione Laser",
			description:
				"Incisione di altissima precisione per risultati eleganti e duraturi. Ideale per materiali premium.",
			features: [
				"Precisione millimetrica",
				"Effetto elegante garantito",
				"Adatto a più materiali",
			],
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
					/>
				</svg>
			),
		},
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
					<h3 className="text-3xl font-bold text-ym-gray-dark mb-4">
						Le Nostre Tecniche di Stampa
					</h3>
					<div className="w-24 h-1 bg-ym-red mx-auto mb-8" />
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8">
					{techniques.map((technique, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
						>
							<div className="w-16 h-16 bg-ym-red/10 rounded-full flex items-center justify-center mb-6 mx-auto">
								<span className="text-ym-red">{technique.icon}</span>
							</div>

							<h4 className="text-xl font-bold text-ym-blue mb-4 text-center">
								{technique.title}
							</h4>

							<p className="text-ym-gray-text mb-6 text-center">
								{technique.description}
							</p>

							<ul className="space-y-3">
								{technique.features.map((feature, fIndex) => (
									<li key={fIndex} className="flex items-center gap-2">
										<span className="w-1.5 h-1.5 bg-ym-red rounded-full" />
										<span className="text-ym-gray-text">{feature}</span>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mt-16 text-center"
				>
					<button className="px-8 py-4 bg-ym-red text-white rounded-full hover:bg-opacity-90 transition-colors">
						Richiedi una Consulenza
					</button>
				</motion.div>
			</div>
		</section>
	);
};

export default PrintingTechniques;
