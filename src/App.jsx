import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Home/>
    },
    {
      path:"/about",
      element: <About/>
    },
    {
      path:"/skills",
      element: <Skills/>
    },
    {
      path:"/projects",
      element: <Projects/>
    },
    {
      path:"/contact",
      element: <Contacts/>
    },
    {
      path:"/footer",
      element: <Footer/>
    }
  ]
);

function App() {
  

  return (
    <>
     <RouterProvider router={router} />
     <Navbar />
     <Home />
     <About />
     <Skills />
     <Projects />
     <Contacts />
     <Footer />
     
    </>
  )
}

export default App
