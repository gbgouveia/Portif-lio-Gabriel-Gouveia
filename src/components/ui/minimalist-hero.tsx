import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon, Github, Linkedin, Mail, X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import CursorScrubCanvas from './CursorScrubCanvas';

export interface OverlayTextObj {
  part1?: string;
  part2?: string;
  lines?: string[];
}

export interface MinimalistHeroProps {
  logoText?: string;
  navLinks?: { label: string; href: string }[];
  mainText?: string;
  readMoreLink?: string;
  readMoreText?: string;
  overlayText?: OverlayTextObj | string[];
  socialLinks?: { icon: LucideIcon; href: string; label?: string }[];
  locationText?: string;
  className?: string;
}

const DEFAULT_NAV = [
  { label: 'INÍCIO', href: '#hero' },
  { label: 'PROJETOS', href: '#projetos' },
  { label: 'SOBRE', href: '#sobre' },
  { label: 'CONTATO', href: '#contato' },
];

const DEFAULT_SOCIALS = [
  { icon: Github, href: 'https://github.com/gbgouveia', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/gabriel-gouveia-de-paula-599a01384', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:gb.gouveia.ps@gmail.com', label: 'Email' },
];

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith('#')) {
    e.preventDefault();
    const id = href.substring(1);
    const targetEl = document.getElementById(id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a
    href={href}
    onClick={(e) => {
      handleSmoothScroll(e, href);
      if (onClick) onClick();
    }}
    className="text-xs font-mono tracking-widest text-[#F4ECE7]/80 hover:text-[#4BF2F2] transition-colors uppercase font-medium"
  >
    {children}
  </a>
);

const SocialIcon = ({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label?: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label || 'Rede social'}
    className="text-[#F4ECE7]/80 hover:text-[#4BF2F2] transition-colors p-1.5"
  >
    <Icon className="h-5 w-5" />
  </a>
);

export const MinimalistHero = ({
  logoText = 'GABRIEL GOUVEIA',
  navLinks = DEFAULT_NAV,
  mainText = 'Desenvolvo experiências digitais que unem estratégia, tecnologia e identidade. Cada projeto é construído para funcionar com clareza, propósito e atenção aos detalhes.',
  readMoreLink = '#projetos',
  readMoreText = 'CONHEÇA MEU TRABALHO',
  overlayText = { lines: ['EU PENSO.', 'DESENVOLVO.', 'CRIO.'] },
  socialLinks = DEFAULT_SOCIALS,
  locationText = 'BRASÍLIA — DF, BRASIL',
  className,
}: MinimalistHeroProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderLines = () => {
    if (Array.isArray(overlayText)) {
      return overlayText;
    }
    if (overlayText?.lines && overlayText.lines.length > 0) {
      return overlayText.lines;
    }
    if (overlayText?.part1 || overlayText?.part2) {
      return [overlayText.part1 || '', overlayText.part2 || ''].filter(Boolean);
    }
    return ['EU PENSO.', 'DESENVOLVO.', 'CRIO.'];
  };

  const lines = renderLines();

  return (
    <section
      id="hero"
      className={cn(
        'relative flex h-screen min-h-[100vh] w-full flex-col justify-between overflow-hidden bg-[#201D1E] text-[#F4ECE7] font-sans p-6 md:p-12 select-none',
        className
      )}
    >
      {/* 1. FULLSCREEN 3D CHARACTER LAYER (CursorScrubCanvas) */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <CursorScrubCanvas
          frameCount={240}
          axis="horizontal"
          reverse={false}
          smoothing={0.35}
          objectFit="cover"
          backgroundColor="#201D1E"
          enableSubpixelBlending={true}
          className="w-full h-full"
        />
      </div>

      {/* 2. AMBIENT OVERLAYS (Vignette & Subtle Grid) */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-b from-[#201D1E]/75 via-transparent to-[#201D1E]/85" />
      <div className="absolute inset-0 z-2 pointer-events-none opacity-30 bg-[linear-gradient(rgba(244,236,231,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(244,236,231,0.012)_1px,transparent_1px)] bg-[size:120px_120px]" />

      {/* 3. TOP HEADER (LOGO + NAV) */}
      <header className="relative z-20 flex w-full max-w-7xl items-center justify-between mx-auto pt-2 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2"
        >
          <span className="text-lg font-black tracking-wider text-[#F4ECE7] font-sans">
            {logoText}
          </span>
          <span className="h-2 w-2 rounded-full bg-[#4BF2F2] shadow-[0_0_8px_#4BF2F2]" />
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center p-2 text-[#F4ECE7] md:hidden focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-20 left-0 z-40 w-full bg-[#181516]/95 backdrop-blur-md border-b border-white/10 p-6 flex flex-col space-y-4 md:hidden shadow-2xl pointer-events-auto"
          >
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. MAIN OVERLAY CONTENT AREA */}
      <div className="relative z-20 grid w-full max-w-7xl flex-grow grid-cols-1 md:grid-cols-2 items-center gap-8 py-6 mx-auto pointer-events-none">
        {/* Left Column: Narrative Text in Negative Space */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pointer-events-auto text-left max-w-md flex flex-col items-start justify-center"
        >
          <div className="p-4 rounded-lg bg-[#201D1E]/40 backdrop-blur-[3px] border border-white/5 shadow-lg">
            <p className="text-sm leading-relaxed text-[#F4ECE7]/90 font-sans">
              {mainText}
            </p>
          </div>
          <a
            href={readMoreLink}
            onClick={(e) => handleSmoothScroll(e, readMoreLink)}
            className="mt-5 inline-flex items-center text-xs font-mono tracking-widest text-[#128BA6] hover:text-[#4BF2F2] underline underline-offset-4 decoration-1 uppercase transition-colors"
          >
            {readMoreText} →
          </a>
        </motion.div>

        {/* Right Column: Overlay Big Headline (EU PENSO. DESENVOLVO. CRIO.) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="pointer-events-none flex justify-center md:justify-end text-center md:text-right"
        >
          <h1 className="text-4xl font-black tracking-tight text-[#F4ECE7] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none flex flex-col space-y-1 drop-shadow-2xl font-sans">
            {lines.map((line, idx) => (
              <span key={idx} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </h1>
        </motion.div>
      </div>

      {/* 5. BOTTOM FOOTER (SOCIALS + LOCATION) */}
      <footer className="relative z-20 flex w-full max-w-7xl items-center justify-between mx-auto pb-2 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center space-x-3"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} label={link.label} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-xs font-mono tracking-widest text-[#F4ECE7]/80 uppercase"
        >
          {locationText}
        </motion.div>
      </footer>
    </section>
  );
};

export default MinimalistHero;


