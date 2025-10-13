import React, { useEffect, useState } from 'react';

const codeSnippets = [
  'const greeting = "Hello World";',
  'function calculateSum(a, b) { return a + b; }',
  'import React from "react";',
  'const [state, setState] = useState();',
  'npm install tailwindcss',
  'git commit -m "initial commit"',
  'const data = await fetch(url);',
  'export default App;',
  'SELECT * FROM users WHERE active = true;',
  'docker-compose up -d',
  'if (isValid) { return true; }',
  'map((item) => item.id)',
  'async function getData() {}',
  'const API_KEY = process.env.REACT_APP_KEY',
  'npm run build --production',
  'console.log("Debugging...");',
  'filter(x => x > 0)',
  'return response.json();',
  'useEffect(() => {}, [deps]);',
  'class Component extends React.Component',
  'let result = arr.reduce((acc, cur) => acc + cur)',
  'try { await api.call() } catch (error) {}',
  'npm start --port 3000',
  'mongoose.connect(DATABASE_URI)',
  'app.listen(PORT, () => console.log("Server running"))',
  'const router = express.Router();',
  '{ display: flex; justify-content: center; }',
  'python manage.py migrate',
  'pip install django rest_framework',
  'def calculate_total(items): return sum(items)',
  'git push origin main',
  'yarn add @tanstack/react-query',
  'import { useState, useEffect } from "react";',
  'const handleClick = (e) => e.preventDefault();',
  'tailwind.config.js',
  'background: linear-gradient(to right, #06b6d4, #3b82f6);',
  'SELECT COUNT(*) FROM products;',
  'mkdir project && cd project',
  'const token = localStorage.getItem("token");',
  'Authorization: Bearer ${token}',
  '404 Not Found',
  'HTTP/1.1 200 OK',
  'Content-Type: application/json',
  '.env.local',
  'redis-cli ping',
  'kubectl get pods',
  'AWS S3 Bucket',
  'CI/CD Pipeline Running...',
  'Build Successful ✓',
];

export const FloatingCodes = () => {
  const [floatingCodes, setFloatingCodes] = useState([]);

  useEffect(() => {
    const colors = ['text-cyan-400', 'text-blue-400', 'text-amber-400', 'text-teal-400', 'text-sky-400', 'text-emerald-400'];
    const initialCodes = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      left: Math.random() * 100,
      animationDuration: 12 + Math.random() * 18,
      delay: Math.random() * 8,
      fontSize: 11 + Math.random() * 5,
      opacity: 0.25 + Math.random() * 0.45,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setFloatingCodes(initialCodes);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {floatingCodes.map((code) => (
        <div
          key={code.id}
          className={`absolute font-mono ${code.color} whitespace-nowrap code-float`}
          style={{
            left: `${code.left}%`,
            fontSize: `${code.fontSize}px`,
            animationDuration: `${code.animationDuration}s`,
            animationDelay: `${code.delay}s`,
            opacity: code.opacity,
          }}
        >
          <span className="inline-block px-2 py-1 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-transparent rounded border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all">
            {code.text}
          </span>
        </div>
      ))}
    </div>
  );
};

