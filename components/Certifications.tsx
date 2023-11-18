import EducationLevel from "@/components/Card";

const Certifications = () => {
  return (
    <div className="mb-5 sm:mb-8">
      <div className="mb-5">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-slate-500 dark:text-slate-100">
          Certifications.
        </h2>
        <p className="text-md text-muted-foreground">
          Here are some of my certifications.
        </p>
      </div>
      <div className="border-l-4 rounded-sm flex flex-wrap gap-5 items-center justify-center">
        <EducationLevel
          schoolName="PIAIC ── Artificial Intelligence."
          graduationYear="2023 ── Present"
          major="AI and Web 3.0"
          description="Generative Artificial Intelligence."
          popoverTitle="PIAIC ── Presidential Initiative for Artificial Intelligence and Computing."
          popoverMajor="Certified Web 3.0 and Metaverse Developer."
          popoverGraduationYear="2023 ── Present"
          popoverDescription="I am currently enrolled in PIAIC's Artificial Intelligence and Computing program in 2nd Quarter. I am learning about Generative Artificial Intelligence and Web 3.0. I am also learning about the Metaverse and how to develop for it."
        />
        <EducationLevel
          schoolName="SMIT ── Saylani Mass IT Training."
          graduationYear="2022 ── 23"
          major="MERN && t3 Stack"
          description="Web Development with MERN Stack."
          popoverTitle="SMIT ── Saylani Mass IT Training."
          popoverMajor="MERN && t3 Stack"
          popoverGraduationYear="2022 ── 23"
          popoverDescription="Web Development with MERN Stack (MongoDB, Express, React, Node) and React Native for Mobile Development. T3 Stack (Typescript, TailwindCSS, and NextJS 13) for Web Development."
        />
        <EducationLevel
          schoolName="DS ── Digiskills."
          graduationYear="2019 ── 4 Months"
          major="WordPress"
          description="Content Management System (CMS)."
          popoverTitle="DS ── Digiskills."
          popoverMajor="WordPress"
          popoverGraduationYear="2019 ── 4 Months"
          popoverDescription="I have completed my WordPress course from Digiskills. I have learnt about WordPress and how to create a website using WordPress. I have also learnt about Search Engine Optimization (SEO) and how to rank a website on Google."
        />
      </div>
    </div>
  );
};

export default Certifications;
