import { EducationalIcon } from '../assets/Images/EducationalIcon';
export const EducationalViewModal = () => {
    const icon = EducationalIcon();
    return [
        {
            eduIcon: icon.edexIcon,
            iconAlt: 'edexIcon',
            schoolingName: 'Edex-Tech, Madurai, TamilNadu',
            domain: 'Full Stack WebDevelopment',
            CGPA: '',
            courseDuration: 'Oct 2023 - Apl 2024',
            description: 'At Edex Tech, I completed an eight-month full-stack development course, mastering technologies such as HTML, CSS, JavaScript, Bootstrap, ReactJS, Java, and SQL. This experience provided me with the practical skills needed for both front-end and back-end development, allowing me to create responsive web applications.'
        },
        {
            eduIcon: icon.amcIcon,
            iconAlt: 'amcIcon',
            schoolingName: 'The American College of Arts and Science, Madurai, TamilNadu',
            domain: 'Bachelor of Science - BSc, Computer Science',
            CGPA: 'Grade: 7.1 CGPA',
            courseDuration: 'Jul 2019 - May 2022',
            description: 'At American College, I established a solid foundation in computer science, emphasizing programming, database management, and software development. Through various projects and coursework, I enhanced my problem-solving skills and gained a deeper understanding of modern technologies, equipping me with the knowledge to thrive in software development.'
        },
        {
            eduIcon: icon.mmmIcon,
            iconAlt: 'mmmIcon',
            schoolingName: 'Madurai Meenakshi Matriculationn Hr, Madurai, TamilNadu',
            domain: '12th grade',
            CGPA: 'Grade: 50%',
            courseDuration: 'Mar 2018 - Apr 2019',
            description: 'Before advancing to higher education, I completed my 12th grade in the first group with a focus on Computer Science, earning 50% marks. Despite some health challenges, I gained a foundational understanding of computer science concepts, which fueled my passion for the field.'
        },
    ]
}