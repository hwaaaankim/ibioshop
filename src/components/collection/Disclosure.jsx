import { motion, AnimatePresence } from 'framer-motion'

export default function Disclosure({
  className,
  showPanel = false,
  toggleHandler,
  trigger,
  children,
}) {
  return (
    <div className={className}>
      <div onClick={toggleHandler}>{trigger}</div>
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-y-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
