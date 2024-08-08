'use client'
import React, { useState } from 'react';
import Navlink from "@/components/navbar/Navlink";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import facebookLogo from "@/assets/socials/facebook.svg";
import instagramLogo from "@/assets/socials/instagram.svg";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="fixed top-0 z-50 px-[10%] py-2 w-screen h-auto bg-black lg:bg-transparent flex flex-row items-center justify-between">
			<div className="hidden lg:flex w-2/5 justify-between items-center">
				<Navlink text="Početna" link="#pocetna"/>
				<Navlink text="O Nama" link="#pocetna"/>
				<Navlink text="Tim" link="#pocetna"/>
			</div>
			<Image src={logo} alt='Logo slika KUD "1001 noć" Fojnica' width={100} className="lg:flex hidden mx-0 lg:mx-auto"/>
			<div className="hidden lg:flex w-2/5 justify-between items-center">
				<Navlink text="Događaji" link="#pocetna"/>
				<Navlink text="Galerija" link="#pocetna"/>
				<Navlink text="Kontakt" link="#pocetna"/>
			</div>

			<Image src={logo} alt='Logo slika KUD "1001 noć" Fojnica' width={50} className="lg:hidden flex mx-0 lg:mx-auto"/>

			<div className="lg:hidden flex bg-black">
				<div className={'w-[40px] flex flex-col items-stretch justify-center gap-2'} onClick={toggleMenu}>
					<div className={'w-full h-[3px] bg-white rounded-2xl'}></div>
					<div className={'w-full h-[3px] bg-white rounded-2xl'}></div>
					<div className={'w-full h-[3px] bg-white rounded-2xl'}></div>
				</div>
			</div>

			<div
				className={`fixed top-0 right-0 w-screen h-screen bg-black flex flex-col justify-center items-start gap-16 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
				<div className="absolute top-0 w-full py-5 px-[5%] flex flex-row justify-between items-center">
					<Image src={logo} alt={'Company logo'} width={50}/>
					<div className={'relative w-[40px] flex flex-col items-stretch justify-center gap-0'}
						 onClick={toggleMenu}>
						<div className={'absolute w-full h-[3px] bg-white rounded-2xl rotate-45'}></div>
						<div className={'absolute w-full h-[3px] bg-white rounded-2xl -rotate-45'}></div>
					</div>
				</div>
				<nav className="flex flex-col items-start px-[5%] justify-center gap-4 h-auto">
					<Navlink text="Početna" link="#pocetna" onClick={toggleMenu} className="mb-4 text-2xl"/>
					<Navlink text="O Nama" link="#pocetna" onClick={toggleMenu} className="mb-4 text-2xl"/>
					<Navlink text="Tim" link="#pocetna" onClick={toggleMenu} className="mb-4 text-2xl"/>
					<Navlink text="Događaji" link="#pocetna" onClick={toggleMenu} className="mb-4 text-2xl"/>
					<Navlink text="Galerija" link="#pocetna" onClick={toggleMenu} className="mb-4 text-2xl"/>
					<Navlink text="Kontakt" link="#pocetna" onClick={toggleMenu} className="mb-4 text-2xl"/>
				</nav>
				<div className={'w-full flex flex-col justify-center items-center gap-4'}>
					<div className={'w-full flex flex-row justify-center items-center gap-8'}>
						<a href={'https://www.instagram.com/'}>
							<Image className={'max-w-10 h-auto'} src={instagramLogo} alt="Instagram logo"/>
						</a>
						<a href={'https://www.facebook.com/'}>
							<Image className={'max-w-10 h-auto'} src={facebookLogo} alt="Fcebook logo"/>
						</a>
					</div>
					<a className={'text-white font-bold text-xl tracking-wider'}
					   href={'mailto:kud@1001noc.org'}>kud@1001noc.org</a>
					<p className={'text-mainGreen font-medium text-lg tracking-widest'}>©2006</p>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
