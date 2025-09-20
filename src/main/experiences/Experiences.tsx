import Experience from "./Experience";

export default function Experiences() {
  const experiences = [
    {
      company: "Amazon Lab126",
      position: "Manufacturing Test Engineer Intern",
      duration: "May - Aug 2025",
      descs: [
        "Oversaw development of a new module to visualise text-based testing logs with React and Typescript, " +
        "erasing tedious debugging processes and improving test development and failure analysis efficiency.",
        "Optimised algorithm and rendering performance, allowing for large 50 MB+ log files to be displayed " +
        "in less than 300ms and guaranteeing responsive user interface, delivering superb user experience.",
        "Deep-dived testing related issues for new upcoming devices by analysing data and identifying trends using Python, " +
        "ensuring 99% of defective devices are correctly identified."
      ]
    },
    {
      company: "Fresh Cars",
      position: "Software Engineer Intern",
      duration: "May - Aug 2024",
      descs: [
        "Led the development of the company new workshop module, leveraging Javascript, React, Node.js, and Firebase, " +
        "connecting repairmen with salesperson and 100+ customers and removing verbose coordination processes.",
        "Modernised company's mobile application UI/UX by cooperating with designers and updating the codebase " +
        "from Flutter 3.3.10 to 3.19.6, improving customers satisfaction and experience.",
        "Integrated a new payment system on company’s app with HitPay and Shell API using Flutter, Javascript, Node.js, " +
        "Firebase and Google Cloud Platform, allowing customers to easily pay gas and rental fee through the app."
      ]
    },
    {
      company: "National University of Singapore",
      position: "Teaching Assistant",
      duration: "Aug 2024 - Present",
      descs: [
        "Taught foundational Java and Javascript programming courses for undergraduate students, " +
        "heavily focusing on problem-solving methodology and Object-Oriented and Functional Programming paradigm.",
        "Led weekly tutorial sessions for a group of 8-12 students, reviewing, grading and giving constructive " +
        "comments to student’s work; received teaching evaluation of 4.6/5.0 and excellent feedback from students."
      ]
    },
  ];

  return (
    <div className="main-content experiences">
      {experiences.map(exp => <Experience {...exp} />)}
    </div>
  );
}
