import React from "react";
import { motion } from "framer-motion";

const KeyNumbers = () => {
	const stats = [
		{ number: "10k+", label: "Prodotti Personalizzabili" },
		{ number: "24h", label: "Tempo di Stampa" },
		{ number: "48h", label: "Consegna in Italia" },
		{ number: "100%", label: "Soddisfazione Cliente" },
	];

	return (
		<section className="py-16 bg-gradient-to-r from-ym-red to-ym-blue relative overflow-hidden">
			{/* Background overlay e decorazioni */}
			<div className="absolute inset-0 bg-black/30" />
			<div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl" />
			<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl" />

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="text-center"
						>
							<div className="text-4xl md:text-5xl font-bold text-white mb-2">
								{stat.number}
							</div>
							<div className="text-white/80 text-sm md:text-base">
								{stat.label}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default KeyNumbers;
