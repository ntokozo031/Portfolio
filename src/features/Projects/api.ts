import type { Project } from "./types";

const PROJECTS: Project[] = [
  {
    id: "whizzfleet",
    title: "WhizzFleet",
    description:
      "Fleet management platform for scheduling drivers, routes, trucks, and fuel/expense tracking.",
    tags: ["React", "TypeScript", "Node.js", "Prisma"],
    repoUrl: "https://github.com/",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: "This site — built with Next.js, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export async function getProjects(): Promise<Project[]> {
  return PROJECTS;
}
