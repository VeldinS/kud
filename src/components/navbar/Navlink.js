import React from 'react';
import Link from "next/link";

function Navlink({link, text}) {
	return (
		<Link href={link} className={'group flex flex-col items-center justify-center gap-2'}>
			<p className={'font-inter font-medium text-xl text-white tracking-widest'}>{text}</p>
			<div className={'w-[0%] group-hover:w-[120%] h-[3px] bg-white transition-all duration-500'}></div>
		</Link>
	);
}

export default Navlink;