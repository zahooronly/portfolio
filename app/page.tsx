import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import EndLine from "@/components/EndLine";
import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/ModeToggle";
export default function Home() {
  return (
    <main>
      <div className="fixed top-20 right-10 z-10">
        <ModeToggle />
      </div>
      <Hero />
      <EndLine />
      <Education />
      <EndLine />
      <Certifications />
      <EndLine />
      <Contact />
      <EndLine />
    </main>
  );
}
