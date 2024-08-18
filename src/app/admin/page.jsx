// src/app/admin/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUser, signOut } from '@/lib/supabase';

export default function AdminPanel() {
	const [user, setUser] = useState(null);
	const router = useRouter();

	useEffect(() => {
		const fetchUser = async () => {
			const loggedUser = await getUser();

			if (!loggedUser) {
				router.push('/login');
			} else {
				setUser(loggedUser);
				localStorage.setItem('user', JSON.stringify(loggedUser)); // Store user in localStorage
			}
		};

		fetchUser();
	}, [router]);

	const handleLogout = async () => {
		const { error } = await signOut();

		if (!error) {
			localStorage.removeItem('user');
			router.push('/login');
		}
	};

	if (!user) {
		return null; // Or a loading indicator while the user data is being fetched
	}

	return (
		<div>
			<div>Welcome to the Admin Panel</div>
			<button onClick={handleLogout}>Logout</button>
			{/* Add your admin functionalities here */}
		</div>
	);
}
