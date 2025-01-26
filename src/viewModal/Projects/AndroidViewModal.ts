import { ProjectImage } from "../../assets/Images/ProjectImage";
interface Android {
  projectId: number;
  images: string[];
  techStack: string[];
  projectHeading: string;
  projectTimeLine: string;
  projectDescription: string;
  lastDateModified: string;
}
interface AndroidProject {
  android: Android[];
}
export const AndroidViewModal = (): AndroidProject => {
  const img = ProjectImage();
  const android: Android[] = [
    {
      projectId: 1,
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
    },
  ];
  return {
    android,
  };
};
