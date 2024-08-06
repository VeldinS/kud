import React from 'react';
import Navlink from "@/components/navbar/Navlink";
import Image from "next/image";

import logo from "@/assets/logo.svg";

function Navbar() {
	return (
		<nav className="fixed top-0 z-50 w-screen h-auto px-[10%] py-2 flex items-center justify-between">
			<div className="w-2/5 flex justify-between items-center">
				<Navlink text="Početna" link="#pocetna"/>
				<Navlink text="O Nama" link="#pocetna"/>
				<Navlink text="Tim" link="#pocetna"/>
			</div>
			<Image src={logo} alt='Logo slika KUD "1001 noć" Fojnica' width={100} className="mx-auto"/>
			<div className="w-2/5 flex justify-between items-center">
				<Navlink text="Događaji" link="#pocetna"/>
				<Navlink text="Galerija" link="#pocetna"/>
				<Navlink text="Kontakt" link="#pocetna"/>
			</div>
		</nav>

	);
}

export default Navbar;