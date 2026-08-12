import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { ArrowRight, ShoppingBag, Zap } from 'lucide-react';
import { useCartStore } from '../store';

export default function Shop() {
  const { addItem, buyNow, items } = useCartStore();
  const navigate = useNavigate();

  return (
    <div className="w-full pt-32 pb-48 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-text/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[72rem] mx-auto px-6 md:px-12 relative z-10">
        
        <header className="mb-24 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-brand-text tracking-tight"
          >
            The Collection.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-brand-text-muted font-medium max-w-2xl text-balance"
          >
            Premium digital products designed to help you think bigger, live intentionally and become someone impossible to ignore.
          </motion.p>
        </header>

        {/* Product Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {products.map((product, idx) => {
            const isInCart = items.some((item) => item.product.id === product.id);

            return (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + (idx * 0.15), type: "spring", stiffness: 80 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col bg-white rounded-[24px] border border-brand-border p-5 shadow-sm hover:shadow-2xl transition-all duration-500 w-full md:w-[calc(50%-1.5rem)] max-w-lg"
              >
                <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-brand-bg aspect-[4/3] rounded-[16px] mb-6 border border-brand-border/50">
                  <div className="absolute inset-0 bg-brand-text/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  <img 
                    src={product.heroImage} 
                    alt={product.name} 
                    className="w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {idx === 1 && (
                    <div className="absolute top-4 right-4 z-20 bg-brand-text text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md">
                      BEST SELLER
                    </div>
                  )}
                </Link>
                
                <div className="flex flex-col flex-1 px-2 pb-2">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[18px] font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                      <Link to={`/product/${product.slug}`}>{product.name}</Link>
                    </h3>
                    <span className="text-[15px] font-bold text-brand-text bg-brand-bg px-3 py-1 rounded-lg border border-brand-border">₹{product.price.toFixed(0)}</span>
                  </div>
                  <p className="text-[14px] text-brand-text-muted font-medium leading-relaxed mb-6 flex-1">
                    {product.shortDescription}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <button 
                      onClick={() => addItem(product)}
                      className="py-3 px-3 bg-white border border-brand-border text-brand-text text-[12px] font-semibold rounded-[12px] hover:bg-neutral-50 transition-colors shadow-xs flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag size={14} className="text-brand-accent" />
                      {isInCart ? 'In Cart' : 'Add to Cart'}
                    </button>
                    <button 
                      onClick={() => {
                        buyNow(product);
                        navigate('/checkout');
                      }}
                      className="py-3 px-3 bg-brand-text text-white text-[12px] font-semibold rounded-[12px] hover:bg-brand-text/90 transition-colors shadow-xs flex items-center justify-center gap-1.5"
                    >
                      <Zap size={14} className="fill-white" />
                      Buy Now
                    </button>
                  </div>

                  <Link 
                    to={`/product/${product.slug}`}
                    className="w-full py-2.5 text-brand-text-muted hover:text-brand-text text-[12px] font-semibold text-center transition-colors flex justify-center items-center gap-1"
                  >
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
