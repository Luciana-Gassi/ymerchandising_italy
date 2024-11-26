import React from "react";
import { motion } from "framer-motion";
import web_control from "../../assets/images/web_control_panel.jpg";
import augmented_reality from "../../assets/images/augmented_reality.jpg";
import visualplatform from "../../assets/images/visualplatform.jpg";

const Technology = () => {
	const technologies = [
		{
			title: "Configuratore 3D Real-time",
			features: [
				"Visualizzazione immediata delle personalizzazioni",
				"Rotazione 360° dei prodotti",
				"Zoom sui dettagli in alta definizione",
				"Export dei design in tempo reale",
				"Compatibile tutti dispositivi",
			],
			image: web_control,
			badge: "3D",
		},
		{
			title: "Try-On in Realtà Aumentata",
			features: [
				"Prova virtuale istantanea",
				"Nessuna app richiesta",
				"Visualizzazione in scala reale",
				"Condivisione immediata sui social",
				"Compatibilità cross-platform",
			],
			image: augmented_reality,
			badge: "AR",
		},
		{
			title: "Piattaforma Visual Commerce",
			features: [
				"Dashboard intuitiva per gestione completa",
				"Analytics in tempo reale",
				"Gestione multi-store centralizzata",
				"Integrazione e-commerce nativa",
				"Personalizzazione completa interfaccia",
			],
			image: visualplatform,
			badge: "VC",
		},
	];

	return (
		<section className="py-24 bg-ym-beige relative">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl font-bold text-ym-gray-dark mb-6">
						Tecnologie Innovative
					</h2>
					<p className="text-ym-gray-text max-w-3xl mx-auto">
						Scopri come le nostre soluzioni all'avanguardia trasformano
						l'esperienza del merchandising aziendale
					</p>
				</motion.div>

				<div className="space-y-24">
					{technologies.map((tech, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className={`grid md:grid-cols-2 gap-12 items-center ${
								index % 2 === 1 ? "md:flex-row-reverse" : ""
							}`}
						>
							{/* Immagine */}
							<div className="relative">
								<div className="relative rounded-2xl overflow-hidden shadow-xl">
									<img
										src={tech.image}
										alt={tech.title}
										className="w-full h-[400px] object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
								</div>
								<div className="absolute -bottom-4 -right-4 w-16 h-16 bg-ym-red text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
									{tech.badge}
								</div>
							</div>

							{/* Contenuto */}
							<div className={index % 2 === 1 ? "md:pr-12" : "md:pl-12"}>
								<h3 className="text-2xl font-bold text-ym-blue mb-6">
									{tech.title}
								</h3>
								<ul className="space-y-4">
									{tech.features.map((feature, fIndex) => (
										<li key={fIndex} className="flex items-start gap-3">
											<div className="w-6 h-6 rounded-full bg-ym-red/10 flex items-center justify-center flex-shrink-0 mt-1">
												<svg
													className="w-4 h-4 text-ym-red"
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
											<span className="text-ym-gray-text">{feature}</span>
										</li>
									))}
								</ul>
								<button className="mt-8 px-8 py-3 bg-ym-red text-white rounded-full hover:bg-opacity-90 transition-colors">
									Scopri di più
								</button>
							</div>
						</motion.div>
					))}
				</div>

				{/* Extra Features */}
				<div className="grid md:grid-cols-3 gap-8 mt-24">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white p-8 rounded-xl shadow-lg"
					>
						<h4 className="text-xl font-bold text-ym-blue mb-4">
							Performance Ottimizzate
						</h4>
						<p className="text-ym-gray-text">
							Caricamento ultra-rapido delle immagini e rendering 3D ottimizzato
							per ogni dispositivo.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="bg-white p-8 rounded-xl shadow-lg"
					>
						<h4 className="text-xl font-bold text-ym-blue mb-4">
							Sicurezza Avanzata
						</h4>
						<p className="text-ym-gray-text">
							Protezione SSL, backup automatici e monitoraggio continuo della
							sicurezza.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="bg-white p-8 rounded-xl shadow-lg"
					>
						<h4 className="text-xl font-bold text-ym-blue mb-4">
							Analytics Integrato
						</h4>
						<p className="text-ym-gray-text">
							Monitoraggio completo delle performance di vendita e comportamento
							utente.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Technology;
