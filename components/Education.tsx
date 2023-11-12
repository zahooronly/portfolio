import EducationLevel from "./Card";

const Education = () => {
  return (
    <div>
      <div className="mb-5">
        {/* <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-slate-500"> */}
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ">
          Education
        </h2>
        <p className="text-md text-muted-foreground">
          Here is summary of the places I studied:
        </p>
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        <EducationLevel
          schoolName="UAF ── University of Agriculture Faisalabad"
          graduationYear="2021 - Present"
          major="Computer Science"
          description="Bachelors of Study in Computer Science."
        />
        <EducationLevel
          schoolName="PIAIC ── PI for Artificial Intelligence."
          graduationYear="2023 - Present"
          major="Artificial Intelligence"
          description="Certified Web 3.0 and Metaverse Developer."
        />
        <EducationLevel
          schoolName="PGC ── Punjab Group of Colleges."
          graduationYear="2018 - 20"
          major="Computer Science"
          description="Intermediate with Computer Science."
        />
        <EducationLevel
          schoolName="PSS ── Progressive Science School, Faisalabad."
          graduationYear="2016 - 2018"
          major="Computer Science"
          description="Matriculation in Computer Science."
        />
        <EducationLevel
          schoolName="DS ── Digiskills."
          graduationYear="2019"
          major="WordPress"
          description="Content Management System (CMS)."
        />
        <EducationLevel
          schoolName="Web Application Development."
          graduationYear="2022 - 23"
          major="MERN Stack"
          description="Web Development with MERN Stack."
        />
      </div>
    </div>
  );
};

export default Education;
// (MongoDB, Express, React, Node) and React Native for Mobile Development. T3 Stack (Typescript, TailwindCSS, and NextJS) for Web Development.
