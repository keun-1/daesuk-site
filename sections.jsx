/* ================================================================
   Sections — SIMPLIFIED: Hero · Equipment · Company · Contact · Footer
   ================================================================ */

const { useState: sUseState, useEffect: sUseEffect, useRef: sUseRef, useMemo: sUseMemo } = React;

function Reveal({ children, className = "", delay = 0 }) {
  const ref = sUseRef(null);
  sUseEffect(() => {
    const el = ref.current;if (!el) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {if (e.isIntersecting) {setTimeout(() => el.classList.add("is-visible"), delay);io.unobserve(el);}});
    }, { threshold: 0.1 });
    io.observe(el);return () => io.disconnect();
  }, [delay]);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

/* -------- MASTHEAD (dark industrial corporate) -------- */
function Masthead({ active, onJump }) {
  const [open, setOpen] = sUseState(false);
  const [scrolled, setScrolled] = sUseState(false);
  sUseEffect(() => {
    const onS = () => setScrolled(window.scrollY > 10);
    onS();
    window.addEventListener("scroll", onS, { passive: true });
    return () => window.removeEventListener("scroll", onS);
  }, []);
  const nav = [
  { id: "equipment", ko: "장비", en: "Equipment" },
  { id: "company", ko: "회사", en: "Company" },
  { id: "contact", ko: "문의", en: "Contact" }];

  return (
    <header className={`sticky top-0 z-40 bg-paper transition-shadow ${scrolled ? "header-shadow" : ""}`}>
      {/* Top utility bar — dark navy */}
      <div className="bg-ink text-white/80">
        <div className="max-w-[1360px] mx-auto px-6 h-9 flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <span className="font-medium tracking-wider">EST. {COMPANY.since}</span>
            <span className="hidden md:inline text-white/30">·</span>
            <span className="hidden md:inline tracking-wider uppercase">Seongju, Gyeongsangbuk-do</span>
          </div>
          <div className="hidden md:flex items-center gap-5">
            <a href={`tel:${COMPANY.tel.replace(/-/g, "")}`} className="hover:text-accent transition-colors">
              <span className="text-white/60 mr-1">TEL</span>
              <span className="font-mono">{COMPANY.tel}</span>
            </a>
            <span className="text-white/30">·</span>
            <a href={`mailto:${COMPANY.email}`} className="hover:text-accent transition-colors font-mono">{COMPANY.email}</a>
          </div>
        </div>
      </div>

      <div className="bg-paper border-b hairline">
        <div className="max-w-[1360px] mx-auto px-6 py-4 md:py-5 flex items-center justify-between gap-6">
          <button onClick={() => onJump("top")} className="text-left flex items-center gap-4">
            <img src="logo-transparent.png" alt="대석산업(주)" className="h-10 md:h-12 w-auto shrink-0" />
            <div className="hidden sm:block border-l hairline pl-4">
              <div className="text-[10px] font-semibold tracking-[0.25em] text-accent mb-1">CRUSHING · SCREENING · PLANT</div>
              <div className="font-display font-semibold text-[11px] tracking-[0.15em] text-ink/60">
                DAE SUK INDUSTRIAL CO., LTD.
              </div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-10">
            {nav.map((l) => {
              const act = active === l.id;
              return (
                <button key={l.id} onClick={() => onJump(l.id)}
                className="group relative py-2 text-[15px] font-semibold">
                  <span className={`transition-colors ${act ? "text-ink" : "text-ink/70 group-hover:text-ink"}`}>{l.ko}</span>
                  <span className={`ml-1.5 font-display text-[10px] font-semibold tracking-[0.15em] transition-colors ${act ? "text-accent" : "text-mute2 group-hover:text-accent"}`}>{l.en.toUpperCase()}</span>
                  <span className={`absolute left-0 right-0 -bottom-0.5 h-0.5 bg-accent transition-transform origin-left ${act ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </button>);

            })}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a href={`tel:${COMPANY.tel.replace(/-/g, "")}`} className="h-11 px-4 bg-ink text-white hover:bg-ink2 transition-colors inline-flex items-center gap-2 rounded-sm">
              <Icon name="Phone" className="w-4 h-4" />
              <span className="font-mono text-[13px] font-semibold">{COMPANY.tel}</span>
            </a>
            <button onClick={() => onJump("contact")} className="h-11 px-5 bg-accent text-white hover:brightness-110 shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 rounded-sm">
              <span className="text-sm font-bold">견적 문의</span>
              <Icon name="ArrowRight" className="w-4 h-4" />
            </button>
          </div>

          <button className="lg:hidden w-10 h-10 flex items-center justify-center -mr-2" onClick={() => setOpen(!open)} aria-label="메뉴">
            <Icon name={open ? "X" : "Menu"} className="w-6 h-6 text-ink" />
          </button>
        </div>

        {open &&
        <div className="lg:hidden border-t hairline bg-paper">
            <div className="max-w-[1360px] mx-auto px-6 py-3 flex flex-col">
              {nav.map((l) =>
            <button key={l.id} onClick={() => {onJump(l.id);setOpen(false);}} className="text-left py-3 border-b hairline flex items-baseline gap-3">
                  <span className="text-ink font-semibold">{l.ko}</span>
                  <span className="font-display text-[10px] font-semibold text-accent tracking-[0.15em]">{l.en.toUpperCase()}</span>
                </button>
            )}
              <a href={`tel:${COMPANY.tel.replace(/-/g, "")}`} className="mt-3 h-12 bg-ink text-white flex items-center justify-center gap-2 rounded-sm">
                <Icon name="Phone" className="w-4 h-4" /><span className="font-mono text-sm font-semibold">{COMPANY.tel}</span>
              </a>
              <button onClick={() => {onJump("contact");setOpen(false);}} className="mt-2 h-12 bg-accent text-white flex items-center justify-center gap-2 rounded-sm shadow-md">
                <span className="font-bold text-sm">견적 문의하기</span>
                <Icon name="ArrowRight" className="w-4 h-4" />
              </button>
            </div>
          </div>
        }
      </div>
    </header>);

}

/* -------- HERO (dark industrial) -------- */
function Hero({ onJump, onPrefill, onJumpToProduct }) {
  return (
    <section id="top" className="relative bg-[#0c1a2e] text-white overflow-hidden">
      {/* ── 비디오 배경 ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0c1a2e]/45" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #0c1a2e 0%, #0c1a2e 5%, transparent 40%)"
          }}
        />
      </div>
      <div className="max-w-[1360px] mx-auto px-6 pt-16 md:pt-24 pb-0 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-16 md:pb-20 min-h-[72vh]">
          <div className="lg:col-span-7 relative">
            <Reveal>
              <div
                className="relative inline-flex items-center gap-3 mb-7 px-3.5 py-2 rounded-md"
                style={{
                  backgroundColor: "rgba(12,26,46,0.45)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)"
                }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-bold tracking-[0.25em] text-accent uppercase">LIVE</span>
                </div>
                <span className="w-px h-3 bg-white/30" />
                <span className="text-[11px] font-semibold tracking-[0.18em] text-white/80 uppercase">
                  Daesuk Industrial · Since 2012
                </span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div
                className="inline-block px-5 py-3 -mx-5 rounded-lg"
                style={{
                  backgroundColor: "rgba(12,26,46,0.50)",
                  backdropFilter: "blur(14px) saturate(0.9)",
                  WebkitBackdropFilter: "blur(14px) saturate(0.9)"
                }}
              >
                <h1 className="font-display font-extrabold text-white leading-[0.98] tracking-tight text-[52px] sm:text-[72px] lg:text-[104px]">
                  원석에서<br />골재까지,<br />
                  <span className="text-accent">한 곳에서.</span>
                </h1>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div
                className="inline-block mt-8 px-4 py-3 -mx-4 rounded-md max-w-xl"
                style={{
                  backgroundColor: "rgba(12,26,46,0.50)",
                  backdropFilter: "blur(12px) saturate(0.9)",
                  WebkitBackdropFilter: "blur(12px) saturate(0.9)"
                }}
              >
                <p className="text-white text-[17px] md:text-[18px] leading-[1.8] font-medium">
                  죠 크러셔 · 콘 크러셔 · 진동 스크린 · 피더를 <span className="font-bold text-accent">자체 설계·제작</span>합니다.
                  <span> 대표가 직접 상담합니다.</span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap gap-3">
                <button onClick={() => onJump("contact")}
                className="h-14 px-8 bg-accent text-white hover:brightness-110 transition-all inline-flex items-center gap-3 rounded-sm"
                style={{ boxShadow: "0 8px 24px rgba(232,146,13,0.4), 0 2px 8px rgba(0,0,0,0.3)" }}>
                  <span className="font-bold">견적 문의하기</span>
                  <Icon name="ArrowRight" className="w-5 h-5" />
                </button>
                <a href={`tel:${COMPANY.tel.replace(/-/g, "")}`}
                className="h-14 px-7 bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-white/20 hover:border-white/40 transition-all inline-flex items-center gap-3 rounded-sm">
                  <Icon name="Phone" className="w-4 h-4 text-accent" />
                  <span className="font-mono text-[14px] font-bold tracking-wide">{COMPANY.tel}</span>
                </a>
                <button onClick={() => onJump("equipment")}
                className="h-14 px-4 text-white/90 hover:text-accent transition-colors inline-flex items-center gap-2 rounded-sm"
                style={{
                  backgroundColor: "rgba(12,26,46,0.35)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)"
                }}>
                  <span className="text-[14px] font-semibold u-link">장비 둘러보기</span>
                  <Icon name="ArrowDown" className="w-4 h-4" />
                </button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="relative lg:ml-auto lg:max-w-[420px]">
                <div className="absolute -inset-6 bg-gradient-to-br from-accent/10 via-transparent to-transparent blur-3xl pointer-events-none" />
                <div className="relative bg-white/[0.06] backdrop-blur-xl border border-white/15 rounded-md overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
                  <div className="p-6 md:p-7">
                    <div className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase mb-5">
                      DAESUK · BY THE NUMBERS
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                      <div>
                        <div className="font-display font-extrabold text-4xl text-white tabular-nums leading-none">
                          14<span className="text-2xl text-white/60 ml-0.5">년</span>
                        </div>
                        <div className="mt-2 text-[11px] font-semibold tracking-wider text-white/60 uppercase">대표 직접 운영</div>
                      </div>
                      <div>
                        <div className="font-display font-extrabold text-4xl text-white tabular-nums leading-none">
                          13<span className="text-2xl text-white/60 ml-0.5">종</span>
                        </div>
                        <div className="mt-2 text-[11px] font-semibold tracking-wider text-white/60 uppercase">자체 제작 라인업</div>
                      </div>
                      <div>
                        <div className="font-display font-extrabold text-4xl text-white tabular-nums leading-none">
                          4<span className="text-2xl text-white/60 ml-0.5">개</span>
                        </div>
                        <div className="mt-2 text-[11px] font-semibold tracking-wider text-white/60 uppercase">자체 가공 공장</div>
                      </div>
                      <div>
                        <div className="font-display font-extrabold text-4xl text-white tabular-nums leading-none">
                          A/S
                        </div>
                        <div className="mt-2 text-[11px] font-semibold tracking-wider text-white/60 uppercase">평생 책임 시공</div>
                      </div>
                    </div>
                    <div className="mt-6 pt-5 border-t border-white/10">
                      <div className="text-[12px] text-white/70 leading-relaxed">
                        설계부터 제작·설치·시운전·A/S까지<br />
                        <span className="text-white font-semibold">한 곳에서 책임집니다.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pb-16">
          {[
          ["01", "PRIMARY", "JAW", "죠 크러셔", "jaw"],
          ["02", "SECONDARY", "CONE", "콘 크러셔", "cone"],
          ["03", "SCREENING", "SCREEN", "진동 스크린", "screen"],
          ["04", "FEEDING", "FEEDER", "피더", "feeder"]].
          map(([n, cat, en, ko, id]) =>
          <button key={n} onClick={() => onJumpToProduct(id)}
          className="relative text-left p-5 md:p-6 bg-white/[0.06] backdrop-blur-lg border border-white/15 hover:bg-white/[0.12] hover:border-accent/50 transition-all duration-300 group rounded-sm overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-bold text-white/40 tracking-[0.2em]">— {n}</div>
                <Icon name="ArrowUpRight" className="w-4 h-4 text-white/40 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div className="mt-3 text-[10px] font-bold tracking-[0.2em] text-accent uppercase">{cat}</div>
              <div className="mt-2 font-display font-bold text-2xl text-white group-hover:text-accent transition-colors">{en}</div>
              <div className="text-[13px] text-white/70 mt-0.5">{ko}</div>
            </button>
          )}
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="hidden lg:flex absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] font-bold tracking-[0.3em] text-white/60 uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-3 bg-accent scroll-indicator" />
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 bg-[#0c1a2e] text-white overflow-hidden border-t border-white/10">
        <div className="flex whitespace-nowrap marquee py-4 font-semibold text-[12px] tracking-[0.25em] uppercase">
          {Array.from({ length: 2 }).map((_, k) =>
          <span key={k} className="inline-flex items-center gap-10 px-6">
              <span>Daesuk Industrial</span><span className="text-accent">◆</span>
              <span>Jaw · Cone · Screen · Feeder</span><span className="text-accent">◆</span>
              <span>Turn-Key Delivery</span><span className="text-accent">◆</span>
              <span>Genuine Wear Parts</span><span className="text-accent">◆</span>
              <span>Since 2012</span><span className="text-accent">◆</span>
              <span>Seongju · Korea</span><span className="text-accent">◆</span>
            </span>
          )}
        </div>
      </div>
    </section>);

}

/* ================================================================
   EQUIPMENT — unified section with tabs:
   [전체 · 파쇄기 · 플랜트 · 부품]
   ================================================================ */
function Equipment({ onJump, onPrefill, tab, setTab, activeProduct, setActiveProduct }) {
  const active = activeProduct;
  const setActive = setActiveProduct;
  const d = PRODUCT_DATA[active];
  const BPMap = { jaw: BPJaw, cone: BPCone, screen: BPScreen, feeder: BPFeeder };
  const BP = BPMap[active];
  const prod = PRODUCTS.find((p) => p.id === active);

  const prefillThis = (extra) => {
    onPrefill({
      type: "제품 견적",
      message: `[제품: ${prod.ko} · ${prod.en}]\n${extra || ""}\n\n● 현장 처리량(T/HR): \n● 원석 종류(화강암/석회암/기타): \n● 요구 입도(mm): \n● 설치 시기: `
    });
    onJump("contact");
  };

  const tabs = [
  { id: "all", ko: "전체", en: "All" },
  { id: "crushers", ko: "파쇄기", en: "Crushers" },
  { id: "plants", ko: "플랜트", en: "Plants" },
  { id: "parts", ko: "부품", en: "Parts" }];


  return (
    <section id="equipment" className="bg-paper">
      <div className="max-w-[1360px] mx-auto px-6 py-20 md:py-28">
        <SectionHead label="EQUIPMENT" sub="장비 라인업" />

        <div className="mt-10 flex items-end justify-between border-b hairline flex-wrap gap-4">
          <div className="flex items-end flex-wrap">
            {tabs.map((t) => {
              const act = tab === t.id;
              return (
                <button key={t.id} onClick={() => setTab(t.id)}
                className={`relative shrink-0 px-5 md:px-7 py-4 -mb-px text-left transition-colors whitespace-nowrap ${act ? "text-ink" : "text-ink/60 hover:text-ink"}`}>
                  <div className={`font-display font-bold text-lg md:text-xl whitespace-nowrap transition-colors ${act ? "text-ink" : ""}`}>{t.ko}</div>
                  <div className={`text-[11px] font-semibold tracking-wider mt-0.5 whitespace-nowrap uppercase transition-colors ${act ? "text-accent" : "text-mute"}`}>{t.en}</div>
                  <div className={`absolute -bottom-px left-0 right-0 h-[3px] bg-accent transition-transform origin-left ${act ? "scale-x-100" : "scale-x-0"}`} />
                </button>);

            })}
          </div>
          <div className="px-5 md:px-6 py-4 hidden md:block text-xs font-semibold tracking-wider text-mute uppercase">
            14년간 축적된 현장 맞춤 제작
          </div>
        </div>

        {/* ALL view — overview cards */}
        {tab === "all" && <EquipmentOverview onJump={onJump} onPrefill={onPrefill} setTab={setTab} setActive={setActive} />}

        {/* CRUSHERS view — left list + detail */}
        {tab === "crushers" &&
        <CrushersView active={active} setActive={setActive} prod={prod} d={d} BP={BP} prefillThis={prefillThis} />
        }

        {/* PLANTS view — capacity picker + lineup */}
        {tab === "plants" && <PlantsView onJump={onJump} onPrefill={onPrefill} />}

        {/* PARTS view — search + inventory */}
        {tab === "parts" && <PartsView onJump={onJump} onPrefill={onPrefill} />}
      </div>
    </section>);

}

/* ---- Equipment: ALL view (overview cards) ---- */
function EquipmentOverview({ onJump, onPrefill, setTab, setActive }) {
  return (
    <div className="mt-12">
      <Reveal>
        <div className="grid lg:grid-cols-3 gap-10 mb-14 pb-12 border-b hairline">
          <div className="lg:col-span-2">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-[1.1] tracking-tight text-ink max-w-[22ch]">
              파쇄기 단품부터 플랜트 전체까지.<br />
              <span className="text-accent">필요한 것만</span> 찾아보세요.
            </h2>
          </div>
          <div>
            <p className="text-[16px] leading-[1.85] text-ink/80">
              장비를 한 곳에 모았습니다. 단품 파쇄기가 필요하시면 <span className="font-bold text-ink">파쇄기</span>,
              라인 전체 턴키가 필요하시면 <span className="font-bold text-ink">플랜트</span>,
              소모성 부품은 <span className="font-bold text-ink">부품</span> 탭을 이용하세요.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
        { tab: "crushers", label: "파쇄기", en: "Crushers", count: "4 MODELS", desc: "죠·콘·스크린·피더 단품",
          BP: BPJaw },
        { tab: "plants", label: "플랜트", en: "Plants", count: "5 LINES", desc: "50–300 T/HR 턴키 라인",
          BP: BPPlantFlow },
        { tab: "parts", label: "부품", en: "Parts", count: "상시 재고", desc: "맨틀·콘케이브·죠·스크린 메쉬",
          BP: BPScreen }].
        map((c) =>
        <button key={c.tab} onClick={() => setTab(c.tab)}
        className="group bg-paper rounded-lg shadow-[0_2px_8px_rgba(12,26,46,0.06)] card-lift text-left overflow-hidden border border-rule/60">
            <div className="p-6 md:p-7 flex items-start justify-between">
              <div className="text-[11px] font-bold tracking-wider text-accent uppercase">{c.en}</div>
              <div className="text-[11px] font-bold tracking-wider text-mute uppercase">{c.count}</div>
            </div>
            <div className="px-6 md:px-7 aspect-[4/3]">
              <c.BP className="w-full h-full" />
            </div>
            <div className="mt-2 p-6 md:p-7 pt-5 border-t hairline flex items-start justify-between gap-4 bg-paper">
              <div>
                <div className="font-display font-extrabold text-2xl text-ink group-hover:text-accent transition-colors">{c.label}</div>
                <div className="text-sm text-mute mt-1.5">{c.desc}</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-paper2 group-hover:bg-accent flex items-center justify-center shrink-0 transition-colors">
                <Icon name="ArrowUpRight" className="w-4 h-4 text-mute group-hover:text-white transition-colors" />
              </div>
            </div>
          </button>
        )}
      </div>
    </div>);

}

/* ---- Equipment: CRUSHERS view ---- */
function CrushersView({ active, setActive, prod, d, BP, prefillThis }) {
  return (
    <div className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-10">
      <aside className="lg:col-span-3">
        <Reveal>
          <div className="lg:sticky lg:top-28 bg-paper2 rounded-lg p-5">
            <div className="text-[11px] font-bold tracking-wider text-accent uppercase mb-4 pb-3 border-b hairline">
              Crusher Index
            </div>
            <ul className="space-y-0.5">
              {PRODUCTS.map((p, i) => {
                const act = active === p.id;
                return (
                  <li key={p.id}>
                    <button onClick={() => setActive(p.id)}
                    className={`relative w-full text-left py-3 pl-4 pr-3 flex items-start gap-3 transition-all rounded-md ${act ? "bg-white text-ink shadow-sm" : "text-ink/70 hover:text-ink hover:bg-white/60"}`}>
                      {act && <span className="absolute left-0 top-2 bottom-2 w-[3px] bg-accent rounded-full" />}
                      <span className="text-[11px] font-semibold text-mute pt-1 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      <span className="flex-1">
                        <span className={`block leading-tight ${act ? "font-bold" : "font-semibold"}`}>{p.ko}</span>
                        <span className={`block text-[10px] font-semibold tracking-wider mt-0.5 uppercase ${act ? "text-accent" : "text-mute2"}`}>{p.en}</span>
                      </span>
                      {act && <Icon name="ChevronRight" className="w-4 h-4 mt-0.5 text-accent" />}
                    </button>
                  </li>);

              })}
            </ul>
          </div>
        </Reveal>
      </aside>

      <div className="lg:col-span-9">
        <Reveal key={active}>
          <div className="flex items-end justify-between border-b hairline pb-5">
            <div>
              <div className="text-[11px] font-bold tracking-wider text-accent uppercase">{prod.en}</div>
              <h3 className="mt-2 font-display font-extrabold text-3xl md:text-5xl leading-tight text-ink">{prod.ko}</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 mt-8">
            <div className="md:col-span-7">
              <div className="bg-paper2 rounded-lg p-4 border border-rule/60">
                <BP className="aspect-[4/3] w-full" />
              </div>
              <div className="mt-3 flex items-start justify-between text-[11px] font-mono text-[#6b7280]">
                <div>{prod.fig} · ORTHOGRAPHIC PROJECTION</div>
                <div>— DSI</div>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="text-[11px] font-bold tracking-wider text-accent uppercase mb-3">Overview · 개요</div>
              <p className="text-[16px] leading-[1.85] text-ink/85">{d.overview}</p>

              <div className="mt-8 text-[11px] font-bold tracking-wider text-accent uppercase mb-3">Principle · 작동 원리</div>
              <ol className="space-y-3">
                {d.principles.map((p, i) =>
                <li key={i} className="flex gap-3 text-[15px] text-ink/85 leading-relaxed">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-accent text-white text-[11px] font-bold flex items-center justify-center tabular-nums">{i + 1}</span>
                    <span className="pt-0.5">{p}</span>
                  </li>
                )}
              </ol>

              <div className="mt-8 grid grid-cols-2 gap-2">
                <button onClick={() => prefillThis("견적 요청합니다.")}
                className="h-12 bg-accent text-white font-bold hover:brightness-110 shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 text-sm rounded-sm">
                  <Icon name="Mail" className="w-4 h-4" /> 이 제품 견적
                </button>
                <a href={`tel:${COMPANY.tel.replace(/-/g, "")}`}
                className="h-12 border-2 border-ink text-ink font-bold hover:bg-ink hover:text-white transition-colors inline-flex items-center justify-center gap-2 text-sm rounded-sm">
                  <Icon name="Phone" className="w-4 h-4" /> 바로 전화
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <div className="flex items-end justify-between pb-3">
              <div className="text-[11px] font-bold tracking-wider text-accent uppercase">Table · 라인업</div>
              <button onClick={() => prefillThis()} className="text-sm font-semibold text-ink u-link hover:text-accent">상세 스펙 문의 →</button>
            </div>
            <div className="tbl-scroll overflow-x-auto rounded-md border hairline">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="bg-ink text-white">
                    {d.cols.map((c) =>
                    <th key={c} className="text-left py-3 px-4 text-[11px] font-semibold tracking-wider uppercase">{c}</th>
                    )}
                    <th className="w-32"></th>
                  </tr>
                </thead>
                <tbody>
                  {d.rows.map((r, i) =>
                  <tr key={i} className="border-b hairline even:bg-paper2 hover:bg-accent/5 group transition-colors">
                      {r.map((cell, j) =>
                    <td key={j} className={`py-4 px-4 align-top ${j === 0 ? "font-display font-bold text-ink" : "text-ink/85 font-mono text-[13px]"}`}>{cell}</td>
                    )}
                      <td className="py-3 pr-3 text-right">
                        <button onClick={() => prefillThis(`[모델 지정: ${r[0]}]`)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold tracking-wider text-accent uppercase">
                          견적 →
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[12px] text-mute">※ 세부 사양은 현장 요구에 따라 변경됩니다. 정확한 제원·가격은 문의 바랍니다.</p>
          </div>
        </Reveal>
      </div>
    </div>);

}

/* ---- Equipment: PLANTS view ---- */
function PlantsView({ onJump, onPrefill }) {
  const [cap, setCap] = sUseState(150);
  const bucket = cap <= 75 ? 0 : cap <= 125 ? 1 : cap <= 175 ? 2 : cap <= 250 ? 3 : 4;
  const suggested = PLANT_LINEUP[bucket];

  const requestPlant = () => {
    onPrefill({
      type: "플랜트 설계",
      message: `[플랜트 상담]\n● 희망 처리량(T/HR): ${cap}\n● 원석 종류: \n● 설치 부지 면적: \n● 전력 상황: \n● 설치 희망 시기: `
    });
    onJump("contact");
  };

  return (
    <div className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-10">
      <div className="lg:col-span-5">
        <Reveal>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-[1.12] tracking-tight text-ink">
            필요한 처리량을<br />정해 주세요.
          </h2>
          <p className="mt-5 text-ink/75 leading-[1.85] max-w-md">
            시간당 처리량(T/HR)을 선택하면 그에 맞는 표준 라인업을 제안해 드립니다.
          </p>

          <div className="mt-8 rounded-lg p-6 md:p-7 dark-section-bg text-white shadow-xl">
            <div className="flex items-baseline justify-between">
              <div className="text-[11px] font-bold tracking-wider text-accent uppercase">Capacity</div>
              <div className="text-[11px] font-bold tracking-wider text-white/60 uppercase">Input</div>
            </div>
            <div className="mt-3 flex items-baseline gap-3">
              <div className="font-display font-extrabold text-7xl leading-none text-white tabular-nums">{cap}</div>
              <div className="font-mono text-sm text-white/60 tracking-[0.15em]">T / HR</div>
            </div>
            <input type="range" min="50" max="400" step="10" value={cap} onChange={(e) => setCap(+e.target.value)}
            className="mt-5 w-full accent-accent" aria-label="처리 용량" />
            <div className="mt-1 flex justify-between font-mono text-[10px] text-white/40">
              <span>50</span><span>100</span><span>200</span><span>300</span><span>400</span>
            </div>

            <div className="mt-6 border-t border-white/15 pt-5">
              <div className="text-[11px] font-bold tracking-wider text-white/60 uppercase">Suggested Line</div>
              <div className="mt-2 font-display font-extrabold text-2xl text-accent">{suggested.t} {suggested.u}</div>
              <div className="text-white">{suggested.d}</div>
              <div className="mt-2 font-mono text-[12px] text-white/60">{suggested.comp}</div>
            </div>
            <button onClick={requestPlant}
            className="mt-6 w-full h-12 bg-accent text-white hover:brightness-110 shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 rounded-sm">
              <span className="font-bold text-sm">이 용량으로 상담 요청</span>
              <Icon name="ArrowRight" className="w-4 h-4" />
            </button>
          </div>
        </Reveal>
      </div>

      <div className="lg:col-span-7">
        <Reveal delay={100}>
          <div className="bg-paper2 rounded-lg p-4 border border-rule/60">
            <BPPlantFlow className="aspect-[16/7] w-full" />
          </div>
          <div className="mt-3 flex items-start justify-between text-[11px] font-mono text-mute">
            <div>FIG.05 · PROCESS FLOW DIAGRAM</div>
            <div>— DSI</div>
          </div>
        </Reveal>

        <div className="mt-8 rounded-md overflow-hidden border hairline">
          {PLANT_LINEUP.map((p, i) =>
          <Reveal key={p.t} delay={i * 30}>
              <button onClick={() => setCap(+p.t)}
            className={`relative w-full text-left py-5 px-5 grid grid-cols-12 gap-4 items-center group transition-colors border-b hairline last:border-b-0 ${bucket === i ? "bg-accent/5" : "bg-paper hover:bg-paper2"}`}>
                {bucket === i && <span className="absolute left-0 top-3 bottom-3 w-[3px] bg-accent rounded-full" />}
                <div className="col-span-12 md:col-span-1 text-[11px] font-bold tracking-wider text-mute tabular-nums">0{i + 1}</div>
                <div className="col-span-5 md:col-span-3">
                  <div className={`font-display font-extrabold text-4xl md:text-5xl leading-none transition-colors ${bucket === i ? "text-accent" : "text-ink group-hover:text-accent"}`}>
                    {p.t}<span className="text-mute font-sans font-normal text-xl ml-1">{p.u}</span>
                  </div>
                </div>
                <div className="col-span-7 md:col-span-4 text-lg font-semibold text-ink">{p.d}</div>
                <div className="col-span-12 md:col-span-4 font-mono text-[12px] text-mute">{p.comp}</div>
              </button>
            </Reveal>
          )}
        </div>
      </div>
    </div>);

}

/* ---- Equipment: PARTS view ---- */
function PartsView({ onJump, onPrefill }) {
  const [q, setQ] = sUseState("");
  const filtered = q.trim() ?
  PARTS_INVENTORY.filter((p) => (p.family + " " + p.items).toLowerCase().includes(q.toLowerCase())) :
  PARTS_INVENTORY;

  return (
    <div className="mt-12 grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-5">
        <Reveal>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-[1.12] tracking-tight text-ink">
            정품 부품,<br />상시 재고로.
          </h2>
          <p className="mt-5 text-ink/75 leading-[1.85] max-w-md">
            맨틀·콘케이브·죠·스크린 메쉬 등 소모성 부품을 상시 재고로 보유합니다. 타사 장비도 모델·치수를 공유해 주시면 호환 부품을 제작·공급합니다.
          </p>

          <div className="mt-8 rounded-lg p-6 dark-section-bg text-white shadow-xl">
            <div className="text-[11px] font-bold tracking-wider text-accent uppercase">Urgent · 긴급 주문</div>
            <div className="mt-2 text-white text-lg leading-snug font-semibold">부품 긴급 수급이 필요하시면 대표 모바일로 바로 연락 주세요.</div>
            <a href={`tel:${COMPANY.mobile.replace(/-/g, "")}`}
            className="mt-4 h-12 w-full bg-accent text-white inline-flex items-center justify-center gap-2 hover:brightness-110 shadow-md hover:shadow-lg transition-all rounded-sm">
              <Icon name="Smartphone" className="w-4 h-4" />
              <span className="font-mono font-bold">{COMPANY.mobile}</span>
            </a>
          </div>
        </Reveal>
      </div>
      <div className="lg:col-span-7">
        <Reveal delay={80}>
          <div className="rounded-lg border hairline bg-paper overflow-hidden shadow-sm">
            <div className="border-b hairline p-4 flex items-center gap-3 bg-paper2">
              <Icon name="ChevronRight" className="w-4 h-4 text-mute" />
              <input value={q} onChange={(e) => setQ(e.target.value)}
              placeholder="부품·모델명으로 검색 (예: Mantle, 4840, OP-3)"
              className="flex-1 bg-transparent outline-none text-ink placeholder:text-mute2 font-medium" />
              {q && <button onClick={() => setQ("")} className="text-mute hover:text-ink"><Icon name="X" className="w-4 h-4" /></button>}
            </div>
            <ul>
              {filtered.length === 0 &&
              <li className="p-6 text-center text-mute text-sm">
                  해당 검색 결과가 없습니다. 전화 또는 문의폼으로 알려 주세요.
                </li>
              }
              {filtered.map((p, i) =>
              <li key={p.family} className="relative border-t hairline p-5 pl-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 hover:bg-paper2 transition-colors group">
                  <span className="absolute left-0 top-5 bottom-5 w-[3px] bg-accent/0 group-hover:bg-accent rounded-full transition-colors" />
                  <div className="md:w-72 shrink-0">
                    <div className="text-[10px] font-bold tracking-wider text-accent uppercase">Family · 0{i + 1}</div>
                    <div className="font-display font-extrabold text-ink mt-1">{p.family}</div>
                  </div>
                  <div className="flex-1 text-sm text-ink/80 leading-relaxed">{p.items}</div>
                  <button onClick={() => {onPrefill({ type: "부품 구매", message: `[${p.family} 부품 문의]\n필요 품목: \n수량: \n납기: ` });onJump("contact");}}
                className="self-start md:self-auto text-xs font-bold tracking-wider text-accent uppercase u-link hover:text-ink shrink-0">
                    부품 요청 →
                  </button>
                </li>
              )}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>);

}

/* ================================================================
   COMPANY — combines: Company intro · CEO quote · Facilities · References
   Structured as a single narrative
   ================================================================ */
function Company({ onJump }) {
  return (
    <section id="company" className="bg-[#f5f6f8]">
      <div className="max-w-[1360px] mx-auto px-6 py-20 md:py-24">
        <SectionHead label="COMPANY" sub="회사 소개" />

        {/* Part 1: Intro + CEO quote */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 mt-10">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-[1.12] tracking-tight text-[#0c1a2e]">
                카탈로그대로가 아닌,<br />현장에 맞춰 만듭니다.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <figure className="mt-10 border-l-4 border-[#e8920d] pl-6 py-6 bg-[#fef8ee] rounded-r-lg">
                <blockquote className="font-sans text-xl md:text-2xl leading-[1.55] text-[#0c1a2e] font-medium">
                  "설계부터 제작·설치·시운전·A/S까지, 14년째 제가 직접 봅니다.
                  현장 조건에 맞춰 드릴 수 있습니다."
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0c1a2e] text-white flex items-center justify-center font-sans font-bold text-lg">박</div>
                  <div>
                    <div className="font-sans font-bold text-[#0c1a2e]">박강호 대표</div>
                    <div className="text-xs text-[#6b7280]">CEO · PARK, KANG-HO</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="font-sans text-[16px] md:text-[17px] leading-[1.85] text-[#374151] space-y-5 max-w-[56ch]">
                <p>
                  <span className="font-bold">대석산업(주)</span>은 2012년부터 경상북도 성주에서 광산·골재 분야의 파쇄·선별 설비를 전문으로 제조하고 있습니다.
                  자체 설계·제작한 <em className="not-italic">죠 크러셔, 콘 크러셔, 진동 스크린, 바이브레이팅 피더</em>를 조합해, 50 T/HR급 소형부터 300 T/HR급 대형 플랜트까지 턴키로 공급합니다.
                </p>
                <p>
                  표준 라인업을 두되, 카탈로그 치수 그대로가 아니라 <span className="font-bold">현장이 요구하는 투입구·처리량·부지 조건</span>에 맞춰 치수를 조정하여 제작합니다. 자체 가공 설비를 갖춘 4개 필지의 공장에서, 외주 없이 핵심 부품까지 내재화합니다.
                </p>
              </div>

              <dl className="mt-10 grid sm:grid-cols-2 gap-y-5 gap-x-10 border-t hairline pt-6 max-w-xl">
                {[
                ["회사명 · Company", `${COMPANY.name_ko}`],
                ["대표 · CEO", `${COMPANY.ceo_ko} (${COMPANY.ceo_en})`],
                ["설립 · Established", COMPANY.since],
                ["소재지 · Location", "성주, 경상북도"]].
                map(([k, v]) =>
                <div key={k}>
                    <dt className="text-xs font-medium text-[#6b7280] uppercase tracking-wider">{k}</dt>
                    <dd className="mt-1 text-[15px] font-semibold text-[#0c1a2e]">{v}</dd>
                  </div>
                )}
              </dl>
            </Reveal>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 md:mt-24 pt-10 border-t hairline">
          <Reveal>
            <div className="text-sm font-semibold uppercase tracking-wider text-[#e8920d]">FACILITIES · 보유 설비</div>
            <h3 className="mt-2 font-sans font-extrabold text-3xl md:text-4xl leading-[1.2] tracking-tight text-[#0c1a2e]">
              자체 가공 · 조립 · 출하의 일원화.
            </h3>
          </Reveal>
        </div>

        {/* Part 2: Facilities table */}
        <div className="grid lg:grid-cols-12 gap-10 mt-10">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-[#374151] leading-[1.85] max-w-sm">핵심 부품을 외주가 아닌 자체 가공으로 대응하여 납기를 
단축하고 품질을 보증합니다. 30톤 오버헤드 크레인으로 
대형 조립을 수행합니다.</p>
              <BPSite className="aspect-[4/3] w-full mt-8" />
              <div className="mt-3 flex items-start justify-between text-[11px] font-mono text-mute">
                <div>FIG.06 · SITE KEY PLAN · SEONGJU</div>
                <div>— DSI</div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <div className="">
                <div className="grid grid-cols-12 py-3 px-4 font-sans text-xs font-semibold uppercase tracking-wider text-white bg-[#0c1a2e] rounded-t-md">
                  <div className="col-span-1">NO.</div>
                  <div className="col-span-3">설비</div>
                  <div className="col-span-4">Equipment</div>
                  <div className="col-span-3">규격 / Std.</div>
                  <div className="col-span-1 text-right">수량</div>
                </div>
                {FACILITIES.map((r) =>
                <div key={r[0]} className="grid grid-cols-12 border-b border-[#e5e7eb] py-4 px-4 items-center hover:bg-white transition-colors even:bg-[#f9fafb]">
                    <div className="col-span-1 font-mono text-[11px] text-[#6b7280] tabular-nums">{r[0]}</div>
                    <div className="col-span-3 font-sans font-bold text-[#0c1a2e]">{r[1]}</div>
                    <div className="col-span-4 text-[#374151]">{r[2]}</div>
                    <div className="col-span-3 font-mono text-[13px] text-[#374151]">{r[3]}</div>
                    <div className="col-span-1 text-right font-mono text-[13px] text-[#e8920d] font-semibold">×{r[4]}</div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 md:mt-24 pt-10 border-t hairline">
          <Reveal>
            <div className="text-sm font-semibold uppercase tracking-wider text-[#e8920d]">REFERENCES · 납품 실적</div>
            <div className="mt-2 flex items-end justify-between flex-wrap gap-4">
              <h3 className="font-sans font-extrabold text-3xl md:text-4xl leading-[1.2] tracking-tight text-[#0c1a2e]">
                전국 현장에 납품하고 있습니다.
              </h3>
              <div className="text-sm text-[#6b7280]">고객사 요청에 따라 사명은 비공개 처리</div>
            </div>
          </Reveal>
        </div>

        {/* Part 3: References table */}
        <div className="mt-10">
          <Reveal delay={80}>
            <div className="">
              <div className="grid grid-cols-12 py-3 px-4 font-sans text-xs font-semibold uppercase tracking-wider text-white bg-[#0c1a2e] rounded-t-md">
                <div className="col-span-2">YEAR</div>
                <div className="col-span-4">현장 · Site</div>
                <div className="col-span-3">규모 · Scope</div>
                <div className="col-span-3">설비 · Equipment</div>
              </div>
              {REFERENCES.map((r) =>
              <div key={r.yr + r.site} className="grid grid-cols-12 border-b border-[#e5e7eb] py-4 px-4 items-start hover:bg-white transition-colors even:bg-[#f9fafb]">
                  <div className="col-span-2 font-sans font-extrabold text-[#0c1a2e] text-lg tabular-nums">{r.yr}</div>
                  <div className="col-span-4 text-[#0c1a2e]">{r.site}</div>
                  <div className="col-span-3 text-[#374151] text-sm">{r.scope}</div>
                  <div className="col-span-3 font-mono text-[12px] text-[#6b7280]">{r.eq}</div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

/* ================================================================
   CONTACT — combines: FAQ (top) · Process timeline · Contact form
   ================================================================ */
function Contact({ onSubmitted, prefill, clearPrefill }) {
  const [f, setF] = sUseState({ company: "", name: "", phone: "", email: "", type: "제품 견적", message: "", agree: false });
  const [errs, setErrs] = sUseState({});
  const [busy, setBusy] = sUseState(false);
  const [openFaq, setOpenFaq] = sUseState(-1);

  sUseEffect(() => {
    if (prefill) {
      setF((s) => ({ ...s, type: prefill.type || s.type, message: prefill.message || s.message }));
      const el = document.getElementById("inquiry-message");
      if (el) {setTimeout(() => el.focus(), 200);}
    }
  }, [prefill]);

  const set = (k, v) => setF((s) => ({ ...s, [k]: v }));
  const submit = () => {
    const e = {};
    if (!f.company.trim()) e.company = "회사명을 입력해 주세요.";
    if (!f.name.trim()) e.name = "담당자명을 입력해 주세요.";
    if (!f.phone.trim()) e.phone = "연락처를 입력해 주세요.";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = "올바른 이메일을 입력해 주세요.";
    if (!f.agree) e.agree = "개인정보 수집에 동의해 주세요.";
    setErrs(e);
    if (Object.keys(e).length) return;
    setBusy(true);
    setTimeout(() => {
      console.log("[DAESUK contact submission]", f);
      setBusy(false);
      setF({ company: "", name: "", phone: "", email: "", type: "제품 견적", message: "", agree: false });
      clearPrefill();
      onSubmitted();
    }, 600);
  };
  const base = "w-full bg-white border border-[#d1d5db] h-12 px-4 rounded-md text-[#0c1a2e] outline-none focus:border-[#e8920d] focus:ring-2 focus:ring-[#e8920d]/20 transition-all font-sans";

  return (
    <section id="contact" className="bg-white">
      <div className="max-w-[1360px] mx-auto px-6 py-20 md:py-24">
        <SectionHead label="CONTACT" sub="문의 · 견적" />

        {/* FAQ on top — answer first, ask later */}
        <div className="mt-10">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-3 border-b hairline pb-4">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-[#e8920d]">FAQ · 자주 묻는 질문</div>
                <h3 className="mt-1 font-sans font-extrabold text-2xl md:text-3xl text-[#0c1a2e]">문의 전에 먼저 확인해 보세요.</h3>
              </div>
              <div className="text-sm text-[#6b7280]">답변에 없으면 하단 문의폼을 이용해 주세요.</div>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className="grid md:grid-cols-2 gap-x-10">
              {FAQ.map((item, i) => {
                const o = openFaq === i;
                return (
                  <div key={i} className="border-b hairline">
                    <button onClick={() => setOpenFaq(o ? -1 : i)}
                    className="w-full py-5 flex items-start gap-4 text-left hover:bg-[#f9fafb] transition-colors">
                      <span className="text-xs font-bold text-[#e8920d] pt-1 w-7">{String(i + 1).padStart(2, "0")}</span>
                      <span className="flex-1 font-sans text-[15px] md:text-base text-[#0c1a2e] leading-snug font-medium">{item.q}</span>
                      <span className="w-7 h-7 rounded-full bg-[#e8920d] flex items-center justify-center shrink-0">
                        <Icon name={o ? "Minus" : "Plus"} className="w-3.5 h-3.5 text-white" />
                      </span>
                    </button>
                    {o &&
                    <div className="pb-5 pl-11 pr-10 text-[#374151] leading-[1.85] text-[14px]">
                        {item.a}
                      </div>
                    }
                  </div>);

              })}
            </div>
          </Reveal>
        </div>

        {/* Process — horizontal, full-width, between FAQ and inquiry form (re-assures user before form) */}
        <div className="mt-16 pt-10 border-t hairline">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-[#e8920d]">PROCESS · 문의 후 진행 절차</div>
                <h3 className="mt-2 font-sans font-extrabold text-2xl md:text-3xl text-[#0c1a2e]">문의 한 번으로 A/S까지.</h3>
              </div>
              <div className="text-sm text-[#6b7280] max-w-xs text-right hidden md:block">
                대표가 전 과정을 직접 관리합니다.
              </div>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {PROCESS.map((s, i) => <li key={s.n} className="bg-white p-5 md:p-6 relative rounded-lg shadow-sm border border-[#e5e7eb]">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-full bg-[#e8920d] text-white text-xs font-bold flex items-center justify-center">{s.n}</div>
                    {i < PROCESS.length - 1 &&
                    <Icon name="ArrowRight" className="w-3.5 h-3.5 text-[#9ca3af] hidden lg:block" />
                    }
                  </div>
                  <div className="mt-4 font-sans font-bold text-[#0c1a2e] text-base leading-tight">{s.ko}</div>
                  <div className="mt-2 text-[13px] text-[#6b7280] leading-relaxed whitespace-pre-line">{s.d}</div>
                </li>
              )}
            </ol>
          </Reveal>
        </div>

        {/* Main contact block — DARK wrapper */}
        <div className="mt-20 md:mt-24 -mx-6 px-6 py-16 md:py-20 bg-[#0c1a2e]">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-3">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-[#e8920d]">INQUIRY · 견적 · 상담</div>
                <h3 className="mt-2 font-sans font-extrabold text-3xl md:text-4xl leading-[1.2] tracking-tight text-white">
                  대표가 직접 상담합니다.
                </h3>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-5">
              <ul className="border-t border-white/10">
                {[
                { k: "TEL · 대표전화", v: COMPANY.tel, href: `tel:${COMPANY.tel.replace(/-/g, "")}`, ico: "Phone", hi: true },
                { k: "MOBILE · 모바일", v: COMPANY.mobile, href: `tel:${COMPANY.mobile.replace(/-/g, "")}`, ico: "Smartphone", hi: true },
                { k: "EMAIL · 이메일", v: COMPANY.email, href: `mailto:${COMPANY.email}`, ico: "Mail" }].
                map((row) =>
                <li key={row.k} className="border-b border-white/10 py-4 flex items-center gap-5">
                    <div className={`w-9 h-9 flex items-center justify-center shrink-0 rounded ${row.hi ? "bg-[#e8920d] text-white" : "border border-white/20 text-white/70"}`}>
                      <Icon name={row.ico} className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium uppercase tracking-wider text-white/50">{row.k}</div>
                      <a href={row.href} className="font-sans font-bold text-lg md:text-xl text-white u-link hover:text-[#e8920d]">{row.v}</a>
                    </div>
                  </li>
                )}
              </ul>

              <div className="mt-6 border border-white/15 p-5 bg-white/5 rounded-md">
                <div className="text-xs font-medium uppercase tracking-wider text-white/50">OPERATING HOURS</div>
                <div className="mt-2 text-white">평일 09:00 — 18:00 <span className="text-white/60 text-sm">(점심 12:00 — 13:00)</span></div>
                <div className="text-white/60 text-sm">토 · 일 · 공휴일 휴무</div>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal className="lg:col-span-7" delay={100}>
              <div className="p-6 md:p-10 bg-white rounded-lg shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-xs font-medium uppercase tracking-wider text-[#6b7280]">INQUIRY FORM · 문의서</div>
                  {prefill &&
                  <button onClick={clearPrefill} className="text-[11px] font-medium text-[#e8920d] u-link">내용 초기화</button>
                  }
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                  { k: "company", l: "회사명 · Company *", ph: "(주) 회사명" },
                  { k: "name", l: "담당자명 · Name *", ph: "홍길동" },
                  { k: "phone", l: "연락처 · Phone *", ph: "010-0000-0000" },
                  { k: "email", l: "이메일 · Email *", ph: "name@company.com" }].
                  map((fld) =>
                  <div key={fld.k}>
                      <label className="block text-xs font-medium text-[#374151] uppercase tracking-wider mb-2">{fld.l}</label>
                      <input className={`${base} ${errs[fld.k] ? "border-red-500" : ""}`} value={f[fld.k]} onChange={(e) => set(fld.k, e.target.value)} placeholder={fld.ph} />
                      {errs[fld.k] && <div className="text-red-500 text-[11px] mt-1">{errs[fld.k]}</div>}
                    </div>
                  )}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-[#374151] uppercase tracking-wider mb-2">문의 유형 · Inquiry Type</label>
                    <div className="relative">
                      <select className={`${base} appearance-none pr-10`} value={f.type} onChange={(e) => set("type", e.target.value)}>
                        {["제품 견적", "부품 구매", "플랜트 설계", "A/S · 정비", "기술 상담", "카탈로그 요청", "기타"].map((o) => <option key={o}>{o}</option>)}
                      </select>
                      <Icon name="ChevronDown" className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-[#6b7280] pointer-events-none" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-[#374151] uppercase tracking-wider mb-2">문의 내용 · Message</label>
                    <textarea id="inquiry-message" className="w-full bg-white border border-[#d1d5db] p-4 min-h-[180px] rounded-md text-[#0c1a2e] outline-none focus:border-[#e8920d] focus:ring-2 focus:ring-[#e8920d]/20 transition-all resize-y font-sans"
                    value={f.message} onChange={(e) => set("message", e.target.value)}
                    placeholder="현장 조건, 원하시는 처리 용량(T/HR), 투입구 규격 등을 알려주시면 더 정확한 답변이 가능합니다." />
                  </div>
                  <div className="md:col-span-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <span onClick={() => set("agree", !f.agree)}
                      className={`mt-0.5 w-5 h-5 border flex items-center justify-center shrink-0 rounded ${f.agree ? "bg-[#e8920d] border-[#e8920d]" : "bg-white border-[#d1d5db]"}`}>
                        {f.agree && <Icon name="Check" className="w-3.5 h-3.5 text-white" />}
                      </span>
                      <span className="text-sm text-[#374151] leading-relaxed">
                        <span className="text-[#0c1a2e] font-semibold">개인정보 수집 및 이용에 동의합니다.</span>{" "}
                        입력해 주신 정보는 문의 회신 목적으로만 사용되며, 회신 후 지체 없이 파기합니다.
                      </span>
                    </label>
                    {errs.agree && <div className="text-red-500 text-[11px] mt-1">{errs.agree}</div>}
                  </div>
                  <div className="md:col-span-2 mt-2 flex flex-col sm:flex-row gap-3">
                    <button onClick={submit} disabled={busy}
                    className="flex-1 h-14 bg-[#e8920d] text-white font-semibold rounded-md hover:bg-[#d4840c] shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-3 disabled:opacity-70">
                      {busy ? "전송 중..." : <>문의 제출하기 <Icon name="ArrowRight" className="w-5 h-5" /></>}
                    </button>
                    <a href={`tel:${COMPANY.tel.replace(/-/g, "")}`}
                    className="sm:w-48 h-14 bg-[#0c1a2e] text-white font-semibold rounded-md hover:bg-[#1e293b] transition-colors inline-flex items-center justify-center gap-2">
                      <Icon name="Phone" className="w-4 h-4" /> 전화 상담
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Map removed from Contact — lives as a thin strip above Footer */}
      </div>
    </section>);

}

/* -------- Map strip — bridges Contact and Footer with a single location block -------- */
function MapStrip() {
  return (
    <section aria-label="본사 · 공장 위치" className="bg-white">
      <div className="max-w-[1360px] mx-auto px-6 py-14 md:py-16">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-6">
          <div className="lg:col-span-7">
            <div className="text-sm font-semibold uppercase tracking-wider text-[#e8920d]">LOCATION · 오시는 길</div>
            <h3 className="mt-2 font-sans font-extrabold text-2xl md:text-3xl leading-tight text-[#0c1a2e]">
              경북 성주 본사 · 공장
            </h3>
            <div className="mt-2 text-[#374151] text-[15px]">{COMPANY.addr_ko}</div>
            <div className="mt-1 text-xs text-[#9ca3af]">{COMPANY.addr_en_1} {COMPANY.addr_en_2}</div>
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-2 lg:justify-end">
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.addr_ko)}`}
            target="_blank" rel="noopener"
            className="h-10 px-4 rounded-md bg-[#0c1a2e] text-white hover:bg-[#1e293b] transition-colors inline-flex items-center gap-1.5 text-[13px]">
              <Icon name="MapPin" className="w-3.5 h-3.5" /> Google
            </a>
            <a href={`https://map.naver.com/p/search/${encodeURIComponent(COMPANY.addr_ko)}`}
            target="_blank" rel="noopener"
            className="h-10 px-4 rounded-md border border-[#d1d5db] text-[#374151] hover:bg-[#f5f6f8] transition-colors inline-flex items-center gap-1.5 text-[13px]">
              <Icon name="MapPin" className="w-3.5 h-3.5" /> 네이버
            </a>
            <a href={`https://map.kakao.com/link/search/${encodeURIComponent(COMPANY.addr_ko)}`}
            target="_blank" rel="noopener"
            className="h-10 px-4 rounded-md border border-[#d1d5db] text-[#374151] hover:bg-[#f5f6f8] transition-colors inline-flex items-center gap-1.5 text-[13px]">
              <Icon name="MapPin" className="w-3.5 h-3.5" /> 카카오
            </a>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-sm border border-[#e5e7eb]">
          <iframe
            title="대석산업(주) 위치 · Google Maps"
            className="w-full h-[320px] md:h-[360px] border-0 block"
            src="https://www.google.com/maps?q=%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84+%EC%84%B1%EC%A3%BC%EA%B5%B0+%EC%9A%A9%EC%95%94%EB%A9%B4+%EC%82%AC%EA%B3%A1%EA%B8%B8+35&hl=ko&z=16&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen />
          
        </div>
      </div>
    </section>);

}

/* -------- FOOTER (Locations absorbed) -------- */
function Footer({ onJump }) {
  return (
    <footer className="bg-[#060d18] text-white/80">
      <div className="max-w-[1360px] mx-auto px-6 pt-16 pb-24 md:pb-10">
        <div className="grid md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <img src="logo-transparent.png" alt="대석산업(주)" className="h-10 w-auto" />
            </div>
            <div className="mt-1 text-xs tracking-wider text-white/50">{COMPANY.name_en}</div>
            <div className="mt-6 text-sm leading-relaxed max-w-sm">
              대표 · CEO {COMPANY.ceo_ko} ({COMPANY.ceo_en})
            </div>
            <div className="mt-4 space-y-1 text-sm text-paper/70">
              <div>{COMPANY.addr_ko}</div>
              <div className="font-mono text-[11px] text-paper/50 leading-relaxed">
                {COMPANY.addr_en_1} {COMPANY.addr_en_2}
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#e8920d]/70 mb-4">INDEX · 사이트맵</div>
            <ul className="grid grid-cols-1 gap-y-2 text-sm">
              {[
              ["equipment", "장비", "Equipment"],
              ["company", "회사", "Company"],
              ["contact", "문의", "Contact"]].
              map(([id, ko, en]) =>
              <li key={id}>
                  <button onClick={() => onJump(id)} className="hover:text-[#e8920d] transition-colors text-white/70 text-left">
                    {ko} <span className="text-[10px] text-white/30 ml-1">{en.toUpperCase()}</span>
                  </button>
                </li>
              )}
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#e8920d]/70 mb-4">CONTACT</div>
            <div className="text-sm space-y-1.5">
              <div>TEL · <a href={`tel:${COMPANY.tel.replace(/-/g, "")}`} className="font-mono text-white hover:text-[#e8920d]">{COMPANY.tel}</a></div>
              <div>MOBILE · <a href={`tel:${COMPANY.mobile.replace(/-/g, "")}`} className="font-mono text-white hover:text-[#e8920d]">{COMPANY.mobile}</a></div>
              <div>FAX · <span className="font-mono text-white/80">{COMPANY.fax}</span></div>
              <div><a href={`mailto:${COMPANY.email}`} className="text-white/80 hover:text-[#e8920d]">{COMPANY.email}</a></div>
              <div className="pt-3 text-white/60 text-[13px]">평일 09:00 — 18:00</div>
              <div className="text-white/50 text-[13px]">토 · 일 · 공휴일 휴무</div>
            </div>
          </div>
        </div>
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-[11px] tracking-wider text-white/40">
          <div>대표자 {COMPANY.ceo_ko} · EST. {COMPANY.since}</div>
          <div>© {new Date().getFullYear()} DAE SUK INDUSTRIAL CO., LTD. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </footer>);

}

/* -------- Sticky Bottom CTA Bar (mobile) -------- */
function StickyCTA({ onJump, visible }) {
  if (!visible) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 bg-white border-t border-[#e5e7eb] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
      <div className="grid grid-cols-2">
        <a href={`tel:${COMPANY.tel.replace(/-/g, "")}`}
        className="h-14 bg-[#0c1a2e] text-white flex items-center justify-center gap-2">
          <Icon name="Phone" className="w-4 h-4" />
          <span className="font-mono text-sm font-semibold">전화 상담</span>
        </a>
        <button onClick={() => onJump("contact")}
        className="h-14 bg-[#e8920d] text-white flex items-center justify-center gap-2">
          <Icon name="Mail" className="w-4 h-4" />
          <span className="text-sm font-semibold">견적 문의</span>
        </button>
      </div>
    </div>);

}

/* -------- SectionHead -------- */
function SectionHead({ label, sub, dark }) {
  // Parse "EQUIPMENT · 장비" into { en, ko }
  const parts = (label || "").split("·").map((s) => s.trim());
  const en = parts[0] || "";
  const ko = sub || parts[1] || "";
  return (
    <div>
      <div className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
        {en}
      </div>
      {ko &&
      <h2 className={`mt-2 font-display font-extrabold text-3xl md:text-5xl leading-[1.05] tracking-tight ${dark ? "text-white" : "text-ink"}`}>
          {ko}
        </h2>
      }
      <div className={`mt-5 h-px ${dark ? "bg-white/15" : "bg-rule"}`} />
    </div>);

}

function Toast({ message, onClose }) {
  sUseEffect(() => {
    if (!message) return;
    const t = setTimeout(onClose, 4500);
    return () => clearTimeout(t);
  }, [message, onClose]);
  if (!message) return null;
  return (
    <div className="fixed top-20 right-6 z-50 toast-in">
      <div className="bg-white rounded-lg shadow-2xl border border-[#e5e7eb] p-4 pr-6 flex items-start gap-3 min-w-[280px]">
        <div className="w-8 h-8 rounded-full bg-[#e8920d] flex items-center justify-center shrink-0">
          <Icon name="Check" className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="font-sans font-bold text-[#0c1a2e]">문의가 접수되었습니다.</div>
          <div className="text-sm text-[#6b7280] mt-0.5">빠른 시간 내 담당자가 연락드리겠습니다.</div>
        </div>
      </div>
    </div>);

}

Object.assign(window, {
  Masthead, Hero, Equipment, Company, Contact,
  Footer, StickyCTA, Toast, Reveal, SectionHead, MapStrip
});