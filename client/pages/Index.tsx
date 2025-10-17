export default function Index() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-pizzario-beige overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-8rem)]">
            {/* Left side - Logo and Text */}
            <div className="relative z-10 space-y-8">
              {/* Logo */}
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/bb6a7d5f83329bdebefd75e2857545e8cd68d22a?width=2188" 
                  alt="PizzaRio Logo" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Welcome Text */}
              <p className="text-pizzario-brown text-2xl md:text-3xl lg:text-[42px] leading-[1.2] tracking-wide font-montserrat max-w-2xl">
                Benvenuti da PizzaRio, dove lo spirito brasiliano e la cucina italiana si uniscono insieme per creare un'indimenticabile esperienza culinaria
              </p>
              
              {/* Decorative blob - bottom left */}
              <div className="absolute -left-16 lg:-left-28 bottom-0 lg:bottom-20 w-32 lg:w-40 h-36 lg:h-44 -z-10">
                <svg className="w-full h-full" viewBox="0 0 86 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M-38.4699 0.666966C-22.5301 -2.86954 -8.6942 11.8934 6.4849 17.9083C17.7408 22.3686 28.3313 26.8269 39.4777 31.5544C54.2838 37.8341 75.3179 36.2443 83.0136 50.3664C90.5121 64.1268 81.549 81.798 74.478 95.7829C68.5217 107.563 53.9222 111.901 46.4119 122.757C38.4564 134.256 40.2331 151.236 29.729 160.465C18.4141 170.407 1.52733 180.126 -12.4264 174.455C-27.4553 168.348 -25.3542 144.731 -36.937 133.373C-46.2963 124.195 -64.1017 127.089 -71.6543 116.376C-79.2896 105.545 -76.4574 90.8222 -76.2739 77.5716C-76.0721 63.0038 -76.9543 48.0696 -70.5271 34.9947C-63.5006 20.7007 -54.0194 4.11687 -38.4699 0.666966Z" fill="#6DBA6D"/>
                </svg>
              </div>
            </div>

            {/* Right side - Pizza Image with Green Background */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Green diagonal shape */}
              <div className="absolute inset-0 lg:inset-y-0 lg:right-0 w-full lg:w-[120%] -z-10">
                <svg className="w-full h-full" viewBox="0 0 1020 1080" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMid slice">
                  <path d="M1020 0H400L0 1080H1020V0Z" fill="#6DBA6D"/>
                </svg>
              </div>
              
              {/* Pizza Image */}
              <div className="relative z-10 w-full max-w-lg lg:max-w-2xl">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a6fecc29f5a65d354956d42ce9687e3ee085db3e?width=2048" 
                  alt="Brazilian Pizza" 
                  className="w-full h-auto"
                />
              </div>

              {/* Decorative red blob - top right */}
              <div className="absolute top-4 lg:top-12 right-4 lg:right-20 w-24 lg:w-28 h-28 lg:h-36 -z-0">
                <svg className="w-full h-full" viewBox="0 0 141 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.13297 28.8848C7.73873 12.3535 26.5682 3.42304 43.7869 0.555684C58.1797 -1.84108 69.4496 10.4931 83.1958 15.3857C98.4088 20.8003 117.622 17.4038 127.346 30.2961C138.577 45.1889 145.599 68.5162 134.662 83.6267C123.822 98.6034 99.7967 87.4396 82.1037 92.8029C67.9506 97.0932 57.884 115.087 43.6073 111.228C28.9897 107.277 25.1611 89.0935 18.3495 75.5699C10.6458 60.2748 -3.36672 45.1033 2.13297 28.8848Z" fill="#DA4646"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section className="relative py-16 lg:py-24 bg-pizzario-beige overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Title */}
          <div className="text-center mb-8 lg:mb-12 relative">
            <h2 className="font-margarine text-5xl lg:text-6xl text-black mb-4 lg:mb-6">
              Chi siamo
            </h2>
            <p className="font-montserrat text-2xl lg:text-[34px] leading-[1.2] tracking-wide text-pizzario-brown max-w-5xl mx-auto px-4">
              Nel cuore di San Giovanni Rotondo, PizzaRio nasce dall'incontro di due culture straordinarie: la passione e l'allegria del Brasile si fondono con la maestria e la tradizione italiana.
            </p>
            
            {/* Tomato icon */}
            <div className="absolute -top-4 right-0 lg:right-12 w-20 lg:w-32 h-20 lg:h-32">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/fe259b64bd0b1800810fe03e4803267d6d32e817?width=329" 
                alt="" 
                className="w-full h-auto transform rotate-[9.5deg]"
              />
            </div>

            {/* Decorative leaf icon - top left */}
            <div className="absolute -top-16 lg:-top-20 -left-8 lg:left-0 w-32 lg:w-48 h-auto transform -rotate-[38deg]">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/10f569f185b7d771f79531c10fd07e2bfd7eddaf?width=794" 
                alt="" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Grid with images and Brazilian flag */}
          <div className="relative mt-12 lg:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {/* Top left placeholder */}
              <div className="bg-gray-300 aspect-video rounded-lg"></div>
              
              {/* Top right placeholder */}
              <div className="bg-gray-300 aspect-video rounded-lg"></div>
              
              {/* Bottom left placeholder */}
              <div className="bg-gray-300 aspect-video rounded-lg"></div>
              
              {/* Bottom right placeholder */}
              <div className="bg-gray-300 aspect-video rounded-lg"></div>
            </div>

            {/* Brazilian flag - centered overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 lg:w-[510px] h-48 lg:h-[510px] pointer-events-none">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/95c19c948aeff83f581a179295e888ec76768346?width=1020" 
                alt="Brazilian Flag" 
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Le Nostre Pizze Section */}
      <section className="relative py-16 lg:py-24 bg-pizzario-beige overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Title */}
          <div className="text-center mb-8 lg:mb-12 relative">
            <h2 className="font-margarine text-5xl lg:text-6xl text-black mb-4 lg:mb-6">
              Le nostre pizze
            </h2>
            <p className="font-montserrat text-2xl lg:text-[34px] leading-[1.2] tracking-wide text-pizzario-brown max-w-5xl mx-auto">
              Vieni ad assaggiare le nostre pizze
            </p>

            {/* Pizza icon - top right */}
            <div className="absolute -top-4 right-0 lg:right-12 w-24 lg:w-40 h-24 lg:h-40">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/454f9281dba2fda8329dde614d4b874390c74ece?width=340" 
                alt="" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Red wavy background */}
          <div className="relative mt-12 lg:mt-16 py-20 lg:py-32">
            {/* Top wave */}
            <div className="absolute top-0 left-0 right-0 w-full h-24 lg:h-32">
              <svg className="w-full h-full" viewBox="0 0 1920 302" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M-30.8112 79.956C34.7645 35.4024 100.337 -9.15121 165.912 2.78696C231.488 14.7235 297.06 83.1535 362.636 79.956C428.212 76.7586 493.784 1.93377 559.36 2.78696C624.935 3.63853 690.508 80.1697 756.083 79.956C821.659 79.7439 887.231 2.78696 952.807 2.78696C1018.38 2.78696 1083.95 79.7439 1149.53 79.956C1215.11 80.1697 1280.68 3.63853 1346.25 2.78696C1411.83 1.93377 1477.4 76.7586 1542.98 79.956C1608.55 83.1535 1674.13 14.7235 1739.7 2.78696C1805.28 -9.15121 1870.85 35.4024 1936.42 79.956V301.178C1870.85 301.178 1805.28 301.178 1739.7 301.178C1674.13 301.178 1608.55 301.178 1542.98 301.178C1477.4 301.178 1411.83 301.178 1346.25 301.178C1280.68 301.178 1215.11 301.178 1149.53 301.178C1083.95 301.178 1018.38 301.178 952.807 301.178C887.231 301.178 821.659 301.178 756.083 301.178C690.508 301.178 624.935 301.178 559.36 301.178C493.784 301.178 428.212 301.178 362.636 301.178C297.06 301.178 231.488 301.178 165.912 301.178C100.337 301.178 34.7645 301.178 -30.8112 301.178V79.956Z" fill="#A42426"/>
              </svg>
            </div>

            {/* Middle solid red */}
            <div className="absolute top-24 lg:top-32 bottom-24 lg:bottom-32 left-0 right-0 bg-pizzario-red"></div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0 w-full h-24 lg:h-32">
              <svg className="w-full h-full" viewBox="0 0 1920 301" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M1936.24 221.222C1870.66 265.776 1805.09 310.329 1739.51 298.391C1673.94 286.454 1608.36 218.025 1542.79 221.222C1477.21 224.419 1411.64 299.244 1346.07 298.391C1280.49 297.539 1214.92 221.008 1149.34 221.222C1083.77 221.434 1018.19 298.391 952.618 298.391C887.042 298.391 821.47 221.434 755.894 221.222C690.319 221.008 624.746 297.539 559.171 298.391C493.595 299.244 428.023 224.419 362.447 221.222C296.871 218.025 231.299 286.454 165.724 298.391C100.148 310.329 34.5757 265.776 -31 221.222V-6.10352e-05C34.5757 -6.10352e-05 100.148 -6.10352e-05 165.724 -6.10352e-05C231.299 -6.10352e-05 296.871 -6.10352e-05 362.447 -6.10352e-05C428.023 -6.10352e-05 493.595 -6.10352e-05 559.171 -6.10352e-05C624.746 -6.10352e-05 690.319 -6.10352e-05 755.894 -6.10352e-05C821.47 -6.10352e-05 887.042 -6.10352e-05 952.618 -6.10352e-05C1018.19 -6.10352e-05 1083.77 -6.10352e-05 1149.34 -6.10352e-05C1214.92 -6.10352e-05 1280.49 -6.10352e-05 1346.07 -6.10352e-05C1411.64 -6.10352e-05 1477.21 -6.10352e-05 1542.79 -6.10352e-05C1608.36 -6.10352e-05 1673.94 -6.10352e-05 1739.51 -6.10352e-05C1805.09 -6.10352e-05 1870.66 -6.10352e-05 1936.24 -6.10352e-05V221.222Z" fill="#A42426"/>
              </svg>
            </div>

            {/* Pizza cards */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
              <div className="bg-gray-300 aspect-[3/4] rounded-lg"></div>
              <div className="bg-gray-300 aspect-[3/4] rounded-lg"></div>
              <div className="bg-gray-300 aspect-[3/4] rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contattaci Section */}
      <section className="relative py-16 lg:py-24 bg-pizzario-beige min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center relative">
            <h2 className="font-margarine text-5xl lg:text-6xl text-black mb-4 lg:mb-6">
              Contattaci
            </h2>
            <p className="font-montserrat text-2xl lg:text-[34px] leading-[1.2] tracking-wide text-pizzario-brown max-w-5xl mx-auto">
              Vieni a trovarci per un'esperienza indimenticabile!
            </p>

            {/* Phone icon - top right */}
            <div className="absolute -top-4 lg:-top-6 right-0 lg:right-[30%] w-24 lg:w-44 h-auto">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/a0579d67737cb1ad2febf8446e8989788e5d51e6?width=362" 
                alt="" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
