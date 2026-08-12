import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2 } from 'lucide-react';
import { useCartStore } from '../store';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, getCartTotal } = useCartStore();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsOpen(false);
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'circOut' }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-brand-surface border-l border-brand-border z-[70] flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-brand-border">
              <h2 className="text-xl font-sans font-bold tracking-widest uppercase text-brand-text">Your Cart</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-brand-text-muted hover:text-brand-text transition-colors"
              >
                <X strokeWidth={1} size={28} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                  <p className="text-brand-text-muted font-sans font-medium tracking-wide">Your collection is empty.</p>
                  <button 
                    onClick={() => {
                      setIsOpen(false);
                      navigate('/shop');
                    }}
                    className="px-8 py-3 border border-brand-accent text-brand-text font-sans text-[11px] tracking-widest uppercase hover:bg-brand-accent transition-all rounded-xl"
                  >
                    Explore Products
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  <AnimatePresence>
                    {items.map((item, idx) => (
                      <motion.div 
                        key={item.product.id} 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        layout
                        className="flex gap-4 p-3 bg-brand-bg rounded-2xl border border-brand-border"
                      >
                        <div className="w-20 aspect-[4/5] bg-white rounded-xl overflow-hidden shrink-0 border border-brand-border">
                          <img 
                            src={item.product.heroImage} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-between flex-1 py-0.5 min-w-0">
                          <div>
                            <h3 className="text-sm font-semibold text-brand-text truncate mb-0.5">{item.product.name}</h3>
                            <p className="text-brand-text-muted text-[10px] uppercase tracking-wider font-semibold">{item.product.category}</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-brand-text font-bold text-sm">₹{item.product.price.toFixed(2)}</p>
                            <button 
                              onClick={() => removeItem(item.product.id)}
                              className="p-1.5 rounded-lg text-brand-text-muted hover:text-red-500 hover:bg-red-50 transition-colors"
                              title="Remove item"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  <div className="pt-6 border-t border-brand-border">
                    <p className="text-[10px] text-brand-text-muted uppercase tracking-widest text-center mb-2">Digital Delivery — No Shipping Required</p>
                  </div>
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-brand-border bg-brand-surface">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-sans font-medium text-brand-text-muted uppercase tracking-widest">Subtotal</span>
                  <span className="text-xl font-sans font-bold text-brand-text">₹{getCartTotal().toFixed(2)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full py-4 bg-brand-text text-brand-bg rounded-xl font-sans text-[12px] font-semibold tracking-widest uppercase hover:bg-brand-text-muted transition-colors shadow-lg"
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
