import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import router from './router/Router'
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
