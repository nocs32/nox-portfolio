import Footer from "./(components)/footer";
import { Gallery } from "./(components)/gallery";
import { Hero } from "./(components)/hero";
import { Icons } from "./(components)/icons";
import { Introduction } from "./(components)/introduction";
import { JoinMe } from "./(components)/join-me";
import { Philosophy } from "./(components)/philosophy";

export default function Home() {
    return (
        <>
            <Hero />
            <Introduction />
            <Gallery />
            <Icons />
            <Philosophy />
            <JoinMe />
            <Footer />
        </>
    );
}
