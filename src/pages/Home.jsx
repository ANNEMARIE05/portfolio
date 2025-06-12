import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Mail, Phone, MapPin, Calendar, Download, ExternalLink, Code, Palette, Database, Globe, Star, Award, GraduationCap, Briefcase } from 'lucide-react';
import logo from '../assets/logo.jpeg'

export default function Portfolio(){
  const [lang, setLang] = useState('fr');
  const [sectActif, setSectActif] = useState('accueil');
  const [animVis, setAnimVis] = useState({});
  const [angleRot, setAngleRot] = useState(0);
  const [particules, setParticules] = useState([]);

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
        github: 'GitHub'
      },
      contact: {
        titre: 'Contactez-Moi',
        desc: 'Prête à collaborer sur votre prochain projet ? N\'hésitez pas à me contacter !',
        envoyer: 'Envoyer Message'
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
        github: 'GitHub'
      },
      contact: {
        titre: 'Contact Me',
        desc: 'Ready to collaborate on your next project? Feel free to contact me!',
        envoyer: 'Send Message'
      }
    }
  };

  const comp = [
    { nom: 'JavaScript', icone: 'fab fa-js-square', couleur: 'from-yellow-400 to-orange-500', glow: 'shadow-yellow-500/50' },
    { nom: 'HTML/CSS', icone: 'fab fa-html5', couleur: 'from-orange-500 to-red-500', glow: 'shadow-orange-500/50' },
    { nom: 'React JS', icone: 'fab fa-react', couleur: 'from-cyan-400 to-blue-500', glow: 'shadow-cyan-500/50' },
    { nom: 'Vue JS', icone: 'fab fa-vuejs', couleur: 'from-green-400 to-emerald-500', glow: 'shadow-green-500/50' },
    { nom: 'Next JS', icone: 'fas fa-code', couleur: 'from-gray-700 to-gray-900', glow: 'shadow-gray-500/50' },
    { nom: 'Bootstrap', icone: 'fab fa-bootstrap', couleur: 'from-purple-500 to-violet-600', glow: 'shadow-purple-500/50' },
    { nom: 'Tailwind CSS', icone: 'fas fa-paint-brush', couleur: 'from-teal-400 to-cyan-500', glow: 'shadow-teal-500/50' },
    { nom: 'PHP', icone: 'fab fa-php', couleur: 'from-indigo-500 to-purple-600', glow: 'shadow-indigo-500/50' },
    { nom: 'Node JS', icone: 'fab fa-node-js', couleur: 'from-green-500 to-lime-500', glow: 'shadow-green-500/50' },
    { nom: 'API Integration', icone: 'fas fa-plug', couleur: 'from-pink-500 to-rose-500', glow: 'shadow-pink-500/50' },
    { nom: 'Figma', icone: 'fab fa-figma', couleur: 'from-purple-400 to-pink-500', glow: 'shadow-purple-500/50' },
    { nom: 'Git', icone: 'fab fa-git-alt', couleur: 'from-red-500 to-orange-500', glow: 'shadow-red-500/50' }
  ];

  const parc = [
    {
      annee: '2024-2025',
      titre: 'Formation Fullstack',
      institution: 'WeCode',
      type: 'certifications',
      desc: 'Formation complète en développement fullstack'
    },
    {
      annee: '2024',
      titre: 'Licence DAS',
      institution: 'Université Virtuelle de Côte d\'Ivoire (UVCI)',
      type: 'formation',
      desc: 'Développement d\'Applications et Services'
    },
    {
      annee: '2023',
      titre: 'Formation JavaScript',
      institution: 'NAN DIGITAL ACADEMY',
      type: 'certifications',
      desc: 'Certification en développement JavaScript'
    },
    {
      annee: '2021',
      titre: 'Baccalauréat D',
      institution: 'Lycée Municipal de Koumassi',
      type: 'formation',
      desc: 'Baccalauréat série D'
    }
  ];

  useEffect(() => {
    const particInit = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      taille: Math.random() * 3 + 1,
      couleur: Math.random() > 0.5 ? 'rgba(236, 72, 153, 0.3)' : 'rgba(139, 92, 246, 0.3)'
    }));
    setParticules(particInit);

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

    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngleRot(prev => prev + 0.3);
      setParticules(prev => prev.map(p => ({
        ...p,
        x: (p.x + p.vx + window.innerWidth) % window.innerWidth,
        y: (p.y + p.vy + window.innerHeight) % window.innerHeight
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

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
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particules.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full opacity-60 animate-pulse"
            style={{
              left: p.x,
              top: p.y,
              width: p.taille,
              height: p.taille,
              backgroundColor: p.couleur,
              boxShadow: `0 0 ${p.taille * 2}px ${p.couleur}`
            }}
          />
        ))}
        
        <div className="absolute top-1/4 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 md:w-72 md:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
              AM.dev
            </div>
            
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              {Object.entries(txt[lang].nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setSectActif(key)}
                  className={`transition-all duration-300 hover:text-pink-400 text-sm lg:text-base ${
                    sectActif === key ? 'text-pink-400 border-b-2 border-pink-400' : ''
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                className="px-2 py-1 sm:px-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-xs sm:text-sm font-medium transition-transform hover:scale-105"
              >
                {lang === 'fr' ? '🇫🇷 FR' : '🇺🇸 EN'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 relative z-10">
          <div className="animate-fadeInUp">
            <p className="text-sm sm:text-base lg:text-lg text-pink-400 mb-3 sm:mb-4 animate-slideInLeft">
              {txt[lang].hero.salut}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-pink-200 to-violet-200 bg-clip-text text-transparent animate-slideInRight leading-tight">
              {txt[lang].hero.nom}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-violet-300 mb-6 sm:mb-8 animate-fadeIn delay-500">
              {txt[lang].hero.titre}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-700 px-2">
              {txt[lang].hero.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fadeIn delay-1000 px-2">
              <button 
                onClick={telCv}
                className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 text-sm sm:text-base"
              >
                <Download className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                {txt[lang].hero.btnCv}
              </button>
              <button 
                onClick={() => setSectActif('contact')}
                className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-violet-400 rounded-full font-semibold transition-all duration-300 hover:bg-violet-400 hover:scale-105 text-sm sm:text-base"
              >
                {txt[lang].hero.btnContact}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-violet-600 flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-violet-600 rounded-full absolute top-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </section>

      <section id="apropos" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            {txt[lang].apropos.titre}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className={`transition-all duration-1000 ${animVis['apropos'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="relative flex justify-center">
                <div className="relative rounded-full w-64 h-64 p-2 bg-gradient-to-br from-pink-500 to-purple-600 animate-pulse">
                  <img
                    src={logo}
                    alt="Professional headshot"
                    className="rounded-full w-full h-full object-cover border-4 border-gray-800 z-10"
                  />
                </div>
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-pink-500 rounded-full flex items-center justify-center animate-pulse shadow-2xl shadow-pink-500/50">
                  <Code className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 animate-spin" />
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-violet-500 rounded-full flex items-center justify-center animate-pulse delay-500 shadow-2xl shadow-violet-500/50">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 animate-ping" />
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${animVis['apropos'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                {txt[lang].apropos.desc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-black/30 p-4 sm:p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 group">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400 mb-2 sm:mb-3 group-hover:animate-bounce" />
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{txt[lang].apropos.age}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">{calcAge()} ans</p>
                  <div className="h-1 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mt-2 sm:mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                
                <div className="bg-black/30 p-4 sm:p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-violet-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 group">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-violet-400 mb-2 sm:mb-3 group-hover:animate-bounce" />
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{txt[lang].apropos.localisation}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">Koumassi, CI</p>
                  <div className="h-1 bg-gradient-to-r from-violet-500 to-violet-400 rounded-full mt-2 sm:mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                
                <div className="bg-black/30 p-4 sm:p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 group">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400 mb-2 sm:mb-3 group-hover:animate-bounce" />
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Email</h3>
                  <p className="text-gray-300 text-xs sm:text-sm break-all">annemarieagbonou@gmail.com</p>
                  <div className="h-1 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mt-2 sm:mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                
                <div className="bg-black/30 p-4 sm:p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-violet-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 group">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-violet-400 mb-2 sm:mb-3 group-hover:animate-bounce" />
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{txt[lang].apropos.telephone}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">+225 01 72 31 79 83</p>
                  <div className="h-1 bg-gradient-to-r from-violet-500 to-violet-400 rounded-full mt-2 sm:mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="competences" className="py-16 sm:py-24 lg:py-32 px-3 sm:px-4 bg-black/20 min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            {txt[lang].competences.titre}
          </h2>
          
          <div className="relative flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px]">
              {comp.map((c, index) => {
                const angle = (index * 360) / comp.length;
                const animAngle = angle + angleRot;
                const radius = window.innerWidth < 640 ? 120 : window.innerWidth < 768 ? 180 : window.innerWidth < 1024 ? 260 : 320;
                const x = Math.cos((animAngle * Math.PI) / 180) * radius;
                const y = Math.sin((animAngle * Math.PI) / 180) * radius;
                
                return (
                  <div
                    key={c.nom}
                    className={`absolute group transition-all duration-1000 hover:scale-125 sm:hover:scale-150 hover:z-50 ${
                      animVis['competences'] ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}
                    style={{
                      left: `calc(50% + ${x}px - ${window.innerWidth < 640 ? '32px' : window.innerWidth < 768 ? '40px' : '60px'})`,
                      top: `calc(50% + ${y}px - ${window.innerWidth < 640 ? '32px' : window.innerWidth < 768 ? '40px' : '60px'})`,
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div className={`${window.innerWidth < 640 ? 'w-16 h-16' : window.innerWidth < 768 ? 'w-20 h-20' : 'w-32 h-32'} bg-gradient-to-br ${c.couleur} rounded-full flex flex-col items-center justify-center shadow-2xl hover:shadow-3xl ${c.glow} transition-all duration-300 hover:animate-pulse border-2 sm:border-4 border-white/20 hover:border-white/50 relative overflow-hidden`}>
                      <i className={`${c.icone} ${window.innerWidth < 640 ? 'text-lg' : window.innerWidth < 768 ? 'text-xl' : 'text-3xl'} text-white drop-shadow-lg ${window.innerWidth >= 768 ? 'mb-1' : ''} group-hover:animate-bounce`}></i>
                      <div className={`text-white ${window.innerWidth < 640 ? 'text-xs' : 'text-xs'} font-bold text-center leading-tight group-hover:animate-pulse ${window.innerWidth < 640 ? 'hidden' : ''}`}>
                        {c.nom}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                    </div>
                  </div>
                );
              })}
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`${window.innerWidth < 640 ? 'w-20 h-20' : window.innerWidth < 768 ? 'w-28 h-28' : 'w-40 h-40'} bg-gradient-to-br from-pink-500 to-violet-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse border-2 sm:border-4 border-white/30`}>
                  <Code className={`${window.innerWidth < 640 ? 'w-8 h-8' : window.innerWidth < 768 ? 'w-12 h-12' : 'w-16 h-16'} text-white drop-shadow-lg animate-spin`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="parcours" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            {txt[lang].parcours.titre}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {parc.map((item, index) => (
              <div 
                key={index}
                className={`group bg-gradient-to-br from-black/40 to-black/20 p-4 sm:p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-pink-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 relative overflow-hidden ${
                  animVis['parcours'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-xs sm:text-sm font-bold text-pink-400 bg-pink-400/20 px-2 py-1 rounded-full">
                      {item.annee}
                    </span>
                    {item.type === 'formation' ? (
                      <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400 group-hover:animate-bounce" />
                    ) : (
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 group-hover:animate-bounce" />
                    )}
                  </div>
                  
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 group-hover:text-pink-400 transition-colors duration-300">
                    {item.titre}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-violet-300 mb-2 sm:mb-3 font-medium">
                    {item.institution}
                  </p>
                  
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                  
                  <div className="h-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mt-3 sm:mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projets" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 bg-black/20 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            {txt[lang].projets.titre}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                nom: 'Flash service',
                desc: 'Plateforme de paiement 1xbet/melbet',
                techs: ['Html/Css', 'TailwindCss', 'Javascript'],
                img: 'https://img.freepik.com/vecteurs-premium/mains-tenant-smartphone-pour-transferer-argent-ligne_185038-22.jpg?uid=R99967860&semt=ais_hybrid&w=740',
                github:'https://github.com/ANNEMARIE05/flash-service',
                voirPlus:'https://flash-service.vercel.app/',
              },
              {
                nom: 'The N\'takou ',
                desc: 'Application de visibilité d\'une ONG mettant des livres européens a la disposition des africains',
                techs: ['Wordpress','Figma'],
                img: 'https://img.freepik.com/vecteurs-libre/pile-livres-design-plat-dessines-main_23-2149322351.jpg?uid=R99967860&semt=ais_hybrid&w=740',
                github:'#',
                voirPlus:'https://thentakou.com/',
              },
              {
                nom: 'Maison d\'Hôte',
                desc: 'Application de reservation de chambre d\'hôte',
                techs: ['Next js', 'tailwindCss'],
                img: 'https://img.freepik.com/vecteurs-libre/chambre-garcons-lit-armoire-etagere-chaise-boite-jouets-nuit_107791-10350.jpg?uid=R99967860&semt=ais_hybrid&w=740',
                github:'https://github.com/ANNEMARIE05/chambre',
                voirPlus:'https://chambre-alpha.vercel.app/',
              }
            ].map((projet, index) => (
              <div 
                key={index}
                className={`group bg-gradient-to-br from-black/40 to-black/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-pink-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 ${
                  animVis['projets'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`h-32 sm:h-40 lg:h-48 bg-gradient-to-br flex items-center justify-center relative overflow-hidden`}>
                  <img src={projet.img} className='h-full w-full object-cover' alt="" />
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-pink-400 transition-colors duration-300">
                    {projet.nom}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                    {projet.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {projet.techs.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 bg-violet-500/20 text-violet-300 rounded-full border border-violet-500/30 hover:bg-violet-500/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 sm:gap-4">
                    <a href={projet.voirPlus}
                      target='_blank'
                      className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                      <ExternalLink className="w-4 h-4" />
                      {txt[lang].projets.voirPlus}
                    </a>
                    <a href={projet.github}
                      className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 border border-white/20 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 hover:bg-white/10 hover:scale-105"
                      target='_blank'
                      >
                      <Github className="w-4 h-4" />
                      {txt[lang].projets.github}
                      </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            {txt[lang].contact.titre}
          </h2>
          
          <p className="text-center text-sm sm:text-base lg:text-lg text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto">
            {txt[lang].contact.desc}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className={`transition-all duration-1000 ${animVis['contact'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-black/40 to-black/20 p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 sm:mb-8 text-pink-400">
                  Informations de Contact
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-gray-400">Email</p>
                      <p className="text-sm sm:text-base font-medium">annemarieagbonou@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-gray-400">Téléphone</p>
                      <p className="text-sm sm:text-base font-medium">+225 01 72 31 79 83</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-gray-400">Localisation</p>
                      <p className="text-sm sm:text-base font-medium">Koumassi, Côte d'Ivoire</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${animVis['contact'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <form className="bg-gradient-to-br from-black/40 to-black/20 p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm sm:text-base font-medium mb-2">Nom</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:border-pink-400 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm sm:text-base font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:border-pink-400 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm sm:text-base font-medium mb-2">Message</label>
                    <textarea 
                      rows="4"
                      className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:border-pink-400 focus:outline-none transition-colors duration-300 resize-none text-sm sm:text-base"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full px-6 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 text-sm sm:text-base"
                  >
                    {txt[lang].contact.envoyer}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 sm:py-8 px-3 sm:px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm sm:text-base text-gray-400">
            © 2025 Anne Marie Agbonou. Tous droits réservés.
          </p>
        </div>
      </footer>
      <div class="fixed bottom-6 right-6 z-40">
        <a href="https://wa.me/+2250172317983" className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl hover:bg-green-400 transition-all transform hover:scale-110 animate-bounce">
            <i class="fab fa-whatsapp"></i>
        </a>
    </div>
    </div>
  );
}