import './App.css'
const routes=createBrowserRouter(Routes)
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {


  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
