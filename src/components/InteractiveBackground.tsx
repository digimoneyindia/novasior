import { motion } from 'motion/react';

export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#a855f7] select-none">
      
      {/* Base Full-Viewport Unified Purple & White Atmospheric Field */}
      <motion.div
        animate={{
          background: [
            `radial-gradient(ellipse 120% 100% at 20% 20%, #a855f7 0%, #c084fc 35%, #e9d5ff 65%, #f3e8ff 100%)`,
            `radial-gradient(ellipse 130% 110% at 80% 30%, #a855f7 0%, #d8b4fe 30%, #c084fc 60%, #faf5ff 100%)`,
            `radial-gradient(ellipse 110% 120% at 70% 80%, #a855f7 0%, #c084fc 40%, #e9d5ff 70%, #ffffff 100%)`,
            `radial-gradient(ellipse 125% 105% at 20% 70%, #a855f7 0%, #d8b4fe 35%, #c084fc 65%, #f3e8ff 100%)`,
            `radial-gradient(ellipse 120% 100% at 20% 20%, #a855f7 0%, #c084fc 35%, #e9d5ff 65%, #f3e8ff 100%)`,
          ],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 w-full h-full transform-gpu"
      />

      {/* Cross-Fading Soft White & Lavender Atmosphere Flow - Layer 2 */}
      <motion.div
        animate={{
          background: [
            `radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.85) 0%, rgba(233, 213, 255, 0.6) 40%, transparent 80%)`,
            `radial-gradient(circle at 20% 70%, rgba(255, 255, 255, 0.9) 0%, rgba(192, 132, 252, 0.55) 45%, transparent 85%)`,
            `radial-gradient(circle at 30% 20%, rgba(243, 232, 255, 0.85) 0%, rgba(233, 213, 255, 0.6) 40%, transparent 80%)`,
            `radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.9) 0%, rgba(192, 132, 252, 0.5) 45%, transparent 85%)`,
            `radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.85) 0%, rgba(233, 213, 255, 0.6) 40%, transparent 80%)`,
          ],
          opacity: [0.9, 0.7, 0.95, 0.75, 0.9],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 w-full h-full transform-gpu mix-blend-soft-light"
      />

      {/* Soft Light Purple Overlay Gradient - Layer 3 */}
      <motion.div
        animate={{
          background: [
            `linear-gradient(135deg, #a855f7 0%, #c084fc 40%, #e9d5ff 80%, #f3e8ff 100%)`,
            `linear-gradient(225deg, #c084fc 0%, #e9d5ff 45%, #faf5ff 85%, #ffffff 100%)`,
            `linear-gradient(315deg, #a855f7 0%, #c084fc 40%, #e9d5ff 75%, #f3e8ff 100%)`,
            `linear-gradient(45deg, #c084fc 0%, #e9d5ff 50%, #faf5ff 85%, #ffffff 100%)`,
            `linear-gradient(135deg, #a855f7 0%, #c084fc 40%, #e9d5ff 80%, #f3e8ff 100%)`,
          ],
        }}
        transition={{
          duration: 58,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 w-full h-full transform-gpu opacity-45 mix-blend-overlay"
      />

      {/* Fixed Structural Texture Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(126, 34, 206, 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(126, 34, 206, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: '38px 38px'
        }}
      />
    </div>
  );
}
