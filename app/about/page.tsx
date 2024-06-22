import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>HR</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Mern Stack Developer & Devops Engineer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
        I'm an innovative and driven Full Stack Developer and DevOps Engineer with a passion for delivering high-quality 
        software solutions. My journey in technology has equipped me with a deep understanding of the MERN stack,
         allowing me to build scalable and efficient applications. My expertise doesn't stop at development; 
         I excel in optimizing development pipelines to ensure seamless project execution. 
         With a focus on continuous learning and staying ahead of industry trends, I bring a fresh perspective and 
         cutting-edge solutions to every project. Join me as I share insights, tips, and experiences from the world 
         of full stack development and DevOps.

        </p>
      </div>
    </div>
  );
}