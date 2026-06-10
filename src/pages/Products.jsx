import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import Modal from '../components/ui/Modal';
import './Products.css';

const productsData = [
  {
    id: 1,
    name: 'Cloth Wash',
    category: 'Retail',
    image: '/assets/products/S_Clothwash.png',
    description: 'Advanced formula for deep cleaning clothes without damaging fabrics.'
  },
  {
    id: 2,
    name: 'Comfort Blue',
    category: 'Retail',
    image: '/assets/products/S_Comfort_blue.png',
    description: 'Fabric softener that leaves a long-lasting, fresh blue scent.'
  },
  {
    id: 3,
    name: 'Dishwash Gel',
    category: 'Retail',
    image: '/assets/products/WOS_Dishwash.png',
    description: 'Tough on grease, gentle on hands. Ensures sparkling clean dishes.'
  },
  {
    id: 4,
    name: 'Floor Cleaner',
    category: 'Retail',
    image: '/assets/products/S_Floorwash_pink.png',
    description: 'Kills 99.9% of germs and leaves floors brilliantly clean.'
  },
  {
    id: 5,
    name: 'Handwash',
    category: 'Retail',
    image: '/assets/products/S_Handwash_pink.png',
    description: 'Soft and gentle handwash with a refreshing floral fragrance.'
  },
  {
    id: 6,
    name: 'Toilet Cleaner',
    category: 'Retail',
    image: '/assets/products/S_Toiletcleaner.png',
    description: 'Industrial-strength cleaning for a sparkling and hygienic toilet.'
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

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
    toast.success('Enquiry added! We will contact you soon.', {
      style: {
        background: 'var(--bg-white)',
        color: 'var(--deep-blue)',
        border: '1px solid var(--primary-orange)'
      }
    });
    setSelectedProduct(null);
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
                  onClick={() => toast.success(`${product.name} added to inquiry list!`)}
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
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name} 
              style={{ height: '200px', objectFit: 'contain', marginBottom: '1.5rem' }} 
            />
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
    </div>
  );
};

export default Products;
