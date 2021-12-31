import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';


import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './resourses/theme/'

import App from './App';
import Home from 'routes/Home';
import Products from 'routes/Products'
import Login from 'routes/Login'
import AddProductForm from 'routes/AddProductForm'
import EditProductForm from 'routes/EditProductForm'
import PageNotFound from 'routes/PageNotFound';


ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddProductForm />} />
            <Route path="products/edit/:productId" element={<EditProductForm />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  </ChakraProvider>
  ,
  document.getElementById('root')
);

reportWebVitals();
