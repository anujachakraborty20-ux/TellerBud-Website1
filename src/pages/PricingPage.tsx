import { useEffect } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Receipt,
  Truck,
  LayoutDashboard,
  Users,
  FileText,
  BadgeCheck,
  Clock,
  Sparkles,
  Info,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';
import { PageId } from '../types';

interface PricingPageProps {
  onGetTellerBud: () => void;
  onNavigate: (page: PageId) => void;
}

export default function PricingPage({ onGetTellerBud, onNavigate }: PricingPageProps) {
  useEffect(() => {
    document.title = 'TellerBud Pricing | Mobile Money Business Platform';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore TellerBud pricing, including setup, monthly subscription, transaction fees, Pickup and Delivery service fees, device terms and the 14-day free trial.'
      );
    }
  }, []);

  return (
    <div className="w-full bg-[#FCFCFB] text-[#182026]">
      {/* ================================================== */}
      {/* PRICING PAGE HERO                                  */}
      {/* ================================================== */}
      <section className="relative w-full bg-gradient-to-b from-[#EBF7F7]/70 via-[#FCFCFB] to-[#FCFCFB] border-b border-[#DDE7E7]/60 pt-14 sm:pt-20 lg:pt-24 pb-14 sm:pb-18 lg:pb-20 overflow-hidden">
        {/* Subtle geometric & financial line accents in background */}
        <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#008C95]/5 blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-[#005F67]/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#008C95_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-15" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold tracking-wider uppercase border border-[#008C95]/15">
              <Sparkles className="w-3.5 h-3.5 text-[#008C95]" />
              <span>TELLERBUD PRICING</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-[#090D10] tracking-tight leading-[1.18]">
              Simple pricing. Powerful business support.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-[#30383D] leading-relaxed max-w-3xl mx-auto font-normal">
              TellerBud gives mobile-money businesses the tools to manage everyday transactions, serve Customers, monitor Agent activity, manage liquidity and gain real-time visibility across their operations.
            </p>

            {/* Compact Pricing-Summary Strip */}
            <div className="pt-6 sm:pt-8">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-[#FCFCFB] border border-[#D9E4E4] rounded-2xl sm:rounded-full p-2.5 sm:p-2 shadow-sm text-xs sm:text-sm font-semibold text-[#090D10]">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl sm:rounded-full bg-[#E5F5F5] text-[#005F67]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#008C95]" />
                  <span>K250 Setup</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl sm:rounded-full bg-[#E5F5F5] text-[#005F67]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#008C95]" />
                  <span>14 Days Free</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl sm:rounded-full bg-[#E5F5F5] text-[#005F67]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#008C95]" />
                  <span>K100 / Month</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl sm:rounded-full bg-[#E5F5F5] text-[#005F67]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#008C95]" />
                  <span>K0.10 / Transaction</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl sm:rounded-full bg-[#E5F5F5] text-[#005F67]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#008C95]" />
                  <span>Device at K0 Upfront</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 1 — OUR PRICING (Table / Cards)            */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#FCFCFB]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold tracking-wider uppercase">
              <BadgeCheck className="w-3.5 h-3.5 text-[#008C95]" />
              <span>OUR PRICING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#090D10] tracking-tight">
              Clear fees from the start.
            </h2>
            <p className="text-base sm:text-lg text-[#30383D] font-normal">
              Straightforward and predictable pricing designed to support sustainable growth for your mobile-money agency.
            </p>
          </div>

          {/* Desktop & Tablet Pricing Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-[#D9E4E4] bg-[#FFFFFF] shadow-2xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#D9E4E4] bg-[#F4F9F9]">
                  <th scope="col" className="py-4.5 px-6 lg:px-8 text-xs font-semibold tracking-wider text-[#005F67] uppercase w-[28%]">
                    Fee
                  </th>
                  <th scope="col" className="py-4.5 px-6 lg:px-8 text-xs font-semibold tracking-wider text-[#005F67] uppercase w-[24%]">
                    Amount
                  </th>
                  <th scope="col" className="py-4.5 px-6 lg:px-8 text-xs font-semibold tracking-wider text-[#005F67] uppercase w-[48%]">
                    How It Works
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EBF0F0]">
                {/* Row 1: Setup Fee */}
                <tr className="hover:bg-[#F9FCFC] transition-colors">
                  <td className="py-5 px-6 lg:px-8 font-semibold text-[#090D10] text-base lg:text-lg">
                    Setup Fee
                  </td>
                  <td className="py-5 px-6 lg:px-8">
                    <span className="text-lg lg:text-xl font-bold text-[#090D10]">
                      K250 <span className="text-sm font-medium text-[#505A60]">once-off</span>
                    </span>
                  </td>
                  <td className="py-5 px-6 lg:px-8 text-sm lg:text-base text-[#30383D] font-normal leading-relaxed">
                    Pay once when your TellerBud account is activated
                  </td>
                </tr>

                {/* Row 2: Monthly Subscription */}
                <tr className="hover:bg-[#F9FCFC] transition-colors">
                  <td className="py-5 px-6 lg:px-8 font-semibold text-[#090D10] text-base lg:text-lg">
                    Monthly Subscription
                  </td>
                  <td className="py-5 px-6 lg:px-8">
                    <span className="text-lg lg:text-xl font-bold text-[#008C95]">
                      K100<span className="text-sm font-medium text-[#505A60]">/month</span>
                    </span>
                  </td>
                  <td className="py-5 px-6 lg:px-8 text-sm lg:text-base text-[#30383D] font-normal leading-relaxed">
                    Covers continued access to the TellerBud platform and business support features
                  </td>
                </tr>

                {/* Row 3: 14-Day Trial */}
                <tr className="bg-[#E5F5F5]/40 hover:bg-[#E5F5F5]/60 transition-colors">
                  <td className="py-5 px-6 lg:px-8 font-semibold text-[#090D10] text-base lg:text-lg">
                    14-Day Trial
                  </td>
                  <td className="py-5 px-6 lg:px-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#008C95] text-[#FCFCFB] text-xs lg:text-sm font-bold tracking-wide uppercase shadow-2xs">
                      FREE
                    </span>
                  </td>
                  <td className="py-5 px-6 lg:px-8 text-sm lg:text-base text-[#30383D] font-normal leading-relaxed">
                    Use TellerBud for 14 days before committing
                  </td>
                </tr>

                {/* Row 4: Transaction Fee */}
                <tr className="hover:bg-[#F9FCFC] transition-colors">
                  <td className="py-5 px-6 lg:px-8 font-semibold text-[#090D10] text-base lg:text-lg">
                    Transaction Fee
                  </td>
                  <td className="py-5 px-6 lg:px-8">
                    <span className="text-lg lg:text-xl font-bold text-[#090D10]">
                      K0.10
                    </span>
                  </td>
                  <td className="py-5 px-6 lg:px-8 text-sm lg:text-base text-[#30383D] font-normal leading-relaxed">
                    Charged per transaction recorded through TellerBud
                  </td>
                </tr>

                {/* Row 5: Pickup & Delivery Service Fee */}
                <tr className="hover:bg-[#F9FCFC] transition-colors">
                  <td className="py-5 px-6 lg:px-8 font-semibold text-[#090D10] text-base lg:text-lg">
                    Pickup & Delivery Service Fee
                  </td>
                  <td className="py-5 px-6 lg:px-8">
                    <span className="text-lg lg:text-xl font-bold text-[#008C95]">
                      20%
                    </span>
                  </td>
                  <td className="py-5 px-6 lg:px-8 text-sm lg:text-base text-[#30383D] font-normal leading-relaxed">
                    TellerBud retains 20% of the applicable service fee on each successful Pickup or Delivery
                  </td>
                </tr>

                {/* Row 6: TellerBud Device */}
                <tr className="hover:bg-[#F9FCFC] transition-colors">
                  <td className="py-5 px-6 lg:px-8 font-semibold text-[#090D10] text-base lg:text-lg">
                    TellerBud Device
                  </td>
                  <td className="py-5 px-6 lg:px-8">
                    <span className="text-lg lg:text-xl font-bold text-[#005F67]">
                      K0 upfront
                    </span>
                  </td>
                  <td className="py-5 px-6 lg:px-8 text-sm lg:text-base text-[#30383D] font-normal leading-relaxed">
                    Device provided as part of the TellerBud service
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Structured Stacked Cards */}
          <div className="block md:hidden space-y-4">
            {/* Card 1: Setup Fee */}
            <div className="bg-[#FFFFFF] border border-[#D9E4E4] rounded-2xl p-6 shadow-2xs space-y-3">
              <div className="flex items-start justify-between gap-2 border-b border-[#EBF0F0] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67]">Fee</span>
                <span className="text-base font-semibold text-[#090D10]">Setup Fee</span>
              </div>
              <div className="flex items-start justify-between gap-2 border-b border-[#EBF0F0] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67]">Amount</span>
                <span className="text-lg font-bold text-[#090D10]">K250 once-off</span>
              </div>
              <div className="pt-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67] block mb-1">How It Works</span>
                <p className="text-sm text-[#30383D] font-normal leading-relaxed">
                  Pay once when your TellerBud account is activated
                </p>
              </div>
            </div>

            {/* Card 2: Monthly Subscription */}
            <div className="bg-[#FFFFFF] border border-[#D9E4E4] rounded-2xl p-6 shadow-2xs space-y-3">
              <div className="flex items-start justify-between gap-2 border-b border-[#EBF0F0] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67]">Fee</span>
                <span className="text-base font-semibold text-[#090D10]">Monthly Subscription</span>
              </div>
              <div className="flex items-start justify-between gap-2 border-b border-[#EBF0F0] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67]">Amount</span>
                <span className="text-lg font-bold text-[#008C95]">K100/month</span>
              </div>
              <div className="pt-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67] block mb-1">How It Works</span>
                <p className="text-sm text-[#30383D] font-normal leading-relaxed">
                  Covers continued access to the TellerBud platform and business support features
                </p>
              </div>
            </div>

            {/* Card 3: 14-Day Trial */}
            <div className="bg-[#E5F5F5]/60 border border-[#008C95]/30 rounded-2xl p-6 shadow-2xs space-y-3">
              <div className="flex items-start justify-between gap-2 border-b border-[#D9E4E4] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67]">Fee</span>
                <span className="text-base font-semibold text-[#090D10]">14-Day Trial</span>
              </div>
              <div className="flex items-start justify-between gap-2 border-b border-[#D9E4E4] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67]">Amount</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#008C95] text-[#FCFCFB] text-xs font-bold tracking-wide uppercase">
                  FREE
                </span>
              </div>
              <div className="pt-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67] block mb-1">How It Works</span>
                <p className="text-sm text-[#30383D] font-normal leading-relaxed">
                  Use TellerBud for 14 days before committing
                </p>
              </div>
            </div>

            {/* Card 4: Transaction Fee */}
            <div className="bg-[#FFFFFF] border border-[#D9E4E4] rounded-2xl p-6 shadow-2xs space-y-3">
              <div className="flex items-start justify-between gap-2 border-b border-[#EBF0F0] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67]">Fee</span>
                <span className="text-base font-semibold text-[#090D10]">Transaction Fee</span>
              </div>
              <div className="flex items-start justify-between gap-2 border-b border-[#EBF0F0] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67]">Amount</span>
                <span className="text-lg font-bold text-[#090D10]">K0.10</span>
              </div>
              <div className="pt-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67] block mb-1">How It Works</span>
                <p className="text-sm text-[#30383D] font-normal leading-relaxed">
                  Charged per transaction recorded through TellerBud
                </p>
              </div>
            </div>

            {/* Card 5: Pickup & Delivery Service Fee */}
            <div className="bg-[#FFFFFF] border border-[#D9E4E4] rounded-2xl p-6 shadow-2xs space-y-3">
              <div className="flex items-start justify-between gap-2 border-b border-[#EBF0F0] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67]">Fee</span>
                <span className="text-base font-semibold text-[#090D10]">Pickup & Delivery Service Fee</span>
              </div>
              <div className="flex items-start justify-between gap-2 border-b border-[#EBF0F0] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67]">Amount</span>
                <span className="text-lg font-bold text-[#008C95]">20%</span>
              </div>
              <div className="pt-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67] block mb-1">How It Works</span>
                <p className="text-sm text-[#30383D] font-normal leading-relaxed">
                  TellerBud retains 20% of the applicable service fee on each successful Pickup or Delivery
                </p>
              </div>
            </div>

            {/* Card 6: TellerBud Device */}
            <div className="bg-[#FFFFFF] border border-[#D9E4E4] rounded-2xl p-6 shadow-2xs space-y-3">
              <div className="flex items-start justify-between gap-2 border-b border-[#EBF0F0] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67]">Fee</span>
                <span className="text-base font-semibold text-[#090D10]">TellerBud Device</span>
              </div>
              <div className="flex items-start justify-between gap-2 border-b border-[#EBF0F0] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67]">Amount</span>
                <span className="text-lg font-bold text-[#005F67]">K0 upfront</span>
              </div>
              <div className="pt-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#005F67] block mb-1">How It Works</span>
                <p className="text-sm text-[#30383D] font-normal leading-relaxed">
                  Device provided as part of the TellerBud service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 2 — 14-DAY FREE TRIAL                      */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-20 bg-[#F4F9F9] border-y border-[#DDE7E7]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#E5F5F5] border border-[#008C95]/25 p-8 sm:p-12 lg:p-14 shadow-sm space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFCFB] text-[#005F67] text-xs font-semibold tracking-wider uppercase border border-[#008C95]/20">
                <Clock className="w-3.5 h-3.5 text-[#008C95]" />
                <span>14-DAY FREE TRIAL</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#090D10] tracking-tight">
                Explore TellerBud before you commit.
              </h2>

              <p className="text-base sm:text-lg text-[#30383D] leading-relaxed">
                Try TellerBud for <span className="font-semibold text-[#090D10]">14 days</span> at no subscription charge (<span className="font-bold text-[#008C95]">FREE</span>).
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#005F67]">
                During your trial, you can experience:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  'Real-time transaction capture',
                  'Agent transaction management',
                  'Business-owner visibility',
                  'Transaction monitoring and reporting',
                  'Liquidity management',
                  'Customer Pickup & Delivery services',
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-[#FCFCFB] border border-[#D9E4E4] rounded-xl px-4 py-3 text-sm sm:text-[15px] font-medium text-[#182026]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#008C95] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#30383D] leading-relaxed pt-2 border-t border-[#008C95]/15 font-normal">
              If you decide to continue after the trial, the applicable TellerBud fees will apply, including the K100 monthly subscription fee and applicable transaction and service fees.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 3 — DEVICE TERMS                           */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#FCFCFB]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold tracking-wider uppercase">
                <Smartphone className="w-3.5 h-3.5 text-[#008C95]" />
                <span>DEVICE TERMS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold text-[#090D10] tracking-tight">
                TellerBud device at no upfront cost.
              </h2>

              <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-normal">
                The TellerBud device is provided to the Customer at no upfront cost for use with the TellerBud service.
              </p>

              <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-normal">
                The device remains subject to TellerBud's device-use and protection requirements.
              </p>
            </div>

            {/* Clearly Separated Subsection: Device Loss or Theft */}
            <div className="rounded-2xl border border-[#D9E4E4] bg-[#FFFFFF] p-7 sm:p-9 shadow-2xs space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E5F5F5] border border-[#008C95]/20 flex items-center justify-center text-[#008C95]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#090D10]">
                  Device Loss or Theft
                </h3>
              </div>

              <div className="space-y-3.5 text-base text-[#30383D] leading-relaxed font-normal pl-0 sm:pl-1">
                <p>Customers are responsible for safeguarding the TellerBud device.</p>
                <p>If the device is lost or stolen, the Customer will be responsible for reimbursing the applicable device cost.</p>
                <p>The outstanding device cost may be repaid over a 12-month period, subject to the applicable device recovery terms.</p>
                <p>Customers should report any loss or theft to TellerBud as soon as reasonably possible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 4 — MONTHLY SUBSCRIPTION                   */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#F8FBFA] border-y border-[#DDE7E7]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Large Amount Treatment */}
            <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#D9E4E4] rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-2xs">
              <span className="text-xs font-semibold tracking-wider text-[#005F67] uppercase block">
                MONTHLY SUBSCRIPTION
              </span>
              <div className="space-y-1">
                <span className="text-5xl sm:text-6xl font-extrabold text-[#008C95] tracking-tight block">
                  K100
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#505A60] block">
                  per device / month
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#30383D]/80 leading-normal pt-2 border-t border-[#EBF0F0]">
                Predictable monthly support with no hidden maintenance fees
              </p>
            </div>

            {/* Right Column: Editorial Details */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#090D10] tracking-tight">
                Continued access to the TellerBud platform.
              </h2>

              <p className="text-base sm:text-[17px] text-[#30383D] leading-relaxed font-normal">
                TellerBud charges a K100 monthly subscription fee per device.
              </p>

              <p className="text-base sm:text-[17px] text-[#30383D] leading-relaxed font-normal">
                The subscription provides continued access to the TellerBud platform and its business support features, including:
              </p>

              <ul className="space-y-2.5 pt-1">
                {[
                  'Transaction capture and management',
                  'Business-owner visibility',
                  'Agent activity monitoring',
                  'Reporting and performance monitoring',
                  'Liquidity management',
                  'Pickup & Delivery functionality',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-[#182026]">
                    <CheckCircle2 className="w-4 h-4 text-[#008C95] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm sm:text-base text-[#30383D] font-medium pt-3 border-t border-[#DDE7E7]/80">
                The monthly subscription becomes applicable after the 14-day free trial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 5 & 6 — TRANSACTION FEES & SERVICE FEE     */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#FCFCFB]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* SECTION 5 — TRANSACTION FEES */}
            <div className="bg-[#FFFFFF] border border-[#D9E4E4] rounded-3xl p-8 sm:p-10 shadow-2xs space-y-6 flex flex-col justify-between hover:border-[#008C95]/40 transition-all">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold tracking-wider uppercase">
                    <Receipt className="w-3.5 h-3.5 text-[#008C95]" />
                    <span>TRANSACTION FEES</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#E5F5F5] text-[#008C95] flex items-center justify-center">
                    <Receipt className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#090D10] tracking-tight block">
                    K0.10
                  </span>
                  <span className="text-sm font-semibold text-[#505A60] block">
                    per recorded transaction
                  </span>
                </div>

                <div className="space-y-3 text-sm sm:text-base text-[#30383D] leading-relaxed font-normal">
                  <p>
                    TellerBud charges K0.10 for each transaction recorded through the platform.
                  </p>
                  <p>
                    This includes applicable everyday mobile-money transactions captured through the TellerBud system.
                  </p>
                  <p>
                    Transaction fees are calculated based on recorded transactions and are billed according to the Customer's agreed billing cycle.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 6 — PICKUP & DELIVERY SERVICE FEE */}
            <div className="bg-[#FFFFFF] border border-[#D9E4E4] rounded-3xl p-8 sm:p-10 shadow-2xs space-y-6 flex flex-col justify-between hover:border-[#008C95]/40 transition-all">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold tracking-wider uppercase">
                    <Truck className="w-3.5 h-3.5 text-[#008C95]" />
                    <span>PICKUP & DELIVERY</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#E5F5F5] text-[#008C95] flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#008C95] tracking-tight block">
                    20%
                  </span>
                  <span className="text-sm font-semibold text-[#505A60] block">
                    of the applicable service fee
                  </span>
                </div>

                <div className="space-y-3 text-sm sm:text-base text-[#30383D] leading-relaxed font-normal">
                  <p>
                    For successful Customer Pickup or Delivery transactions facilitated through TellerBud, TellerBud retains 20% of the applicable service fee.
                  </p>
                  <p>
                    The remaining amount is allocated according to the applicable TellerBud service and Agent earnings structure.
                  </p>
                  <p>
                    The applicable service fee may vary according to the transaction type, amount, distance, timing or other service conditions communicated by TellerBud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 7 — WHAT YOU GET                           */}
      {/* ================================================== */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#F4F9F9] border-t border-[#DDE7E7]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold tracking-wider uppercase">
              <BadgeCheck className="w-3.5 h-3.5 text-[#008C95]" />
              <span>WHAT YOU GET</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#090D10] tracking-tight">
              One platform. Three connected experiences.
            </h2>
            <p className="text-base sm:text-lg text-[#30383D] font-normal">
              A unified system providing value across Agents, Business Owners and Customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: For Agents */}
            <div className="bg-[#FFFFFF] border border-[#D9E4E4] rounded-3xl p-8 shadow-2xs space-y-6 flex flex-col justify-between hover:border-[#008C95]/40 transition-all">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-[#E5F5F5] text-[#008C95] flex items-center justify-center">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-[#090D10]">
                  For Agents
                </h3>
                <ul className="space-y-3 text-sm sm:text-[15px] text-[#30383D]">
                  {[
                    'Dedicated TellerBud device',
                    'Everyday transaction capture',
                    'Walk-in transaction recording',
                    'Customer Pickup & Delivery requests',
                    'Liquidity support',
                    'Real-time transaction recording',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#008C95] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: For Business Owners */}
            <div className="bg-[#FFFFFF] border border-[#D9E4E4] rounded-3xl p-8 shadow-2xs space-y-6 flex flex-col justify-between hover:border-[#008C95]/40 transition-all">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-[#E5F5F5] text-[#008C95] flex items-center justify-center">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-[#090D10]">
                  For Business Owners
                </h3>
                <ul className="space-y-3 text-sm sm:text-[15px] text-[#30383D]">
                  {[
                    'Real-time transaction visibility',
                    'Agent activity monitoring',
                    'Transaction and performance reporting',
                    'Liquidity visibility',
                    'Agent and operational management',
                    'Greater control over daily operations',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#008C95] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3: For Customers */}
            <div className="bg-[#FFFFFF] border border-[#D9E4E4] rounded-3xl p-8 shadow-2xs space-y-6 flex flex-col justify-between hover:border-[#008C95]/40 transition-all">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-[#E5F5F5] text-[#008C95] flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-[#090D10]">
                  For Customers
                </h3>
                <ul className="space-y-3 text-sm sm:text-[15px] text-[#30383D]">
                  {[
                    'Secure and convenient Cash Pickup & Delivery',
                    'Access to trusted Agents',
                    'Transaction tracking',
                    'Secure transaction support',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#008C95] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 8 — SERVICE TERMS                          */}
      {/* ================================================== */}
      <section className="w-full py-12 sm:py-16 bg-[#FCFCFB] border-t border-[#DDE7E7]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-4xl mx-auto rounded-2xl border border-[#D9E4E4] bg-[#FFFFFF] p-6 sm:p-8 shadow-2xs space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5F5] text-[#005F67] text-xs font-semibold tracking-wider uppercase">
              <FileText className="w-3.5 h-3.5 text-[#008C95]" />
              <span>SERVICE TERMS</span>
            </div>

            <div className="space-y-2.5 text-sm sm:text-[15px] text-[#30383D] leading-relaxed font-normal">
              <p>
                By activating and using TellerBud, the Customer confirms that they understand and accept the applicable pricing and service terms.
              </p>
              <p>
                Continued use of TellerBud after the 14-day free trial constitutes acceptance of the applicable fees and service terms.
              </p>
              <p>
                TellerBud reserves the right to revise applicable fees with reasonable notice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* FINAL CTA BAND                                     */}
      {/* ================================================== */}
      <section className="w-full bg-[#005F67] text-[#FCFCFB] py-16 sm:py-20 relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFCFB]/15 text-[#FCFCFB] text-xs font-semibold tracking-wider uppercase border border-[#FCFCFB]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#FCFCFB]" />
              <span>START WITH TELLERBUD</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FCFCFB] tracking-tight">
              A smarter way to manage your mobile-money business.
            </h2>

            {/* Pricing Summary Display */}
            <div className="py-2">
              <p className="text-sm sm:text-base font-semibold text-[#E5F5F5] tracking-wide inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                <span>K250 setup</span>
                <span>•</span>
                <span>14 days free</span>
                <span>•</span>
                <span>K100/month</span>
                <span>•</span>
                <span>K0.10 per transaction</span>
                <span>•</span>
                <span>Device provided at no upfront cost</span>
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#FCFCFB]/90 font-normal leading-relaxed max-w-2xl mx-auto">
              Experience a smarter way to manage your mobile-money business.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={onGetTellerBud}
                className="w-full sm:w-auto px-8 py-4 bg-[#FCFCFB] hover:bg-[#E5F5F5] text-[#005F67] font-bold text-base rounded-full transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-[0.98]"
              >
                <span>Get TellerBud</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-[#FCFCFB]/10 border border-[#FCFCFB]/40 text-[#FCFCFB] font-semibold text-base rounded-full transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white inline-flex items-center justify-center"
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
