import EducationLevel from "./Card";

const Education = () => {
  return (
    <div>
      <div className="mb-5">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-slate-500 dark:text-slate-100">
          Education
        </h2>
        <p className="text-md text-muted-foreground">
          Here is summary of the places I studied:
        </p>
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        <EducationLevel
          schoolName="UAF ── University of Agriculture Faisalabad"
          graduationYear="2021 ── Present"
          major="Computer Science"
          description="Bachelors of Study in Computer Science."
          popoverTitle="UAF ── University of Agriculture Faisalabad"
          popoverMajor="Computer Science"
          popoverGraduationYear="2021 ── Present"
          popoverDescription="Bachelors of Study in Computer Science. I have completed 4 semesters with a CGPA of 3.56. I am currently in my 5th semester. I've studied OOP, Operating Systems, Data Structures, and Algorithms, and Computer Architecture. I have also studied Web Development with MERN Stack."
        />
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
          schoolName="PGC ── Punjab Group of Colleges."
          graduationYear="2018 ── 20"
          major="Computer Science"
          description="Intermediate with Computer Science."
          popoverTitle="PGC ── Punjab Group of Colleges."
          popoverMajor="Computer Science"
          popoverGraduationYear="2018 ── 20"
          popoverDescription="Intermediate with Computer Science. I have completed my Intermediate with Computer Science. I have studied Physics, Mathematics, and Computer Science. C language is the most important thing that I've learnt in my college. I got 81.72% in my Intermediate."
        />
        <EducationLevel
          schoolName="PSS ── Progressive Science School, Faisalabad."
          graduationYear="2016 ── 2018"
          major="Computer Science"
          description="Matriculation in Computer Science."
          popoverTitle="PSS ── Progressive Science School, Faisalabad."
          popoverMajor="Computer Science"
          popoverGraduationYear="2016 ── 2018"
          popoverDescription="Matriculation in Computer Science. I have completed my Matriculation with Computer Science. I have studied Physics, Mathematics, Chemistry and Computer Science. GW Basic is the most important thing that I've learnt in my school. I got 88.09% in my SSC."
        />
        {/* <EducationLevel
          schoolName="DS ── Digiskills."
          graduationYear="2019 ── 4 Months"
          major="WordPress"
          description="Content Management System (CMS)."
        /> */}
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
      </div>
    </div>
  );
};

export default Education;
