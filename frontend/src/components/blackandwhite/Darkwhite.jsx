import React, { useState } from 'react';

export default function Darkwhite() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    return (
        <button onClick={toggleMode} className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-white dark:text-white">
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
}