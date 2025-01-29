import { useNavigate } from "react-router-dom";
import { ProjectImage } from "../../assets/Images/ProjectImage";
interface Android {
  projectId: number;
  images: string[];
  techStack: string[];
  projectHeading: string;
  projectTimeLine: string;
  projectDescription: string;
  lastDateModified: string;
  githubLink: string | null;
  liveLink: string | null;
  alertMessage: string | null;
}
interface AndroidProject {
  android: Android[];
  selectedProject: (number: number) => void;
}
export const AndroidViewModal = (): AndroidProject => {
  const navigation = useNavigate();
  const img = ProjectImage();

  const android: Android[] = [
    {
      projectId: 1000,
      images: [
        img.androidEventpic1,
        img.androidEventpic2,
        img.androidEventpic3,
        img.androidEventpic4,
        img.androidEventpic5,
        img.androidEventpic6,
        img.androidEventpic7,
        img.androidEventpic8,
        img.androidEventpic9,
        img.androidEventpic10,
      ],
      techStack: ["React Native", "Fire Base"],
      projectHeading: "Event Management",
      projectTimeLine: "Sep 12, 2024 - Sep 25, 2024",
      projectDescription:
        "Built an event management system with Firebase, implementing social authentication and NoSQL database interactions.",
      lastDateModified: "Dec 20, 2024",
      githubLink: "https://github.com/Dineshofficiall/ReactnativeEventProject",
      liveLink: null,
      alertMessage:
        "This is an Android project, and we will soon integrate it into the tech stack for virtual display through an online view.",
    },
  ];

  const selectedProject = (filterId: number) => {
    const filteredProject = android.find(
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
    android,
    selectedProject,
  };
};
