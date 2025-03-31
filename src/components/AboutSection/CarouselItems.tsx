import { Code, ListTodo, Clapperboard, Bot } from "lucide-react";

export const carouselItems = [
  {
    icon: <Code size={24} color="black" />,
    title: "ActionBar",
    description:
      "Is a command based productivity app that streamlines interactions with system apps.",
    data: "Action Bar is an innovative command-based productivity tool that streamlines interactions with system apps. By simply typing commands into a single input field, users can perform various tasks such as setting alarms, creating notes, managing to-dos, and fetching weather updates without manually navigating through different applications. The app integrates seamlessly with system utilities, enabling quick execution of commands like scheduling calendar events, checking battery status, or sending messages via third-party apps. With a clean and intuitive interface, Action Bar enhances efficiency by reducing app-switching and providing instant results. Users can customize command shortcuts for frequently used tasks, making workflows even faster.",
  },
  {
    icon: <ListTodo size={24} color="black" />,
    title: "ToDo App",
    description:
      "A Simple todo application built with flutter framework. Design and features which are beautiful yet simple.",
    data: "An android come IOS application built using Flutter for frontend and Hive for data storage on device. The app is designed to be simple and easy to use, with a clean and intuitive user interface. The app allows users to create, edit, and delete tasks, set due dates and reminders, and organize tasks into categories. The app also includes features such as dark mode, search functionality, and the ability to share tasks with others. The app is optimized for performance and battery life, with minimal impact on device resources. The app is secure and respects user privacy, with no data stored on external servers.",
  },
  {
    icon: <Clapperboard size={24} color="black" />,
    title: "Entertainment Blog",
    description:
      "A blog website that provides entertainment news, reviews, and recommendations for movies, TV shows, and music.",
    data: "The website is built using the MERN stack, which includes MongoDB, ExpressJS, ReactJS, and NodeJS. The backend is built using ExpressJS and MongoDB, while the frontend is built using ReactJS. The website is hosted on Heroku and uses a custom domain name. The website is optimized for SEO and includes social media sharing buttons. The website is regularly updated with new content and features. The website is built using modern web technologies and follows best practices for web development.",
  },
  {
    icon: <Bot size={24} color="black" />,
    title: "ChatBot",
    description:
      "A web interface for a chatbot that provides information and assistance to users. Uses Gemini or Groq API'sto get information.",
    data: "A chatbot website built using Firebase auth for authentication and react to build the frontend. The chatbot is designed to provide information and assistance to users on a variety of topics. The chatbot uses natural language processing to understand user queries and provide relevant responses. The chatbot is integrated with third-party APIs to fetch real-time data and provide up-to-date information. The chatbot is secure and respects user privacy, with no data stored on external servers. ",
  },
];

export default function CarouselItems() {
  return carouselItems;
}
