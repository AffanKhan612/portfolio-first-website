import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import GoHomeButton from './components/GoHomeButton'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      )
    },
    {
      path: "/about",
       element: (
        <>
          <Navbar />
          <About />
          <Footer />
          <GoHomeButton />
        </>
      )
    },
    {
      path: "/skills",
       element: (
        <>
          <Navbar />
          <Skills />
          <Footer />
          <GoHomeButton />
        </>
      )
    },
    {
      path: "/projects",
       element: (
        <>
          <Navbar />
          <Projects />
          <Footer />
          <GoHomeButton />
        </>
      )
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contacts />
          <Footer />
          <GoHomeButton />
        </>
      )
    }
  ]
);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
