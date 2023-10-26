'use client'
import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const useAlert = () => {
    return useContext(AlertContext);
};

export function AlertProvider({ children }) {
    const [alert, setAlert] = useState({ show: false, title: '', text: '' });

    const showAlert = (title, text) => {
        setAlert({ show: true, title, text });

        setTimeout(() => {
            hideAlert();
        }, 3000);
    };

    const hideAlert = () => {
        setAlert({ show: false, title: '', text: '' });
    };

    return (
        <AlertContext.Provider value={{ alert, showAlert, hideAlert }}>
            {children}
        </AlertContext.Provider>
    );
}
