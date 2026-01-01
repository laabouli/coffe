import React, { useState, useEffect } from 'react';
import './App.css';

// Icons as SVG components
const Icons = {
  Coffee: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>
    </svg>
  ),
  Leaf: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  ),
  Heart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  ),
  Users: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Wifi: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
    </svg>
  ),
  Accessibility: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4" r="2"/><path d="m6 20 4-8"/><path d="m18 20-4-8"/><path d="M8 16h8"/><path d="M5 8h14"/>
    </svg>
  ),
  Clock: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  MapPin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Phone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  CreditCard: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
    </svg>
  ),
  Dog: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"/><path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"/>
    </svg>
  ),
  Utensils: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
    </svg>
  ),
  Wine: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 22h8"/><path d="M7 10h10"/><path d="M12 15v7"/><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"/>
    </svg>
  ),
  Baby: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/>
    </svg>
  ),
  Parking: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>
    </svg>
  ),
  Menu: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/>
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  ),
  Rainbow: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 17a10 10 0 0 0-20 0"/><path d="M6 17a6 6 0 0 1 12 0"/><path d="M10 17a2 2 0 0 1 4 0"/>
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  ChevronDown: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  )
};

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#gallery', label: 'Galerie' },
    { href: '#menu', label: 'Menu' },
    { href: '#services', label: 'Services' },
    { href: '#ambiance', label: 'Ambiance' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          <span className="logo-icon"><Icons.Coffee /></span>
          <span className="logo-text">Café Méditerranée</span>
        </a>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#reservation" className="nav-cta" onClick={() => setIsOpen(false)}>
            Réserver
          </a>
        </div>

        <button 
          className="nav-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-pattern"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <Icons.Leaf />
          <span>Végétalien • Bio • Halal</span>
        </div>
        <h1 className="hero-title">
          Café<br />
          <span className="hero-accent">Méditerranée</span>
        </h1>
        <p className="hero-tagline">
          Saveurs méditerranéennes, café d'exception<br />
          et douceurs véganes dans un espace chaleureux
        </p>
        <div className="hero-cta">
          <a href="#menu" className="btn btn-primary">
            <Icons.Utensils />
            <span>Découvrir le Menu</span>
          </a>
          <a href="#reservation" className="btn btn-secondary">
            <span>Réserver une table</span>
          </a>
          <a href="#takeaway" className="btn btn-outline">
            <span>À emporter</span>
          </a>
        </div>
        <div className="hero-scroll">
          <Icons.ChevronDown />
        </div>
      </div>
    </section>
  );
}

// Photo Gallery Section
function Gallery() {
  const images = [
    { src: process.env.PUBLIC_URL + '/images/photo-1.png', alt: 'Croissant caramélisé aux fruits rouges et chantilly' },
    { src: process.env.PUBLIC_URL + '/images/photo-2.png', alt: 'Shakshuka maison et latte aux pétales de rose' },
    { src: process.env.PUBLIC_URL + '/images/photo-3.png', alt: 'Assiette méditerranéenne avec burrata et légumes grillés' },
    { src: process.env.PUBLIC_URL + '/images/photo-4.png', alt: 'Toast avocat saumon et œuf poché' },
    { src: process.env.PUBLIC_URL + '/images/photo-5.png', alt: 'Croque-monsieur gourmand et frites maison' }
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Galerie</span>
          <h2 className="section-title">Découvrez notre univers</h2>
        </div>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className={`gallery-item gallery-item-${index + 1}`}>
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  const features = [
    { icon: <Icons.Leaf />, title: 'Bio & Local', desc: 'Produits frais et de saison' },
    { icon: <Icons.Heart />, title: 'Fait maison', desc: 'Préparations artisanales' },
    { icon: <Icons.Users />, title: 'Inclusif', desc: 'Espace accueillant pour tous' },
    { icon: <Icons.Coffee />, title: 'Café premium', desc: 'Torréfaction éthique' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <div className="about-image-frame">
              <img 
                src={process.env.PUBLIC_URL + '/images/about.png'} 
                alt="Intérieur chaleureux du café"
              />
            </div>
            <div className="about-image-accent"></div>
          </div>
          <div className="about-content">
            <span className="section-label">Bienvenue</span>
            <h2 className="section-title">Un coin de Méditerranée<br />au cœur de la ville</h2>
            <p className="about-text">
              Niché dans un espace lumineux et chaleureux, notre café vous invite 
              à une pause gourmande inspirée des saveurs méditerranéennes. 
              Que vous soyez végane, végétarien, ou simplement curieux, 
              notre carte saura vous séduire.
            </p>
            <p className="about-text">
              Nous proposons des options <strong>halal</strong>, <strong>bio</strong> 
              et <strong>sans gluten</strong> pour que chacun trouve son bonheur. 
              Dans une ambiance décontractée et tendance, venez savourer 
              un moment de détente entre amis, en famille ou en solo.
            </p>
            <div className="about-features">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-info">
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Menu Section
function MenuSection() {
  const menuCategories = [
    {
      title: 'Café & Boissons Chaudes',
      icon: <Icons.Coffee />,
      items: ['Espresso', 'Cappuccino', 'Latte art', 'Thés premium', 'Chocolat chaud maison']
    },
    {
      title: 'Petit-déjeuner & Brunch',
      icon: <Icons.Utensils />,
      items: ['Assiette méditerranéenne', 'Pancakes véganes', 'Granola maison', 'Œufs brouillés', 'Avocado toast']
    },
    {
      title: 'Plats & Partages',
      icon: <Icons.Users />,
      items: ['Mezze à partager', 'Salades composées', 'Bowls healthy', 'Wraps végétariens', 'Soupes du jour']
    },
    {
      title: 'Desserts & Douceurs',
      icon: <Icons.Heart />,
      items: ['Pâtisseries maison', 'Gâteaux véganes', 'Fruits frais', 'Glaces artisanales', 'Baklava']
    },
    {
      title: 'Cocktails & Apéritifs',
      icon: <Icons.Wine />,
      items: ['Mocktails créatifs', 'Vins naturels', 'Bières artisanales', 'Spritz', 'Sangria maison']
    }
  ];

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Notre Carte</span>
          <h2 className="section-title">Des saveurs qui voyagent</h2>
          <p className="section-desc">
            De l'Italie à la Grèce, du Maroc à la Turquie — 
            laissez-vous emporter par nos créations méditerranéennes.
          </p>
        </div>
        <div className="menu-grid">
          {menuCategories.map((category, index) => (
            <div key={index} className="menu-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="menu-card-icon">{category.icon}</div>
              <h3 className="menu-card-title">{category.title}</h3>
              <ul className="menu-card-items">
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="menu-cta">
          <a href="#full-menu" className="btn btn-primary">
            Voir la carte complète
          </a>
        </div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  const services = [
    { icon: <Icons.Utensils />, title: 'Sur place', desc: 'Service à table ou au comptoir' },
    { icon: <Icons.Coffee />, title: 'À emporter', desc: 'Emballages éco-responsables' },
    { icon: <Icons.Users />, title: 'Traiteur', desc: 'Pour vos événements' },
    { icon: <Icons.Heart />, title: 'Salle privée', desc: 'Anniversaires & réunions' },
    { icon: <Icons.Wifi />, title: 'Wi-Fi gratuit', desc: 'Travaillez en toute liberté' },
    { icon: <Icons.Wine />, title: 'Bar', desc: 'Cocktails & vins' }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Nos Services</span>
          <h2 className="section-title">À votre service</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Accessibility Section
function AccessibilitySection() {
  const accessFeatures = [
    { icon: <Icons.Accessibility />, text: 'Entrée accessible en fauteuil roulant' },
    { icon: <Icons.Users />, text: 'Places assises accessibles' },
    { icon: <Icons.Parking />, text: 'Parking accessible à proximité' },
    { icon: <Icons.Baby />, text: 'Chaises hautes disponibles' }
  ];

  return (
    <section id="accessibility" className="accessibility">
      <div className="container">
        <div className="accessibility-content">
          <div className="accessibility-info">
            <span className="section-label">Accessibilité</span>
            <h2 className="section-title">Un espace pour tous</h2>
            <p>
              Notre café est conçu pour accueillir chaque personne 
              dans les meilleures conditions possibles.
            </p>
          </div>
          <div className="accessibility-features">
            {accessFeatures.map((feature, index) => (
              <div key={index} className="access-feature">
                <div className="access-icon">{feature.icon}</div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Ambiance Section
function Ambiance() {
  const vibes = [
    { icon: <Icons.Heart />, title: 'Ambiance détendue', desc: 'Atmosphère chaleureuse et apaisante' },
    { icon: <Icons.Users />, title: 'Familles bienvenues', desc: 'Espace adapté aux enfants' },
    { icon: <Icons.Coffee />, title: 'Étudiants', desc: 'Parfait pour étudier ou travailler' },
    { icon: <Icons.Rainbow />, title: 'LGBTQ+ Friendly', desc: 'Espace safe et inclusif' },
    { icon: <Icons.Dog />, title: 'Chiens acceptés', desc: 'Vos compagnons sont les bienvenus' },
    { icon: <Icons.Star />, title: 'Tendance & Cosy', desc: 'Décoration soignée et moderne' }
  ];

  return (
    <section id="ambiance" className="ambiance">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Ambiance & Communauté</span>
          <h2 className="section-title">Un lieu qui vous ressemble</h2>
          <p className="section-desc">
            Nous avons créé un espace où chacun peut se sentir chez soi, 
            peu importe qui vous êtes ou d'où vous venez.
          </p>
        </div>
        <div className="ambiance-grid">
          {vibes.map((vibe, index) => (
            <div key={index} className="vibe-card">
              <div className="vibe-icon">{vibe.icon}</div>
              <h3>{vibe.title}</h3>
              <p>{vibe.desc}</p>
            </div>
          ))}
        </div>
        <div className="pride-banner">
          <div className="pride-colors"></div>
          <p>
            <strong>Espace trans-safe</strong> — Nous sommes engagés pour 
            l'inclusion et le respect de toutes les identités.
          </p>
        </div>
      </div>
    </section>
  );
}

// Practical Info Section
function PracticalInfo() {
  const paymentMethods = [
    'Cartes de crédit & débit',
    'Paiement mobile NFC',
    'Ticket Restaurant',
    'Bimpli & Pluxee',
    'Chèques'
  ];

  return (
    <section id="practical" className="practical">
      <div className="container">
        <div className="practical-grid">
          <div className="practical-card">
            <h3><Icons.Clock /> Informations pratiques</h3>
            <ul className="practical-list">
              <li><span>✓</span> Réservations acceptées</li>
              <li><span>⏱</span> Temps d'attente fréquent aux heures de pointe</li>
              <li><span>P</span> Stationnement payant dans la rue</li>
              <li><span>👶</span> Chaises hautes disponibles</li>
            </ul>
          </div>
          <div className="practical-card">
            <h3><Icons.CreditCard /> Moyens de paiement</h3>
            <ul className="payment-list">
              {paymentMethods.map((method, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span>
                  {method}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact / Footer Section
function Footer() {
  const hours = [
    { day: 'Lundi - Vendredi', time: '8h00 - 22h00' },
    { day: 'Samedi', time: '9h00 - 23h00' },
    { day: 'Dimanche', time: '9h00 - 20h00' }
  ];

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Icons.Coffee />
              <span>Café Méditerranée</span>
            </div>
            <p>
              Votre pause méditerranéenne au quotidien. 
              Café, brunch et saveurs du soleil.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Icons.Instagram />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Icons.Facebook />
              </a>
            </div>
          </div>

          <div className="footer-hours">
            <h4>Horaires d'ouverture</h4>
            <ul>
              {hours.map((h, i) => (
                <li key={i}>
                  <span className="day">{h.day}</span>
                  <span className="time">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <Icons.MapPin />
                <span>123 Rue du Soleil<br />75001 Paris, France</span>
              </li>
              <li>
                <Icons.Phone />
                <a href="tel:+33123456789">01 23 45 67 89</a>
              </li>
              <li>
                <Icons.Mail />
                <a href="mailto:bonjour@cafe-mediterranee.fr">bonjour@cafe-mediterranee.fr</a>
              </li>
            </ul>
          </div>

          <div className="footer-reservation" id="reservation">
            <h4>Réserver une table</h4>
            <p>Appelez-nous ou réservez en ligne</p>
            <a href="tel:+33123456789" className="btn btn-primary">
              <Icons.Phone />
              <span>Appeler maintenant</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Café Méditerranée. Tous droits réservés.</p>
          <p className="footer-credits">
            Fait avec <span className="heart">♥</span> pour notre communauté
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Gallery />
        <MenuSection />
        <Services />
        <AccessibilitySection />
        <Ambiance />
        <PracticalInfo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
