/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import '../styles/count.css'; // Import the CSS file

const Count = () => {
    const projectCountRef = useRef(null);
    const clientCountRef = useRef(null);

    const [projectCount, setProjectCount] = useState(0);
    const [clientsCount, setclientCount] = useState(0);

    useEffect(() => {
        const countTo = (ref, target, setCount) => {
            let count = 0;
            const interval = setInterval(() => {
                count++;
                setCount(count);
                if (count === target) {
                    clearInterval(interval);
                }
            }, 2); // Adjust the speed as needed
        };

        // Replace these numbers with your actual project and engineer counts
        const totalProjects = 10000;
        const totalclients = 4500;

        countTo(projectCountRef, totalProjects, setProjectCount);
        countTo(clientCountRef, totalclients, setclientCount);
    }, []);

    return (
        <div className="counter-container">
            <div>
                <h2>Projects: <span>{projectCount}</span></h2>
            </div>
            <div>
                <h2>clients: <span>{clientsCount}</span></h2>
            </div>
        </div>
    );
};

export default Count;
