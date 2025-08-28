import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const SuccessModal = ({ isOpen, onClose, title, message, showLoginLink = false }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full mx-4"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 mb-6">{message}</p>
              
              {showLoginLink ? (
                <Link
                  to="/login"
                  className="inline-block btn-gradient text-white px-6 py-2 rounded-xl font-medium transition-all hover:scale-[1.02]"
                  onClick={onClose}
                >
                  Go to Login
                </Link>
              ) : (
                <button
                  onClick={onClose}
                  className="btn-gradient text-white px-6 py-2 rounded-xl font-medium transition-all hover:scale-[1.02]"
                >
                  Continue
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default SuccessModal