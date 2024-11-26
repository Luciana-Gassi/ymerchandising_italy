import React from "react";
import { motion } from "framer-motion";

const Features = () => {
	const features = [
		{
			title: "Personalizzazione Completa",
			description:
				"Design su misura per riflettere l'identità unica del tuo brand, senza limiti minimi di ordine.",
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
						d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
					/>
				</svg>
			),
		},
		{
			title: "Produzione On-Demand",
			description:
				"Zero stock, produzione just-in-time e consegne in 24-48 ore in tutta Italia.",
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
						d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			),
		},
		{
			title: "Innovazione Tecnologica",
			description:
				"Configuratore 3D in tempo reale e realtà aumentata per un'esperienza d'acquisto immersiva.",
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
						d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
					className="grid md:grid-cols-3 gap-8"
				>
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="relative bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
						>
							<div className="flex items-center justify-center w-12 h-12 bg-ym-red/10 rounded-xl mb-6">
								<span className="text-ym-red">{feature.icon}</span>
							</div>
							<h3 className="text-xl font-bold text-ym-gray-dark mb-4">
								{feature.title}
							</h3>
							<p className="text-ym-gray-text">{feature.description}</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Features;
