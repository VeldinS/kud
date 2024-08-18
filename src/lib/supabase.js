import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iuabsbrilpyfeoswppwd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1YWJzYnJpbHB5ZmVvc3dwcHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyMDY5MzcsImV4cCI6MjAzODc4MjkzN30.GDebfcNNazr05hRJbXgHGLXXFy9jO-7gmLZImPy8tEw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getUser = async () => {
	const { data: { user }, error } = await supabase.auth.getUser();
	console.log('Retrieved User:', user);
	if (error) {
		console.error('Error retrieving user:', error);
	}
	return user;
};


export const signInWithEmail = async (email, password) => {
	const { data, error } = await supabase.auth.signInWithPassword({ email, password });

	if (data?.session?.access_token) {
		document.cookie = `user=${JSON.stringify(data.session.user)}; path=/`;
	}

	return { data, error };
};


export const signOut = async () => {
	const { error } = await supabase.auth.signOut();
	return { error };
};
