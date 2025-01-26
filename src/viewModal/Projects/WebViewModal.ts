interface Web {
  projectId: number;
  images: string[];
  techStack: string[];
  projectHeading: string;
  projectTimeLine: string;
  projectDescription: string;
  lastDateModified: string;
}
interface WebProject {
  web: Web[];
  selectedProject: (filterId: number) => void;
}

import { useNavigate } from "react-router-dom";
// image
import { ProjectImage } from "../../assets/Images/ProjectImage";

export const WebViewModal = (): WebProject => {
  const navigation = useNavigate();
  const img = ProjectImage();
  const web: Web[] = [
    {
      projectId: 1,
      images: [
        img.JIFFYJSONpic1,
        img.JIFFYJSONpic2,
        img.JIFFYJSONpic3,
        img.JIFFYJSONpic4,
        img.JIFFYJSONpic5,
        img.JIFFYJSONpic6,
        img.JIFFYJSONpic7,
      ],
      techStack: ["Material UI", "React Js", "Redux"],
      projectHeading: "JIFFYJSON",
      projectTimeLine: "Jan 4, 2025 - Jan 23, 2025",
      projectDescription:
        "Developed a static site using React.js, Material-UI, and Redux, following the MVC pattern for maintainable and scalable architecture. Inspired by DummyJSON, this project provides API responses for auth, project, and cart objects, enabling beginners to quickly build a frontend with a fast UI experience. Deployed the project using Vercel.",
      lastDateModified: "Jan 23, 2025",
    },
    {
      projectId: 2,
      images: [
        img.basicsPic1,
        img.basicsPic2,
        img.basicsPic3,
        img.basicsPic4,
        img.basicsPic5,
        img.basicsPic6,
      ],
      techStack: [
        "Bootstrap",
        "React Js",
        "Context",
        "Java",
        "Spring Boot",
        "Sql",
      ],
      projectHeading: "Basics",
      projectTimeLine: "April 07, 2024 - May 27, 2024",
      projectDescription:
        "Crafted user-friendly interfaces for product browsing, order placement, and customer management, utilizing ReactJS and Java (Spring Boot) to elevate user experience and streamline e-commerce operations. Integrated PostgreSQL for CRUD operations and ORM schema management in an e-commerce back end system.",
      lastDateModified: "Aug 18, 2024",
    },
    {
      projectId: 3,
      images: [
        img.theChocolateRoomPic1,
        img.theChocolateRoomPic2,
        img.theChocolateRoomPic3,
        img.theChocolateRoomPic4,
        img.theChocolateRoomPic5,
        img.theChocolateRoomPic6,
        img.theChocolateRoomPic7,
        img.theChocolateRoomPic8,
        img.theChocolateRoomPic9,
        img.theChocolateRoomPic10,
        img.theChocolateRoomPic11,
      ],
      techStack: ["Java Script", "Bootstrap", "Html", "Css"],
      projectHeading: "The Chocolate Room",
      projectTimeLine: "Dec 2, 2024 - Dec 20, 2024",
      projectDescription:
        "Designed and Developed custom UI Web application to showcase product catalog and facilitate seamless user interaction. Developed The Chocolate Room, a custom web app with product catalogs, pricing checks, online ordering, and dining reservations. Leveraged Bootstrap for Responsiveness and JavaScript for interactive features.",
      lastDateModified: "Jan 1, 2024",
    },
    {
      projectId: 4,
      images: [
        img.portfoliopic1,
        img.portfoliopic2,
        img.portfoliopic3,
        img.portfoliopic4,
        img.portfoliopic5,
        img.portfoliopic6,
      ],
      techStack: ["Bootstrap", "React Js", "EmailJs"],
      projectHeading: "Portfolio",
      projectTimeLine: "Jun 20, 2024 - Aug 25, 2024",
      projectDescription:
        "Built a responsive portfolio website using ReactJS and Bootstrap, featuring Smooth Scroll for enhanced navigation and EmailJS for user email submissions.",
      lastDateModified: "Jan 26, 2025",
    },
    {
      projectId: 5,
      images: [
        img.oldChocolate1,
        img.oldChocolate2,
        img.oldChocolate3,
        img.oldChocolate4,
        img.oldChocolate5,
        img.oldChocolate6,
        img.oldChocolate7,
        img.oldChocolate8,
        img.oldChocolate9,
        img.oldChocolate10,
      ],
      techStack: ["Java Script", "Html", "Css"],
      projectHeading: "The Chocolate Room",
      projectTimeLine: "Oct 30, 2024 - Nov 7, 2024",
      projectDescription:
        "Built a responsive portfolio website using ReactJS and Bootstrap, featuring Smooth Scroll for enhanced navigation and EmailJS for user email submissions.",
      lastDateModified: "Nov 26, 2025",
    },
  ];

  const selectedProject = (filterId: number) => {
    const filteredProject = web.find((object) => object.projectId === filterId);
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
    web,
    selectedProject,
  };
};
