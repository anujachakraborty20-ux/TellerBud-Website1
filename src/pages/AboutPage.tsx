import { useState, useEffect } from 'react';
import { ArrowRight, User, X } from 'lucide-react';
import { PageId } from '../types';

interface AboutPageProps {
  onGetTellerBud?: () => void;
  onNavigate: (page: PageId) => void;
}

// Prepared local hero image path
const HERO_IMG = '/assets/heroes/about-hero.png';

interface PurposePoint {
  title: string;
  description: string;
}

const PURPOSE_POINTS: PurposePoint[] = [
  {
    title: 'Customer Convenience',
    description: 'secure Pickup and Delivery support when Customers need it.',
  },
  {
    title: 'Agent Operations',
    description: 'ability to efficiently serve Customers, manage daily transactions and maintain liquidity.',
  },
  {
    title: 'Real-Time Transaction Capture',
    description: 'record walk-in, Pickup and Delivery transactions as they happen.',
  },
  {
    title: 'Business Visibility',
    description: 'give Business Owners a clear, up-to-date view of Agent activity and transactions.',
  },
  {
    title: 'Operational Control',
    description: 'help Business Owners manage Agents, transactions, liquidity and day-to-day operations.',
  },
];

interface TeamMember {
  name: string;
  role: string;
  image: string;
  initials: string;
  intro: string;
  fullBio: string[];
  objectPosition?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Sililo A Lubinda (Skillz)',
    role: 'Chief Executive Officer',
    image: '/assets/team/Sililo_CEO.png',
    initials: 'SL',
    objectPosition: 'object-top',
    intro:
      'Technology and business leader with more than a decade of experience across Banking, Telecommunications, FinTech and Enterprise ICT, combining deep technical expertise with strategic business leadership.',
    fullBio: [
      'Sililo is a technology and business leader with over a decade of experience delivering complex digital solutions across Banking, Telecommunications, FinTech and Enterprise ICT. His career has been shaped by the privilege of working in fast-paced, technology-intensive environments where reliability, innovation and the ability to translate business needs into practical technology solutions are critical.',
      'With deep expertise spanning software engineering, enterprise systems, financial technology, systems integration, solution architecture and digital transformation, Sililo brings both strong technical depth and strategic business perspective to leadership. His experience includes working with mission-critical platforms, large-scale integrations, cloud and hybrid environments, and digital services where performance, security and continuity are essential.',
      'As Co-Founder and CEO of TellerBud Ventures, he brings this combination of technology expertise, commercial thinking and execution to building innovative solutions that address real-world challenges. His leadership approach connects vision with practical delivery, builds capable teams and transforms complex ideas into scalable, sustainable solutions.',
      'His leadership philosophy is centered on innovation with purpose, and using technology to simplify complexity, create meaningful value and solve real-world problems.',
    ],
  },
  {
    name: 'Natasha Longwe',
    role: 'Chief Financial Officer',
    image: '/assets/team/Natasha_CFO.png',
    initials: 'NL',
    objectPosition: 'object-top sm:object-center',
    intro:
      'Executive finance leader with more than two decades of experience in financial governance, strategic planning, operational leadership, compliance, cash-flow management and risk mitigation.',
    fullBio: [
      'Natasha is a dynamic, multi-faceted executive leader and Chief Financial Officer who brings over two decades of advanced financial governance, strategic FP&A and operational leadership across the mining, NGO, property development and investment sectors.',
      'Currently serving as CFO at TellerBud Ventures, her extensive background spans robust financial planning and analysis, regulatory compliance, corporate cash-flow strategy and comprehensive risk mitigation.',
      'With foundational expertise forged through an ACCA qualification from the Zambia Center for Accountancy Studies and a unique perspective in community leadership backed by a Diploma from the Barak Bible Training Centre, Natasha excels at transforming raw data into high-impact corporate strategies.',
      'A proven catalyst for operational excellence, she specializes in strengthening internal controls, managing complex asset portfolios and driving clean audit outcomes, making her an invaluable asset for organizations seeking sustainable financial expansion and emerging fintech growth.',
    ],
  },
  {
    name: 'Evans Kungeke',
    role: 'Chief Technical Officer',
    image: '/assets/team/Evans_CTO.jpeg',
    initials: 'EK',
    objectPosition: 'object-top',
    intro:
      'Seasoned technology executive with more than 15 years of experience across enterprise IT infrastructure, networks, databases, virtualization, digital platforms and customer interaction technologies.',
    fullBio: [
      'Evans Kungeke is a seasoned technology executive with more than 15 years of experience leading and supporting enterprise IT infrastructure, network systems, databases, virtualization, digital platforms and customer interaction technologies.',
      'As Chief Technical Officer at TellerBud, Evans provides strategic technology leadership, driving the development of secure, reliable, scalable and innovative technology solutions that support the company’s growth and long-term vision.',
      'His expertise spans Microsoft and Linux environments, network architecture, database systems, virtualization, disaster recovery, web technologies and call center platforms.',
      'With extensive knowledge in Computer Science from The Copperbelt University and professional certifications including Cisco Certified Network Associate (CCNA) and Customer Interaction Center (CIC) Administrator, Evans combines strong technical expertise with a practical, business-focused approach to technology.',
      'His leadership philosophy centers on innovation, reliability, security and customer-focused technology, ensuring TellerBud’s technology infrastructure remains robust, adaptable and positioned for sustainable growth.',
    ],
  },
  {
    name: 'Kamiji Chinyama',
    role: 'Chief Operating Officer',
    image: '/assets/team/Kamiji_COO.jpeg',
    initials: 'KC',
    objectPosition: 'object-top',
    intro:
      'Banking and financial-services leader with over 10 years of experience in operations, finance, risk management, strategic leadership and business growth.',
    fullBio: [
      'As Chief Operating Officer of TellerBud Ventures, Kamiji brings over 10 years of banking and financial services experience.',
      'He has built a reputation for operational excellence, strategic leadership and driving business growth.',
      'With extensive expertise in finance, risk management and business operations, he plays a key role in shaping the company’s vision, strengthening client relationships and delivering innovative solutions that create lasting value.',
    ],
  },
  {
    name: 'Jennipher Mwewa',
    role: 'Sales Manager',
    image: '/assets/team/Jennipher_Sales_Manager.jpeg',
    initials: 'JM',
    objectPosition: 'object-top',
    intro:
      'Results-driven sales leader focused on customer relationships, effective sales strategies, team development and sustainable business growth.',
    fullBio: [
      'Jennipher Mwewa is a results-driven Sales Manager at TellerBud Ventures, passionate about sales, customer relationships and business growth.',
      'She is committed to developing effective sales strategies, empowering teams and delivering solutions that create lasting value for clients and the business.',
    ],
  },
  {
    name: 'Diana Muya',
    role: 'Sales Manager',
    image: '/assets/team/Diana_Sales_Manager.jpeg',
    initials: 'DM',
    objectPosition: 'object-top',
    intro:
      'Business Administration and Economics professional supporting sales and customer service across the TellerBud Agent network while contributing to market growth and strategy.',
    fullBio: [
      'Diana holds a Bachelor’s degree in Business Administration with Economics from the University of Zambia.',
      'She drives sales and customer service across our Agent network, making sure every TellerBud Customer receives fast and trusted service.',
      'She also works with senior management to shape strategy and grow TellerBud market by market, starting with the communities we serve.',
    ],
  },
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const [teamImgErrors, setTeamImgErrors] = useState<Record<string, boolean>>({});
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Background scroll lock when profile modal is active
  useEffect(() => {
    if (selectedMember) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedMember]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedMember) {
        setSelectedMember(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMember]);

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
            <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-normal pt-1 max-w-2xl mx-auto">
              TellerBud is designed to make everyday mobile-money services more convenient for Customers and more manageable for Agents and Business Owners.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-10 sm:mt-12">
            <p className="text-sm sm:text-base font-semibold text-[#005F67] uppercase tracking-wider mb-4 sm:mb-5 text-center sm:text-left">
              The platform brings together:
            </p>

            <div className="space-y-3 sm:space-y-3.5 text-left">
              {PURPOSE_POINTS.map((point, idx) => (
                <div
                  key={point.title}
                  className="flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white border border-[#E2ECEC] hover:border-[#008C95]/40 transition-colors shadow-xs"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#008C95]/10 border border-[#008C95]/20 text-[#008C95] font-bold text-xs sm:text-sm flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <div className="pt-0.5 text-sm sm:text-base leading-relaxed">
                    <span className="font-bold text-[#090D10]">{point.title}</span>
                    <span className="text-[#008C95] mx-2 font-medium">—</span>
                    <span className="text-[#30383D]">{point.description}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-normal text-center mt-8 sm:mt-10 max-w-2xl mx-auto">
              TellerBud is built around the role mobile money plays in everyday life, local commerce and community access.
            </p>
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
              Meet the leadership team driving TellerBud’s vision, operations, technology and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-[#FCFCFB] border border-[#D9E4E4] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col h-full text-left group"
              >
                {/* Portrait Area (approx 4:5 ratio) */}
                <div className="relative w-full aspect-[4/5] bg-[#F4F9F9] border-b border-[#D9E4E4] overflow-hidden flex items-center justify-center">
                  {!teamImgErrors[member.name] ? (
                    <img
                      src={member.image}
                      onError={() => setTeamImgErrors((prev) => ({ ...prev, [member.name]: true }))}
                      alt={`${member.name} — ${member.role}`}
                      className={`w-full h-full object-cover ${member.objectPosition || 'object-top sm:object-center'} group-hover:scale-[1.02] transition-transform duration-300`}
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
                  <p className="text-sm font-semibold text-[#008C95] tracking-wide mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm sm:text-[15px] text-[#30383D] leading-relaxed font-normal mb-5 flex-1">
                    {member.intro}
                  </p>
                  <div className="pt-3 mt-auto border-t border-[#E2ECEC]/80 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedMember(member)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#008C95] hover:text-[#005F67] group/btn transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95] rounded-md py-1"
                    >
                      <span className="underline underline-offset-4 decoration-[#008C95]/40 group-hover/btn:decoration-[#005F67]">
                        View Profile
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* TEAM MEMBER FULL BIOGRAPHY MODAL                   */}
      {/* ================================================== */}
      {selectedMember && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="team-profile-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#050F11]/75 backdrop-blur-xs overflow-y-auto"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative w-full max-w-2xl lg:max-w-3xl bg-[#FCFCFB] border border-[#D9E4E4] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Close Button */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5 border-b border-[#D9E4E4] bg-[#FCFCFB]/95 backdrop-blur-xs sticky top-0 z-10">
              <span className="text-xs font-semibold tracking-wider text-[#008C95] uppercase">
                LEADERSHIP PROFILE
              </span>
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                aria-label="Close modal"
                className="w-9 h-9 rounded-full bg-[#F4F9F9] hover:bg-[#E5F5F5] text-[#30383D] hover:text-[#090D10] border border-[#D9E4E4] flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C95]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 lg:p-10 overflow-y-auto space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                {/* Larger Portrait */}
                <div className="w-40 sm:w-48 lg:w-52 aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-[#F4F9F9] border border-[#D9E4E4] shadow-xs shrink-0">
                  {!teamImgErrors[selectedMember.name] ? (
                    <img
                      src={selectedMember.image}
                      alt={`${selectedMember.name} — ${selectedMember.role}`}
                      className={`w-full h-full object-cover ${selectedMember.objectPosition || 'object-top sm:object-center'}`}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#F4F9F9] text-[#008C95] p-6 select-none">
                      <div className="w-16 h-16 rounded-full bg-[#FCFCFB] border border-[#008C95]/25 flex items-center justify-center mb-2 shadow-2xs">
                        <User className="w-8 h-8 text-[#008C95]" strokeWidth={1.5} />
                      </div>
                      <span className="text-sm font-semibold tracking-widest text-[#005F67]">
                        {selectedMember.initials}
                      </span>
                    </div>
                  )}
                </div>

                {/* Name, Role & Concise Intro */}
                <div className="flex-1 text-center sm:text-left">
                  <h3
                    id="team-profile-modal-title"
                    className="text-2xl sm:text-3xl font-semibold text-[#090D10] tracking-tight"
                  >
                    {selectedMember.name}
                  </h3>
                  <p className="text-base font-semibold text-[#008C95] tracking-wide mt-1.5 mb-4">
                    {selectedMember.role}
                  </p>
                  <div className="w-12 h-0.5 bg-[#008C95]/40 mb-4 mx-auto sm:mx-0" />
                  <p className="text-sm sm:text-base text-[#182026] font-medium leading-relaxed italic">
                    {selectedMember.intro}
                  </p>
                </div>
              </div>

              {/* Full Biography */}
              <div className="pt-5 border-t border-[#E2ECEC] space-y-4 text-left">
                <h4 className="text-xs font-semibold tracking-wider text-[#005F67] uppercase">
                  Full Biography
                </h4>
                <div className="space-y-4 text-sm sm:text-[15.5px] text-[#30383D] leading-relaxed font-normal">
                  {selectedMember.fullBio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
