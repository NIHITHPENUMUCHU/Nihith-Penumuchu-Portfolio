import React from 'react';
import { SocialLink } from './ui/SocialLink';
import { socialLinks } from '../data/socialLinks';

export function Contact() {
  return (
    <section className="py-20 px-6" id="contact">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
}