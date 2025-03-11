import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {
  return (
    <>

      <Routes future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}>

        <Route path='login' element={ 

          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
        />

        <Route path="/*" element={ 

          <PrivateRoute >
            <HeroesRoutes />
          </PrivateRoute>
        } />

        {/* <Route path="login" element={<LoginPage />} /> */}
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}



      </Routes>

    </>
  )
}
