import React, { useState, useEffect } from 'react';

const names = ["Rohan", "Vikram", "Aditya", "Priya", "Sneha", "Rahul", "Karan", "Anjali", "Amit", "Neha", "Suresh", "Pooja"];
const cities = ["Pune", "Mumbai", "Delhi", "Bangalore", "Indore", "Jaipur", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Lucknow"];

// Weighted products array to show more upsells (999 and 1999)
const products = [
  { name: "Starter Pack", price: "₹399" },
  { name: "Starter Pack", price: "₹399" },
  { name: "Growth Bundle", price: "₹999" },
  { name: "Growth Bundle", price: "₹999" },
  { name: "Growth Bundle", price: "₹999" },
  { name: "Ultimate Empire", price: "₹1,999" },
  { name: "Ultimate Empire", price: "₹1,999" },
  { name: "Ultimate Empire", price: "₹1,999" },
];

export const PurchaseNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState({ name: "Rohan", city: "Pune", product: "Growth Bundle", price: "₹999" });

  useEffect(() => {
    // Helper to get random data
    const getRandomData = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      return { 
        name: randomName, 
        city: randomCity, 
        product: randomProduct.name, 
        price: randomProduct.price 
      };
    };

    // Initial data setup
    setData(getRandomData());

    // Show initially after 4 seconds
    const initialTimer = setTimeout(() => setIsVisible(true), 4000);

    // Loop to hide and show with new data
    const loopTimer = setInterval(() => {
      setIsVisible(false);
      
      // Wait for exit animation then update and show
      setTimeout(() => {
        setData(getRandomData());
        setIsVisible(true);
      }, 1500); // 1.5s gap between notifications
      
    }, 12000); // Cycle every 12 seconds

    return () => {
      clearTimeout(initialTimer);
      clearInterval(loopTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-4 sm:left-6 z-50 animate-float">
      <div className="bg-slate-900/95 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.3)] rounded-xl px-5 py-4 border border-indigo-500/30 flex items-center space-x-4 max-w-sm w-full text-white relative overflow-hidden transition-all duration-500">
        
        <span className="text-2xl animate-bounce">🎉</span>
        <div className="flex flex-col relative z-10">
          <p className="text-sm font-medium leading-snug">
            <span className="font-bold text-indigo-300">{data.name}</span> from {data.city} purchased <span className="text-white font-bold">{data.product}</span>
          </p>
          <div className="flex items-center gap-2 mt-1">
             <span className="text-xs text-slate-400">Just now</span>
             <span className={`text-xs font-bold px-1.5 py-0.5 rounded border ${
               data.price === "₹1,999" ? "text-yellow-400 bg-yellow-400/10 border-yellow-400/20" : 
               data.price === "₹999" ? "text-indigo-400 bg-indigo-400/10 border-indigo-400/20" :
               "text-green-400 bg-green-400/10 border-green-400/20"
             }`}>
               {data.price}
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};