import { motion } from 'framer-motion'

const AuthLayout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md glass-effect rounded-2xl shadow-2xl p-8"
    >
      {children}
    </motion.div>
  )
}

// Make sure you have this default export
export default AuthLayout