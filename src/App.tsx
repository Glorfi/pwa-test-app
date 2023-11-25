import * as React from 'react';
import { Text, Button } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from 'pages/Routes';

const routes = AppRoutes.map((item, index) => {
  return (
    <Route key={index} path={item.path} element={<item.element />}></Route>
  );
});

export const App = () => {
  return <Routes>{routes}</Routes>;
};
