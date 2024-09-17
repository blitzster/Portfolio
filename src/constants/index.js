import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `A passionate Master of Computer Applications (MCA) student with a love for solving complex problems through innovative technology. I'm driven by a curiosity for full-stack development, artificial intelligence, and building impactful digital solutions. With a strong foundation in programming, web development, and software engineering, I'm eager to apply my skills in real-world projects.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2021 - 2023",
    role: "Order to Cash",
    company: "Alchemy Techsol",
    description: `Managed end-to-end order processing, ensuring timely and accurate order fulfillment. Generated and reviewed invoices, addressing discrepancies to maintain financial accuracy. Coordinated lease terminations, including notification, documentation, and final settlements. Provided exceptional customer service, achieving a customer satisfaction rating of 85%. Ensured compliance with lease agreements and regulatory requirements during termination processes.`,

  },

];

export const PROJECTS = [
  {
    title: "Student Grievance Redressal",
    image: project1,
    description:
      "A fully functional Grienance Redressal website with features like adding a complaint, Progress of the complaint, Graphs, and user authentication.",
    technologies: ["HTML", "CSS", "Django", "Python", "PostgreSQL"],
    githubLink: "https://github.com/blitzster/Student-Grievance-Redressal-System",
  },
  {
    title: "Hosplital Management",
    image: project2,
    description:
      "A Microservices Application consisting of 3 services- user service, Patient service and Appointment service. All 3 services are dockerized with MongoDB for managing the data. Used Postman for REST API Testing.",
    technologies: ["HTML", "CSS", "Flask", "MongoDB", "Docker", "Postman"],
    githubLink: "https://github.com/blitzster/Hospital-Management-Flask-Microservice",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    githubLink: "https://github.com/blitzster/Portfolio",
  },
  {
    title: "Django CRM",
    image: project4,
    description:
      "This project demonstrates how to implement CRUD (Create, Read, Update, Delete) operations along with user authentication (login and logout) in a Django application.",
    technologies: ["HTML", "CSS", "Django", "mySQL"],
    githubLink: "https://github.com/blitzster/Django-CRM",
  },
];

export const CONTACT = {
  address: "Bangalore Karnataka 560099",
  phoneNo: "+91 8618036368",
  email: "akshays1345@gmail.com",
};
