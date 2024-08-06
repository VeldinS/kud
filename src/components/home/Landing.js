'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import logo from "@/assets/logoBg.svg";

function Landing() {
	const [style, setStyle] = useState({ opacity: 1, transform: 'scale(1)', zIndex: 10 });

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const triggerScroll = 50;
			const newOpacity = scrollY > triggerScroll ? 0.1 : 1;
			const newScale = scrollY > triggerScroll ? 0.9 : 1;
			const newZIndex = scrollY > triggerScroll ? 0 : 10;
			setStyle({ opacity: newOpacity, transform: `scale(${newScale})`, zIndex: newZIndex });
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<section className={'relative w-screen h-screen flex flex-col items-center justify-center'}>
			<h1
				className={'fixed font-limelight text-[220px] transition-all transition-z-index duration-1000'}
				style={style}
			>
				1001 NOĆ
			</h1>
			<Image
				className={'absolute -bottom-1/3 right-0 opacity-5'}
				src={logo}
				alt={'Logo slika KUD "1001 noć" Fojnica'}
				width={500}
			/>
		</section>
	);
}

export default Landing;
