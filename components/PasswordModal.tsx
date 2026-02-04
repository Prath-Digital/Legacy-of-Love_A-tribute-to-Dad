import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { verifyPassword } from '../utils/passwordSecurity';

interface PasswordModalProps {
  onUnlock: () => void;
}

const PasswordModal: React.FC<PasswordModalProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Verify password using secure hashing
      const isCorrect = await verifyPassword(password);

      if (isCorrect) {
        // Store in session storage so it persists during the session
        sessionStorage.setItem('memoriesUnlocked', 'true');
        onUnlock();
      } else {
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Password verification failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-6"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
        className="w-full max-w-md bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-10 shadow-2xl"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-8"
        >
          <motion.div
            className="flex justify-center mb-4"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="p-4 bg-rose-500/20 rounded-2xl border border-rose-500/50">
              <Lock size={32} className="text-rose-400" />
            </div>
          </motion.div>

          <h2 className="text-3xl font-serif font-bold text-white mb-2">
            Memories Locked with Love
          </h2>
          <p className="text-white/60 text-sm">
            Enter the password to view these precious moments
          </p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Password Input */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                placeholder="Enter password"
                disabled={isLoading}
                className="w-full px-5 py-3 pl-5 pr-12 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-rose-400/50 focus:ring-2 focus:ring-rose-400/20 transition-all disabled:opacity-50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors disabled:opacity-50"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </motion.div>

          {/* Error Message */}
          <AnimateError error={error} />

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            type="submit"
            disabled={isLoading || password.length === 0}
            className="w-full py-3 px-6 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                />
                Unlocking...
              </>
            ) : (
              <>
                <Heart size={18} />
                Unlock Memories
              </>
            )}
          </motion.button>

          {/* Hint */}
          <p className="text-center text-white/40 text-xs">
            💡 Hint: Think of a beloved place name with numbers
          </p>
        </form>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 pt-6 border-t border-white/10 text-center"
        >
          <p className="text-white/50 text-xs leading-relaxed">
            These memories are protected and exclusive. Only those who know the password can view this collection of special moments.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const AnimateError: React.FC<{ error: string }> = ({ error }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: error ? 1 : 0, y: error ? 0 : -5 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center gap-2 px-4 py-3 rounded-lg ${
        error ? 'bg-red-500/20 border border-red-500/50' : 'bg-transparent border border-transparent'
      }`}
    >
      {error && (
        <>
          <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
          <span className="text-red-400 text-sm">{error}</span>
        </>
      )}
    </motion.div>
  );
};

export default PasswordModal;
