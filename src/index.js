import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Custom CSS
import App from './App'; // Main App Component
import reportWebVitals from './reportWebVitals'; // Performance metrics
import { BrowserRouter } from 'react-router-dom'; // React Router for routing
import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary

// Global Error Logging
window.onerror = (message, source, lineno, colno, error) => {
    console.error('Global error caught:', {
        message,
        source,
        lineno,
        colno,
        error,
    });
};

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <BrowserRouter basename="/A">
                <App />
            </BrowserRouter>
        </ErrorBoundary>
    </React.StrictMode>
);

// Measure performance (optional)
reportWebVitals();
