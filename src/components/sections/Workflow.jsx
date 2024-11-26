import React from "react";
import { motion } from "framer-motion";

const Workflow = () => {
	const steps = [
		{
			number: "1",
			title: "Registrazione",
			description:
				"Accedi a www.yourmerchandising.it e registrati inserendo i tuoi dati.",
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
						d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
					/>
				</svg>
			),
		},
		{
			number: "2",
			title: "Personalizzazione",
			description:
				"Scegli il prodotto che ti piace, personalizzalo col tuo logo o design.",
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
						d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
					/>
				</svg>
			),
		},
		{
			number: "3",
			title: "Condivisione",
			description:
				"Condividi la pagina del prodotto con dipendenti o partecipanti tramite Social.",
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
						d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
					/>
				</svg>
			),
		},
		{
			number: "4",
			title: "Acquisto",
			description:
				"Il tuo gadget è pronto per essere acquistato. Stampa in 24h e consegna in 48h!",
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
						d="M5 13l4 4L19 7"
					/>
				</svg>
			),
		},
	];

	return (
		<section className="py-24 bg-gradient-to-b from-ym-beige to-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl font-bold text-ym-gray-dark mb-4">
						Come Lavoriamo
					</h2>
					<div className="w-24 h-1 bg-ym-red mx-auto" />
				</motion.div>

				<div className="grid md:grid-cols-4 gap-8">
					{steps.map((step, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="relative text-center"
						>
							{/* Step number */}
							<div className="w-16 h-16 bg-ym-red text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
								{step.number}
							</div>

							{/* Connecting line */}
							{index < steps.length - 1 && (
								<div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-ym-red/20">
									<div className="absolute right-0 top-1/2 transform -translate-y-1/2">
										<svg
											className="w-4 h-4 text-ym-red"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
								</div>
							)}

							{/* Icon */}
							<div className="w-12 h-12 bg-ym-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-ym-red">{step.icon}</span>
							</div>

							{/* Content */}
							<h3 className="text-xl font-bold text-ym-blue mb-3">
								{step.title}
							</h3>
							<p className="text-ym-gray-text">{step.description}</p>
						</motion.div>
					))}
				</div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mt-16"
				>
					<button className="px-8 py-4 bg-ym-red text-white rounded-full hover:bg-opacity-90 transition-colors">
						Inizia Ora
					</button>
					<p className="text-ym-gray-text mt-4">
						Nessun impegno, inizia gratuitamente
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default Workflow;
