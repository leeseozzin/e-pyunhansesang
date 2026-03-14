/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  CheckCircle2, 
  MapPin, 
  Train, 
  School, 
  Trees, 
  Building2, 
  Gem, 
  ArrowRight, 
  Star, 
  MessageSquare, 
  Phone,
  X,
  TrendingUp,
  Wallet,
  Lock,
  Calendar
} from 'lucide-react';

// --- Components ---

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const CTAButton = ({ text, onClick }: { text: string, onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className="cta-button w-full md:w-auto text-lg md:text-xl px-10 py-5"
  >
    {text}
  </button>
);

// --- Main App ---

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="min-h-screen selection:bg-orange-100 selection:text-orange-900">
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-black text-xl md:text-2xl tracking-tighter text-orange-600">
            이편한세상
          </div>
          <button 
            onClick={openModal}
            className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${scrolled ? 'bg-orange-600 text-white' : 'bg-white text-slate-900 shadow-lg'}`}
          >
            상담 신청
          </button>
        </div>
      </header>

      {/* SECTION 01: Hero (Hook) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/apartment/1920/1080" 
            alt="Apartment Exterior" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-orange-600 text-white text-xs md:text-sm font-bold rounded-full mb-6 tracking-widest uppercase">
              Ulsan Nam-gu Premium
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-6 drop-shadow-2xl">
              트램 뚫리기 전에<br />
              사는 사람이 <span className="text-orange-400 italic">결국 웃습니다.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-medium mb-10 max-w-2xl mx-auto drop-shadow-md">
              울산 남구 5억대 신축 — 지금 이 순간에도 마감되고 있습니다.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-white/80 text-sm md:text-base font-medium">
                <CheckCircle2 size={18} className="text-orange-400" /> 계약금 없이 가능
              </div>
              <div className="hidden md:block w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="flex items-center gap-2 text-white/80 text-sm md:text-base font-medium">
                <CheckCircle2 size={18} className="text-orange-400" /> 중도금 전액 무이자
              </div>
              <div className="hidden md:block w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="flex items-center gap-2 text-white/80 text-sm md:text-base font-medium">
                <CheckCircle2 size={18} className="text-orange-400" /> 계약금 5% 현금지원
              </div>
            </div>

            <CTAButton text="지금 조건 확인하기 — 1분이면 됩니다" onClick={openModal} />
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
        >
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 02: Deficit (Pain Point) */}
      <Section className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8">
              울산 남구에서 5억대 신축,<br />
              <span className="text-orange-600 underline decoration-4 underline-offset-8">마지막으로 본 게 언제입니까?</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                대부분의 울산 남구 신축은 이미 7~8억을 넘었습니다. 
                그 사이 기회를 놓친 사람들은 지금 이 말을 후회하고 있습니다.
              </p>
              <p className="italic font-serif text-2xl text-slate-400">"그때 살걸."</p>
              <p className="font-bold text-slate-900">
                이편한세상 번영로 리더스포레는<br />
                울산 남구에서 마지막으로 남은 5억대 신축입니다.
              </p>
              <p>
                25평형 — 희소 평형, 한정 공급. 완판 이후엔 다시 없습니다.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
              <h4 className="text-center font-bold text-slate-400 mb-6 uppercase tracking-widest text-xs">울산 남구 신축 시세 비교</h4>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-slate-500">타 단지 신축</span>
                    <span className="font-black text-slate-400">7~8억대</span>
                  </div>
                  <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-slate-300 h-full"
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-orange-600">리더스포레</span>
                    <span className="font-black text-orange-600">5~6억대</span>
                  </div>
                  <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '70%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="bg-orange-500 h-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-center text-sm text-slate-400 font-medium">
                *2024년 울산 남구 주요 신축 단지 실거래가 기준
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* SECTION 03: Emotion (Lifestyle) */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              아침마다 막히는 도로,<br />
              아이 손잡고 먼 학교까지 걷던 그 길,<br />
              <span className="text-slate-400">"우리 언제 좋은 데 살 수 있을까"</span> 했던 그 말.
            </h2>
            <p className="text-xl text-orange-600 font-bold">그 말에 드디어 답할 수 있게 됐습니다.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "☀️ 아침", 
              desc: "아이는 200m 앞 초등학교로 혼자 걸어갑니다.", 
              img: "https://picsum.photos/seed/school/400/500",
              icon: <School className="text-orange-500" />
            },
            { 
              title: "💼 출근", 
              desc: "삼산동 직장까지 차로 5분, 막힐 일 없습니다.", 
              img: "https://picsum.photos/seed/work/400/500",
              icon: <Building2 className="text-orange-500" />
            },
            { 
              title: "🌿 주말", 
              desc: "가족 모두 선암호수공원으로 산책을 나섭니다.", 
              img: "https://picsum.photos/seed/park/400/500",
              icon: <Trees className="text-orange-500" />
            },
            { 
              title: "🏠 저녁", 
              desc: "신축 아파트에서 하루를 마무리합니다.", 
              img: "https://picsum.photos/seed/home/400/500",
              icon: <Gem className="text-orange-500" />
            }
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <span className="font-bold text-lg">{item.title}</span>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <FadeIn>
            <p className="text-2xl md:text-3xl font-black text-slate-900 italic">
              "이게 집이 아닙니다. 당신이 오랫동안 꿈꿔온 하루입니다."
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* SECTION 04: Reason 1 (Comparison Table) */}
      <Section className="bg-slate-900 text-white">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              같은 남구, 같은 신축,<br />
              <span className="text-orange-500">왜 여기만 5억대입니까?</span>
            </h2>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 px-4 text-left text-slate-400 font-medium">구분</th>
                  <th className="py-6 px-4 text-center text-slate-400 font-medium">타 남구 신축</th>
                  <th className="py-6 px-4 text-center text-orange-500 font-black text-xl">리더스포레</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { label: "평균 분양가", other: "7~8억대", ours: "5~6억대", highlight: true },
                  { label: "초등학교 거리", other: "500m+", ours: "200m", highlight: true },
                  { label: "공원 접근성", other: "없음", ours: "도보 5분", highlight: true },
                  { label: "트램 호재", other: "미해당", ours: "2호선 예정", highlight: true },
                  { label: "계약금 혜택", other: "없음", ours: "5% 현금지원", highlight: true },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4 font-medium text-slate-300">{row.label}</td>
                    <td className="py-6 px-4 text-center text-slate-500">{row.other}</td>
                    <td className={`py-6 px-4 text-center font-black ${row.highlight ? 'text-white text-lg' : ''}`}>{row.ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl md:text-2xl font-bold text-orange-400 mb-8">
              지금 이 가격, 이 조건은 — 지금만 가능합니다.
            </p>
            <CTAButton text="잔여 세대 확인하기" onClick={openModal} />
          </div>
        </FadeIn>
      </Section>

      {/* SECTION 05: Reason 2 (Location Cards) */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              하나만 있어도 오르는 게 입지입니다.<br />
              <span className="text-orange-600">여기엔 다섯 개가 동시에 작동합니다.</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              icon: <Train size={32} />, 
              title: "트램 2호선 호재", 
              desc: "착공 확정 시 역세권 프리미엄 즉시 반영. 타 지역 트램 노선 사례 — 평균 18~23% 시세 상승" 
            },
            { 
              icon: <School size={32} />, 
              title: "초품아 — 초등학교 200m", 
              desc: "아이 혼자 걸어갈 수 있는 거리. 학세권은 실거주 수요를 끊임없이 만들어냅니다" 
            },
            { 
              icon: <Trees size={32} />, 
              title: "선암호수공원 도보 5분", 
              desc: "공세권 프리미엄 — 생활 쾌적성과 시세 방어력 동시 확보" 
            },
            { 
              icon: <Building2 size={32} />, 
              title: "직주근접 — 삼산·성남 5분", 
              desc: "울산 최대 상권 접근성. 실거주 만족도 + 임대 수요 동시 확보" 
            },
            { 
              icon: <Gem size={32} />, 
              title: "울산 남구 희소 25평형", 
              desc: "소형 신축 수요는 늘고, 공급은 줄고 있습니다. 희소할수록 가격은 지켜집니다" 
            }
          ].map((card, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-black mb-4">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* SECTION 06: Reason 3 (Timing) */}
      <Section className="bg-orange-600 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 -translate-y-1/4 translate-x-1/4">
          <Train size={600} />
        </div>
        <div className="relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-6xl font-black leading-tight mb-8">
              트램 2호선,<br />
              확정 전에 사는 사람과<br />
              확정 후에 사는 사람.<br />
              <span className="text-orange-200 underline decoration-white/30">그 차이는 수천만 원입니다.</span>
            </h2>
            <div className="max-w-2xl space-y-6 text-lg md:text-xl text-orange-50 font-medium">
              <p>부동산 호재는 <span className="text-white font-black underline">"소문날 때 사서, 확정될 때 팝니다."</span></p>
              <p>지금은 소문이 퍼지기 시작한 시점입니다. 확정 발표 이후엔 이미 가격에 반영되어 있습니다.</p>
              <p>지금 5억대에 들어오는 것과 트램 확정 후 7억대가 된 후 들어오는 것. 그 차이는 당신의 자산이 됩니다.</p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* SECTION 07: Fear Relief */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-8">
              솔직히 말하겠습니다.<br />
              집값이 떨어지는 곳이 있습니다.<br />
              <span className="text-slate-400 italic">입지가 없는 곳입니다.</span>
            </h2>
            <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100">
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                지금 부동산 시장, 불안한 거 압니다. 그래서 더 따져야 합니다. 
                떨어지는 집은 공통점이 있습니다. 교통이 불편하고, 학교가 멀고, 상권이 없고, 호재가 없습니다.
              </p>
              <h3 className="text-2xl font-black mb-6 text-slate-900">리더스포레는 반대입니다.</h3>
              <ul className="space-y-4">
                {[
                  "트램 2호선 — 교통 호재",
                  "초등학교 200m — 학세권 실수요",
                  "선암호수공원 — 쾌적성 프리미엄",
                  "삼산·성남 5분 — 상권 접근성",
                  "5억대 진입가 — 하방 압력 최소화"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg font-bold text-slate-700">
                    <CheckCircle2 className="text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-xl font-black text-orange-600">
                다섯 개의 방어막이 있는 집은 시장이 흔들려도 가장 늦게, 가장 적게 흔들립니다.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* SECTION 08: 3 Combo Effect */}
      <Section className="bg-slate-50">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              목돈 없다고 포기했던 분들,<br />
              <span className="text-orange-600">이 조건 보고 다시 생각하게 됩니다.</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              tag: "COMBO 1", 
              title: "계약금 5% 현금 지원", 
              desc: "계약하면 끝이 아니라, 오히려 받아갑니다. 계약금으로 낸 돈, 고스란히 돌아옵니다.",
              icon: <Wallet className="text-white" />
            },
            { 
              tag: "COMBO 2", 
              title: "계약금 없이 계약 가능", 
              desc: "0원으로 내 집 마련의 문을 엽니다. 전세 보증금도 건드리지 않아도 됩니다.",
              icon: <Lock className="text-white" />
            },
            { 
              tag: "COMBO 3", 
              title: "중도금 전액 무이자", 
              desc: "입주 전까지 이자 한 푼 없습니다. 지금 당장 목돈이 없어도 됩니다.",
              icon: <Calendar className="text-white" />
            }
          ].map((combo, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white p-10 rounded-[40px] shadow-xl border border-slate-100 relative overflow-hidden group h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-600 rounded-bl-[60px] flex items-center justify-center pl-4 pb-4">
                  {combo.icon}
                </div>
                <span className="text-orange-600 font-black text-sm tracking-widest mb-4 block uppercase">{combo.tag}</span>
                <h3 className="text-2xl font-black mb-6 leading-tight">{combo.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{combo.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <FadeIn>
            <p className="text-2xl font-black text-slate-900 mb-10">
              "돈이 없어서 못 산다는 말, 이 아파트 앞에서는 통하지 않습니다."
            </p>
            <CTAButton text="혜택 상세 확인하기" onClick={openModal} />
          </FadeIn>
        </div>
      </Section>

      {/* SECTION 09: Testimonials */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-6">먼저 결정한 사람들이 말합니다.</h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              text: "신혼인데 목돈이 없어서 포기하려 했는데, 계약금 지원받고 중도금 무이자로 하니까 전세 사는 것보다 오히려 부담이 적었어요. 이런 조건이 있는 줄 몰랐습니다.", 
              author: "30대 신혼부부 계약자" 
            },
            { 
              text: "입지 보고 반했어요. 트램에 호수공원에 초등학교까지. 솔직히 이 가격에 이 조건이면 안 살 이유를 못 찾겠더라고요.", 
              author: "40대 실수요자 계약자" 
            },
            { 
              text: "집값 떨어질까봐 오래 고민했어요. 근데 입지 분석해보니까 오히려 지금이 제일 싸게 살 수 있는 타이밍이더라고요. 결정하고 나서 후련했습니다.", 
              author: "30대 투자 겸 실거주 계약자" 
            }
          ].map((review, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="p-10 rounded-3xl bg-slate-50 relative">
                <div className="flex text-orange-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 leading-relaxed mb-8 font-medium italic">"{review.text}"</p>
                <div className="text-sm font-bold text-slate-400">— {review.author}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* SECTION 10: Double Binding */}
      <Section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-6xl font-black mb-12">
              지금 당신 앞에 선택지는<br />
              <span className="text-orange-500 italic">딱 두 개입니다.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-orange-500 font-black text-2xl mb-6">선택 A.</div>
                <p className="text-xl font-bold leading-relaxed">
                  지금 상담받고 5억대에 트램 호재 신축을 잡는다. <br />
                  <span className="text-emerald-400">입주 후 트램 확정 시 시세 차익을 누린다.</span>
                </p>
              </div>
              <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-slate-500 font-black text-2xl mb-6">선택 B.</div>
                <p className="text-xl font-bold leading-relaxed">
                  조금 더 고민하다가 트램 확정 후 7억대가 된 후 <br />
                  <span className="text-red-400">"그때 살걸" 하며 다시 찾아온다.</span>
                </p>
              </div>
            </div>
            
            <div className="mt-16">
              <h3 className="text-2xl md:text-4xl font-black mb-6">어떤 선택을 하시겠습니까?</h3>
              <p className="text-slate-400 text-lg md:text-xl font-medium">
                결정은 당신이 하지만, <span className="text-white font-black">시간은 기다려주지 않습니다.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* SECTION 11: FAQ (Hurdle Removal) */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              아직 망설여지시나요?<br />
              <span className="text-slate-400">망설이는 이유가 뭔지 압니다.</span>
            </h2>
          </FadeIn>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: "지금 돈이 없어서", a: "계약금 5% 현금지원 + 계약금 없이 계약 + 중도금 무이자 → 돈 문제는 이미 해결됐습니다" },
            { q: "집값 떨어질까봐", a: "트램·초품아·공세권·직주근접·상권 — 5중 입지 방어막 → 입지가 있는 집은 지켜집니다" },
            { q: "지금 전세 계약이 남아서", a: "입주 일정·잔금 구조 개별 상담 가능 → 상황에 맞는 플랜을 함께 만들어드립니다" },
            { q: "25평이 좀 작은 거 아냐?", a: "울산 남구 신축 25평 희소 평형 — 소형 수요는 늘고 공급은 줄어듭니다 → 작은 게 아니라 희소한 겁니다" },
            { q: "나중에 봐도 되지 않을까?", a: "25평 한정 공급, 완판 시 동일 조건 재공급 없음 → 나중은 없습니다. 지금이 마지막입니다." }
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.05}>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-red-500 font-black text-xl">❌</span>
                  <h4 className="text-xl font-black text-slate-400 italic">"{item.q}"</h4>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-emerald-500 font-black text-xl">✅</span>
                  <p className="text-lg font-bold text-slate-800 leading-relaxed">{item.a}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* SECTION 12: CTA */}
      <Section className="bg-slate-50 text-center">
        <FadeIn>
          <div className="inline-block px-6 py-2 bg-red-100 text-red-600 rounded-full font-black text-sm mb-8 animate-pulse">
            실시간 상담 문의 폭주 중
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            지금 이 순간에도<br />
            상담 문의가 들어오고 있습니다.
          </h2>
          <div className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 font-medium mb-12 space-y-4">
            <p>25평형은 한정 공급입니다. 조건 확인은 1분이면 됩니다.</p>
            <p>상담이 부담스러우시면 자료만 받아가셔도 됩니다.</p>
            <p className="text-orange-600 font-black text-2xl mt-8">
              오늘 신청자에 한해<br />
              <span className="text-slate-900">계약금 지원 상세 조건 + 층별·향별 잔여세대 우선 안내</span>
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <CTAButton text="지금 바로 무료 상담 신청하기" onClick={openModal} />
            <button onClick={openModal} className="text-slate-400 font-bold hover:text-slate-600 transition-colors">
              잔여세대 확인하기
            </button>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-slate-400 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Lock size={16} /> 개인정보는 상담 목적으로만 사용됩니다
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare size={16} /> 전화 없이 문자 상담도 가능합니다
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* SECTION 13: Casual Closing */}
      <Section className="bg-white text-center pb-32">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-slate-500 font-medium mb-8 leading-relaxed">
              아직 살지 말지 모르겠다고요? 완전히 괜찮습니다.<br />
              일단 조건만 확인해보세요. 보고 나서 결정해도 아무도 뭐라 안 합니다.
            </p>
            <p className="text-2xl font-black text-slate-900 mb-10">
              근데 솔직히 말할게요. <span className="text-orange-600">보면 삽니다. 😏</span><br />
              그만큼 조건이 말이 됩니다.
            </p>
            <button 
              onClick={openModal}
              className="group flex items-center gap-2 mx-auto text-orange-600 font-black text-2xl hover:gap-4 transition-all"
            >
              상담 신청하기 — 1분이면 됩니다 <ArrowRight />
            </button>
          </div>
        </FadeIn>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/30 text-sm font-medium text-center md:text-left">
            <p>© 2026 이편한세상 번영로 리더스포레 분양 홍보관</p>
            <p className="mt-2">본 페이지는 분양 정보 제공을 위한 목적으로 제작되었습니다. 실제 시공 및 분양 조건은 견본주택에서 확인하시기 바랍니다.</p>
          </div>
          <div className="flex gap-6">
            <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 transition-all">
              <Phone size={20} />
            </button>
            <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 transition-all">
              <MessageSquare size={20} />
            </button>
          </div>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
        <button 
          onClick={openModal}
          className="w-full bg-red-600 text-white font-black py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-2"
        >
          실시간 잔여세대 확인 <ChevronRight />
        </button>
      </div>

      {/* Modal / Form */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[40px] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="p-10">
                <h3 className="text-3xl font-black mb-2">무료 상담 신청</h3>
                <p className="text-slate-500 font-medium mb-8">상담 신청 후 10분 내로 전문 상담사가 연락드립니다.</p>
                
                <form 
                  className="space-y-6" 
                  action="/api/submit"
                  method="POST"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    const data = Object.fromEntries(formData.entries());
                    
                    try {
                      const response = await fetch(form.action, {
                        method: form.method,
                        body: JSON.stringify(data),
                        headers: {
                          'Content-Type': 'application/json',
                          'Accept': 'application/json'
                        }
                      });
                      
                      if (response.ok) {
                        alert('상담 신청이 완료되었습니다. 곧 연락드리겠습니다.');
                        form.reset();
                        closeModal();
                      } else {
                        alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
                      }
                    } catch (error) {
                      alert('네트워크 오류가 발생했습니다.');
                    }
                  }}
                >
                  <div>
                    <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest">성함</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="성함을 입력해주세요" 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest">연락처</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="010-0000-0000" 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="privacy" name="privacy_agreement" className="mt-1 w-5 h-5 accent-orange-600" defaultChecked required />
                    <label htmlFor="privacy" className="text-sm text-slate-500 font-medium leading-relaxed">
                      개인정보 수집 및 이용에 동의합니다. (상담 및 분양 정보 제공 목적)
                    </label>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-5 rounded-2xl shadow-lg transition-all transform active:scale-95"
                  >
                    지금 바로 신청하기
                  </button>
                </form>
                
                <div className="mt-8 flex items-center justify-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-1"><Lock size={12} /> SSL 보안</div>
                  <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                  <div className="flex items-center gap-1"><CheckCircle2 size={12} /> 100% 무료 상담</div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
