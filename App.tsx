import React, { useState } from 'react';
import { ViewState, Room, Amenity } from './types';
import { AIChat } from './components/AIChat';

// --- Data Constants (Content created based on requirements) ---

const ROOMS: Room[] = [
  {
    id: '1',
    name: 'Sunrise Suite',
    type: 'Type A',
    description: '아침 햇살이 가장 먼저 닿는 곳. 침대에서 눈을 뜨자마자 펼쳐지는 파노라마 오션뷰와 함께 하루를 시작하세요. 모던한 화이트 톤 인테리어와 전면 통유리가 자연 채광을 극대화하여, 새로운 시작을 꿈꾸는 분들에게 밝고 긍정적인 에너지를 선사합니다.',
    features: ['파노라마 오션뷰', '화이트 모던 인테리어', '킹사이즈 구스 침구', '독립 테라스'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    price: '₩450,000 / night'
  },
  {
    id: '2',
    name: 'Moonlight Villa',
    type: 'Type B',
    description: '달빛이 내려앉는 고요한 밤의 낭만. 짙은 우드톤의 중후함과 따뜻한 간접 조명이 어우러져 깊은 휴식을 선사합니다. 프라이빗한 테라스에서 즐기는 와인 한 잔과 밤하늘의 별은 두 사람만의 잊지 못할 추억이 될 것입니다.',
    features: ['마운틴 & 오션 믹스뷰', '우드 & 스톤 인테리어', '프라이빗 와인바', '대형 자쿠지'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    price: '₩520,000 / night'
  }
];

const AMENITIES: Amenity[] = [
  {
    id: 'a1',
    title: 'Private Infinity Pool',
    description: '산 중턱에서 바다로 이어지는 듯한 착각을 불러일으키는 인피니티 풀. 오직 당신만을 위한 프라이빗한 수영장에서 사계절 내내 미온수로 힐링을 즐기세요.',
    icon: <span>🏊</span>,
    imageUrl: 'https://picsum.photos/600/400?random=3'
  },
  {
    id: 'a2',
    title: 'Chef\'s Welcome Dinner',
    description: '미슐랭 레스토랑 출신 셰프가 제철 식재료로 직접 준비하는 웰컴 디너. 객실 내 다이닝 공간으로 서빙되어 프라이빗하게 미식의 즐거움을 누릴 수 있습니다.',
    icon: <span>🍽️</span>,
    imageUrl: 'https://picsum.photos/600/400?random=4'
  },
  {
    id: 'a3',
    title: 'Floating Breakfast',
    description: '물 위에서 맞이하는 특별한 아침. 갓 구운 빵과 신선한 과일, 향긋한 커피가 담긴 트레이를 수영장에 띄워 이색적인 아침 식사를 경험해보세요.',
    icon: <span>🥐</span>,
    imageUrl: 'https://picsum.photos/600/400?random=5'
  },
  {
    id: 'a4',
    title: 'Aroma Spa Therapy',
    description: '전문 테라피스트가 방문하여 진행하는 커플 스파 프로그램. 최고급 에센셜 오일을 사용하여 여행의 피로를 풀고 깊은 이완을 도와드립니다.',
    icon: <span>💆</span>,
    imageUrl: 'https://picsum.photos/600/400?random=6'
  },
  {
    id: 'a5',
    title: 'Starlight Cinema',
    description: '쏟아지는 별빛 아래 즐기는 우리만의 영화관. 야외 테라스에 설치된 빔프로젝터와 포근한 빈백으로 낭만적인 무비 나이트를 완성하세요.',
    icon: <span>🎬</span>,
    imageUrl: 'https://picsum.photos/600/400?random=7'
  }
];

const SLOGANS = [
  "산의 품에서 바다를 꿈꾸다",
  "오직 당신을 위한 프라이빗 생크추어리",
  "시간이 멈추는 곳, 더조은 펜션"
];

// --- Sub-components (Defined here for single-file structure requirement, but could be separated) ---

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="mb-6 animate-fade-in-down">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/80 text-xs tracking-widest uppercase mb-4 backdrop-blur-sm">
            Private Luxury Villa
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-4 leading-tight">
            The Joeun
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-light tracking-wide font-serif">
            더조은 펜션
          </p>
        </div>

        <div className="space-y-2 mb-12 animate-fade-in-up delay-200">
          {SLOGANS.map((slogan, idx) => (
            <p key={idx} className="text-stone-200 text-lg md:text-xl font-light">
              {slogan}
            </p>
          ))}
        </div>

        <button 
          onClick={onCtaClick}
          className="group relative px-8 py-4 bg-transparent border border-white text-white font-medium tracking-wider uppercase overflow-hidden hover:text-primary transition-colors duration-300 animate-fade-in-up delay-500"
        >
          <span className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10">프라이빗 스테이 예약하기</span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

const RoomSection = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-primary mb-4">Our Suites</h2>
        <p className="text-stone-500 max-w-2xl mx-auto">
          자연과 하나되는 감각적인 공간. 오직 휴식만을 위해 설계된 두 가지 타입의 객실을 만나보세요.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        {ROOMS.map((room) => (
          <div key={room.id} className="group cursor-pointer">
            <div className="relative overflow-hidden mb-6 h-80 rounded-sm">
              <img 
                src={room.imageUrl} 
                alt={room.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 text-sm font-semibold text-primary">
                {room.type}
              </div>
            </div>
            <h3 className="text-2xl font-serif text-primary mb-2 group-hover:text-secondary transition-colors">
              {room.name}
            </h3>
            <p className="text-stone-600 mb-4 line-clamp-3 leading-relaxed text-sm">
              {room.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {room.features.map((feature, idx) => (
                <span key={idx} className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded">
                  {feature}
                </span>
              ))}
            </div>
            <p className="text-lg font-medium text-secondary">{room.price}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AmenitiesSection = () => (
  <section className="py-24 px-4 bg-stone-50">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-primary mb-4">Exclusive Services</h2>
        <p className="text-stone-500 max-w-2xl mx-auto">
          더조은 펜션만의 특별한 서비스로 당신의 휴식을 더욱 풍요롭게 채워드립니다.
        </p>
      </div>

      <div className="space-y-24">
        {AMENITIES.map((item, index) => (
          <div key={item.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1 w-full h-80 md:h-96 relative overflow-hidden rounded-lg shadow-xl">
               <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="text-4xl mb-2 opacity-80">{item.icon}</div>
              <h3 className="text-3xl font-serif text-primary">{item.title}</h3>
              <p className="text-stone-600 leading-loose text-lg">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Navbar = ({ onViewChange, currentView }: { onViewChange: (view: ViewState) => void, currentView: ViewState }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = (view: ViewState) => 
    `cursor-pointer hover:text-secondary transition-colors ${currentView === view ? 'text-secondary font-semibold' : ''}`;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur shadow-md py-4 text-primary' : 'bg-transparent py-6 text-white'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-2xl font-serif font-bold cursor-pointer" 
          onClick={() => onViewChange(ViewState.HOME)}
        >
          The Joeun
        </div>
        <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase">
          <span className={navClass(ViewState.HOME)} onClick={() => onViewChange(ViewState.HOME)}>Home</span>
          <span className={navClass(ViewState.ROOMS)} onClick={() => onViewChange(ViewState.ROOMS)}>Rooms</span>
          <span className={navClass(ViewState.AMENITIES)} onClick={() => onViewChange(ViewState.AMENITIES)}>Amenities</span>
        </div>
        <button 
          onClick={() => onViewChange(ViewState.RESERVATION)}
          className={`px-6 py-2 border rounded-sm text-sm transition-all ${isScrolled ? 'border-primary hover:bg-primary hover:text-white' : 'border-white hover:bg-white hover:text-primary'}`}
        >
          BOOK NOW
        </button>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-primary text-white py-16 px-4">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
      <div>
        <h3 className="font-serif text-2xl mb-6">The Joeun</h3>
        <p className="text-stone-400 text-sm leading-relaxed">
          산과 바다 사이, 오직 당신만을 위한 프라이빗 힐링 플레이스.<br/>
          더조은 펜션에서 잊지 못할 추억을 만드세요.
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-stone-300">Contact</h4>
        <div className="space-y-3 text-stone-400 text-sm">
          <p>경상북도 어딘가 산속 123-45</p>
          <p>010-1234-5678</p>
          <p>reservation@thejoeun.com</p>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-stone-300">Follow Us</h4>
        <div className="flex space-x-4">
          <span className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-secondary cursor-pointer transition-colors">IG</span>
          <span className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-secondary cursor-pointer transition-colors">FB</span>
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-stone-800 text-center text-stone-500 text-xs">
      &copy; 2024 The Joeun Pension. All rights reserved.
    </div>
  </footer>
);

// --- Main App Component ---

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderContent = () => {
    switch(currentView) {
      case ViewState.HOME:
        return (
          <>
            <Hero onCtaClick={() => setCurrentView(ViewState.RESERVATION)} />
            <RoomSection />
            <AmenitiesSection />
          </>
        );
      case ViewState.ROOMS:
        return (
          <div className="pt-20">
             <div className="bg-stone-100 py-12 text-center">
                <h1 className="text-4xl font-serif text-primary">Accommodations</h1>
             </div>
             <RoomSection />
          </div>
        );
      case ViewState.AMENITIES:
        return (
          <div className="pt-20">
            <div className="bg-stone-100 py-12 text-center">
                <h1 className="text-4xl font-serif text-primary">Experience</h1>
             </div>
            <AmenitiesSection />
          </div>
        );
      case ViewState.RESERVATION:
        return (
          <div className="pt-32 pb-24 px-4 min-h-screen bg-stone-50 flex justify-center items-center">
            <div className="max-w-xl w-full bg-white p-8 shadow-xl rounded-sm">
              <h2 className="text-3xl font-serif text-center mb-8 text-primary">Reservation</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Check In</label>
                    <input type="date" className="w-full border border-stone-200 p-3 rounded-sm focus:border-secondary outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Check Out</label>
                    <input type="date" className="w-full border border-stone-200 p-3 rounded-sm focus:border-secondary outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Room Type</label>
                  <select className="w-full border border-stone-200 p-3 rounded-sm focus:border-secondary outline-none">
                    <option>Sunrise Suite</option>
                    <option>Moonlight Villa</option>
                  </select>
                </div>
                <div>
                   <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Name</label>
                   <input type="text" placeholder="Your Name" className="w-full border border-stone-200 p-3 rounded-sm focus:border-secondary outline-none" />
                </div>
                <button className="w-full bg-primary text-white py-4 font-bold uppercase hover:bg-slate-800 transition-colors">
                  Check Availability
                </button>
                <p className="text-center text-xs text-stone-400 mt-4">
                  *This is a demo form. No actual booking will be made.
                </p>
              </form>
            </div>
          </div>
        );
      default:
        return <Hero onCtaClick={() => setCurrentView(ViewState.RESERVATION)} />;
    }
  };

  return (
    <div className="font-sans text-slate-800">
      <Navbar onViewChange={setCurrentView} currentView={currentView} />
      <main>
        {renderContent()}
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;