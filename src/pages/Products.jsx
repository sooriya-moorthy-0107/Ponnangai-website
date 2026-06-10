import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import Modal from '../components/ui/Modal';
import { useNavigate } from 'react-router-dom';
import './Products.css';

const productsData = [
  {
    id: 1,
    name: 'Cloth Wash',
    category: 'Retail',
    image: '/assets/products/S_Clothwash.png',
    description: 'Advanced formula for deep cleaning clothes without damaging fabrics.',
    variants: [
      { src: '/assets/products/S_Clothwash.png', label: 'Standard Retail' },
      { src: '/assets/products/5L_Clothwash.png', label: '5L Can' },
      { src: '/assets/products/WOS_Clothwash.png', label: 'Without Sticker' },
      { src: '/assets/products/C_Clothwash.png', label: 'Combo Pack' }
    ]
  },
  {
    id: 2,
    name: 'Comfort Blue',
    category: 'Retail',
    image: '/assets/products/S_Comfort_blue.png',
    description: 'Fabric softener that leaves a long-lasting, fresh blue scent.',
    variants: [
      { src: '/assets/products/S_Comfort_blue.png', label: 'Standard Retail' },
      { src: '/assets/products/5L_Comfort_blue.png', label: '5L Can' },
      { src: '/assets/products/WOS_Comfort_blue.png', label: 'Without Sticker' },
      { src: '/assets/products/C_Comfort_blue.png', label: 'Combo Pack' }
    ]
  },
  {
    id: 3,
    name: 'Comfort Pink',
    category: 'Retail',
    image: '/assets/products/S_Comfort_pink.png',
    description: 'Fabric softener that leaves a long-lasting, fresh pink scent.',
    variants: [
      { src: '/assets/products/S_Comfort_pink.png', label: 'Standard Retail' },
      { src: '/assets/products/5L_Comfort_pink.png', label: '5L Can' },
      { src: '/assets/products/WOS_Comfort_pink.png', label: 'Without Sticker' },
      { src: '/assets/products/C_Comfort_pink.png', label: 'Combo Pack' }
    ]
  },
  {
    id: 4,
    name: 'Dishwash Gel',
    category: 'Retail',
    image: '/assets/products/S_Dishwash.png',
    description: 'Tough on grease, gentle on hands. Ensures sparkling clean dishes.',
    variants: [
      { src: '/assets/products/S_Dishwash.png', label: 'Standard Retail' },
      { src: '/assets/products/5L_Dishwash.png', label: '5L Can' },
      { src: '/assets/products/WOS_Dishwash.png', label: 'Without Sticker' },
      { src: '/assets/products/C_Dishwash.png', label: 'Combo Pack' }
    ]
  },
  {
    id: 4,
    name: 'Floor Cleaner',
    category: 'Retail',
    image: '/assets/products/S_Floorwash_pink.png',
    description: 'Kills 99.9% of germs and leaves floors brilliantly clean.',
    variants: [
      { src: '/assets/products/S_Floorwash_pink.png', label: 'Pink Standard Retail' },
      { src: '/assets/products/5L_Floowcelaner_pink.png', label: 'Pink 5L Can' },
      { src: '/assets/products/WOS_Floorwash_pink.png', label: 'Pink Without Sticker' },
      { src: '/assets/products/C_Floorwash_pink.png', label: 'Pink Combo Pack' },
      { src: '/assets/products/S_Floorwash_yellow.png', label: 'Yellow Standard Retail' },
      { src: '/assets/products/5L_Floorcleaner_yellow.png', label: 'Yellow 5L Can' },
      { src: '/assets/products/WOS_Floorwash_yellow.png', label: 'Yellow Without Sticker' },
      { src: '/assets/products/C_Floorwash_yellow.png', label: 'Yellow Combo Pack' }
    ]
  },
  {
    id: 5,
    name: 'Handwash',
    category: 'Retail',
    image: '/assets/products/S_Handwash_pink.png',
    description: 'Soft and gentle handwash with a refreshing floral fragrance.',
    variants: [
      { src: '/assets/products/S_Handwash_pink.png', label: 'Rose (Pink)' },
      { src: '/assets/products/S_Handwash_green.png', label: 'Green Apple (Green)' },
      { src: '/assets/products/S_Handwash_yellow.png', label: 'Lemon (Yellow)' }
    ]
  },
  {
    id: 6,
    name: 'Toilet Cleaner',
    category: 'Retail',
    image: '/assets/products/S_Toiletcleaner.png',
    description: 'Industrial-strength cleaning for a sparkling and hygienic toilet.',
    variants: [
      { src: '/assets/products/S_Toiletcleaner.png', label: 'Standard Retail' },
      { src: '/assets/products/5L_Toiletcleaner.png', label: '5L Can' },
      { src: '/assets/products/WOS_Toiletcleaner.png', label: 'Without Sticker' },
      { src: '/assets/products/C_Toilercleaner.png', label: 'Combo Pack' }
    ]
  },
  {
    id: 7,
    name: 'Glass Cleaner',
    category: 'Retail',
    image: '/assets/products/S_Glasscleaner.png',
    description: 'Industrial-strength cleaning for a sparkling and hygienic toilet.',
    variants: [
      { src: '/assets/products/S_Glasscleaner.png', label: 'Standard Retail' },
      { src: '/assets/products/5L_Glasscleaner.png', label: '5L Can' },
      { src: '/assets/products/WOS_Glasscleaner.png', label: 'Without Sticker' },
      { src: '/assets/products/C_Glasscleaner.png', label: 'Combo Pack' }
    ]
  },
  {
    id: 8,
    name: 'Tiles Cleaner',
    category: 'Retail',
    image: '/assets/products/S_Tilescleaner.png',
    description: 'Industrial-strength cleaning for a sparkling and hygienic toilet.',
    variants: [
      { src: '/assets/products/S_Tilescleaner.png', label: 'Standard Retail' },
      { src: '/assets/products/5L_Tilescleaner.png', label: '5L Can' },
      { src: '/assets/products/WOS_Tilescleaner.png', label: 'Without Sticker' },
      { src: '/assets/products/C_Tilescleaner.png', label: 'Combo Pack' }
    ]
  },
  {
    id: 9,
    name: 'Phenyol',
    category: 'Retail',
    image: '/assets/products/S_Phenyol.png',
    description: 'Industrial-strength cleaning for a sparkling and hygienic toilet.',
    variants: [
      { src: '/assets/products/S_Phenyol.png', label: 'Standard Retail' },
      { src: '/assets/products/5L_Phenyol.png', label: '5L Can' },
      { src: '/assets/products/C_Phenyol.png', label: 'Combo Pack' }
    ]
  }
];

const ProductVariantCarousel = ({ variants }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!variants || variants.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % variants.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [variants]);

  if (!variants || variants.length === 0) return null;

  if (variants.length === 1) {
    return (
      <img 
        src={variants[0].src} 
        alt={variants[0].label} 
        style={{ height: '200px', objectFit: 'contain', marginBottom: '1.5rem' }} 
      />
    );
  }

  const slideVariants = {
    enter: { x: 100, opacity: 0, scale: 0.8, zIndex: 0 },
    center: { x: 0, opacity: 1, scale: 1, zIndex: 1 },
    exit: { x: -100, opacity: 0, scale: 0.8, zIndex: 0 }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '260px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem', overflow: 'hidden' }}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}
        >
          <motion.img 
            src={variants[currentIndex].src} 
            alt={variants[currentIndex].label}
            style={{ height: '200px', objectFit: 'contain' }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div style={{ 
            marginTop: '1rem', 
            background: 'var(--bg-offwhite)', 
            padding: '0.25rem 0.75rem', 
            borderRadius: 'var(--radius-full)',
            fontSize: '0.85rem',
            color: 'var(--deep-blue)',
            fontWeight: 'bold',
            boxShadow: 'var(--shadow-sm)'
          }}>
            {variants[currentIndex].label}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Products = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const handleEnquire = () => {
    setSelectedProduct(null);
    navigate('/contact');
  };

  const addToCart = (product) => {
    if (!cartItems.find(item => item.id === product.id)) {
      setCartItems([...cartItems, product]);
      toast.success(`${product.name} added to inquiry list!`);
    } else {
      toast.error(`${product.name} is already in the list!`);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleGetQuote = () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty.');
      return;
    }
    if (!customerName || !customerPhone) {
      toast.error('Please enter your name and phone number.');
      return;
    }
    
    const itemList = cartItems.map(item => `- ${item.name}`).join('%0A');
    const message = `Hi, I need a quotation for the following items:%0A${itemList}%0A%0AMy Name: ${customerName}%0APhone: ${customerPhone}`;
    
    window.open(`https://wa.me/917092148969?text=${message}`, '_blank');
    setIsCartOpen(false);
    setCartItems([]);
    setCustomerName('');
    setCustomerPhone('');
  };

  return (
    <div className="products-page">
      <div className="container">
        <header className="products-header">
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Products
          </motion.h1>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our range of premium, high-performance cleaning solutions.
          </motion.p>
        </header>

        <motion.div 
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {productsData.map((product) => (
            <motion.div key={product.id} className="product-card" variants={cardVariants}>
              <div className="product-image-container">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-category">{product.category}</div>
              <h3 className="product-title">{product.name}</h3>
              <div className="product-actions">
                <button 
                  className="btn btn-primary" 
                  style={{ flex: 1, padding: '0.5rem 1rem' }}
                  onClick={() => setSelectedProduct(product)}
                >
                  View Details
                </button>
                <button 
                  className="btn-icon" 
                  onClick={() => addToCart(product)}
                  title="Add to enquiry list"
                >
                  <ShoppingCart size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Modal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct?.name}
        actions={
          <>
            <button className="btn btn-outline" onClick={() => setSelectedProduct(null)}>Close</button>
            <button className="btn btn-primary" onClick={handleEnquire}>Enquire Bulk</button>
          </>
        }
      >
        {selectedProduct && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            {selectedProduct.variants && selectedProduct.variants.length > 0 ? (
              <ProductVariantCarousel variants={selectedProduct.variants} />
            ) : (
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                style={{ height: '200px', objectFit: 'contain', marginBottom: '1.5rem' }} 
              />
            )}
            <span style={{ 
              background: 'var(--primary-orange)', 
              color: 'var(--bg-white)', 
              padding: '0.25rem 0.75rem', 
              borderRadius: 'var(--radius-full)',
              fontSize: '0.875rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              {selectedProduct.category}
            </span>
            <p>{selectedProduct.description}</p>
          </div>
        )}
      </Modal>

      {/* Cart Modal */}
      <Modal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        title="Your Enquiry Cart"
        actions={
          <>
            <button className="btn btn-outline" onClick={() => setIsCartOpen(false)}>Cancel</button>
            <button className="btn btn-primary" onClick={handleGetQuote}>Get Quote</button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          {cartItems.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', margin: '2rem 0' }}>Your cart is empty.</p>
          ) : (
            <>
              <div style={{ maxHeight: '200px', overflowY: 'auto', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                {cartItems.map((item) => (
                  <div key={`cart-${item.id}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <img src={item.image} alt={item.name} style={{ width: '40px', height: '40px', objectFit: 'contain', background: 'var(--bg-offwhite)', borderRadius: 'var(--radius-sm)' }} />
                      <span style={{ fontWeight: 'bold', color: 'var(--deep-blue)' }}>{item.name}</span>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      style={{ background: 'none', border: 'none', color: 'var(--primary-orange)', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 'bold' }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 'bold', color: 'var(--deep-blue)' }}>Your Name</label>
                <input 
                  type="text" 
                  value={customerName} 
                  onChange={(e) => setCustomerName(e.target.value)} 
                  style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'var(--font-body)' }}
                  placeholder="Enter your name"
                />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 'bold', color: 'var(--deep-blue)' }}>Phone Number</label>
                <input 
                  type="tel" 
                  value={customerPhone} 
                  onChange={(e) => setCustomerPhone(e.target.value)} 
                  style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'var(--font-body)' }}
                  placeholder="Enter your phone number"
                />
              </div>
            </>
          )}
        </div>
      </Modal>

      {/* Floating Action Button for Cart */}
      {cartItems.length > 0 && (
        <motion.button 
          className="cart-fab"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsCartOpen(true)}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            background: 'var(--primary-orange)',
            color: 'var(--bg-white)',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-xl)',
            cursor: 'pointer',
            border: 'none',
            zIndex: 1000,
            transition: 'transform 0.3s ease'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCart size={28} />
          <span style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            background: 'var(--deep-blue)',
            color: 'var(--text-light)',
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            boxShadow: 'var(--shadow-sm)'
          }}>
            {cartItems.length}
          </span>
        </motion.button>
      )}
    </div>
  );
};

export default Products;
