import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Careers from './pages/Careers'
import Locations from './pages/Locations'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="about" element={<About />} />
      <Route path="locations" element={<Locations />} />
      <Route path="careers" element={<Careers />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
