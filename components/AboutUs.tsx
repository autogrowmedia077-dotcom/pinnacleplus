import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gradient mb-8">About Us</h1>
        <div className="prose prose-invert text-slate-300">
          <p>Welcome to PinnaclePlus, your number one source for all things digital growth. We're dedicated to giving you the very best of social media automation, with a focus on dependability, customer service and uniqueness.</p>
          <p>Founded in 2025 by Karan Gopalani, PinnaclePlus has come a long way from its beginnings in a home office. When Karan first started out, his passion for helping other parents be more present with their children by automating their online business drove him to do intense research, and gave him the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over the world, and are thrilled to be a part of the quirky, eco-friendly, fair trade wing of the social media industry.</p>
          <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
          <p>Sincerely,</p>
          <p>Karan Gopalani, Founder</p>
        </div>
      </div>
    </div>
  );
};