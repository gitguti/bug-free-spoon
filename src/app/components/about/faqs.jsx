// Faqs.jsx
import React from 'react';
import Image from 'next/image';

const Faqs = ({ faqs }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-3">
      {faqs.map((faq, index) => (
        <div key={index} className={`px-10 py-8 rounded-lg ${faq.backgroundColor}`}>
          <p className={`text-${faq.textColor}`}>{faq.question}</p>
          {/* Puedes añadir la lógica para mostrar la respuesta y la imagen aquí cuando estén disponibles */}
        </div>
      ))}
    </div>
  );
};

export default Faqs;
