import EducationLevel from "./Card";

const Education = () => {
  return (
    <div>
      <div className="mb-5">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-slate-500">
          Education
        </h2>
        <p className="text-md text-muted-foreground">
          Here is summary of the places I studied
        </p>
      </div>
      <div className="flex flex-wrap gap-5">
        <EducationLevel
          schoolName="UAF ── University of Agriculture Faisalabad"
          graduationYear="2021-25"
          major="Computer Science"
          description="Bachelors of Study in Computer Science"
        />
        <EducationLevel
          schoolName="PGC ── Punjab Group of Colleges"
          graduationYear="2018-20"
          major="Computer Science"
          description="Intermediate with Computer Science"
        />
        <EducationLevel
          schoolName="PSS ── Progressive Science School, Faisalabad"
          graduationYear="2016-1818"
          major="Computer Science"
          description="Matriculation in Computer Science"
        />
      </div>
    </div>
  );
};

export default Education;
