import { useState } from 'react';
import { ArrowRight, User } from 'lucide-react';
import { PageId } from '../types';

interface AboutPageProps {
  onGetTellerBud?: () => void;
  onNavigate: (page: PageId) => void;
}

// Prepared local hero image path
const HERO_IMG = '/assets/heroes/about-hero.png';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  initials: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Sililo Lubinda',
    role: 'CEO',
    image: '/assets/team/sililo-lubinda.jpg',
    initials: 'SL',
  },
  {
    name: 'Natasha Longwe',
    role: 'CFO',
    image: '/assets/team/natasha-longwe.jpg',
    initials: 'NL',
  },
  {
    name: 'Evans Kungeke',
    role: 'CTO',
    image: '/assets/team/evans-kungeke.jpg',
    initials: 'EK',
  },
  {
    name: 'Kaminiji Chinyama',
    role: 'COO',
    image: '/assets/team/kaminiji-chinyama.jpg',
    initials: 'KC',
  },
  {
    name: 'Jennifer Mwewa',
    role: 'Sales Manager',
    image: '/assets/team/jennifer-mwewa.jpg',
    initials: 'JM',
  },
  {
    name: 'Diana Muya',
    role: 'Sales Manager',
    image: '/assets/team/diana-muya.jpg',
    initials: 'DM',
  },
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const [teamImgErrors, setTeamImgErrors] = useState<Record<string, boolean>>({});

  return (
    <div className="w-full bg-[#FCFCFB] text-[#182026]">
      {/* ================================================== */}
      {/* 1. ABOUT PAGE HERO                                 */}
      {/* ================================================== */}
      <section className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px] bg-[#050F11] overflow-hidden flex items-center">
        {/* Background Photograph Container */}
        <div className="absolute inset-0 w-full h-full bg-[#005F67]/30">
          <img
            src={HERO_IMG}
            alt="About TellerBud - Mobile Money Platform"
            className="w-full h-full object-cover object-center"
          />
          {/* Moderate dark oceanic-green overlay for text readability while keeping photograph clearly visible */}
          <div className="absolute inset-0 bg-[#050F11]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050F11]/90 via-[#050F11]/75 to-[#005F67]/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-3xl space-y-5 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#008C95]/20 border border-[#008C95]/40 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#008C95] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-[#E5F5F5] uppercase">
                ABOUT TELLERBUD
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#FCFCFB] tracking-tight leading-[1.14]">
              Building mobile money convenience around people and communities.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#FCFCFB]/90 leading-relaxed font-normal max-w-2xl">
              TellerBud is a technology-enabled platform designed to support more accessible and convenient mobile money services through Customer, Agent and operational experiences.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="px-7 py-3.5 bg-[#008C95] hover:bg-[#006B73] text-[#FCFCFB] font-semibold text-sm sm:text-base rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 bg-[#FCFCFB]/10 hover:bg-[#FCFCFB]/20 border border-[#FCFCFB]/30 text-[#FCFCFB] font-semibold text-sm sm:text-base rounded-full transition-all cursor-pointer"
              >
                Contact TellerBud
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 2. OUR PURPOSE                                     */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-24 border-b border-[#D9E4E4] bg-[#FCFCFB]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="text-xs font-semibold tracking-wider text-[#008C95] uppercase block">
              OUR PURPOSE
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
              Bringing essential mobile money services closer to everyday life.
            </h2>
            <div className="space-y-4 pt-2 text-base sm:text-lg text-[#30383D] leading-relaxed font-normal">
              <p>
                TellerBud aims to reduce the inconvenience of finding suitable mobile money service support by coordinating Pickup and Delivery requests with eligible Agents.
              </p>
              <p>
                The platform is designed around the role mobile money plays in daily routines, local commerce and community access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 3. MEET OUR TEAM (OUR LEADERSHIP)                   */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-24 border-b border-[#D9E4E4] bg-[#FCFCFB]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs font-semibold tracking-wider text-[#008C95] uppercase block mb-2.5">
              OUR LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#090D10] tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-base sm:text-lg text-[#30383D] font-normal leading-relaxed max-w-2xl mx-auto mt-3 sm:mt-4">
              Meet the leadership team helping shape TellerBud’s vision, operations and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-[#FCFCFB] border border-[#D9E4E4] rounded-2xl overflow-hidden shadow-xs hover:shadow-sm transition-shadow flex flex-col h-full text-left"
              >
                {/* Portrait Placeholder Area (approx 4:5 ratio) */}
                <div className="relative w-full aspect-[4/5] bg-[#F4F9F9] border-b border-[#D9E4E4] overflow-hidden flex items-center justify-center">
                  {!teamImgErrors[member.name] ? (
                    <img
                      src={member.image}
                      onError={() => setTeamImgErrors((prev) => ({ ...prev, [member.name]: true }))}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#F4F9F9] text-[#008C95] p-6 select-none">
                      <div className="w-20 h-20 rounded-full bg-[#FCFCFB] border border-[#008C95]/25 flex items-center justify-center mb-3 shadow-2xs">
                        <User className="w-10 h-10 text-[#008C95]" strokeWidth={1.5} />
                      </div>
                      <span className="text-base font-semibold tracking-widest text-[#005F67]">
                        {member.initials}
                      </span>
                    </div>
                  )}
                </div>

                {/* Member Information */}
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <h3 className="text-xl sm:text-[22px] font-semibold text-[#090D10] tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#008C95] tracking-wide mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm sm:text-[15px] text-[#30383D] leading-relaxed font-normal mt-auto">
                    Short professional introduction to be added.
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 4. FINAL CTA BAND                                  */}
      {/* ================================================== */}
      <section className="w-full bg-[#005F67] text-[#FCFCFB] py-16 sm:py-20 relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FCFCFB] tracking-tight">
              Discover the TellerBud platform.
            </h2>
            <p className="text-base sm:text-lg text-[#FCFCFB]/90 font-normal leading-relaxed max-w-2xl mx-auto">
              Explore the services, business opportunities and connected experiences behind TellerBud.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-[#FCFCFB] hover:bg-[#E5F5F5] text-[#005F67] font-bold text-base rounded-full transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-transparent hover:bg-[#FCFCFB]/10 border border-[#FCFCFB]/40 text-[#FCFCFB] font-semibold text-base rounded-full transition-all cursor-pointer"
              >
                Contact TellerBud
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
