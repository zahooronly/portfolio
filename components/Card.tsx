import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface EducationLevelProps {
  schoolName: string;
  major: string;
  graduationYear: string;
  description: string;
}

const EducationLevel = ({
  schoolName,
  major,
  graduationYear,
  description,
}: EducationLevelProps) => {
  return (
    <Card className="sm:max-w-[30%] max-w-[100%] sm:min-w-[30%] min-w-[100%]">
      {/* <Card className="text-slate-500 sm:max-w-[30%] max-w-[100%] sm:min-w-[30%] min-w-[100%]"> */}
      <CardHeader>
        <CardTitle>{graduationYear}</CardTitle>
        <CardDescription>{schoolName}</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold text-md">{major}</h3>
        <p className="text-wrap">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant={"outlineZ"}>View More</Button>
      </CardFooter>
    </Card>
  );
};

export default EducationLevel;
