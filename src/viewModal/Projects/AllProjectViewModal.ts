interface Project {
  projectId: number;
  images: string[];
  techStack: string[];
  projectHeading: string;
  projectTimeLine: string;
  projectDescription: string;
  lastDateModified: string;
}
interface AllProject {
  project: Project[];
}

import { AndroidViewModal } from "./AndroidViewModal";
import { WebViewModal } from "./WebViewModal";

export const AllProjectViewModal = (): AllProject => {
  const { web } = WebViewModal();
  const { android } = AndroidViewModal();
  const project: Project[] = [...android, ...web];
  return {
    project,
  };
};
