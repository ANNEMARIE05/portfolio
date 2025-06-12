import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Mail, Phone, MapPin, Calendar, Download, ExternalLink, Code, Palette, Database, Globe, Star, Award, GraduationCap, Briefcase, ArrowRight, Eye } from 'lucide-react';

export default function Portfolio(){
  const [lng, setLng] = useState('fr');
  const [sectActif, setSectActif] = useState('accueil');
  const [animVis, setAnimVis] = useState({});
  const [partis, setPartis] = useState([]);
  const [cursMouv, setCursMouv] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const sectRefs = useRef({});

  const txt = {
    fr: {
      nav: {
        accueil: 'Accueil',
        apropos: 'À Propos',
        competences: 'Compétences',
        parcours: 'Parcours',
        projets: 'Projets',
        contact: 'Contact'
      },
      hero: {
        salut: 'Salut, je suis',
        nom: 'Anne Marie Agbonou',
        titre: 'Développeuse Web Fullstack',
        desc: 'Passionnée par la création d\'expériences web innovantes et performantes. Je transforme vos idées en solutions digitales exceptionnelles.',
        btnCv: 'Télécharger CV',
        btnContact: 'Me Contacter'
      },
      apropos: {
        titre: 'À Propos de Moi',
        desc: 'Développeuse fullstack passionnée, je combine créativité et expertise technique pour créer des solutions web modernes. Mon parcours académique solide et mes formations spécialisées me permettent de maîtriser l\'ensemble de la chaîne de développement.',
        age: 'Âge',
        localisation: 'Localisation',
        email: 'Email',
        telephone: 'Téléphone'
      },
      competences: {
        titre: 'Mes Compétences',
        frontend: 'Frontend',
        backend: 'Backend',
        outils: 'Outils & Design',
        autres: 'Autres'
      },
      parcours: {
        titre: 'Mon Parcours',
        formation: 'Formation',
        certifications: 'Certifications'
      },
      projets: {
        titre: 'Mes Projets',
        voirPlus: 'Voir Plus',
        github: 'GitHub',
        btnTous: 'Voir Tous les Projets'
      },
      contact: {
        titre: 'Contactez-Moi',
        desc: 'Prête à collaborer sur votre prochain projet ? N\'hésitez pas à me contacter !',
        btnEnv: 'Envoyer Message'
      }
    },
    en: {
      nav: {
        accueil: 'Home',
        apropos: 'About',
        competences: 'Skills',
        parcours: 'Journey',
        projets: 'Projects',
        contact: 'Contact'
      },
      hero: {
        salut: 'Hi, I\'m',
        nom: 'Anne Marie Agbonou',
        titre: 'Fullstack Web Developer',
        desc: 'Passionate about creating innovative and high-performance web experiences. I transform your ideas into exceptional digital solutions.',
        btnCv: 'Download CV',
        btnContact: 'Contact Me'
      },
      apropos: {
        titre: 'About Me',
        desc: 'Passionate fullstack developer, I combine creativity and technical expertise to create modern web solutions. My solid academic background and specialized training allow me to master the entire development chain.',
        age: 'Age',
        localisation: 'Location',
        email: 'Email',
        telephone: 'Phone'
      },
      competences: {
        titre: 'My Skills',
        frontend: 'Frontend',
        backend: 'Backend',
        outils: 'Tools & Design',
        autres: 'Others'
      },
      parcours: {
        titre: 'My Journey',
        formation: 'Education',
        certifications: 'Certifications'
      },
      projets: {
        titre: 'My Projects',
        voirPlus: 'View More',
        github: 'GitHub',
        btnTous: 'View All Projects'
      },
      contact: {
        titre: 'Contact Me',
        desc: 'Ready to collaborate on your next project? Feel free to contact me!',
        btnEnv: 'Send Message'
      }
    }
  };

  const comps = [
    { nom: 'JavaScript', icone: 'fab fa-js-square', coul: 'from-yellow-400 to-orange-500', glow: 'shadow-yellow-500/50' },
    { nom: 'HTML/CSS', icone: 'fab fa-html5', coul: 'from-orange-500 to-red-500', glow: 'shadow-orange-500/50' },
    { nom: 'React JS', icone: 'fab fa-react', coul: 'from-cyan-400 to-blue-500', glow: 'shadow-cyan-500/50' },
    { nom: 'Vue JS', icone: 'fab fa-vuejs', coul: 'from-green-400 to-emerald-500', glow: 'shadow-green-500/50' },
    { nom: 'Next JS', icone: 'fas fa-code', coul: 'from-gray-700 to-gray-900', glow: 'shadow-gray-500/50' },
    { nom: 'Bootstrap', icone: 'fab fa-bootstrap', coul: 'from-purple-500 to-violet-600', glow: 'shadow-purple-500/50' },
    { nom: 'Tailwind CSS', icone: 'fas fa-paint-brush', coul: 'from-teal-400 to-cyan-500', glow: 'shadow-teal-500/50' },
    { nom: 'PHP', icone: 'fab fa-php', coul: 'from-indigo-500 to-purple-600', glow: 'shadow-indigo-500/50' },
    { nom: 'Node JS', icone: 'fab fa-node-js', coul: 'from-green-500 to-lime-500', glow: 'shadow-green-500/50' },
    { nom: 'API Integration', icone: 'fas fa-plug', coul: 'from-pink-500 to-rose-500', glow: 'shadow-pink-500/50' },
    { nom: 'Figma', icone: 'fab fa-figma', coul: 'from-purple-400 to-pink-500', glow: 'shadow-purple-500/50' },
    { nom: 'Git', icone: 'fab fa-git-alt', coul: 'from-red-500 to-orange-500', glow: 'shadow-red-500/50' }
  ];

  const parc = [
    {
      annee: '2024-2025',
      titre: 'Formation Fullstack',
      inst: 'WeCode',
      type: 'certifications',
      desc: 'Formation complète en développement fullstack'
    },
    {
      annee: '2024',
      titre: 'Licence DAS',
      inst: 'Université Virtuelle de Côte d\'Ivoire (UVCI)',
      type: 'formation',
      desc: 'Développement d\'Applications et Services'
    },
    {
      annee: '2023',
      titre: 'Formation JavaScript',
      inst: 'NAN DIGITAL ACADEMY',
      type: 'certifications',
      desc: 'Certification en développement JavaScript'
    },
    {
      annee: '2021',
      titre: 'Baccalauréat D',
      inst: 'Lycée Municipal de Koumassi',
      type: 'formation',
      desc: 'Baccalauréat série D'
    }
  ];

  const projs = [
    {
      nom: 'Flash service',
      desc: 'Plateforme de paiement 1xbet/melbet',
      techs: ['Html/Css', 'TailwindCss', 'Javascript'],
      img: 'https://img.freepik.com/vecteurs-premium/mains-tenant-smartphone-pour-transferer-argent-ligne_185038-22.jpg?uid=R99967860&semt=ais_hybrid&w=740',
      github:'https://github.com/ANNEMARIE05/flash-service',
      demo:'https://flash-service.vercel.app/',
    },
    {
      nom: 'The N\'takou ',
      desc: 'Application de visibilité d\'une ONG mettant des livres européens a la disposition des africains',
      techs: ['Wordpress','Figma'],
      img: 'https://img.freepik.com/vecteurs-libre/pile-livres-design-plat-dessines-main_23-2149322351.jpg?uid=R99967860&semt=ais_hybrid&w=740',
      github:'#',
      demo:'https://thentakou.com/',
    },
    {
      nom: 'Maison d\'Hôte',
      desc: 'Application de reservation de chambre d\'hôte',
      techs: ['Next js', 'tailwindCss'],
      img: 'https://img.freepik.com/vecteurs-libre/chambre-garcons-lit-armoire-etagere-chaise-boite-jouets-nuit_107791-10350.jpg?uid=R99967860&semt=ais_hybrid&w=740',
      github:'https://github.com/ANNEMARIE05/chambre',
      demo:'https://chambre-alpha.vercel.app/',
    }
  ];

  useEffect(() => {
    const partiInit = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
      taille: Math.random() * 2 + 1,
      coul: Math.random() > 0.5 ? 'rgba(236, 72, 153, 0.4)' : 'rgba(139, 92, 246, 0.4)',
      pulse: Math.random() * 2 + 1
    }));
    setPartis(partiInit);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimVis(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      obs.observe(section);
    });

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      setCursMouv({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPartis(prev => prev.map(p => ({
        ...p,
        x: (p.x + p.vx + window.innerWidth) % window.innerWidth,
        y: (p.y + p.vy + window.innerHeight) % window.innerHeight
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const navVers = (section) => {
    setSectActif(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const calcAge = () => {
    const naiss = new Date('2001-02-04');
    const auj = new Date();
    return auj.getFullYear() - naiss.getFullYear();
  };

  const telCv = () => {
    const lien = document.createElement('a');
    lien.href = 'https://drive.google.com/uc?export=download&id=19K-y48bQbb7Z2DbHkvQtpdjIQwowxx94';
    lien.download = 'CV_Anne_Marie_Agbonou.pdf';
    lien.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-pink-400 to-violet-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300 ease-out"
        style={{
          left: cursMouv.x - 12,
          top: cursMouv.y - 12,
          transform: `scale(${sectActif === 'competences' ? 2 : 1})`
        }}
      />
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {partis.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full animate-pulse"
            style={{
              left: p.x,
              top: p.y,
              width: p.taille,
              height: p.taille,
              backgroundColor: p.coul,
              boxShadow: `0 0 ${p.taille * 3}px ${p.coul}`,
              animationDelay: `${p.pulse}s`,
              transform: `translateY(${Math.sin(scrollY * 0.01 + p.id) * 20}px)`
            }}
          />
        ))}
        
        <div 
          className="absolute top-1/4 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.1}deg)` }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * -0.1}deg)` }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-48 h-48 md:w-72 md:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"
          style={{ transform: `translateY(${scrollY * 0.05}px) rotate(${scrollY * 0.05}deg)` }}
        />
      </div>
      
      <nav className="fixed top-0 w-full z-40 bg-black/20 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div 
              className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent cursor-pointer transform hover:scale-110 transition-all duration-300"
              onClick={() => navVers('accueil')}
            >
              AM.dev
            </div>
            
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              {Object.entries(txt[lng].nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => navVers(key)}
                  className={`relative transition-all duration-300 hover:text-pink-400 text-sm lg:text-base group ${
                    sectActif === key ? 'text-pink-400' : ''
                  }`}
                >
                  {value}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-violet-400 transition-all duration-300 group-hover:w-full ${sectActif === key ? 'w-full' : ''}`} />
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => setLng(lng === 'fr' ? 'en' : 'fr')}
                className="px-2 py-1 sm:px-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
              >
                {lng === 'fr' ? '🇫🇷 FR' : '🇺🇸 EN'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 relative z-10">
          <div className="space-y-6">
            <div className="animate-bounce">
              <p className="text-sm sm:text-base lg:text-lg text-pink-400 mb-3 sm:mb-4 transform animate-pulse">
                {txt[lng].hero.salut}
              </p>
            </div>
            
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-pink-200 to-violet-200 bg-clip-text text-transparent leading-tight">
                {txt[lng].hero.nom.split('').map((char, i) => (
                  <span 
                    key={i} 
                    className="inline-block hover:scale-125 hover:text-pink-400 transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-violet-500/20 blur-xl animate-pulse" />
            </div>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-violet-300 mb-6 sm:mb-8 animate-pulse">
              {txt[lng].hero.titre}
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
              {txt[lng].hero.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2">
              <button 
                onClick={telCv}
                className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full font-semibold transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/50 text-sm sm:text-base overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                  {txt[lng].hero.btnCv}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              
              <button 
                onClick={() => navVers('contact')}
                className="group px-6 py-3 sm:px-8 sm:py-4 border-2 border-violet-400 rounded-full font-semibold transition-all duration-500 hover:bg-violet-400 hover:scale-110 hover:shadow-2xl hover:shadow-violet-500/50 text-sm sm:text-base relative overflow-hidden"
              >
                <span className="relative z-10">{txt[lng].hero.btnContact}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-violet-600 flex justify-center relative overflow-hidden hover:border-pink-400 transition-colors duration-300">
            <div className="w-1 h-3 bg-gradient-to-b from-violet-600 to-pink-400 rounded-full absolute top-2 animate-pulse" />
          </div>
        </div>
      </section>

      <section id="apropos" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            {txt[lng].apropos.titre}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className={`transition-all duration-1000 ${animVis['apropos'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="relative flex justify-center group">
                <div className="relative rounded-full w-64 h-64 p-2 bg-gradient-to-br from-pink-500 to-purple-600 transition-all duration-500 group-hover:scale-105">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-6xl font-bold text-white">
                    AM
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/50 to-purple-600/50 animate-pulse" />
                </div>
                
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-pink-500/50 group-hover:animate-spin">
                  <Code className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </div>
                
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-violet-500 rounded-full flex items-center justify-center shadow-2xl shadow-violet-500/50 group-hover:animate-pulse">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${animVis['apropos'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                {txt[lng].apropos.desc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { icon: Calendar, label: txt[lng].apropos.age, value: `${calcAge()} ans`, color: 'pink' },
                  { icon: MapPin, label: txt[lng].apropos.localisation, value: 'Koumassi, CI', color: 'violet' },
                  { icon: Mail, label: 'Email', value: 'annemarieagbonou@gmail.com', color: 'pink' },
                  { icon: Phone, label: txt[lng].apropos.telephone, value: '+225 01 72 31 79 83', color: 'violet' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`bg-black/30 p-4 sm:p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-${item.color}-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-${item.color}-500/20 group cursor-pointer`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <item.icon className={`w-6 h-6 sm:w-8 sm:h-8 text-${item.color}-400 mb-2 sm:mb-3 group-hover:animate-bounce`} />
                    <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{item.label}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm break-all">{item.value}</p>
                    <div className={`h-1 bg-gradient-to-r from-${item.color}-500 to-${item.color}-400 rounded-full mt-2 sm:mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="competences" className="py-16 sm:py-24 lg:py-32 px-3 sm:px-4 bg-black/20 min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            {txt[lng].competences.titre}
          </h2>
          
          <div className="relative flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-4xl">
              {comps.map((comp, index) => (
                <div
                  key={comp.nom}
                  className={`group transition-all duration-1000 hover:scale-125 hover:z-50 cursor-pointer ${
                    animVis['competences'] ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br ${comp.coul} rounded-3xl flex flex-col items-center justify-center shadow-2xl hover:shadow-3xl ${comp.glow} transition-all duration-500 hover:animate-pulse border-2 sm:border-4 border-white/20 hover:border-white/50 relative overflow-hidden group-hover:rotate-12`}>
                    <i className={`${comp.icone} text-xl sm:text-2xl lg:text-4xl text-white drop-shadow-lg mb-1 group-hover:animate-bounce`} />
                    <div className="text-white text-xs lg:text-sm font-bold text-center leading-tight group-hover:animate-pulse">
                      {comp.nom}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="parcours" className="py-16 sm:py-24 px-3 sm:px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            {txt[lng].parcours.titre}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {['formation', 'certifications'].map((type, typeIndex) => (
              <div 
                key={type}
                className={`transition-all duration-1000 ${animVis['parcours'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${typeIndex * 300}ms` }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">
                  <span className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${type === 'formation' ? 'from-emerald-500 to-teal-500' : 'from-orange-500 to-red-500'} text-white shadow-lg hover:scale-110 transition-all duration-300`}>
                    {type === 'formation' ? <GraduationCap className="w-5 h-5 mr-2 animate-bounce" /> : <Award className="w-5 h-5 mr-2 animate-pulse" />}
                    {txt[lng].parcours[type]}
                  </span>
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  {parc.filter(p => p.type === type).map((item, index) => (
                    <div 
                      key={index}
                      className="group relative"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-violet-500 group-last:hidden animate-pulse"></div>
                      
                      <div className="bg-black/40 p-4 sm:p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-pink-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 relative overflow-hidden group cursor-pointer">
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center text-xs font-bold transform rotate-12 group-hover:rotate-45 transition-all duration-500 animate-pulse">
                          ✨
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${type === 'formation' ? 'from-emerald-500 to-teal-500' : 'from-orange-500 to-red-500'} flex items-center justify-center shadow-lg group-hover:animate-spin`}>
                              {type === 'formation' ? <GraduationCap className="w-6 h-6 text-white" /> : <Award className="w-6 h-6 text-white" />}
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                              <h4 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                                {item.titre}
                              </h4>
                              <span className="text-sm font-semibold px-3 py-1 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full border border-pink-400/30 group-hover:animate-bounce">
                                {item.annee}
                              </span>
                            </div>
                            <p className="text-violet-300 font-medium mb-2 group-hover:text-white transition-colors duration-300">
                              {item.inst}
                            </p>
                            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-pink-500 to-violet-500 group-hover:w-full transition-all duration-700"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projets" className="py-16 sm:py-24 px-3 sm:px-4 bg-black/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            {txt[lng].projets.titre}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {projs.map((proj, index) => (
              <div 
                key={index}
                className={`group transition-all duration-1000 hover:scale-105 ${animVis['projets'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-black/40 rounded-3xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-pink-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20 relative group cursor-pointer h-full">
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden">
                    <img 
                      src={proj.img} 
                      alt={proj.nom}
                      className="w-full h-48 sm:h-56 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-pink-900/40 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  
                  <div className="p-4 sm:p-6 relative">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-pink-400 transition-colors duration-300 group-hover:animate-pulse">
                      {proj.nom}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      {proj.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {proj.techs.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full text-xs font-medium border border-pink-400/30 hover:border-pink-400 transition-all duration-300 hover:scale-110 cursor-pointer animate-pulse"
                          style={{ animationDelay: `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <a 
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-4 py-2 rounded-xl text-center font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/30 group/btn relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          <Github className="w-4 h-4 mr-2 group-hover/btn:animate-spin" />
                          Code
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-violet-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </a>
                      
                      <a 
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-400 px-4 py-2 rounded-xl text-center font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 group/btn relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          <Eye className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                          Demo
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-pink-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-pink-500 to-violet-500 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <button className="btn px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full font-semibold transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/50 relative overflow-hidden group">
              <span className="relative z-10 flex items-center">
                {txt[lng].projets.btnTous}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24 px-3 sm:px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            {txt[lng].contact.titre}
          </h2>
          <p className="text-lg text-gray-300 mb-12 sm:mb-16 max-w-2xl mx-auto">
            {txt[lng].contact.desc}
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              { icon: Mail, label: 'Email', value: 'annemarieagbonou@gmail.com', link: 'mailto:annemarieagbonou@gmail.com', color: 'pink' },
              { icon: Phone, label: 'Téléphone', value: '+225 01 72 31 79 83', link: 'tel:+22501723179883', color: 'violet' },
              { icon: Github, label: 'GitHub', value: '@ANNEMARIE05', link: 'https://github.com/ANNEMARIE05', color: 'pink' },
              { icon: MapPin, label: 'Localisation', value: 'Koumassi, CI', link: '#', color: 'violet' }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`group bg-black/40 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-${item.color}-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-${item.color}-500/20 block cursor-pointer relative overflow-hidden`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <item.icon className={`w-8 h-8 text-${item.color}-400 mb-4 mx-auto group-hover:animate-bounce`} />
                <h3 className="font-semibold mb-2 text-white group-hover:text-pink-400 transition-colors duration-300">
                  {item.label}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 break-all">
                  {item.value}
                </p>
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-${item.color}-500 to-${item.color}-400 group-hover:w-full transition-all duration-700`}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            ))}
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-violet-500/20 blur-3xl animate-pulse"></div>
            <button className="relative btn px-12 py-6 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full text-xl font-bold transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/60 group overflow-hidden">
              <span className="relative z-10 flex items-center">
                <Mail className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                {txt[lng].contact.btnEnv}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </section>

      <footer className="py-8 sm:py-12 px-3 sm:px-4 bg-black/40 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-violet-500/5 animate-pulse"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent mb-4">
              AM.dev
            </h3>
            <div className="flex justify-center space-x-6 sm:space-x-8">
              {[
                { icon: Github, link: 'https://github.com/ANNEMARIE05', color: 'hover:text-pink-400' },
                { icon: Mail, link: 'mailto:annemarieagbonou@gmail.com', color: 'hover:text-violet-400' },
                { icon: Phone, link: 'tel:+22501723179883', color: 'hover:text-pink-400' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-125 hover:animate-bounce`}
                >
                  <social.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-6 sm:pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Anne Marie Agbonou. Tous droits réservés. 
              <span className="inline-block ml-2 animate-pulse">✨</span>
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Créé avec ❤️ et beaucoup de ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}