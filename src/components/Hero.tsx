import { useState, useEffect } from 'react';
import { ChevronDown, Code, Smartphone, Server, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="beranda" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Animation with Parallax */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5 - scrollY * 0.1}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-pink-400 to-red-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3 - scrollY * 0.15}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-br from-green-400 to-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4 - scrollY * 0.2}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '2s'
          }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: '3s',
              transform: `translate(${mousePosition.x * (0.1 + i * 0.05)}px, ${mousePosition.y * (0.1 + i * 0.05)}px)`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Profile Photo */}
          <div 
            className="mb-8 flex justify-center"
            style={{
              transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm shadow-2xl">
                  <img
                    src="https://i.pinimg.com/736x/b6/1c/53/b61c53727fa824491a776b7188595085.jpg"
                    alt="Jefry Profile"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div
            style={{
              transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Hai, Saya{' '}
              <span className="inline-block hover:animate-bounce">Jefry</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 animate-fade-in">
              Fullstack Developer | Flutter & Laravel Enthusiast
            </h2>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Mengembangkan aplikasi mobile dan backend yang inovatif. 
              Saat ini magang di RS Prima Qonita, menciptakan solusi digital untuk kebutuhan medis.
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition-colors" />
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {label}
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#proyek"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Lihat Proyek Saya</span>
              </a>
              <a
                href="#kontak"
                className="group px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm bg-white/5"
              >
                Hubungi Saya
              </a>
            </div>

            {/* Enhanced Tech Icons */}
            <div className="flex justify-center space-x-8 mb-16">
              {[
                { icon: Smartphone, color: "text-blue-600", label: "Mobile" },
                { icon: Code, color: "text-purple-600", label: "Frontend" },
                { icon: Server, color: "text-green-600", label: "Backend" }
              ].map(({ icon: Icon, color, label }, index) => (
                <div
                  key={label}
                  className="group relative"
                  style={{
                    transform: `translate(${mousePosition.x * (0.05 + index * 0.02)}px, ${mousePosition.y * (0.05 + index * 0.02)}px)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  <div className="p-4 bg-white/10 backdrop-blur-sm dark:bg-gray-800/50 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-12 border border-white/20">
                    <Icon className={`w-8 h-8 ${color} group-hover:animate-pulse`} />
                  </div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer"
          style={{
            transform: `translate(-50%, ${scrollY * 0.3}px) translateX(${mousePosition.x * 0.1}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
            <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce group-hover:text-blue-500 transition-colors" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out 0.4s both;
        }
      `}</style>
    </section>
  );
};

export default Hero;