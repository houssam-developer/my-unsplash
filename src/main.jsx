import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<App />
)

console.log(` 🔦 Don't forget StrictMode on Build for prod`,);
{/* <React.StrictMode>
<App />
</React.StrictMode> */}
