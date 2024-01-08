import { CSuspense } from './Suspense';

import { Route, Routes } from 'react-router-dom';

export function AppRouter() {
  return (
    <Routes>
      <Route path=''
        element = {<CSuspense path={import('@/pages/Public/Login')}/>}>
      </Route>
      <Route path='/Dashboard'
        element={<CSuspense path={import('@/pages/Private/Dashboard')}/>}>
      </Route>     
      <Route path='*' element={<h1> 404 NOT FOUND </h1>}></Route>
    </Routes>
  );
}