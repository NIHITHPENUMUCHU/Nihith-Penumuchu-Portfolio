import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { ResumeViewer } from '../components/resume/ResumeViewer';
import { ResumeHeader } from '../components/resume/ResumeHeader';
export function Resume() {
    return (_jsx("div", { className: "min-h-screen bg-gray-900 pt-24 pb-20 px-6", children: _jsx("div", { className: "container mx-auto", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "max-w-5xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-xl", children: [_jsx(ResumeHeader, {}), _jsx(ResumeViewer, {})] }) }) }));
}
