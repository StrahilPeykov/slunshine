import { Hero } from "@/components/sections/hero";
import { PhotoReel } from "@/components/sections/photo-reel";
import { Navigation } from "@/components/layout/navigation";
import { Music } from "@/components/sections/music";
import { CollaborateTeaser } from "@/components/sections/collaborate-teaser";
import { About } from "@/components/sections/about";
import { Lessons } from "@/components/sections/lessons";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-background transition-colors duration-500 overflow-x-hidden">
      <Navigation />
      <Hero />
      <Music />
      <PhotoReel />
      <About />
      <Lessons />
      <CollaborateTeaser />
      <Contact />
      <Footer />
    </main>
  );
}
