import AppLayout from 'componentes/AppLayout'
import Header from 'componentes/Header'
import { Outlet } from 'react-router-dom'

import { ProductsContextProvider } from 'context/ProductsContext'


export default function App() {
  return <>
      <Header />
      <AppLayout>
        <ProductsContextProvider>
          <Outlet/>
        </ProductsContextProvider>
      </AppLayout>
  </>
} 

