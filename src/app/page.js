import Navbar from "@/components/navbar/Navbar";
import Landing from "@/components/home/Landing";

import {BackgroundGradientAnimation} from "@/components/ui/background-gradient";
import {About} from "@/components/home/About";

export default function Home() {
    return (
        <div>
            <div className={'fixed top-0 bottom-0 left-0 right-0 z-0'}>
                <BackgroundGradientAnimation></BackgroundGradientAnimation>
            </div>
            <Navbar />
            <Landing />
            <About />
        </div>
    );
}
