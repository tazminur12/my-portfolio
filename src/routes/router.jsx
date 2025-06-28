import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
// import Blog from "../pages/Blog";
// import BlogPost from "../pages/BlogPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        children: [
          {
            index: true,
            element: <Projects />,
          },
          {
            path: "/projects/:id",
            element: <ProjectDetails />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      }
    // //   {
    // //     path: "blog",
    // //     children: [
    // //       {
    // //         index: true,
    // //         element: <Blog />,
    // //       },
    // //       {
    // //         path: ":postId",
    // //         element: <BlogPost />,
    // //       },
    //     ],
    //   },
    ],
  },
]);

export default router;