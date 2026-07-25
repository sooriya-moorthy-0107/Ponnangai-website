import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, ShoppingCart, Check, X, Send, Sparkles, Filter } from 'lucide-react';
import { toast } from 'sonner';
import Modal from '../components/ui/Modal';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Products.css';

const productsData = [
  {
    id: 1,
    name: 'Cloth Wash',
    category: 'Fabric Care',
    image: '/assets/products/S_Clothwash.png',
    description: 'Advanced liquid formula engineered for deep stain removal while keeping fabric fibers soft and vibrant.',
    variants: [
      { src: '/assets/products/S_Clothwash.png', label: 'Standard Bottle' },
      { src: '/assets/products/5L_Clothwash.png', label: '5L Bulk Can' },
      { src: '/assets/products/WOS_Clothwash.png', label: 'Refill Pack' },
      { src: '/assets/products/C_Clothwash.png', label: 'Value Combo Pack' }
    ]
  },
  {
    id: 2,
    name: 'Comfort Blue (Ocean Fresh)',
    category: 'Fabric Care',
    image: '/assets/products/S_Comfort_blue.png',
    description: 'Premium fabric conditioner that unlocks morning ocean freshness and eliminates static cling.',
    variants: [
      { src: '/assets/products/S_Comfort_blue.png', label: 'Standard Bottle' },
      { src: '/assets/products/5L_Comfort_blue.png', label: '5L Bulk Can' },
      { src: '/assets/products/WOS_Comfort_blue.png', label: 'Refill Pack' },
      { src: '/assets/products/C_Comfort_blue.png', label: 'Value Combo Pack' }
    ]
  },
  {
    id: 3,
    name: 'Comfort Pink (Floral Bloom)',
    category: 'Fabric Care',
    image: '/assets/products/S_Comfort_pink.png',
    description: 'Infused with essential floral oils for long-lasting perfume fragrance and cashmere-like softness.',
    variants: [
      { src: '/assets/products/S_Comfort_pink.png', label: 'Standard Bottle' },
      { src: '/assets/products/5L_Comfort_pink.png', label: '5L Bulk Can' },
      { src: '/assets/products/WOS_Comfort_pink.png', label: 'Refill Pack' },
      { src: '/assets/products/C_Comfort_pink.png', label: 'Value Combo Pack' }
    ]
  },
  {
    id: 4,
    name: 'Dishwash Gel',
    category: 'Kitchen Care',
    image: '/assets/products/S_Dishwash.png',
    description: 'Tough on grease, gentle on hands. Concentrated lemon gel cuts through stubborn oil instantly.',
    variants: [
      { src: '/assets/products/S_Dishwash.png', label: 'Standard Bottle' },
      { src: '/assets/products/5L_Dishwash.png', label: '5L Bulk Can' },
      { src: '/assets/products/WOS_Dishwash.png', label: 'Refill Pack' },
      { src: '/assets/products/C_Dishwash.png', label: 'Value Combo Pack' }
    ]
  },
  {
    id: 5,
    name: 'Floor Cleaner (Floral & Citrus)',
    category: 'Floor Care',
    image: '/assets/products/S_Floorwash_pink.png',
    description: 'Multi-surface floor disinfectant liquid killing 99.9% germs, leaving brilliant shine and fresh scents.',
    variants: [
      { src: '/assets/products/S_Floorwash_pink.png', label: 'Pink Floral Bottle' },
      { src: '/assets/products/5L_Floowcelaner_pink.png', label: 'Pink Floral 5L Can' },
      { src: '/assets/products/WOS_Floorwash_pink.png', label: 'Pink Refill Pack' },
      { src: '/assets/products/C_Floorwash_pink.png', label: 'Pink Combo Pack' },
      { src: '/assets/products/S_Floorwash_yellow.png', label: 'Yellow Citrus Bottle' },
      { src: '/assets/products/5L_Floorcleaner_yellow.png', label: 'Yellow Citrus 5L Can' },
      { src: '/assets/products/WOS_Floorwash_yellow.png', label: 'Yellow Refill Pack' },
      { src: '/assets/products/C_Floorwash_yellow.png', label: 'Yellow Combo Pack' }
    ]
  },
  {
    id: 6,
    name: 'Antibacterial Handwash',
    category: 'Hygiene & Sanitation',
    image: '/assets/products/S_Handwash_pink.png',
    description: 'Moisturizing liquid hand soap enriched with skin conditioners and antimicrobial action.',
    variants: [
      { src: '/assets/products/S_Handwash_pink.png', label: 'Rose Velvet' },
      { src: '/assets/products/S_Handwash_green.png', label: 'Green Apple' },
      { src: '/assets/products/S_Handwash_yellow.png', label: 'Lemon Fresh' }
    ]
  },
  {
    id: 7,
    name: 'Advanced Toilet Cleaner',
    category: 'Hygiene & Sanitation',
    image: '/assets/products/S_Toiletcleaner.png',
    description: 'Thick power gel clings to surfaces for 10x stain removal, limescale control, and total sanitization.',
    variants: [
      { src: '/assets/products/S_Toiletcleaner.png', label: 'Standard Bottle' },
      { src: '/assets/products/5L_Toiletcleaner.png', label: '5L Bulk Can' },
      { src: '/assets/products/WOS_Toiletcleaner.png', label: 'Refill Pack' },
      { src: '/assets/products/C_Toilercleaner.png', label: 'Value Combo Pack' }
    ]
  },
  {
    id: 8,
    name: 'Crystal Glass Cleaner',
    category: 'Surface Care',
    image: '/assets/products/S_Glasscleaner.png',
    description: 'Quick-drying streak-free formula for sparkling clear windows, mirrors, screens, and metallic fixtures.',
    variants: [
      { src: '/assets/products/S_Glasscleaner.png', label: 'Standard Spray' },
      { src: '/assets/products/5L_Glasscleaner.png', label: '5L Bulk Can' },
      { src: '/assets/products/WOS_Glasscleaner.png', label: 'Refill Pack' },
      { src: '/assets/products/C_Glasscleaner.png', label: 'Value Combo Pack' }
    ]
  },
  {
    id: 9,
    name: 'Heavy-Duty Tile Cleaner',
    category: 'Surface Care',
    image: '/assets/products/S_Tilescleaner.png',
    description: 'Dissolves soap scum, hard water deposits, grout discoloration, and grime across ceramic tile floors.',
    variants: [
      { src: '/assets/products/S_Tilescleaner.png', label: 'Standard Bottle' },
      { src: '/assets/products/5L_Tilescleaner.png', label: '5L Bulk Can' },
      { src: '/assets/products/C_Tilescleaner.png', label: 'Value Combo Pack' }
    ]
  },
  {
    id: 10,
    name: 'Sanitizing Phenyol',
    category: 'Floor Care',
    image: '/assets/products/S_Phenyol.png',
    description: 'Commercial grade disinfectant phenyol liquid for hospitals, offices, institutions, and home floors.',
    variants: [
      { src: '/assets/products/S_Phenyol.png', label: 'Standard Bottle' },
      { src: '/assets/products/5L_Phenyol.png', label: '5L Bulk Can' },
      { src: '/assets/products/C_Phenyol.png', label: 'Value Combo Pack' }
    ]
  }
];

const categories = ['All', 'Fabric Care', 'Kitchen Care', 'Floor Care', 'Hygiene & Sanitation', 'Surface Care'];

const ProductVariantCarousel = ({ variants }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!variants || variants.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % variants.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [variants]);

  if (!variants || variants.length === 0) return null;

  return (
    <div className="variant-carousel-wrapper">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          className="variant-slide"
        >
          <img src={variants[currentIndex].src} alt={variants[currentIndex].label} className="variant-img" />
          <span className="badge-orange variant-tag">{variants[currentIndex].label}</span>
        </motion.div>
      </AnimatePresence>

      {variants.length > 1 && (
        <div className="variant-dots">
          {variants.map((v, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Products = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const filteredProducts = activeCategory === 'All' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  const addToCart = (product) => {
    if (!cartItems.find(item => item.id === product.id)) {
      setCartItems([...cartItems, product]);
      toast.success(`${product.name} added to quote list!`);
    } else {
      toast.error(`${product.name} is already in your quote list.`);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleGetQuote = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      toast.error('Your quote list is empty.');
      return;
    }
    if (!customerName || !customerPhone) {
      toast.error('Please enter your name and phone number.');
      return;
    }
    
    const itemList = cartItems.map(item => `- ${item.name} (${item.category})`).join('%0A');
    const message = `Hi Ponnangai Team, I would like to request a bulk quote for the following items:%0A${itemList}%0A%0AMy Name: ${customerName}%0APhone: ${customerPhone}`;
    
    window.open(`https://wa.me/917092148969?text=${message}`, '_blank');
    setIsCartOpen(false);
    setCartItems([]);
    setCustomerName('');
    setCustomerPhone('');
  };

  return (
    <div className="products-page">
      <Helmet>
        <title>Products Catalog | Ponnangai Enterprises</title>
        <meta name="description" content="Explore high-performance housekeeping products, cleaning liquids, fabric softeners, and bulk facility supplies." />
      </Helmet>

      {/* Floating Quote Drawer Button */}
      {cartItems.length > 0 && (
        <motion.button
          className="floating-cart-btn btn-primary"
          onClick={() => setIsCartOpen(true)}
          initial={{ scale: 0, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          <ShoppingCart size={20} />
          <span>Inquiry Cart</span>
          <span className="cart-count-badge">{cartItems.length}</span>
        </motion.button>
      )}

      {/* Header Banner */}
      <section className="products-hero-banner">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="badge-orange mb-2"><Sparkles size={14} /> Full Product Catalog</span>
            <h1 className="section-title">Engineered <span>Hygiene Products</span></h1>
            <p className="section-subtitle">
              Browse our complete catalog of commercial & domestic housekeeping liquids, disinfectants, and bulk supplies.
            </p>
          </motion.div>

          {/* Animated Category Filter Pills */}
          <div className="category-filter-bar">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  className={`filter-pill ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span>{cat}</span>
                  {isActive && (
                    <motion.div
                      className="filter-pill-bg"
                      layoutId="filterPillActive"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="container section-padding">
        <motion.div 
          className="grid grid-cols-3 products-grid"
          layout
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="product-card glass-panel"
                whileHover={{ y: -8 }}
              >
                <div className="product-card-header">
                  <span className="badge-blue">{product.category}</span>
                  <button 
                    className="card-cart-btn"
                    onClick={() => addToCart(product)}
                    title="Add to inquiry list"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>

                <div className="product-card-img-box" onClick={() => setSelectedProduct(product)}>
                  <motion.img 
                    src={product.image} 
                    alt={product.name} 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="product-card-body">
                  <h3 className="product-card-title">{product.name}</h3>
                  <p className="product-card-desc">{product.description}</p>
                  
                  <div className="variant-preview-row">
                    <span className="variant-label">Available Pack Sizes:</span>
                    <div className="variant-tags-list">
                      {product.variants.slice(0, 3).map((v, i) => (
                        <span key={i} className="mini-tag">{v.label}</span>
                      ))}
                      {product.variants.length > 3 && <span className="mini-tag">+{product.variants.length - 3} more</span>}
                    </div>
                  </div>
                </div>

                <div className="product-card-footer">
                  <button 
                    className="btn btn-outline-orange w-full"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <Info size={16} />
                    <span>Inspect Variants & Details</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <Modal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct.name}
        >
          <div className="modal-product-wrapper">
            <ProductVariantCarousel variants={selectedProduct.variants} />
            <div className="modal-product-info">
              <span className="badge-blue mb-2">{selectedProduct.category}</span>
              <h3>{selectedProduct.name}</h3>
              <p>{selectedProduct.description}</p>

              <div className="modal-actions-row">
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                >
                  <ShoppingCart size={18} />
                  <span>Add to Quote List</span>
                </button>

                <a 
                  href={`https://wa.me/917092148969?text=Hi, I would like to enquire about ${encodeURIComponent(selectedProduct.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <Send size={18} />
                  <span>Direct WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Cart / Inquiry Drawer Modal */}
      {isCartOpen && (
        <Modal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          title="Your Bulk Inquiry List"
        >
          <div className="cart-modal-container">
            {cartItems.length === 0 ? (
              <p className="text-center text-muted">Your list is empty. Add products to get a custom quote!</p>
            ) : (
              <>
                <div className="cart-items-list">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item-row">
                      <img src={item.image} alt={item.name} />
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <span>{item.category}</span>
                      </div>
                      <button 
                        className="cart-remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleGetQuote} className="cart-form">
                  <h4>Contact Info for Quote</h4>
                  <input 
                    type="text" 
                    placeholder="Your Name *" 
                    value={customerName} 
                    onChange={(e) => setCustomerName(e.target.value)} 
                    required 
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone / WhatsApp Number *" 
                    value={customerPhone} 
                    onChange={(e) => setCustomerPhone(e.target.value)} 
                    required 
                  />
                  <button type="submit" className="btn btn-primary w-full">
                    <Send size={18} />
                    <span>Send Quote Request on WhatsApp</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Products;
