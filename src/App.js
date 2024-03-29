import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
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
    return (
        <BrowserRouter>
            <RootLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="services" element={<Services />} />
                    <Route path="aboutus" element={<AboutUs />} />
                    <Route path="contact" element={<ContactForm />} />
                    <Route path="service1" element={<Service1 />} />
                    <Route path="service2" element={<Service2 />} />
                    <Route path="service3" element={<Service3 />} />
                    <Route path="service4" element={<Service4 />} />
                    <Route path="service5" element={<Service5 />} />
                    <Route path="*" element={<ErrorRoute />} />
                </Routes>
            </RootLayout>
        </BrowserRouter>
    );
}

export default App;
