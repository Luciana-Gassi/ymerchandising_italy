import React from "react";
import { motion } from "framer-motion";
import Services from "../../assets/images/Services.jpg";

const About = () => {
	const features = [
		{
			title: "Partner strategico",
			text: "Per l'evoluzione del tuo business",
		},
		{
			title: "Soluzioni innovative",
			text: "Di visual commerce",
		},
		{
			title: "Esperienza consolidata",
			text: "Nel settore",
		},
		{
			title: "Tecnologie all'avanguardia",
			text: "Per il tuo successo",
		},
	];

	return (
		<section className="py-24 bg-white">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Colonna testo */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="text-3xl font-bold text-ym-gray-dark mb-6">
							Chi Siamo
						</h2>
						<p className="text-ym-gray-text mb-8">
							UPSYSTEMS S.p.A. è una PMI Innovativa specializzata nella Digital
							Transformation. Con la nostra piattaforma YourMerchandising,
							rivoluzionaimo il modo in cui le aziende gestiscono il loro
							merchandising aziendale.
						</p>

						<div className="space-y-4 mb-8">
							{features.map((feature, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="flex items-center gap-3"
								>
									<div className="w-2 h-2 rounded-full bg-ym-red" />
									<div>
										<span className="font-semibold text-ym-gray-dark">
											{feature.title}
										</span>
										<span className="text-ym-gray-text ml-2">
											{feature.text}
										</span>
									</div>
								</motion.div>
							))}
						</div>

						<div className="flex gap-4">
							<button className="px-6 py-3 bg-ym-red text-white rounded-full hover:bg-opacity-90 transition-colors">
								Contattaci
							</button>
							<button className="px-6 py-3 border-2 border-ym-red text-ym-red rounded-full hover:bg-ym-red hover:text-white transition-colors">
								Case Studies
							</button>
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
								src={Services}
								alt="What we do"
								className="w-full h-[500px] object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
						</div>

						{/* Badge esperienza */}
						<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-full shadow-xl flex flex-col items-center justify-center">
							<div className="text-3xl font-bold text-ym-red">15+</div>
							<div className="text-sm text-ym-gray-dark text-center">
								Anni di
								<br />
								Esperienza
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
