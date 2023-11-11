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
    <Card className="text-slate-500">
      <CardHeader>
        <CardTitle>{schoolName}</CardTitle>
        <CardDescription>{graduationYear}</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold text-md">{major}</h3>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant={"outlineZ"}>View More</Button>
      </CardFooter>
    </Card>
  );
};

export default EducationLevel;
