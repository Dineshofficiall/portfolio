import { WorkIcon } from "../assets/Images/WorkIcon";

interface Work {
  workIcon: string;
  companyName: string;
  stack: string;
  duration: string;
  innerRole: {
    role: string;
    description: string[];
  }[];
}

interface WorkProp {
  work: Work[];
}

export const WorkViewModal = (): WorkProp => {
  const icon = WorkIcon();

  const work: Work[] = [
    {
      workIcon: icon.hemaIcon,
      companyName: "Hema Enterprise, Cuddalore Tamil Nadu",
      stack: "Frontend Developer",
      duration: "Sep 2024 - Present",
      innerRole: [
        {
          role: "React Developer - Web Development",
          description: [
            `Developed and enhanced UI components for user profile management, including sections like Basic Details, Contact Information, Education, Experience, and Account Information.`,
            `Integrated APIs to highlight employees’ birthdays on the current day, enabling users to effortlessly send birthday wishes.`,
            `Designed and implemented comprehensive leave management features such as Leave Apply, Leave Balance, Leave Calendar, Leave History, Paternity Leave, and Comp Off for a seamless user experience.`,
          ],
        },
        {
          role: "React Native Developer - Mobile Development",
          description: [
            `As a React Native frontend developer at Hema Enterprise Pvt Ltd for the past two months, I have gained substantial expertise in system architecture, specifically the MVVM (Model-View-ViewModel) design pattern. Collaborating with experienced professionals has refined my understanding of application development best practices.`,
            `I independently completed an event management project, showcasing my creativity and technical skills. This was followed by contributing to real-time initiatives like a meeting agenda and a form builder, further honing my ability to develop responsive mobile applications.`,
          ],
        },
      ],
    },
  ];

  return { work };
};
