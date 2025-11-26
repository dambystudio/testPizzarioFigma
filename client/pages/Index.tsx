import { useState, useEffect, useRef } from 'react';

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(2); // Inizia dalla pizza 3 (indice 2)
  const carouselRef = useRef<HTMLDivElement>(null);

  // Gestione scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll del carousel pizze - foto per foto
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Inizializza il carousel centrato sulla pizza 3
    const scrollToSlide = (index: number) => {
      const slideWidth = carousel.scrollWidth / 5; // 5 pizze totali
      carousel.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    };

    // Scroll iniziale alla pizza 3
    scrollToSlide(currentSlide);

    let autoScrollInterval: NodeJS.Timeout;
    let isPaused = false;

    const nextSlide = () => {
      if (isPaused) return;
      
      setCurrentSlide((prev) => {
        const next = (prev + 1) % 5; // 5 pizze totali, torna a 0 dopo la quinta
        scrollToSlide(next);
        return next;
      });
    };

    // Cambia slide ogni 3 secondi
    autoScrollInterval = setInterval(nextSlide, 3000);

    // Pausa lo scroll quando l'utente ci passa sopra
    const pauseScroll = () => {
      isPaused = true;
    };
    
    const resumeScroll = () => {
      isPaused = false;
    };

    carousel.addEventListener('mouseenter', pauseScroll);
    carousel.addEventListener('mouseleave', resumeScroll);
    carousel.addEventListener('touchstart', pauseScroll);
    carousel.addEventListener('touchend', resumeScroll);

    return () => {
      clearInterval(autoScrollInterval);
      carousel.removeEventListener('mouseenter', pauseScroll);
      carousel.removeEventListener('mouseleave', resumeScroll);
      carousel.removeEventListener('touchstart', pauseScroll);
      carousel.removeEventListener('touchend', resumeScroll);
    };
  }, [currentSlide]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Navbar Responsive con Hamburger */}
      <nav className="fixed top-0 left-0 right-0 bg-pizzario-beige shadow-md z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/src/assets/icons/pizzariologo 1_9.png" 
                alt="PizzaRio Logo" 
                className="h-10 sm:h-12 lg:h-14 w-auto"
              />
            </div>

            {/* Desktop Menu - nascosto su mobile */}
            <div className="hidden md:flex gap-6 font-montserrat text-pizzario-brown font-semibold">
              <a href="#home" className="hover:text-pizzario-green transition-colors">Home</a>
              <a href="#chi-siamo" className="hover:text-pizzario-green transition-colors">Chi Siamo</a>
              <a href="#pizze" className="hover:text-pizzario-green transition-colors">Le Nostre Pizze</a>
              <a href="#contatti" className="hover:text-pizzario-green transition-colors">Contatti</a>
            </div>

            {/* Hamburger Button - visibile solo su mobile */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-pizzario-green/10 transition-colors"
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6 text-pizzario-brown" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-pizzario-green/20 pt-4">
              <a 
                href="#home" 
                onClick={() => setMobileMenuOpen(false)}
                className="block font-montserrat text-pizzario-brown font-semibold hover:text-pizzario-green transition-colors py-2"
              >
                Home
              </a>
              <a 
                href="#chi-siamo" 
                onClick={() => setMobileMenuOpen(false)}
                className="block font-montserrat text-pizzario-brown font-semibold hover:text-pizzario-green transition-colors py-2"
              >
                Chi Siamo
              </a>
              <a 
                href="#pizze" 
                onClick={() => setMobileMenuOpen(false)}
                className="block font-montserrat text-pizzario-brown font-semibold hover:text-pizzario-green transition-colors py-2"
              >
                Le Nostre Pizze
              </a>
              <a 
                href="#contatti" 
                onClick={() => setMobileMenuOpen(false)}
                className="block font-montserrat text-pizzario-brown font-semibold hover:text-pizzario-green transition-colors py-2"
              >
                Contatti
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Ottimizzato per mobile */}
      <section id="home" className="relative min-h-screen bg-pizzario-beige overflow-hidden pt-16 sm:pt-20">
        <div className="relative w-full min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-4 relative z-20">
            {/* Logo e testo sulla sinistra */}
            <div className="max-w-xl">
              {/* Logo - responsive */}
              <div className="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[550px] mb-3 sm:mb-4">
                <img 
                  src="/src/assets/icons/pizzariologo 1_9.png" 
                  alt="PizzaRio Logo" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Welcome Text - appena sotto il logo */}
              <p className="text-pizzario-brown text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] leading-relaxed font-montserrat font-normal max-w-[500px] mt-2">
                Benvenuti da PizzaRio, dove lo spirito brasiliano e la cucina italiana si uniscono insieme per creare un'indimenticabile esperienza culinaria
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                <a 
                  href="#pizze" 
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-pizzario-green text-white font-montserrat font-semibold rounded-full hover:bg-pizzario-green/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Scopri il Menu
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a 
                  href="#contatti" 
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-pizzario-green text-pizzario-green font-montserrat font-semibold rounded-full hover:bg-pizzario-green hover:text-white transition-all duration-300 shadow-lg"
                >
                  Contattaci
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Green diagonal shape - nascosto su mobile molto piccolo, visibile da sm */}
          <div className="hidden sm:block absolute top-0 right-0 bottom-0 w-[60%] md:w-[55%] lg:w-[50%] z-10" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}>
            <svg className="absolute top-0 right-0 h-full w-auto min-w-full" viewBox="0 0 1000 1080" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M1000 0L300 0L0 1080H1000V0Z" fill="#6DBA6D"/>
            </svg>
            
            {/* Pizza Image - responsive */}
            <div className="absolute right-0 top-[40%] -translate-y-1/2 w-[95%] lg:w-[97%] max-w-none z-20">
              <img 
                src="/src/assets/icons/fotoPizzaBrasileHome.png" 
                alt="Brazilian Pizza" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Pizza Image per mobile - sotto il testo */}
          <div className="sm:hidden relative z-10 mt-6 px-4">
            <div className="max-w-[300px] mx-auto">
              <img 
                src="/src/assets/icons/fotoPizzaBrasileHome.png" 
                alt="Brazilian Pizza" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Decorative green blob - bottom left */}
          <div className="absolute bottom-[8%] left-0 w-12 h-16 sm:w-16 sm:h-24 lg:w-20 lg:h-28 xl:w-24 xl:h-32 z-5">
            <img 
              src="/src/assets/icons/poligonoVerde.png" 
              alt="" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Chi Siamo Section - SENZA ONDE ROSSE - Sezione più compatta */}
      <section id="chi-siamo" className="relative bg-pizzario-beige py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Title */}
          <div className="text-center mb-6 lg:mb-8 relative">
            <h2 className="font-margarine text-3xl sm:text-4xl lg:text-5xl text-black mb-3 lg:mb-4">
              Chi siamo
            </h2>
            <p className="font-montserrat text-base sm:text-lg lg:text-xl leading-relaxed text-pizzario-brown max-w-4xl mx-auto px-4">
              Nel cuore di San Giovanni Rotondo, PizzaRio nasce dall'incontro di due culture straordinarie: la passione e l'allegria del Brasile si fondono con la maestria e la tradizione italiana.
            </p>
            
            {/* Tomato icon - nascosto su molto mobile */}
            <div className="hidden sm:block absolute -top-4 right-0 lg:right-12 w-16 lg:w-24 h-16 lg:h-24">
              <img 
                src="/src/assets/icons/fotoPomodoro.png" 
                alt="" 
                className="w-full h-auto transform rotate-[9.5deg]"
              />
            </div>

            {/* Decorative leaf icon - top left - nascosto su molto mobile */}
            <div className="hidden sm:block absolute -top-12 lg:-top-16 -left-8 lg:left-0 w-24 lg:w-36 h-auto transform -rotate-[38deg]">
              <img 
                src="/src/assets/icons/mascheraCarnevale.png" 
                alt="" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Grid with Brazilian flag centered and 4 description cards - INGRANDITO */}
          <div className="relative max-w-6xl mx-auto">
            {/* Container con bandiera e cards posizionate - PIÙ GRANDE */}
            <div className="relative flex justify-center items-center min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] px-4">
              {/* Brazilian flag - centered - PIÙ GRANDE */}
              <div className="w-40 sm:w-56 lg:w-72 xl:w-88 h-40 sm:h-56 lg:h-72 xl:h-88 z-10">
                <img 
                  src="/src/assets/icons/bandieraBrasile.png" 
                  alt="Brazilian Flag" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>

              {/* Card Alto Sinistra - PIÙ GRANDE con più contenuto */}
              <div className="absolute top-0 left-0 w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[420px] bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 lg:p-6 xl:p-8 shadow-xl border-2 border-pizzario-green/40 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="font-margarine text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-pizzario-green mb-2 lg:mb-3">Tradizione Italiana</h3>
                <p className="font-montserrat text-sm sm:text-base lg:text-lg xl:text-xl text-pizzario-brown leading-relaxed">
                  Ricette autentiche tramandate di generazione in generazione, con l'impasto lievitato naturalmente e la passione per la vera pizza napoletana. Ogni ingrediente racconta una storia di sapori italiani.
                </p>
              </div>
              
              {/* Card Alto Destra - PIÙ GRANDE con più contenuto */}
              <div className="absolute top-0 right-0 w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[420px] bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 lg:p-6 xl:p-8 shadow-xl border-2 border-pizzario-green/40 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="font-margarine text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-pizzario-green mb-2 lg:mb-3">Spirito Brasiliano</h3>
                <p className="font-montserrat text-sm sm:text-base lg:text-lg xl:text-xl text-pizzario-brown leading-relaxed">
                  L'energia contagiosa, la gioia e i colori vivaci del Brasile in ogni piatto. Un'atmosfera calorosa che trasforma ogni pasto in una festa indimenticabile.
                </p>
              </div>
              
              {/* Card Basso Sinistra - PIÙ GRANDE con più contenuto */}
              <div className="absolute bottom-0 left-0 w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[420px] bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 lg:p-6 xl:p-8 shadow-xl border-2 border-pizzario-green/40 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="font-margarine text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-pizzario-green mb-2 lg:mb-3">Ingredienti Freschi</h3>
                <p className="font-montserrat text-sm sm:text-base lg:text-lg xl:text-xl text-pizzario-brown leading-relaxed">
                  Solo i migliori ingredienti selezionati con cura ogni giorno. Mozzarella di bufala freschissima, pomodori San Marzano DOP e basilico appena raccolto per garantire qualità superiore.
                </p>
              </div>
              
              {/* Card Basso Destra - PIÙ GRANDE con più contenuto */}
              <div className="absolute bottom-0 right-0 w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[420px] bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 lg:p-6 xl:p-8 shadow-xl border-2 border-pizzario-green/40 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="font-margarine text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-pizzario-green mb-2 lg:mb-3">Passione Unica</h3>
                <p className="font-montserrat text-sm sm:text-base lg:text-lg xl:text-xl text-pizzario-brown leading-relaxed">
                  Un'esperienza culinaria che unisce due mondi straordinari. Dove l'arte della pizza italiana incontra la vivacità brasiliana per creare qualcosa di veramente speciale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Nostre Pizze Section - NUOVA VERSIONE */}
      <section id="pizze" className="relative min-h-screen bg-pizzario-beige py-12 lg:py-20 flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Titolo */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 lg:mb-4">
              <h2 className="font-margarine text-3xl sm:text-4xl lg:text-5xl text-black">
                Le nostre pizze
              </h2>
              <img 
                src="/src/assets/icons/fotoPizzaIconaDisegnata.png" 
                alt="Pizza Icon" 
                className="w-12 sm:w-14 lg:w-16 xl:w-20 h-12 sm:h-14 lg:h-16 xl:h-20 object-contain animate-bounce"
              />
            </div>
            <p className="font-montserrat text-lg lg:text-xl leading-relaxed text-pizzario-brown max-w-4xl mx-auto">
              Scopri le nostre specialità
            </p>
          </div>

          {/* Contenitore con onde e quadrato rosso - FULL WIDTH */}
          <div className="relative -mx-4 lg:-mx-8">
            {/* Top wave - full width senza spazi */}
            <div className="w-full h-16 lg:h-20" style={{ display: 'block', lineHeight: 0, fontSize: 0 }}>
              <svg className="w-full h-full" style={{ display: 'block', verticalAlign: 'bottom' }} viewBox="0 0 1920 302" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M-30.8112 79.956C34.7645 35.4024 100.337 -9.15121 165.912 2.78696C231.488 14.7235 297.06 83.1535 362.636 79.956C428.212 76.7586 493.784 1.93377 559.36 2.78696C624.935 3.63853 690.508 80.1697 756.083 79.956C821.659 79.7439 887.231 2.78696 952.807 2.78696C1018.38 2.78696 1083.95 79.7439 1149.53 79.956C1215.11 80.1697 1280.68 3.63853 1346.25 2.78696C1411.83 1.93377 1477.4 76.7586 1542.98 79.956C1608.55 83.1535 1674.13 14.7235 1739.7 2.78696C1805.28 -9.15121 1870.85 35.4024 1936.42 79.956V301.178C1870.85 301.178 1805.28 301.178 1739.7 301.178C1674.13 301.178 1608.55 301.178 1542.98 301.178C1477.4 301.178 1411.83 301.178 1346.25 301.178C1280.68 301.178 1215.11 301.178 1149.53 301.178C1083.95 301.178 1018.38 301.178 952.807 301.178C887.231 301.178 821.659 301.178 756.083 301.178C690.508 301.178 624.935 301.178 559.36 301.178C493.784 301.178 428.212 301.178 362.636 301.178C297.06 301.178 231.488 301.178 165.912 301.178C100.337 301.178 34.7645 301.178 -30.8112 301.178V79.956Z" fill="#A42426"/>
              </svg>
            </div>

            {/* Quadrato rosso con carousel - full width */}
            <div className="bg-pizzario-red py-12 lg:py-16" style={{ display: 'block', lineHeight: 0, fontSize: 0, marginTop: '-1px', marginBottom: '-1px' }}>
              <div className="max-w-6xl mx-auto px-4" style={{ lineHeight: 'normal', fontSize: '1rem' }}>
                {/* Carousel di immagini con auto-scroll */}
                <div 
                  ref={carouselRef}
                  className="flex gap-4 lg:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
                >
                  {/* Pizza 1 */}
                  <div className="flex-shrink-0 w-64 sm:w-72 lg:w-80 xl:w-96 snap-center">
                    <div className="aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                      <img 
                        src="/src/assets/icons/pizza1.avif" 
                        alt="Pizza Margherita" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Pizza 2 */}
                  <div className="flex-shrink-0 w-64 sm:w-72 lg:w-80 xl:w-96 snap-center">
                    <div className="aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                      <img 
                        src="/src/assets/icons/pizza2.jpeg" 
                        alt="Pizza Brasiliana" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Pizza 3 */}
                  <div className="flex-shrink-0 w-64 sm:w-72 lg:w-80 xl:w-96 snap-center">
                    <div className="aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                      <img 
                        src="/src/assets/icons/pizza3.jpeg" 
                        alt="Pizza Diavola" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Pizza 4 */}
                  <div className="flex-shrink-0 w-64 sm:w-72 lg:w-80 xl:w-96 snap-center">
                    <div className="aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                      <img 
                        src="/src/assets/icons/pizza4.avif" 
                        alt="Pizza Quattro Formaggi" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Pizza 5 */}
                  <div className="flex-shrink-0 w-64 sm:w-72 lg:w-80 xl:w-96 snap-center">
                    <div className="aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                      <img 
                        src="/src/assets/icons/pizza5.jpeg" 
                        alt="Pizza Capricciosa" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Indicatore scroll */}
                <p className="text-center mt-6 font-montserrat text-sm text-white/90">
                  ← Scorri per vedere tutte le pizze →
                </p>
              </div>
            </div>

            {/* Bottom wave - full width senza spazi */}
            <div className="w-full h-16 lg:h-20" style={{ display: 'block', lineHeight: 0, fontSize: 0 }}>
              <svg className="w-full h-full" style={{ display: 'block', verticalAlign: 'top' }} viewBox="0 0 1920 301" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M1936.24 221.222C1870.66 265.776 1805.09 310.329 1739.51 298.391C1673.94 286.454 1608.36 218.025 1542.79 221.222C1477.21 224.419 1411.64 299.244 1346.07 298.391C1280.49 297.539 1214.92 221.008 1149.34 221.222C1083.77 221.434 1018.19 298.391 952.618 298.391C887.042 298.391 821.47 221.434 755.894 221.222C690.319 221.008 624.746 297.539 559.171 298.391C493.595 299.244 428.023 224.419 362.447 221.222C296.871 218.025 231.299 286.454 165.724 298.391C100.148 310.329 34.5757 265.776 -31 221.222V-6.10352e-05C34.5757 -6.10352e-05 100.148 -6.10352e-05 165.724 -6.10352e-05C231.299 -6.10352e-05 296.871 -6.10352e-05 362.447 -6.10352e-05C428.023 -6.10352e-05 493.595 -6.10352e-05 559.171 -6.10352e-05C624.746 -6.10352e-05 690.319 -6.10352e-05 755.894 -6.10352e-05C821.47 -6.10352e-05 887.042 -6.10352e-05 952.618 -6.10352e-05C1018.19 -6.10352e-05 1083.77 -6.10352e-05 1149.34 -6.10352e-05C1214.92 -6.10352e-05 1280.49 -6.10352e-05 1346.07 -6.10352e-05C1411.64 -6.10352e-05 1477.21 -6.10352e-05 1542.79 -6.10352e-05C1608.36 -6.10352e-05 1673.94 -6.10352e-05 1739.51 -6.10352e-05C1805.09 -6.10352e-05 1870.66 -6.10352e-05 1936.24 -6.10352e-05V221.222Z" fill="#A42426"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Contattaci Section - Ottimizzata per mobile - ICONA TELEFONO AFFIANCO */}
      <section id="contatti" className="relative min-h-screen bg-pizzario-beige py-12 lg:py-16 flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            {/* Titolo con icona telefono affianco */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 lg:mb-4">
              <h2 className="font-margarine text-3xl sm:text-4xl lg:text-5xl text-black">
                Contattaci
              </h2>
              <img 
                src="/src/assets/icons/IconaTelefono.png" 
                alt="" 
                className="w-12 sm:w-14 lg:w-16 h-auto"
              />
            </div>
            <p className="font-montserrat text-base sm:text-lg lg:text-xl leading-relaxed text-pizzario-brown max-w-4xl mx-auto px-4">
              Vieni a trovarci per un'esperienza indimenticabile!
            </p>
          </div>

          {/* Informazioni di contatto - Grid ottimizzato - SENZA SPAZI BIANCHI */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Indirizzo con Mappa Google */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-2 border-pizzario-green/20 hover:border-pizzario-green/40 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-5 sm:p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-pizzario-green rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-margarine text-lg sm:text-xl lg:text-2xl text-pizzario-green mb-2">Indirizzo</h3>
                    <p className="font-montserrat text-sm lg:text-base text-pizzario-brown">
                      Via Monsignor Antonio Tortorelli, 31<br />
                      71013 San Giovanni Rotondo (FG)<br />
                      Italia
                    </p>
                  </div>
                </div>
              </div>
              {/* Google Maps Embed */}
              <div className="w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.9999999999995!2d15.7193335!3d41.7056901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1337759b5f7cba73%3A0x76a40d64474e3647!2sVia%20Monsignor%20Antonio%20Tortorelli%2C%2031%2C%2071013%20San%20Giovanni%20Rotondo%20FG!5e0!3m2!1sit!2sit!4v1729000000000!5m2!1sit!2sit"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa PizzaRio"
                ></iframe>
              </div>
            </div>

            {/* Telefono - SENZA SPAZIO BIANCO */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 sm:p-6 lg:p-8 shadow-lg border-2 border-pizzario-green/20 hover:border-pizzario-green/40 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pizzario-red rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-margarine text-lg sm:text-xl lg:text-2xl text-pizzario-red mb-2">Telefono</h3>
                  <p className="font-montserrat text-sm lg:text-base text-pizzario-brown">
                    <a href="tel:+393880993921" className="hover:text-pizzario-green transition-colors">
                      +39 388 099 3921
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Orari - SENZA SPAZIO BIANCO */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 sm:p-6 lg:p-8 shadow-lg border-2 border-pizzario-green/20 hover:border-pizzario-green/40 hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pizzario-green rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-margarine text-lg sm:text-xl lg:text-2xl text-pizzario-green mb-2">Orari</h3>
                  <div className="font-montserrat text-sm lg:text-base text-pizzario-brown space-y-1">
                    <p><strong>Lun-Dom:</strong> 18:00 - 23:30</p>
                    <p className="mt-2 text-xs text-pizzario-brown/70 italic">* Possibili chiusure occasionali</p>
                    <p className="text-xs text-pizzario-brown/70 italic">Vi consigliamo di chiamare prima</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8 lg:mt-12 text-center">
            <h3 className="font-margarine text-xl sm:text-2xl lg:text-3xl text-pizzario-green mb-4">Seguici sui social</h3>
            <div className="flex justify-center gap-3 sm:gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61572999105467" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-pizzario-green rounded-full flex items-center justify-center hover:bg-pizzario-red hover:scale-110 transition-all duration-300 shadow-lg" 
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/pizzario25" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-pizzario-green rounded-full flex items-center justify-center hover:bg-pizzario-red hover:scale-110 transition-all duration-300 shadow-lg" 
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@pizzario53" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-pizzario-green rounded-full flex items-center justify-center hover:bg-pizzario-red hover:scale-110 transition-all duration-300 shadow-lg" 
                aria-label="TikTok"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Promozionale - NUOVO */}
      <section className="relative bg-gradient-to-r from-pizzario-green to-pizzario-green/80 py-12 lg:py-16 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-margarine text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Prenota la tua pizza!
            </h2>
            <p className="font-montserrat text-base sm:text-lg lg:text-xl text-white/90 mb-6 lg:mb-8">
              Vieni a scoprire l'autentico sapore della tradizione italo-brasiliana. 
              Chiamaci per prenotare il tuo tavolo e vivere un'esperienza unica!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+393880993921"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-pizzario-green font-montserrat font-bold rounded-full hover:bg-pizzario-beige hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Chiama Ora: +39 388 099 3921
              </a>
            </div>
          </div>
        </div>
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </section>

      {/* Footer */}
      <footer className="bg-pizzario-brown text-white py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo e descrizione */}
            <div className="lg:col-span-2">
              <img 
                src="/src/assets/icons/pizzariologo 1_9.png" 
                alt="PizzaRio Logo" 
                className="h-20 w-auto mb-4"
              />
              <p className="font-montserrat text-sm text-white/80 max-w-md">
                Dove lo spirito brasiliano e la cucina italiana si uniscono per creare un'esperienza culinaria indimenticabile.
              </p>
            </div>

            {/* Link veloci */}
            <div>
              <h4 className="font-margarine text-xl text-pizzario-green mb-4">Link Veloci</h4>
              <ul className="font-montserrat text-sm space-y-2">
                <li><a href="#home" className="hover:text-pizzario-green transition-colors">Home</a></li>
                <li><a href="#chi-siamo" className="hover:text-pizzario-green transition-colors">Chi Siamo</a></li>
                <li><a href="#pizze" className="hover:text-pizzario-green transition-colors">Le Nostre Pizze</a></li>
                <li><a href="#contatti" className="hover:text-pizzario-green transition-colors">Contatti</a></li>
              </ul>
            </div>

            {/* Contatti */}
            <div>
              <h4 className="font-margarine text-xl text-pizzario-green mb-4">Contatti</h4>
              <ul className="font-montserrat text-sm space-y-2 text-white/80">
                <li>Via Monsignor Antonio Tortorelli, 31</li>
                <li>San Giovanni Rotondo (FG)</li>
                <li className="pt-2">
                  <a href="tel:+393880993921" className="hover:text-pizzario-green transition-colors">
                    +39 388 099 3921
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright e DambyStudio */}
          <div className="border-t border-white/20 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-montserrat text-sm text-white/70">
                © 2025 PizzaRio. Tutti i diritti riservati. | P.IVA: 12345678901
              </p>
              
              {/* DambyStudio Attribution */}
              <a 
                href="https://linktr.ee/dambystudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <span className="font-montserrat text-sm text-white/70">Realizzato da</span>
                <img 
                  src="/src/assets/icons/logoDambyStudio.png" 
                  alt="DambyStudio" 
                  className="h-10 w-auto"
                />
                <a>DambyStudio</a>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button - NUOVO */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-pizzario-green text-white rounded-full shadow-2xl hover:bg-pizzario-red hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="Torna su"
        >
          <svg 
            className="w-6 h-6 sm:w-7 sm:h-7 group-hover:animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}
