import React from 'react';

export const ReturnsPolicy: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gradient mb-8">Returns Policy</h1>
        <div className="prose prose-invert text-slate-300">
          <p>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.</p>
          <p>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
          <p>Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.</p>
          <p>Additional non-returnable items:</p>
          <ul>
            <li>Gift cards</li>
            <li>Downloadable software products</li>
            <li>Some health and personal care items</li>
          </ul>
          <p>To complete your return, we require a receipt or proof of purchase.</p>
          <p>Please do not send your purchase back to the manufacturer.</p>
          <p>There are certain situations where only partial refunds are granted (if applicable):</p>
          <ul>
            <li>Book with obvious signs of use</li>
            <li>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened</li>
            <li>Any item not in its original condition, is damaged or missing parts for reasons not due to our error</li>
            <li>Any item that is returned more than 30 days after delivery</li>
          </ul>
          <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
          <p>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>
        </div>
      </div>
    </div>
  );
};