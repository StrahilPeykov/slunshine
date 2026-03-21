import { Hero } from "@/components/sections/hero";
import { PhotoReel } from "@/components/sections/photo-reel";
import { Navigation } from "@/components/layout/navigation";
import { Music } from "@/components/sections/music";
import { SamplesTeaser } from "@/components/sections/samples-teaser";
import { About } from "@/components/sections/about";
import { Lessons } from "@/components/sections/lessons";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-500 overflow-x-hidden">
      <Navigation />
      <Hero />
      <PhotoReel />
      <Music />
      <SamplesTeaser />
      <About />
      <Lessons />
      <Contact />
      <Footer />
    </main>
  );
}
