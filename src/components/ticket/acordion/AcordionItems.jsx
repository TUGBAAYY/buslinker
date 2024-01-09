// AccordionItem.js

import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={handleToggle}>
        {title}
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default AccordionItem;
