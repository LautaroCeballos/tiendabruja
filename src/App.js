
import AppLayout from 'componentes/AppLayout'
import Header from 'componentes/Header'
import Home from 'pages/home'
import Login from 'pages/login'
import AddEditForm from 'componentes/AddEditForm'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


export default function App() {
  return <>
    <Router>
      <Header />
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/agregar" element={<AddEditForm/>}/>
          {/* <Route path="/editar/:id" element={<AddEditForm/>}/> */}
        </Routes>
      </AppLayout>
    </Router>
  </>
}

