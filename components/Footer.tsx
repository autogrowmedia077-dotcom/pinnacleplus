import React from 'react';
import { Instagram, Youtube, Twitter, Linkedin, MapPin, Store } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold text-gradient mb-4">PinnaclePlus</div>
          <p className="text-slate-400 mb-6">Transform your digital presence with automated growth solutions</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram size={24} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Youtube size={24} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={24} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={24} /></a>
          </div>

          <div className="flex flex-wrap justify-center space-x-6 mb-6 text-sm">
            <a href="/privacy-policy" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-conditions" className="text-slate-500 hover:text-white transition-colors">Terms & Conditions</a>
            <a href="/returns-policy" className="text-slate-500 hover:text-white transition-colors">Returns Policy</a>
            <a href="/about-us" className="text-slate-500 hover:text-white transition-colors">About Us</a>
          </div>

          <div className="text-slate-600 text-sm mb-10">
            © 2025 PinnaclePlus | Built with ❤️ by Vedant Chalke | All rights reserved
          </div>

          <div className="max-w-2xl mx-auto text-left sm:text-center">
            <div className="glass-card border border-white/10 rounded-xl p-6 bg-white/5">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">GADGET GLITZ</h3>
              <p className="text-sm text-slate-400 mb-4">Mobile Accessories Store</p>
              <p className="text-sm text-slate-400 mb-4">Your trusted partner in digital transformation and social media automation</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 max-w-lg mx-auto">
                <div className="flex items-center sm:justify-center space-x-2">
                  <Store size={16} className="text-indigo-400" />
                  <span>Visit Our Store</span>
                </div>
                <div className="flex items-center sm:justify-center space-x-2">
                  <MapPin size={16} className="text-indigo-400" />
                  <span>31, Indra Market, Jabalpur, MP</span>
                </div>
                <div className="flex items-center sm:justify-center space-x-2">
                   <span>📮 482001</span>
                </div>
              </div>
              <div className="text-xs text-slate-600 mt-4">Established business expanding into digital services</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};