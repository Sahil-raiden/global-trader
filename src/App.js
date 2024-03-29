import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home'
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactForm from './components/Contact/Contact';
import RootLayout from "./components/RootLayout";
import ErrorRoute from "./components/ErrorRoute";
import Service1 from './components/servicepages/service1';
import Service2 from './components/servicepages/service2';
import Service3 from './components/servicepages/service3';
import Service4 from './components/servicepages/service4';
import Service5 from './components/servicepages/service5';

function App() {
    let router = createBrowserRouter([
        {
            path: '/global-trader',
            element: <RootLayout />,
            errorElement: <ErrorRoute />,
            children: [
                {
                    path: '',
                    element: <Home />
                },
                {
                    path: 'services',
                    element: <Services />
                },
                {
                    path: 'aboutus',
                    element: <AboutUs />
                },
                {
                    path: 'contact',
                    element: <ContactForm />
                },
                {
                    path: 'service1',
                    element: <Service1 />
                },
                {
                    path: 'service2',
                    element: <Service3 />
                },
                {
                    path: 'service3',
                    element: <Service3 />
                },
                {
                    path: 'service4',
                    element: <Service4 />
                },
                {
                    path: 'service5',
                    element: <Service5 />
                }
            ]
        }
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App;
