'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function SwapSuccessModal({
  show,
  onClose,
}: {
  show: boolean
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-gradient-to-br from-black via-[#1f1f28] to-black border border-white/10 rounded-2xl p-6 w-[85%] max-w-sm text-center text-white shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <CheckCircleIcon className="h-12 w-12 text-green-400" />
            </div>
            <h2 className="text-xl font-bold mb-2">Swap Successful</h2>
            <p className="text-sm text-white/70 mb-4">
              Your crypto exchange has been confirmed.
            </p>
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:brightness-110 transition"
            >
              Done
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
