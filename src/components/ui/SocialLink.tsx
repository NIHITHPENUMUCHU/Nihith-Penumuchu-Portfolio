import React from 'react';
import { motion } from 'framer-motion';
import { SocialLink as SocialLinkType } from '../../types/social';

interface SocialLinkProps {
  link: SocialLinkType;
}

export function SocialLink({ link }: SocialLinkProps) {
  const Icon = link.icon;
  
  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col items-center gap-4 p-6 bg-gray-800 dark:bg-gray-900 rounded-xl hover:bg-emerald-400/10 transition-colors"
    >
      <div className="text-emerald-400 w-8 h-8">
        <Icon />
      </div>
      <span className="text-sm font-medium">{link.label}</span>
    </motion.a>
  );
}