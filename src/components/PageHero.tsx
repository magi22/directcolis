import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon, Sparkles, Package, Truck, Boxes } from 'lucide-react';

type PageHeroProps = {
  /** Badge text, e.g. "Contactez-nous" */
  badge: string;
  /** Badge icon — lucide component */
  badgeIcon?: LucideIcon;
  /** H1 title parts: plain text + highlighted (red gradient) + trailing plain text */
  title: React.ReactNode;
  /** One-sentence subtitle */
  subtitle?: string;
  /** Optional right-side slot (buttons, extra content) */
  children?: React.ReactNode;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

export default function PageHero({ badge, badgeIcon: BadgeIcon = Sparkles, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 bg-[#0a1128] overflow-hidden">
      {/* Couche 1 — dégradés radiaux chauds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(220,38,38,0.28),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(30,58,138,0.4),_transparent_55%)]" />

      {/* Grille de fond animée */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
        }}
      />

      {/* Orbes flottantes */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 -left-20 w-80 h-80 bg-red-600/30 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 -right-20 w-96 h-96 bg-red-500/25 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        aria-hidden
        animate={{ y: [-10, 10, -10], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none hidden md:block"
      />

      {/* Particules lumineuses */}
      {[
        { x: '15%', y: '20%', size: 2, delay: 0 },
        { x: '80%', y: '30%', size: 3, delay: 1 },
        { x: '25%', y: '70%', size: 2, delay: 2 },
        { x: '70%', y: '80%', size: 2.5, delay: 0.5 },
        { x: '50%', y: '15%', size: 2, delay: 1.5 },
        { x: '90%', y: '60%', size: 3, delay: 0.8 },
        { x: '10%', y: '50%', size: 2, delay: 2.2 },
      ].map((p, i) => (
        <motion.div
          key={i}
          aria-hidden
          animate={{ y: [-15, 15, -15], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 4 + i * 0.5, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.8)] pointer-events-none hidden sm:block"
          style={{ left: p.x, top: p.y, width: p.size * 2, height: p.size * 2 }}
        />
      ))}

      {/* Icônes flottantes en arrière-plan */}
      <motion.div
        aria-hidden
        animate={{ y: [-8, 8, -8], rotate: [-5, 5, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 right-[10%] text-red-500/20 pointer-events-none hidden lg:block"
      >
        <Boxes className="w-20 h-20" />
      </motion.div>
      <motion.div
        aria-hidden
        animate={{ y: [8, -8, 8], rotate: [5, -5, 5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-16 left-[6%] text-red-500/20 pointer-events-none hidden lg:block"
      >
        <Package className="w-16 h-16" />
      </motion.div>
      <motion.div
        aria-hidden
        animate={{ y: [-6, 6, -6], x: [-4, 4, -4] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-[4%] text-red-500/15 pointer-events-none hidden xl:block"
      >
        <Truck className="w-24 h-24" />
      </motion.div>

      {/* Anneau décoratif rotatif */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-red-500/10 pointer-events-none hidden md:block"
      >
        <div className="absolute top-4 left-1/2 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
        <div className="absolute bottom-4 left-1/2 w-2 h-2 rounded-full bg-red-400" />
      </motion.div>

      {/* Contenu */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          {/* Badge live */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 px-4 py-2 rounded-full mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <BadgeIcon className="w-3.5 h-3.5 text-red-400" />
            <span className="text-xs font-bold text-red-300 uppercase tracking-[0.2em]">{badge}</span>
          </motion.div>

          {/* Titre */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight"
          >
            {title}
          </motion.h1>

          {/* Sous-titre */}
          {subtitle && (
            <motion.p variants={fadeInUp} className="text-blue-100/80 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              {subtitle}
            </motion.p>
          )}

          {/* Slot pour CTA / contenu additionnel */}
          {children && (
            <motion.div variants={fadeInUp} className="mt-8">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Courbe decorative en bas */}
      <svg
        aria-hidden
        className="absolute bottom-0 left-0 w-full h-12 sm:h-16 text-white"
        viewBox="0 0 1440 80"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M0,64 C360,16 720,16 1080,48 L1440,80 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
}

/** Helper: render a red gradient highlighted word with animated underline */
export function HeroHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10 bg-gradient-to-br from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">{children}</span>
      <motion.span
        aria-hidden
        animate={{ scaleX: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 0.7, 1] }}
        className="absolute bottom-1 left-0 right-0 h-1 bg-red-500 rounded-full origin-left"
      />
    </span>
  );
}
