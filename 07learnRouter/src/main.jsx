import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/AboutUs/About'
import Contact from './components/ContactUs/Contact'
import User from './components/User/user';
import Github,{githubInfoLoader} from './components/Github/Github';

// Define routes using `createBrowserRouter`
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contactus",
//         element: <Contact />
//       },
//     ]
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contactus' element={<Contact />} />
      <Route path='/user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='/github' 
      element={<Github />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
