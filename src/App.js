import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { ProjectSlider } from './components/ProjectSlider';
import { Contact } from './components/Contact';
import { Background } from './components/Background';
import { Resume } from './pages/Resume';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
    return (_jsx(BrowserRouter, { children: _jsxs("div", { className: "min-h-screen bg-gray-900 text-white", children: [_jsx(Background, {}), _jsx(Navigation, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/resume", element: _jsx(Resume, {}) }), _jsx(Route, { path: "/", element: _jsxs(_Fragment, { children: [_jsx(Hero, {}), _jsx(About, {}), _jsx(Skills, {}), _jsx(Services, {}), _jsx(ProjectSlider, {}), _jsx(Contact, {})] }) })] })] }) }));
}
export default App;
