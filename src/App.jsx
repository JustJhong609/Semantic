import { Routes, Route } from 'react-router-dom'
import AuthLayout from './components/AuthLayout' // Default import
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

function App() {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <Routes>
        <Route path="/" element={<AuthLayout><LoginForm /></AuthLayout>} />
        <Route path="/login" element={<AuthLayout><LoginForm /></AuthLayout>} />
        <Route path="/signup" element={<AuthLayout><SignupForm /></AuthLayout>} />
      </Routes>
    </div>
  )
}

export default App