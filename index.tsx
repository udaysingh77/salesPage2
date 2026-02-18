
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log("Initializing E-Book Nexus application...");

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("FATAL: Could not find root element with ID 'root'");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("Application mounted successfully.");
}
