import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  projectName: string;
  projectDescription: string;
  projectLink: string;
  projectImage: string;
}

const ProjectCard = ({
  projectName,
  projectDescription,
  projectLink,
  projectImage,
}: ProjectCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Card>
          <CardHeader>{projectName}</CardHeader>
          <CardDescription className="px-5">
            {projectDescription}
          </CardDescription>
          <CardContent>
            <Link href={projectLink} target="_blank">
              <Image
                src={projectImage}
                alt={projectName}
                width={500}
                height={300}
              />
              {/* <iframe src={projectLink} className=""></iframe> */}
            </Link>
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-[50vw] h-[50vh] flex justify-center items-center">
        <iframe src={projectLink} className="w-[100%] h-[100%]"></iframe>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProjectCard;
