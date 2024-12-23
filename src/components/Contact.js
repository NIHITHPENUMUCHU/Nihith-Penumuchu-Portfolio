import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SocialLink } from './ui/SocialLink';
import { socialLinks } from '../data/socialLinks';
export function Contact() {
    return (_jsx("section", { className: "py-20 px-6", id: "contact", children: _jsxs("div", { className: "container mx-auto", children: [_jsx("h2", { className: "text-4xl font-bold mb-12 text-center", children: "Get in Touch" }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8", children: socialLinks.map((link, index) => (_jsx(SocialLink, { link: link }, index))) })] }) }));
}
