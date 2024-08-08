'use client'
import React from 'react';
import Image from "next/image";
import logo from "@/assets/logoBg.svg";

function Landing() {
	return (
		<section className={'relative w-screen h-screen flex items-center justify-center'}>
			<h1
				className={'font-limelight text-[60px] md:text-[120px] lg:text-[220px] text-center sticky top-1/2 leading-none transform -translate-y-1/2'}
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
