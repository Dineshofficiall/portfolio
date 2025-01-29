interface Project {
  projectId: number;
  images: string[];
  techStack: string[];
  projectHeading: string;
  projectTimeLine: string;
  projectDescription: string;
  lastDateModified: string;
  alertMessage: string | null;
}
interface AllProject {
  project: Project[];
  selectedProject: (number: number) => void;
}

import { useNavigate } from "react-router-dom";
import { AndroidViewModal } from "./AndroidViewModal";
import { WebViewModal } from "./WebViewModal";

export const AllProjectViewModal = (): AllProject => {
  const navigation = useNavigate();
  const { web } = WebViewModal();
  const { android } = AndroidViewModal();

  const project: Project[] = [...android, ...web];

  const selectedProject = (filterId: number) => {
    const filteredProject = project.find(
      (object) => object.projectId === filterId
    );
    if (filteredProject) {
      console.log("filteredObject -> ", filteredProject);

      navigation(`/project/details/${filterId}`, {
        state: { project: filteredProject },
      });
    } else {
      console.log("project not found");
    }
  };

  return {
    project,
    selectedProject,
  };
};
