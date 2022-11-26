import { useState } from 'react'
import './App.css'


import { RootLayout } from './pages/index/RootLayout';
import { AboutLayout } from './pages/about/AboutLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryStateWrapper } from './shared/QueryStateWrapper';
import { useQuery } from '@tanstack/react-query';
import { TestLayout } from './components/test/TestLayout';
import { Test } from './components/test/Test';
import { AuthLayout } from './pages/auth/AuthLayout';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { WelcomePage } from './pages/index/WelcomePage';



function App() {
  const [count, setCount] = useState(0)
  // const userQuery = useQuery(['user'],()=>{

  // },
  // {
  //   enabled:false
  // })
  const testmode = false


  const user = "userQuery?.data";
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      // loader:userLoader(queryClient),
      // errorElement: <ErrorPage />,
      children: [
        { index: true, element: <WelcomePage user={user} /> },

        {
          path: '/auth',
          element: <AuthLayout user={user} />,
          children: [
            {
              index: true,
              element: <Login />,
              // loader: deferredBlogPostsLoader,
            },
            {
              path: '/auth/signup',
              element: <Signup />,
              // loader: blogPostLoader,
            },
          ],
        },


        {
          path: '/test',
          element: <TestLayout user={user} />,
          children: [
            {
              index: true,
              element: <Test user={user} />,
              // loader: deferredBlogPostsLoader,
            },

          ],
        },

      ],
    },
    // {
    //   path: '/newsletter',
    //   action: newsletterAction,
    // },
  ]);

  return (
    <QueryStateWrapper
      error={null}
      isError={false}
      isLoading={false}

    >
      <div className="w-full h-screen scroll-bar overflow-y-hidden dark:bg-slate-900 dark:text-white dark:shadow-white">
        <RouterProvider router={router} />;
      </div>
    </QueryStateWrapper>
  )
}

export default App
