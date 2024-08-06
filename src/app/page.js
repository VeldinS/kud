import Navbar from "@/components/navbar/Navbar";
import Landing from "@/components/home/Landing";

import background from '@/assets/Background.svg';

export default function Home() {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
        }}>
            <Navbar />
            <Landing />
        </div>
    );
}
