import React from "react";

const Button = ({
	children,
	variant = "primary",
	className = "",
	...props
}) => {
	const baseStyles =
		"px-6 py-3 rounded-full font-medium transition-all duration-300";

	const variants = {
		primary: "bg-ym-red text-white hover:bg-opacity-90 shadow-lg",
		secondary: "bg-white text-ym-red border-2 border-ym-red hover:bg-ym-beige",
		outline:
			"bg-transparent border-2 border-white text-white hover:bg-white hover:text-ym-red",
	};

	return (
		<button
			className={`${baseStyles} ${variants[variant]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
