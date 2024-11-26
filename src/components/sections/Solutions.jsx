import React from "react";
import { motion } from "framer-motion";

const Solutions = () => {
	const solutions = [
		{
			title: "All-In-One Solution",
			description:
				"Un interlocutore unico per tutti i tuoi bisogni di branding, assicurando che il tuo evento sia perfettamente equipaggiato.",
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
						d="M4 6h16M4 10h16M4 14h16M4 18h16"
					/>
				</svg>
			),
		},
		{
			title: "Kits Personalizzabili",
			description:
				"Kit su misura adattati alle esigenze della tua azienda, inclusi pacchetti di benvenuto e gadget brandizzati.",
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
						d="M12 6v6m0 0v6m0-6h6m-6 0H6"
					/>
				</svg>
			),
		},
		{
			title: "Esperienza Senza Pensieri",
			description:
				"Gestione completa della logistica, permettendoti di concentrarti sul rendere il tuo evento un successo.",
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
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			),
		},
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
					<h2 className="text-3xl font-bold text-ym-gray-dark mb-6">
						Una Soluzione Completa per il Tuo Evento
					</h2>
					<p className="text-ym-gray-text max-w-3xl mx-auto">
						Comprendiamo l'importanza di ogni dettaglio nell'organizzazione dei
						tuoi eventi tech. Ecco perché abbiamo sviluppato un approccio
						completo che ti permette di concentrarti su ciò che conta di più:
						rendere il tuo evento un successo.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8">
					{solutions.map((solution, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
						>
							<div className="w-12 h-12 bg-ym-red/10 rounded-xl flex items-center justify-center mb-6">
								<span className="text-ym-red">{solution.icon}</span>
							</div>
							<h3 className="text-xl font-bold text-ym-gray-dark mb-4">
								{solution.title}
							</h3>
							<p className="text-ym-gray-text">{solution.description}</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mt-16 text-center"
				>
					<button className="px-8 py-4 bg-ym-red text-white rounded-full hover:bg-opacity-90 transition-colors">
						Scopri Tutte le Soluzioni
					</button>
				</motion.div>
			</div>
		</section>
	);
};

export default Solutions;
