import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'

{/* Name: Krystan Kornafel */}
{/* Assignment: SEG3125 Assignment 2 */}
{/* This file is used to initialize all the components of the React website */}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)