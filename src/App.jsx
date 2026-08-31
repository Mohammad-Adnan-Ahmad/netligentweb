import React from "react";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import OurCoursesPage from "./Pages/OurCoursesPage/OurCoursesPage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import PageNotFound from "./components/Others/PageNotFound";
import CourseDetailPage from "./Pages/CourseDetailPage/CourseDetailPage";

export const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "our-courses", Component: OurCoursesPage },
       { path: "our-courses/:courseName", Component: CourseDetailPage },
      { path: "contact-us", Component: ContactUsPage },
      { path: "*", Component: PageNotFound },
    ],
  },
];