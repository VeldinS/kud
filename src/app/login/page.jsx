// src/app/login/page.jsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmail } from '@/lib/supabase';
import {BackgroundGradientAnimation} from "@/components/ui/background-gradient";
import Image from "next/image";
import logo from "@/assets/logo.svg";

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const router = useRouter();

	const handleLogin = async (e) => {
		e.preventDefault();
		setError('');

		const { data, error } = await signInWithEmail(email, password);
		console.log('Data:', data); // Debugging: Log the data
		console.log('Error:', error); // Debugging: Log the error

		if (error) {
			setError('Pogrešan email ili lozinka.');
			return;
		}

		if (data.user) {
			localStorage.setItem('user', JSON.stringify(data.user));
			setTimeout(() => {
				router.push('/admin');
			}, 100);
		}
		else {
			setError('Something went wrong, please try again.');
		}

	};


	return (
		<div className={'w-screen h-screen flex flex-col items-center justify-center gap-12'}>
			<Image src={logo} alt='Logo slika KUD "1001 noć" Fojnica' width={100} className="absolute top-8 z-10"/>
			<div className={'fixed top-0 bottom-0 left-0 right-0 z-0'}>
				<BackgroundGradientAnimation></BackgroundGradientAnimation>
			</div>
			<div
				className={'w-1/3 flex flex-col items-center justify-center gap-12 py-16 px-5 bg-white/10 backdrop-blur-3xl'}>
				<h1 className={'text-white text-center font-josefinSans text-5xl'}>Admin Prijava</h1>
				<form onSubmit={handleLogin} className={'w-full'}>
					<div className={'w-full flex flex-col items-center justify-center gap-8'}>
						<input
							className="w-full bg-transparent border-b-2 border-b-white text-white text-xl text-center outline-none focus:border-b-white"
							placeholder={'Email'}
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<input
							className="w-full bg-transparent border-b-2 border-b-white text-white text-xl text-center outline-none focus:border-b-white"
							placeholder={'Lozinka'}
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						{error && <p className="text-xl bg-white/80 px-4 py-1 text-red-700">{error}</p>}
						<button
							className={'px-4 py-2 border-2 border-white bg-transparent hover:bg-white hover:scale-110 text-white hover:text-black text-xl font-josefinSans transition-all duration-500'}
							type="submit"
						>
							Prijava
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
