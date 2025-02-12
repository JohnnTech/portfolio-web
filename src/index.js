import React from 'react';
import { createRoot } from 'react-dom/client'; // Importação correta para React v18+
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);