/* ================================================================
   Blueprint-style technical SVG drawings for each crusher.
   Drafted as orthographic projections — these stand in for real
   product photos while reinforcing an engineering-first voice.
   All in-drawing text is kept minimal to avoid looking like a
   real spec sheet / avoid fabricating figures.
   ================================================================ */

function BPFrame({ children, title, code, className = "", dim = [], sheetNo = "DWG-01" }) {
  return (
    <div className={`relative blueprint-bg text-white/90 ${className}`}>
      {/* Title block */}
      <div className="absolute top-0 inset-x-0 px-5 py-3 flex items-center justify-between text-[10px] tracking-[0.2em] font-mono uppercase text-white/60 border-b border-white/10">
        <span>{title}</span>
        <span>{code}</span>
      </div>
      {/* Drawing area */}
      <div className="absolute inset-0 pt-10 pb-10 px-10 flex items-center justify-center">
        {children}
      </div>
      {/* Bottom block */}
      <div className="absolute bottom-0 inset-x-0 px-5 py-3 flex items-center justify-between text-[10px] tracking-[0.2em] font-mono uppercase text-white/60 border-t border-white/10">
        <span>DAESUK INDUSTRIAL · 대석산업(주)</span>
        <span>SHEET {sheetNo}</span>
      </div>
      {/* Corner ticks */}
      {["top-10 left-4","top-10 right-4","bottom-10 left-4","bottom-10 right-4"].map((p)=>(
        <span key={p} className={`absolute ${p} w-2 h-2 border border-white/25`} />
      ))}
    </div>
  );
}

/* Jaw Crusher — side elevation */
function BPJaw({ className, sheetNo }) {
  return (
    <BPFrame title="JAW CRUSHER · SIDE ELEVATION" code="FIG.01" sheetNo={sheetNo} className={className}>
      <svg viewBox="0 0 560 360" className="w-full h-full" stroke="#EDEEF0" fill="none" strokeWidth="1.2">
        {/* Pitman & frame outline */}
        <rect x="70" y="50" width="420" height="260" />
        <rect x="70" y="50" width="420" height="260" strokeDasharray="2 4" opacity="0.3" />
        {/* Flywheel */}
        <circle cx="130" cy="180" r="70" />
        <circle cx="130" cy="180" r="52" />
        <circle cx="130" cy="180" r="6" fill="#EDEEF0" />
        {[0,45,90,135].map((a)=>(
          <line key={a} x1={130} y1={180}
            x2={130 + 68*Math.cos(a*Math.PI/180)}
            y2={180 + 68*Math.sin(a*Math.PI/180)} />
        ))}
        {/* Chamber (fixed + moving jaw) */}
        <polygon points="280,70 430,70 430,290 320,290 280,260" />
        <line x1="280" y1="70" x2="280" y2="260" />
        <line x1="430" y1="70" x2="430" y2="290" />
        {/* Moving jaw */}
        <polygon points="290,80 330,80 340,250 310,270 290,250" fill="rgba(255,255,255,0.05)" />
        <line x1="300" y1="80" x2="320" y2="260" strokeDasharray="3 3" opacity="0.5"/>
        {/* Fixed jaw liner */}
        <line x1="420" y1="80" x2="420" y2="280" strokeDasharray="3 3" opacity="0.5"/>
        {/* Toggle */}
        <polyline points="345,250 290,300 250,300" />
        <circle cx="345" cy="250" r="3" fill="#EDEEF0"/>
        <circle cx="290" cy="300" r="3" fill="#EDEEF0"/>
        {/* Tension rod */}
        <line x1="290" y1="300" x2="180" y2="300" strokeDasharray="4 3"/>
        <rect x="175" y="294" width="12" height="12" />
        {/* Feed material hint */}
        <g opacity="0.45">
          <polygon points="300,70 410,70 380,50 330,50" />
          <circle cx="340" cy="40" r="4"/>
          <circle cx="370" cy="45" r="3"/>
          <circle cx="355" cy="30" r="2.5"/>
        </g>
        {/* Base plinth */}
        <line x1="50" y1="320" x2="510" y2="320"/>
        {[80,140,200,260,320,380,440,480].map((x)=>(
          <line key={x} x1={x} y1="320" x2={x-8} y2="335" />
        ))}
        {/* Dim lines */}
        <g stroke="#C8102E" strokeWidth="1">
          <line x1="70" y1="30" x2="490" y2="30"/>
          <line x1="70" y1="25" x2="70" y2="35"/>
          <line x1="490" y1="25" x2="490" y2="35"/>
        </g>
        <text x="280" y="22" fill="#C8102E" fontFamily="IBM Plex Mono" fontSize="10" textAnchor="middle" letterSpacing="2">L</text>
        <g stroke="#C8102E" strokeWidth="1">
          <line x1="510" y1="50" x2="510" y2="310"/>
          <line x1="505" y1="50" x2="515" y2="50"/>
          <line x1="505" y1="310" x2="515" y2="310"/>
        </g>
        <text x="525" y="185" fill="#C8261E" fontFamily="IBM Plex Mono" fontSize="10" letterSpacing="2">H</text>
        {/* Labels */}
        <g fontFamily="IBM Plex Mono" fontSize="9" fill="#EDEEF0" opacity="0.75">
          <text x="130" y="275" textAnchor="middle">FLYWHEEL</text>
          <text x="355" y="180" textAnchor="middle">CHAMBER</text>
          <text x="355" y="192" textAnchor="middle" opacity="0.55">파쇄실</text>
          <text x="180" y="288" textAnchor="middle">TENSION ROD</text>
          <text x="310" y="315" textAnchor="middle">TOGGLE</text>
        </g>
      </svg>
    </BPFrame>
  );
}

/* Cone Crusher — section view */
function BPCone({ className, sheetNo }) {
  return (
    <BPFrame title="CONE CRUSHER · SECTION" code="FIG.02" sheetNo={sheetNo} className={className}>
      <svg viewBox="0 0 560 360" className="w-full h-full" stroke="#EDEEF0" fill="none" strokeWidth="1.2">
        {/* Top shell / hopper */}
        <polygon points="180,60 380,60 410,110 150,110" />
        <line x1="220" y1="60" x2="220" y2="110" strokeDasharray="3 3" opacity="0.5"/>
        <line x1="340" y1="60" x2="340" y2="110" strokeDasharray="3 3" opacity="0.5"/>
        {/* Concave (fixed bowl) */}
        <path d="M150 110 L170 210 L240 260 L320 260 L390 210 L410 110 Z" />
        {/* Mantle (moving cone) */}
        <polygon points="230,130 330,130 310,235 250,235" fill="rgba(255,255,255,0.06)"/>
        <line x1="280" y1="130" x2="280" y2="235" strokeDasharray="4 4" opacity="0.45"/>
        {/* Main shaft */}
        <line x1="280" y1="60" x2="280" y2="300" />
        <circle cx="280" cy="80" r="3" fill="#EDEEF0"/>
        {/* Eccentric bush */}
        <ellipse cx="280" cy="250" rx="60" ry="14" />
        <line x1="220" y1="250" x2="220" y2="300"/>
        <line x1="340" y1="250" x2="340" y2="300"/>
        {/* Lower frame */}
        <polygon points="150,260 120,320 440,320 410,260" />
        <line x1="240" y1="260" x2="240" y2="320"/>
        <line x1="320" y1="260" x2="320" y2="320"/>
        {/* Spring tightener suggestions */}
        {[130,155,405,430].map((x,i)=>(
          <g key={i}>
            <path d={`M${x} 115 q -4 0 -4 5 t 4 5 t -4 5 t 4 5 t -4 5 t 4 5 t -4 5 t 4 5`}/>
            <rect x={x-6} y="105" width="12" height="5"/>
          </g>
        ))}
        {/* Feed pile */}
        <g opacity="0.45">
          <circle cx="260" cy="50" r="4"/>
          <circle cx="295" cy="42" r="3"/>
          <circle cx="275" cy="30" r="2.5"/>
        </g>
        {/* Base */}
        <line x1="80" y1="320" x2="480" y2="320" />
        {[120,180,240,300,360,420,460].map((x)=>(
          <line key={x} x1={x} y1="320" x2={x-8} y2="335"/>
        ))}
        {/* Dim */}
        <g stroke="#C8261E" strokeWidth="1">
          <line x1="150" y1="40" x2="410" y2="40"/>
          <line x1="150" y1="35" x2="150" y2="45"/>
          <line x1="410" y1="35" x2="410" y2="45"/>
        </g>
        <text x="280" y="32" fill="#C8261E" fontFamily="IBM Plex Mono" fontSize="10" textAnchor="middle" letterSpacing="2">Ø FEED</text>
        {/* Labels */}
        <g fontFamily="IBM Plex Mono" fontSize="9" fill="#EDEEF0" opacity="0.75">
          <text x="410" y="180" textAnchor="start">CONCAVE</text>
          <text x="410" y="192" opacity="0.55">콘케이브</text>
          <text x="280" y="195" textAnchor="middle">MANTLE</text>
          <text x="280" y="207" textAnchor="middle" opacity="0.55">맨틀</text>
          <text x="280" y="275" textAnchor="middle">ECCENTRIC BUSH</text>
          <text x="148" y="95" textAnchor="end" opacity="0.7">HOPPER</text>
        </g>
      </svg>
    </BPFrame>
  );
}

/* Vibrating Screen — side/top */
function BPScreen({ className, sheetNo }) {
  return (
    <BPFrame title="VIBRATING SCREEN · 3-DECK" code="FIG.03" sheetNo={sheetNo} className={className}>
      <svg viewBox="0 0 560 360" className="w-full h-full" stroke="#EDEEF0" fill="none" strokeWidth="1.2">
        {/* Inclined body */}
        <g transform="rotate(-8 280 200)">
          <rect x="110" y="100" width="340" height="180"/>
          {/* 3 decks */}
          <line x1="110" y1="160" x2="450" y2="160"/>
          <line x1="110" y1="220" x2="450" y2="220"/>
          {/* Mesh dots */}
          {[...Array(22)].map((_,i)=>(
            <g key={i} opacity="0.4">
              <circle cx={120+i*15} cy="130" r="1"/>
              <circle cx={120+i*15} cy="190" r="1"/>
              <circle cx={120+i*15} cy="250" r="1"/>
            </g>
          ))}
          {/* Vibrator drum */}
          <circle cx="280" cy="100" r="28"/>
          <circle cx="280" cy="100" r="18"/>
          <circle cx="280" cy="100" r="3" fill="#EDEEF0"/>
          {/* Tie rods */}
          <line x1="140" y1="105" x2="140" y2="275" strokeDasharray="3 3" opacity="0.4"/>
          <line x1="420" y1="105" x2="420" y2="275" strokeDasharray="3 3" opacity="0.4"/>
        </g>
        {/* Springs on supports */}
        {[100, 200, 360, 460].map((x,i)=>(
          <g key={i}>
            {[0,1,2,3,4,5,6].map((k)=>(
              <path key={k} d={`M${x-8} ${260+k*8} q8 -4 16 0`} />
            ))}
            <rect x={x-14} y="320" width="28" height="6"/>
          </g>
        ))}
        {/* Base */}
        <line x1="60" y1="326" x2="500" y2="326"/>
        {[90,150,220,290,360,430,480].map((x)=>(
          <line key={x} x1={x} y1="326" x2={x-8} y2="338"/>
        ))}
        {/* Material streams */}
        <g opacity="0.55" stroke="#C8261E" strokeWidth="1">
          <path d="M440 150 q 20 20 25 50" fill="none"/>
          <path d="M450 215 q 18 15 22 40" fill="none"/>
          <path d="M460 275 q 10 10 12 30" fill="none"/>
        </g>
        {/* Labels */}
        <g fontFamily="IBM Plex Mono" fontSize="9" fill="#EDEEF0" opacity="0.75">
          <text x="300" y="70" textAnchor="start">VIBRATOR</text>
          <text x="95" y="155" textAnchor="end" opacity="0.65">DECK 1</text>
          <text x="95" y="215" textAnchor="end" opacity="0.65">DECK 2</text>
          <text x="95" y="275" textAnchor="end" opacity="0.65">DECK 3</text>
          <text x="490" y="155" textAnchor="start" fill="#FFB9B4">A</text>
          <text x="490" y="215" textAnchor="start" fill="#FFB9B4">B</text>
          <text x="490" y="275" textAnchor="start" fill="#FFB9B4">C</text>
        </g>
      </svg>
    </BPFrame>
  );
}

/* Vibrating Feeder */
function BPFeeder({ className, sheetNo }) {
  return (
    <BPFrame title="VIBRATING FEEDER · ELEVATION" code="FIG.04" sheetNo={sheetNo} className={className}>
      <svg viewBox="0 0 560 360" className="w-full h-full" stroke="#EDEEF0" fill="none" strokeWidth="1.2">
        {/* Hopper */}
        <polygon points="140,50 420,50 360,140 200,140"/>
        <line x1="240" y1="50" x2="240" y2="140" strokeDasharray="3 3" opacity="0.4"/>
        <line x1="320" y1="50" x2="320" y2="140" strokeDasharray="3 3" opacity="0.4"/>
        {/* Trough */}
        <rect x="120" y="140" width="360" height="70" />
        {/* Bar grizzly */}
        {[...Array(10)].map((_,i)=>(
          <line key={i} x1={150+i*32} y1="150" x2={150+i*32} y2="200"/>
        ))}
        {/* Drive motor */}
        <rect x="430" y="160" width="60" height="40"/>
        <circle cx="460" cy="180" r="10"/>
        {/* Springs / supports */}
        {[160, 280, 400].map((x,i)=>(
          <g key={i}>
            {[0,1,2,3,4,5].map((k)=>(
              <path key={k} d={`M${x-8} ${215+k*8} q8 -4 16 0`} />
            ))}
            <rect x={x-14} y="265" width="28" height="6"/>
          </g>
        ))}
        {/* Base */}
        <line x1="80" y1="296" x2="490" y2="296"/>
        {[110,170,230,290,350,410,470].map((x)=>(
          <line key={x} x1={x} y1="296" x2={x-8} y2="308"/>
        ))}
        {/* Material */}
        <g opacity="0.5">
          {[...Array(16)].map((_,i)=>(
            <circle key={i} cx={200+Math.random()*160} cy={60+Math.random()*60} r={Math.random()*3+1}/>
          ))}
        </g>
        <g fontFamily="IBM Plex Mono" fontSize="9" fill="#EDEEF0" opacity="0.75">
          <text x="280" y="40" textAnchor="middle">HOPPER · 호퍼</text>
          <text x="280" y="135" textAnchor="middle">GRIZZLY BARS</text>
          <text x="460" y="155" textAnchor="middle">MOTOR</text>
        </g>
      </svg>
    </BPFrame>
  );
}

/* Plant capacity — flow diagram */
function BPPlantFlow({ className }) {
  const Block = ({ x, y, w, h, label, sub }) => (
    <g>
      <rect x={x} y={y} width={w} height={h} />
      <text x={x + w/2} y={y + h/2 - 4} textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill="#EDEEF0">{label}</text>
      {sub && <text x={x + w/2} y={y + h/2 + 9} textAnchor="middle" fontFamily="Pretendard" fontSize="9" fill="#EDEEF0" opacity="0.55">{sub}</text>}
    </g>
  );
  const Arrow = ({ x1, y1, x2, y2 }) => (
    <g stroke="#C8261E" strokeWidth="1.2" fill="none">
      <line x1={x1} y1={y1} x2={x2-6} y2={y2} />
      <polyline points={`${x2-10},${y2-4} ${x2},${y2} ${x2-10},${y2+4}`} fill="#C8261E" stroke="#C8261E"/>
    </g>
  );
  return (
    <BPFrame title="CRUSHING PLANT · PROCESS FLOW" code="FIG.05" sheetNo="DWG-P" className={className}>
      <svg viewBox="0 0 680 300" className="w-full h-full" stroke="#EDEEF0" fill="none" strokeWidth="1.2">
        <Block x={20}  y={110} w={90} h={50} label="HOPPER" sub="호퍼"/>
        <Arrow x1={110} y1={135} x2={140} y2={135}/>
        <Block x={140} y={110} w={90} h={50} label="FEEDER" sub="피더"/>
        <Arrow x1={230} y1={135} x2={260} y2={135}/>
        <Block x={260} y={110} w={90} h={50} label="JAW" sub="1차 파쇄"/>
        <Arrow x1={350} y1={135} x2={380} y2={135}/>
        <Block x={380} y={110} w={90} h={50} label="CONE" sub="2차 파쇄"/>
        <Arrow x1={470} y1={135} x2={500} y2={135}/>
        <Block x={500} y={110} w={90} h={50} label="SCREEN" sub="선별"/>
        {/* Outputs */}
        <Arrow x1={545} y1={160} x2={545} y2={210}/>
        <Arrow x1={545} y1={160} x2={610} y2={210}/>
        <Arrow x1={545} y1={160} x2={480} y2={210}/>
        <Block x={440} y={210} w={70} h={40} label="A"/>
        <Block x={515} y={210} w={70} h={40} label="B"/>
        <Block x={590} y={210} w={70} h={40} label="C"/>
        {/* Recycle */}
        <path d="M460 210 Q 400 280 380 220 L 380 160" strokeDasharray="4 3"/>
        <text x="400" y="270" fontFamily="IBM Plex Mono" fontSize="9" fill="#EDEEF0" opacity="0.6">RE-CRUSH</text>
        <text x="20" y="60" fontFamily="IBM Plex Mono" fontSize="9" fill="#EDEEF0" opacity="0.5" letterSpacing="2">STANDARD AGGREGATE LINE</text>
      </svg>
    </BPFrame>
  );
}

/* Factory site — abstract orthographic */
function BPSite({ className }) {
  return (
    <BPFrame title="SEONGJU SITE · KEY PLAN" code="FIG.06" sheetNo="DWG-S" className={className}>
      <svg viewBox="0 0 560 300" className="w-full h-full" stroke="#EDEEF0" fill="none" strokeWidth="1.2">
        {/* Site boundary */}
        <polygon points="40,40 500,40 520,240 30,240" strokeDasharray="4 4" opacity="0.5"/>
        {/* Plots */}
        <rect x="60" y="60" width="180" height="120"/>
        <rect x="250" y="60" width="110" height="120"/>
        <rect x="370" y="60" width="130" height="120"/>
        <rect x="60" y="190" width="300" height="40"/>
        {/* Hatching */}
        {[...Array(9)].map((_,i)=>(
          <line key={i} x1={60 + i*20} y1="60" x2={60+i*20-30} y2="180" opacity="0.15"/>
        ))}
        {/* Labels */}
        <g fontFamily="IBM Plex Mono" fontSize="10" fill="#EDEEF0">
          <text x="150" y="125" textAnchor="middle">934-9</text>
          <text x="150" y="138" textAnchor="middle" fontSize="9" opacity="0.6">HQ · 본사</text>
          <text x="305" y="125" textAnchor="middle">934-13</text>
          <text x="305" y="138" textAnchor="middle" fontSize="9" opacity="0.6">FACTORY</text>
          <text x="435" y="125" textAnchor="middle">934-14</text>
          <text x="435" y="138" textAnchor="middle" fontSize="9" opacity="0.6">FACTORY</text>
          <text x="210" y="215" textAnchor="middle">940</text>
          <text x="240" y="215" textAnchor="start" fontSize="9" opacity="0.6">FACTORY</text>
        </g>
        {/* North arrow */}
        <g transform="translate(500,60)">
          <line x1="0" y1="0" x2="0" y2="-25" stroke="#C8261E"/>
          <polyline points="-4,-18 0,-25 4,-18" stroke="#C8261E" fill="none"/>
          <text x="0" y="10" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fill="#C8261E">N</text>
        </g>
        {/* Road */}
        <line x1="30" y1="260" x2="520" y2="260" opacity="0.5"/>
        <line x1="30" y1="268" x2="520" y2="268" opacity="0.5" strokeDasharray="8 6"/>
        <text x="275" y="285" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fill="#EDEEF0" opacity="0.55">사곡길</text>
      </svg>
    </BPFrame>
  );
}

Object.assign(window, { BPJaw, BPCone, BPScreen, BPFeeder, BPPlantFlow, BPSite });
