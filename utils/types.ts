import { FunctionComponent } from "react";
import { IconType } from "react-icons";

export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export interface Experience {
  name: string,
  job: string,
  startDate: string,
  endDate: string,
  content: string[]
}

export type Category = "react" | "vue" | "express" | "tailwind" | "mongo" | "reactnative" | "Nextjs";