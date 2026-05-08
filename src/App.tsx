import React, { useState, useEffect } from 'react';
import { sections, SECTION_IDS } from './data/content';
import { TableOfContents } from './components/TableOfContents';
import { Compass, PenTool, Zap, Settings, Briefcase, Map, Target, CheckCircle, Scale, ChevronRight, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Find the one closest to the top
          visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { rootMargin: '-10% 0px -80% 0px' }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-100 font-sans text-gray-900">
      {/* Hero Section */}
      <header className="bg-brand-900 text-white relative overflow-hidden py-24 sm:py-32 flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 opacity-20 hidden sm:block"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="mb-6 font-sans text-xs uppercase tracking-[0.3em] opacity-60">
            Ultimate Buyer's Guide
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-[88px] font-black tracking-[-2px] text-white mb-8 font-display leading-[0.85] flex flex-col sm:flex-row items-center gap-4 sm:gap-2">
            <span>Schwinn Riverside</span>
            <span className="inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 bg-[#1a1a1a] border-[4px] sm:border-[6px] border-brand-100 rounded-full text-white mx-0 sm:mx-2 shadow-[0_10px_30px_rgba(0,0,0,0.2)] text-xl sm:text-3xl italic font-display font-black leading-none shrink-0 relative top-0 sm:-top-2">vs</span>
            <span>Schwinn Loop</span>
          </h1>
          <div className="w-[60px] h-[4px] bg-brand-500 mb-8"></div>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl text-center leading-[1.4] italic font-display">
            &ldquo;A highly detailed, beginner-friendly comparison between the classic comfort cruiser and the compact urban transformer. Find your perfect ride.&rdquo;
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-start gap-12 relative">
        <TableOfContents activeSection={activeSection} sections={sections} onNavigate={scrollToSection} />
        
        <main className="flex-1 max-w-3xl pb-32 space-y-24">
          
          {/* 1. Overview */}
          <Section id={SECTION_IDS.OVERVIEW} title="1. Overview & Purpose" icon={Compass}>
            <div className="text-[17px] leading-[1.8] mb-10 text-gray-800">
              Choosing between the <strong className="font-bold">Schwinn Riverside</strong> and the <strong className="font-bold">Schwinn Loop</strong> is like deciding between a plush Cadillac and a versatile Swiss Army knife. They share the same legendary badge, but their core purposes are wildly different.
            </div>
            <div className="grid sm:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-8 rounded-[4px] shadow-[20px_20px_60px_rgba(0,0,0,0.05)] border border-black/5 hover:shadow-[20px_20px_60px_rgba(0,0,0,0.1)] transition-shadow">
                <span className="text-brand-500 text-xs font-bold mb-4 block uppercase tracking-[0.3em] opacity-60">The Classic Cruiser</span>
                <h4 className="font-display font-black text-3xl text-gray-900 mb-6 leading-none">Riverside</h4>
                <div className="w-12 h-1 bg-brand-500 mb-6"></div>
                <p className="font-sans text-[15px] leading-[1.8] text-gray-600">
                  Designed purely for absolute comfort and relaxed, scenic rides. It's a bike meant for lazy Sunday rides down the beach path, park trails, or flat suburban neighborhoods.
                </p>
              </div>
              <div className="bg-gray-900 text-white p-8 rounded-[4px] shadow-[20px_20px_60px_rgba(0,0,0,0.15)] border border-white/10 hover:shadow-[20px_20px_60px_rgba(0,0,0,0.25)] transition-shadow">
                <span className="text-blue-accent text-xs font-bold mb-4 block uppercase tracking-[0.3em] opacity-60">The Urban Transformer</span>
                <h4 className="font-display font-black text-3xl text-white mb-6 leading-none">Schwinn Loop</h4>
                <div className="w-12 h-1 bg-blue-accent mb-6"></div>
                <p className="font-sans text-[15px] leading-[1.8] text-gray-300">
                  Built for agility, utility, and tight spaces. The Loop is a highly practical folding commuter bike engineered for people who need to easily store their bike in car trunks, closets, or trains.
                </p>
              </div>
            </div>
          </Section>

          {/* 2. Frame & Design */}
          <Section id={SECTION_IDS.FRAME} title="2. Frame & Design" icon={PenTool}>
            <p className="mb-6 text-[17px] leading-[1.8] text-gray-800">
              The frame design is where these two bikes take completely divergent paths. Neither is built for extreme performance, but both focus heavily on rider convenience in different ways.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start bg-white p-6 rounded-[4px] shadow-[20px_20px_60px_rgba(0,0,0,0.05)] border border-black/5">
                <div className="text-brand-500 shrink-0 mt-1">✦</div>
                <div>
                  <strong className="text-gray-900 font-bold block mb-1">Materials: Steel vs. Alloy-Steel mix</strong>
                  <span className="text-gray-600 font-sans text-[15px] leading-[1.8]">The Riverside utilizes a classic, slightly heavy steel frame that naturally dampens road chatter. The Loop also uses a sturdy steel/alloy mix designed to withstand the stress of a folding hinge, making it heavier than typical aluminum folders (weighing in at around 33 lbs), but extremely durable.</span>
                </div>
              </li>
              <li className="flex gap-4 items-start bg-white p-6 rounded-[4px] shadow-[20px_20px_60px_rgba(0,0,0,0.05)] border border-black/5">
                <div className="text-brand-500 shrink-0 mt-1">✦</div>
                <div>
                  <strong className="text-gray-900 font-bold block mb-1">Geometry & Posture</strong>
                  <span className="text-gray-600 font-sans text-[15px] leading-[1.8]">The Riverside offers a sweeping, step-through frame (or a traditional top-tube cruiser frame) with swept-back handlebars that force an upright, back-friendly posture. The Loop has a compact, ultra-low standover height geometry that keeps you upright but slightly more forward and nimble than a true beach cruiser.</span>
                </div>
              </li>
              <li className="flex gap-4 items-start bg-white p-6 rounded-[4px] shadow-[20px_20px_60px_rgba(0,0,0,0.05)] border border-black/5">
                <div className="text-brand-500 shrink-0 mt-1">✦</div>
                <div>
                  <strong className="text-gray-900 font-bold block mb-1">Portability</strong>
                  <span className="text-gray-600 font-sans text-[15px] leading-[1.8]">The Riverside is a fixed, full-sized bicycle. You'll need a garage or dedicated shed space, and a proper bike rack to transport it. The Loop features a reinforced mid-frame hinge that allows the bike to fold in half—collapsing small enough to fit in a sedan trunk or an apartment closet.</span>
                </div>
              </li>
            </ul>
          </Section>

          {/* 3. Ride Experience */}
          <Section id={SECTION_IDS.EXPERIENCE} title="3. Ride Experience" icon={Zap}>
            <p className="mb-8 text-[17px] leading-[1.8] text-gray-800">Let's be clear: neither of these bikes is winning the Tour de France. However, their riding dynamics feel entirely different.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[4px] border border-brand-500/30 shadow-[20px_20px_60px_rgba(0,0,0,0.05)] border-t-[4px] border-t-brand-500">
                <h4 className="font-display font-black text-2xl mb-4 text-gray-900">Riverside: Floating on Pavement</h4>
                <p className="text-gray-600 text-[15px] leading-[1.8] font-sans">With its ultra-wide padded saddle and built-in rear shock absorption (via seat post springs or wide tires), the Riverside absorbs bumps effortlessly. It handles sluggishly on tight corners but tracks beautifully on long, straight paths. It's meant for slow, leisurely cadences.</p>
              </div>

              <div className="bg-white p-8 rounded-[4px] border border-blue-accent/30 shadow-[20px_20px_60px_rgba(0,0,0,0.05)] border-t-[4px] border-t-blue-accent">
                <h4 className="font-display font-black text-2xl mb-4 text-gray-900">Loop: Zippy & Quick</h4>
                <p className="text-gray-600 text-[15px] leading-[1.8] font-sans">Despite having small 20-inch wheels, the Loop is surprisingly stable. It feels 'zippy'—accelerating quickly from a dead stop (great for traffic lights). It takes tighter turns easily, but lacks the plush, shock-absorbing qualities of the Riverside. Potholes will be felt much more sharply here.</p>
              </div>
            </div>
          </Section>

          {/* 4. Components */}
          <Section id={SECTION_IDS.COMPONENTS} title="4. Components & Performance" icon={Settings}>
            <p className="text-[17px] leading-[1.8] text-gray-800 mb-8">While both carry the Schwinn badge, their mechanical foundations are tailored to their domains.</p>
            
            <div className="overflow-hidden rounded-[4px] shadow-[20px_20px_60px_rgba(0,0,0,0.05)] border border-black/5 bg-white">
              <table className="w-full text-left text-[15px]">
                <thead className="bg-[#f4f1ea] border-b border-black/5 uppercase text-[10px] tracking-widest text-[#888] font-bold">
                  <tr>
                    <th className="px-8 py-5">Feature</th>
                    <th className="px-8 py-5 border-l border-black/5">Riverside</th>
                    <th className="px-8 py-5 border-l border-black/5">Loop</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-[#4a4a4a]">
                  <tr>
                    <td className="px-8 py-6 font-bold text-gray-900">Gearing</td>
                    <td className="px-8 py-6 border-l border-black/5 leading-[1.8]">7-Speed (Twist Shifter). Enough to conquer mild hills, but struggles on steep climbs.</td>
                    <td className="px-8 py-6 border-l border-black/5 leading-[1.8]">7-Speed. Small wheels make the gearing feel sprightly and surprisingly capable on slight inclines.</td>
                  </tr>
                  <tr>
                    <td className="px-8 py-6 font-bold text-gray-900">Wheels & Tires</td>
                    <td className="px-8 py-6 border-l border-black/5 leading-[1.8]">~26" Wheels. Wide, smooth cruiser tires designed to roll over cracks smoothly.</td>
                    <td className="px-8 py-6 border-l border-black/5 leading-[1.8]">20" Wheels. Narrower city tires designed for fast spin-up and low rolling resistance.</td>
                  </tr>
                  <tr>
                    <td className="px-8 py-6 font-bold text-gray-900">Braking</td>
                    <td className="px-8 py-6 border-l border-black/5 leading-[1.8]">Linear pull (V-brakes). Reliable stopping power for casual speeds.</td>
                    <td className="px-8 py-6 border-l border-black/5 leading-[1.8]">Linear pull (V-brakes) front and rear. Excellent stopping power given the smaller wheels.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          {/* 5. Practical Features */}
          <Section id={SECTION_IDS.PRACTICAL} title="5. Practical Features" icon={Briefcase}>
            <p className="mb-8 text-[17px] leading-[1.8] text-gray-800">Utility is where the Loop truly flexes its muscles against the purely leisure-focused Riverside.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[4px] shadow-[20px_20px_60px_rgba(0,0,0,0.05)] border border-black/5">
                <h4 className="font-bold text-[14px] uppercase tracking-widest text-[#1a1a1a] mb-6 border-b border-black/5 pb-4">Accessories Included</h4>
                <ul className="space-y-4 font-sans text-[15px] leading-[1.8] text-gray-600">
                  <li className="flex items-start gap-4"><div className="text-blue-accent shrink-0 mt-0.5">✦</div> <div><strong className="text-gray-900">Loop:</strong> Included rear rack (perfect for panniers), full front/rear fenders, and a nylon carrying bag.</div></li>
                  <li className="flex items-start gap-4"><div className="text-brand-500 shrink-0 mt-0.5">✦</div> <div><strong className="text-gray-900">Riverside:</strong> Often features a chain guard and sometimes fenders, but rarely includes heavy utility racks.</div></li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-[4px] shadow-[20px_20px_60px_rgba(0,0,0,0.05)] border border-black/5">
                <h4 className="font-bold text-[14px] uppercase tracking-widest text-[#1a1a1a] mb-6 border-b border-black/5 pb-4">Transport & Storage</h4>
                <ul className="space-y-4 font-sans text-[15px] leading-[1.8] text-gray-600">
                  <li className="flex items-start gap-4"><div className="text-blue-accent shrink-0 mt-0.5">✦</div> <div><strong className="text-gray-900">Loop:</strong> Unfolds in 15 seconds. Incredible for multi-modal commutes (e.g., riding to the train, folding it up, riding to the office).</div></li>
                  <li className="flex items-start gap-4"><div className="text-brand-500 shrink-0 mt-0.5">✦</div> <div><strong className="text-gray-900">Riverside:</strong> Rigid frame requires a dedicated hitch or trunk rack for a car. Difficult to carry up apartment stairs.</div></li>
                </ul>
              </div>
            </div>
          </Section>

          {/* 6. Real World Use */}
          <Section id={SECTION_IDS.USECASES} title="6. Real-World Use Cases" icon={Map}>
            <p className="mb-8 text-[17px] leading-[1.8] text-gray-800">How do these bikes actually fare out in the wild?</p>
            
            <div className="space-y-4">
               <UseCaseRow title="City Commuting" riverside="Poor. Heavy, bulky, and hard to lock up in tight racks." loop="Excellent. Nimble in traffic, easy to carry inside the office." />
               <UseCaseRow title="Leisure Cruising (Flat)" riverside="Perfect. Unmatched comfort and aesthetic appeal." loop="Good. Less plush, but perfectly fine for a sunny spin." />
               <UseCaseRow title="Long Distance (> 10 miles)" riverside="Fair. Comfort is high, but the heavy frame and upright position cause fatigue." loop="Fair. 20-inch wheels require more pedaling effort to maintain high speeds over long distances." />
               <UseCaseRow title="RV / Van Life Travel" riverside="Poor. Takes up massive amounts of storage or requires exterior mounts." loop="Perfect. Toss two of them in the RV storage bay with ease." />
               <UseCaseRow title="Small Apartment Living" riverside="Poor. You'll be playing Tetris trying to fit it in a hallway." loop="Perfect. Fits easily in a closet or under a large desk." />
            </div>
          </Section>

          {/* 7. Upgrades */}
          <Section id={SECTION_IDS.UPGRADES} title="7. Recommended Upgrades" icon={Wrench}>
            <p className="mb-8 text-[17px] leading-[1.8] text-gray-800">Even the best entry-level bikes can benefit from a few targeted improvements. Here is how to take both rides to the next level.</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[4px] shadow-[20px_20px_60px_rgba(0,0,0,0.05)] border border-black/5 hover:shadow-[20px_20px_60px_rgba(0,0,0,0.1)] transition-shadow">
                <span className="text-brand-500 text-xs font-bold mb-4 block uppercase tracking-[0.3em] opacity-60">Comfort Customization</span>
                <h4 className="font-display font-black text-2xl text-gray-900 mb-6 border-b-2 inline-block border-brand-500 pb-1">Riverside Upgrades</h4>
                <ul className="space-y-4 font-sans text-[15px] leading-[1.8] text-gray-600">
                  <li className="flex items-start"><span className="text-brand-500 mr-3">✦</span> <strong>Cloud-Like Saddle:</strong> The stock seat is okay, but an affordable, heavy-duty gel cover or a basic $20 aftermarket cruiser saddle transforms the ride for longer distances without breaking the bank.</li>
                  <li className="flex items-start"><span className="text-brand-500 mr-3">✦</span> <strong>Suspension Seat Post (UI/UX Improvement):</strong> Replace the stock seat post with an inexpensive alloy suspension seat post (usually under $20) to enhance rider comfort on uneven surfaces.</li>
                  <li className="flex items-start"><span className="text-brand-500 mr-3">✦</span> <strong>Front Basket (Core Feature):</strong> Suggest a cheap wire basket or repurposed crate to complement the cruiser aesthetic and add utility.</li>
                  <li className="flex items-start"><span className="text-brand-500 mr-3">✦</span> <strong>Cargo Trailer Hitch (Core Feature):</strong> Suggest a budget-friendly universal hitch adapter to significantly increase carrying capacity, allowing the user to tow used or inexpensive cargo trailers for leisurely shopping trips.</li>
                  <li className="flex items-start"><span className="text-brand-500 mr-3">✦</span> <strong>Puncture-Resistant Tubes:</strong> Because it's heavy, fixing a flat on the Riverside is a chore. Cheap Kevlar tire liners or a $10 bottle of slime tire sealant are highly recommended budget fixes to prevent flats.</li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white p-8 rounded-[4px] shadow-[20px_20px_60px_rgba(0,0,0,0.15)] border border-white/10 hover:shadow-[20px_20px_60px_rgba(0,0,0,0.25)] transition-shadow">
                <span className="text-blue-accent text-xs font-bold mb-4 block uppercase tracking-[0.3em] opacity-60">Utility Enhancement</span>
                <h4 className="font-display font-black text-2xl text-white mb-6 border-b-2 inline-block border-blue-accent pb-1">Loop Upgrades</h4>
                <ul className="space-y-4 font-sans text-[15px] leading-[1.8] text-gray-300">
                  <li className="flex items-start"><span className="text-blue-accent mr-3">✦</span> <strong>Folding Pedals (UI/UX Improvement):</strong> Swap the stock pedals for $15 generic alloy folding pedals to reduce the folded bike's footprint for easier storage.</li>
                  <li className="flex items-start"><span className="text-blue-accent mr-3">✦</span> <strong>LED Lighting Rig:</strong> Since the Loop is often used for commuting, a cheap $15 USB-rechargeable LED light set from any online retailer is a mandatory safety upgrade.</li>
                  <li className="flex items-start"><span className="text-blue-accent mr-3">✦</span> <strong>Mini Pannier Bags:</strong> Instead of expensive brands, the included rear rack is begging for a $20 set of generic waterproof mini-panniers (or a strapped-on cheap backpack) to keep the weight off yours.</li>
                  <li className="flex items-start">
                    <span className="text-blue-accent mr-3">✦</span> 
                    <div>
                      <strong>Budget-Friendly Tires (Quality-of-Life Improvement):</strong> Suggest street-tread BMX tires paired with thick tube liners as an affordable reliability boost for commuting, costing under $15.
                      <img src="https://placehold.co/600x300/111827/4f46e5?text=BMX+Tires+&+Liners" alt="BMX Tires and Tube Liners" className="mt-4 rounded-[4px] w-full max-w-sm object-cover border border-white/10" />
                    </div>
                  </li>
                  <li className="flex items-start"><span className="text-blue-accent mr-3">✦</span> <strong>Budget-Friendly Fenders:</strong> Add inexpensive, generic 20-inch snap-on plastic fenders (usually under $15) to keep rain and road spray off your clothes without breaking the bank.</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* 8. Pros & Cons */}
          <Section id={SECTION_IDS.PROS_CONS} title="8. Pros and Cons" icon={Scale}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Riverside */}
              <div className="bg-white rounded-[4px] shadow-[20px_20px_60px_rgba(0,0,0,0.05)] border border-black/5 overflow-hidden">
                <div className="bg-[#f4f1ea] border-b border-black/5 px-8 py-6">
                  <h4 className="font-display font-black text-2xl text-gray-900 border-b-2 inline-block border-brand-500 pb-1">Schwinn Riverside</h4>
                </div>
                <div className="p-8">
                  <h5 className="text-[10px] tracking-[0.2em] text-[#888] uppercase font-bold mb-4">Strengths</h5>
                  <ul className="space-y-3 mb-8 font-sans text-[14px] leading-[1.8] text-gray-600">
                    <li className="flex gap-4 items-start"><div className="text-brand-500 mt-0.5">✦</div> Incredibly comfortable saddle and posture.</li>
                    <li className="flex gap-4 items-start"><div className="text-brand-500 mt-0.5">✦</div> Classic, visually appealing retro styling.</li>
                    <li className="flex gap-4 items-start"><div className="text-brand-500 mt-0.5">✦</div> Smooth ride on paved paths.</li>
                  </ul>
                  <h5 className="text-[10px] tracking-[0.2em] text-red-400 uppercase font-bold mb-4">Weaknesses</h5>
                  <ul className="space-y-3 font-sans text-[14px] leading-[1.8] text-gray-600">
                    <li className="flex gap-4 items-start"><span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] mt-2.5 shrink-0 opacity-40"></span> Heavy and difficult to carry upstairs.</li>
                    <li className="flex gap-4 items-start"><span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] mt-2.5 shrink-0 opacity-40"></span> Sluggish handling; not for speed.</li>
                  </ul>
                </div>
              </div>

               {/* Loop */}
               <div className="bg-gray-900 text-white rounded-[4px] shadow-[20px_20px_60px_rgba(0,0,0,0.15)] border border-white/10 overflow-hidden">
                <div className="bg-black/20 border-b border-white/10 px-8 py-6">
                  <h4 className="font-display font-black text-2xl text-white border-b-2 inline-block border-blue-accent pb-1">Schwinn Loop</h4>
                </div>
                <div className="p-8">
                  <h5 className="text-[10px] tracking-[0.2em] text-[#888] uppercase font-bold mb-4">Strengths</h5>
                  <ul className="space-y-3 mb-8 font-sans text-[14px] leading-[1.8] text-gray-300">
                    <li className="flex gap-4 items-start"><div className="text-blue-accent mt-0.5">✦</div> Unbeatable portability and storage.</li>
                    <li className="flex gap-4 items-start"><div className="text-blue-accent mt-0.5">✦</div> Great utility out-of-the-box (rack + fenders).</li>
                    <li className="flex gap-4 items-start"><div className="text-blue-accent mt-0.5">✦</div> Nimble acceleration.</li>
                  </ul>
                  <h5 className="text-[10px] tracking-[0.2em] text-red-400 uppercase font-bold mb-4">Weaknesses</h5>
                  <ul className="space-y-3 font-sans text-[14px] leading-[1.8] text-gray-300">
                    <li className="flex gap-4 items-start"><span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0 opacity-40"></span> Small wheels feel every bump in the road.</li>
                    <li className="flex gap-4 items-start"><span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0 opacity-40"></span> Still quite heavy (~33 lbs) for a folding bike.</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* 9. Decision Guide */}
          <Section id={SECTION_IDS.DECISION} title="9. Decision Guide" icon={Target}>
            <div className="bg-gray-900 text-white rounded-[4px] p-8 sm:p-12 relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
               <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-accent/5 pointer-events-none"></div>
               
               <div className="grid sm:grid-cols-2 gap-10 relative z-10">
                 <div className="bg-white p-8 rounded-[4px] shadow-[20px_20px_60px_rgba(0,0,0,0.05)] border border-black/5 text-gray-900">
                    <h4 className="text-[14px] font-bold uppercase mb-6 tracking-widest">Choose Riverside if...</h4>
                    <ul className="space-y-4 font-sans text-[15px] leading-[1.8]">
                      <li className="flex items-start"><span className="text-brand-500 mr-3">✦</span> You prioritize posture and spine health.</li>
                      <li className="flex items-start"><span className="text-brand-500 mr-3">✦</span> Your rides are casual 5-10 mile loops.</li>
                      <li className="flex items-start"><span className="text-brand-500 mr-3">✦</span> You have a garage or ample storage space.</li>
                      <li className="flex items-start"><span className="text-brand-500 mr-3">✦</span> You want that classic cruiser aesthetic.</li>
                    </ul>
                 </div>
                 
                 <div className="bg-white/5 border border-white/10 p-8 rounded-[4px]">
                    <h4 className="text-blue-accent text-[14px] font-bold uppercase mb-6 tracking-widest">Choose Loop if...</h4>
                    <ul className="space-y-4 font-sans text-[15px] leading-[1.8] text-gray-300">
                      <li className="flex items-start"><span className="text-blue-accent mr-3">✦</span> You live in a 4th-floor walk-up apartment.</li>
                      <li className="flex items-start"><span className="text-blue-accent mr-3">✦</span> You commute via train or bus daily.</li>
                      <li className="flex items-start"><span className="text-blue-accent mr-3">✦</span> You travel in an RV or small car.</li>
                      <li className="flex items-start"><span className="text-blue-accent mr-3">✦</span> You need a nimble, quick-turning city ride.</li>
                    </ul>
                 </div>
               </div>
            </div>
          </Section>

          {/* 10. Final Verdict */}
          <Section id={SECTION_IDS.VERDICT} title="10. Final Verdict" icon={CheckCircle}>
            <div className="bg-white p-10 rounded-[4px] border border-black/5 shadow-[20px_20px_60px_rgba(0,0,0,0.05)]">
               <p className="text-[17px] leading-[1.8] text-gray-800 font-sans mb-6">
                 There is no universal "better" bike here; they solve completely different problems. 
                 If you want the classic, relaxed American biking experience to lazily pedal to a coffee shop on a Sunday morning, the <strong className="text-brand-600 font-bold">Schwinn Riverside</strong> is a phenomenal value that will treat your back and posture perfectly.
               </p>
               <p className="text-[17px] leading-[1.8] text-gray-800 font-sans">
                 However, if bicycle ownership currently sounds "too difficult" because you don't have a garage or a truck, the <strong className="text-blue-600 font-bold">Schwinn Loop</strong> removes every barrier to entry. It adapts to your life rather than forcing you to adapt to it, making it the supreme choice for modern urban living and multi-modal commuters.
               </p>
            </div>
          </Section>

          {/* 11. Table */}
          <Section id={SECTION_IDS.TABLE} title="11. Quick Comparison Table" icon={Settings}>
            <div className="bg-white rounded-[4px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-black/5 border-b-[4px] border-b-brand-500 overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center">
                <div className="p-8">
                  <p className="text-[10px] uppercase tracking-[0.1em] text-gray-400 mb-2 font-bold">Wheel Size</p>
                  <p className="font-bold text-xl text-gray-900">26" <span className="font-light text-gray-300 mx-2">|</span> 20"</p>
                </div>
                <div className="p-8">
                  <p className="text-[10px] uppercase tracking-[0.1em] text-gray-400 mb-2 font-bold">Portability</p>
                  <p className="font-bold text-xl text-gray-900">Low <span className="font-light text-gray-300 mx-2">|</span> High</p>
                </div>
                <div className="p-8">
                  <p className="text-[10px] uppercase tracking-[0.1em] text-gray-400 mb-2 font-bold">Weight</p>
                  <p className="font-bold text-xl text-gray-900">35lb <span className="font-light text-gray-300 mx-2">|</span> 33lb</p>
                </div>
                <div className="p-8">
                  <p className="text-[10px] uppercase tracking-[0.1em] text-gray-400 mb-2 font-bold">Drivetrain</p>
                  <p className="font-bold text-xl text-gray-900">7-Speed Both</p>
                </div>
              </div>
            </div>
          </Section>

        </main>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Helper Components
// -------------------------------------------------------------

function Section({ id, title, icon: Icon, children }: { id: string; title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <motion.section 
      id={id} 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-32 mb-16"
    >
      <div className="flex items-center gap-4 mb-10 pb-4 border-b border-gray-900/10">
        <div className="text-brand-500">
          <Icon size={28} strokeWidth={1.5} />
        </div>
        <h2 className="font-display font-black text-3xl sm:text-4xl tracking-[-1px] text-gray-900">{title}</h2>
      </div>
      <div>{children}</div>
    </motion.section>
  );
}

function UseCaseRow({ title, riverside, loop }: { title: string, riverside: string, loop: string }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-8 rounded-[4px] border border-black/5 bg-white shadow-[20px_20px_60px_rgba(0,0,0,0.05)] text-[15px] leading-[1.8]">
      <div className="font-bold text-gray-900 border-b md:border-b-0 md:border-r border-black/5 pb-4 md:pb-0 md:pr-6 flex items-center text-lg font-display tracking-tight">{title}</div>
      <div className="text-gray-600 border-l-[3px] border-l-brand-500 pl-6"><span className="text-[10px] uppercase tracking-widest text-[#888] font-bold block mb-2">Riverside</span> {riverside}</div>
      <div className="text-gray-600 border-l-[3px] border-l-blue-accent pl-6"><span className="text-[10px] uppercase tracking-widest text-[#888] font-bold block mb-2">Loop</span> {loop}</div>
    </div>
  );
}
