import { jsx as _jsx } from "react/jsx-runtime";
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
export function Background() {
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };
    return (_jsx(Particles, { id: "tsparticles", init: particlesInit, options: {
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            particles: {
                color: {
                    value: "#22c55e",
                },
                links: {
                    color: "#22c55e",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        } }));
}
