import React, { useEffect } from 'react';

import ReactDOM from 'react-dom/client';
import Header from './src/Components/Header';
import Body from './src/Components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './src/Components/About';
import Contact from './src/Components/Contact';
import Error from './src/Components/Error';
import RestaurantMenu from './src/Components/RestaurantMenu';
// import Grocery from './Grocery';
import { lazy, Suspense } from 'react';
import Shimmer from './src/Components/Shimmer';
import UserContext from './util/UserContext';
import { useState } from 'react';
import { Provider } from 'react-redux';
import appStore from './util/appStore';
import Cart from './src/Components/Cart';
// Header
// - Logo
// - Nav Items
// Body
// - Search
// - Restaurant Container
//  - Restaurant Card
//  - Dish Name
//  - Image
//  - Restaurant Name
//  - Rating
//  - Cuisines
//  - Time to Deliver
// Footer
// - Copyright
// - Link

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
};
const AppLayout = () => {
  //authentication
  const [userName, setUserName] = useState();
  useEffect(() => {
    //Make an api call for user password and user name
    const data = {
      name: 'dhruv',
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const Grocery = lazy(() => import('./src/Components/Grocery'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
