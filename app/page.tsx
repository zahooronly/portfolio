import Education from "@/components/Education";
import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/ModeToggle";
export default function Home() {
  return (
    <main>
      {/* <div className="relative"> */}
      {/* positions in the stack. */}
      {/* Relative 
          Absolute
          Fixed
          Static
          Sticky
          Inherit
          Initial
          Unset
      */}

      <div className="fixed top-20 right-10 z-10">
        <ModeToggle />
        {/* </div> */}
      </div>
      <Hero />
      <Education />
    </main>
  );
}
