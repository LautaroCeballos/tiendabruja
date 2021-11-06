
import AppLayout from 'componentes/AppLayout'
import Header from 'componentes/Header'
import Home from 'pages/home'
import AddEditForm from 'componentes/AddEditForm'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


export default function App() {
  return <>
    <Router>
      <Header />
      <AppLayout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route path="/agregar" component={AddEditForm}/>
          <Route path="/editar/:id" component={AddEditForm}/>
        </Switch>
      </AppLayout>
    </Router>
  </>
}

