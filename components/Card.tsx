import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface EducationLevelProps {
  schoolName?: string;
  major?: string;
  graduationYear?: string;
  description?: string;
  popoverTitle?: string;
  popoverMajor?: string;
  popoverGraduationYear: string;
  popoverDescription: string;
}

const EducationLevel = ({
  schoolName,
  major,
  graduationYear,
  description,
  popoverTitle,
  popoverMajor,
  popoverGraduationYear,
  popoverDescription,
}: EducationLevelProps) => {
  return (
    <Card className="ml-2 sm:ml-0 sm:max-w-[30%] text-slate-500 dark:text-slate-100 max-w-[100%] sm:min-w-[30%] min-w-[100%]">
      <CardHeader>
        <CardTitle>{graduationYear}</CardTitle>
        <CardDescription>{schoolName}</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold text-md">{major}</h3>
        <p className="text-wrap">{description}</p>
      </CardContent>
      <CardFooter>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">More Info.</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 sm:ml-5 ml-1">
            <CardHeader>
              <CardTitle>{popoverGraduationYear}</CardTitle>
              <CardDescription>{popoverTitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-md">{popoverMajor}</h3>
              <p className="text-wrap">{popoverDescription}</p>
            </CardContent>
          </PopoverContent>
        </Popover>
      </CardFooter>
    </Card>
  );
};

export default EducationLevel;
