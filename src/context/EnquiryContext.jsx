import React, { createContext, useContext, useState } from 'react';
import EnquiryModal from '../components/EnquiryModal';

const EnquiryContext = createContext();

export const useEnquiry = () => useContext(EnquiryContext);

export const EnquiryProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialProduct, setInitialProduct] = useState('');

  const openEnquiry = (productName = '') => {
    setInitialProduct(productName);
    setIsOpen(true);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
    setInitialProduct('');
  };

  return (
    <EnquiryContext.Provider value={{ isOpen, openEnquiry, closeEnquiry }}>
      {children}
      <EnquiryModal isOpen={isOpen} onClose={closeEnquiry} initialProduct={initialProduct} />
    </EnquiryContext.Provider>
  );
};
