import React from 'react';
import Button from "../ui/Button.jsx";

const Section2 = () => {
  return (
    <div className="bg-lila p-32">
      <div className="mb-12">
      <Button variant="outlined" className="text-red-500">Securely trade your bets with other users</Button>
      </div>
      <div className="flex flex-col md:flex-row space-between gap-16">
        <Card title="Título del Card" backgroundImage="/redeem.png" />
        <Card title="Título del Card" backgroundImage="/redeem.png" />
      </div>
    </div>
  );
};

const Card = ({ title, backgroundImage }) => {
    return (
      <div className="card h-96 w-1/2 rounded-lg overflow-hidden relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <span className="card__title absolute bottom-0 left-0 bg-white bg-opacity-75 p-2">{title}</span>
      </div>
    );
  };
  

export default Section2;
