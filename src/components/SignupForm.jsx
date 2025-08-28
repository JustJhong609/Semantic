import { useState } from 'react'
import { Link } from 'react-router-dom'
import SuccessModal from './SuccessModal'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!formData.email.endsWith('@nbsc.edu.ph')) {
      newErrors.email = 'Email must end with @nbsc.edu.ph'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsLoading(true)
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false)
        setShowSuccessModal(true)
      }, 2000)
    }
  }

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
        <p className="text-gray-200">Get started with your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-white/90 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ${
              errors.fullName ? 'ring-2 ring-red-500' : ''
            }`}
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="mt-1 text-sm text-red-300">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-white/90 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ${
              errors.email ? 'ring-2 ring-red-500' : ''
            }`}
            placeholder="user@nbsc.edu.ph"
          />
          {errors.email && <p className="mt-1 text-sm text-red-300">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-white/90 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ${
              errors.password ? 'ring-2 ring-red-500' : ''
            }`}
            placeholder="Create a password"
          />
          {errors.password && <p className="mt-1 text-sm text-red-300">{errors.password}</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-white/90 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ${
              errors.confirmPassword ? 'ring-2 ring-red-500' : ''
            }`}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && <p className="mt-1 text-sm text-red-300">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full btn-gradient text-white py-3 rounded-xl font-medium transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating account...
            </div>
          ) : (
            'Sign Up'
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-200">
          Already have an account?{' '}
          <Link to="/login" className="text-white font-medium hover:underline transition-all">
            Sign in
          </Link>
        </p>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Registration Successful"
        message="✅ You have successfully registered!"
        showLoginLink={true}
      />
    </>
  )
}

export default SignupForm