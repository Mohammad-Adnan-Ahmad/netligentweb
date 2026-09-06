import React from "react";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import OurCoursesPage from "./Pages/OurCoursesPage/OurCoursesPage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import PageNotFound from "./components/Others/PageNotFound";
import DataAnalytics from "./Pages/CourseDetailPage/DataAnalytics";
import DataScience from "./Pages/CourseDetailPage/DataScience";
import AIML from "./Pages/CourseDetailPage/AI_&_ML";
import PFD from "./Pages/CourseDetailPage/PFD";
import JFD from "./Pages/CourseDetailPage/JFD";
import FED from "./Pages/CourseDetailPage/FED";
import BED from "./Pages/CourseDetailPage/BED";
import CS1 from "./Pages/CourseDetailPage/CS1";
import CS2 from "./Pages/CourseDetailPage/CS2";
import CloudComputing from "./Pages/CourseDetailPage/CloudComputing";
import DevOps from "./Pages/CourseDetailPage/DevOps";


export const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "our-courses", Component: OurCoursesPage },
      { path: "our-courses/data-analytics-course-in-bhopal", Component: DataAnalytics },
      { path: "our-courses/data-science-course-in-bhopal", Component: DataScience },
      { path: "our-courses/ai-ml-course-in-bhopal", Component: AIML },
      { path: "our-courses/python-full-stack-developer-course-in-bhopal", Component: PFD },
      { path: "our-courses/java-full-stack-developer-course-in-bhopal", Component: JFD },
      { path: "our-courses/frontend-developer-course-in-bhopal", Component: FED },
      { path: "our-courses/backend-developer-course-in-bhopal", Component: BED },
      { path: "our-courses/cyber-security-course-in-bhopal", Component: CS1 },
      { path: "our-courses/professional-cyber-security-course-in-bhopal", Component: CS2 },
      { path: "our-courses/aws-training-in-bhopal", Component: CloudComputing },
      { path: "our-courses/devops-training-in-bhopal", Component: DevOps },
      { path: "contact-us", Component: ContactUsPage },
      { path: "*", Component: PageNotFound },
    ],
  },
];