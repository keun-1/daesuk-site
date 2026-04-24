/* ================================================================
   Data — product catalog, parts, plant lineup, facilities
   ================================================================ */

const PRODUCTS = [
  { id: "jaw",      ko: "죠 크러셔",          en: "Jaw Crusher",       group: "crushing", fig: "FIG.01" },
  { id: "cone",     ko: "콘 크러셔",          en: "Cone Crusher",      group: "crushing", fig: "FIG.02" },
  { id: "screen",   ko: "진동 스크린",        en: "Vibrating Screen",  group: "screening", fig: "FIG.03" },
  { id: "feeder",   ko: "바이브레이팅 피더",  en: "Vibrating Feeder",  group: "screening", fig: "FIG.04" },
];

const PRODUCT_DATA = {
  jaw: {
    overview: "1차 파쇄(Primary crushing)를 담당하는 기본 설비입니다. 투입구 규격(Feed opening)에 따라 라인업이 구성되며, 중·대형 골재 채취 현장의 선단에 배치됩니다.",
    principles: [
      "편심축의 회전으로 무빙 죠(Moving Jaw)가 왕복 운동",
      "고정 죠(Fixed Jaw)와의 간격 변화로 원석을 파쇄",
      "토글 플레이트와 텐션 로드가 반력을 흡수",
    ],
    cols: ["모델 · Model", "투입구 · Feed Opening (mm)", "타입 · Type", "비고 · Remark"],
    rows: [
      ["5040",   "500 × 1,000", "Double Toggle",  "대형"],
      ["4840",   "480 × 1,000", "Double Toggle",  "표준"],
      ["4230",   "420 × 760",   "Double Toggle",  "중형"],
      ["Custom", "현장 맞춤 제작", "—",            "문의 시 설계"],
    ],
    parts: [
      ["Fixed Jaw", "고정 죠"],
      ["Moving Jaw", "무빙 죠"],
      ["Cheek Plate (Up / Down)", "치크 플레이트 (상/하)"],
      ["Wedge / Wedge Bolt", "웨지 / 웨지 볼트"],
      ["Toggle Block · Seat · Plate", "토글 블록 · 시트 · 플레이트"],
      ["Tension Rod", "텐션 로드"],
      ["Tension Spring", "텐션 스프링"],
      ["Wedge Fixed Spring", "웨지 고정 스프링"],
    ],
  },
  cone: {
    overview: "2차·3차 파쇄에 사용되는 콘 크러셔. 편심 부싱의 회전으로 맨틀(Mantle)과 콘케이브(Concave) 사이 간격을 변화시켜 원석을 반복 압쇄합니다. 고경도 원석 장기 운용에 적합합니다.",
    principles: [
      "편심 부싱(Eccentric Bush)이 메인 샤프트를 회전",
      "맨틀–콘케이브 사이의 닫힘 간격(CSS)에 의해 입도 결정",
      "상부 스프링 어셈블리로 관입물 배출(Tramp release)",
    ],
    cols: ["모델 · Model", "등급 · Class", "용도 · Stage", "비고 · Remark"],
    rows: [
      ["1300 Cone",   "중형",   "2차 / 3차", "표준 라인"],
      ["1680 Cone",   "대형",   "2차",       "고용량"],
      ["Custom",      "—",     "현장 요구",  "문의 시 설계"],
    ],
    parts: [
      ["Mantle", "맨틀"],
      ["Concave", "콘케이브"],
      ["Distributor", "디스트리뷰터"],
      ["Hopper & Top Shell Liner", "호퍼 & 탑셸 라이너"],
      ["Tightener (CC / CSH / Nut / Washer)", "타이트너 일체"],
      ["Seat Liner", "시트 라이너"],
      ["Main Frame Bush", "메인 프레임 부싱"],
      ["Eccentric Bush", "편심 부싱"],
      ["Thrust Plate", "스러스트 플레이트"],
      ["Bevel Gear · Pinion Gear", "베벨 · 피니언 기어"],
      ["Dust Seal Ring", "더스트 씰 링"],
      ["Housing Liner · Rib Liner", "하우징 · 립 라이너"],
      ["Locking Collar CSH", "록킹 칼라"],
      ["Spring & Cap · U-Bolt Ass'y", "스프링 & 캡 · U-볼트"],
    ],
  },
  screen: {
    overview: "파쇄 후 골재의 선별을 담당하는 진동 스크린. 2단 또는 3단 덱 구성으로 현장이 요구하는 입도(Size)에 맞춰 제작합니다.",
    principles: [
      "편심축 회전으로 스크린 바디 전체가 진동",
      "덱 메쉬(Mesh) 규격에 따라 골재 입도 분류",
      "경사 각도와 진동수로 처리량 조절",
    ],
    cols: ["모델 · Model", "덱 수 · Decks", "타입 · Type", "비고 · Remark"],
    rows: [
      ["OP-2 2160", "2 Deck", "Inclined", "표준"],
      ["OP-3 2160", "3 Deck", "Inclined", "표준"],
      ["OP-3 2470", "3 Deck", "Inclined", "대형"],
      ["Custom",    "—",     "—",         "문의 시 설계"],
    ],
    parts: [
      ["Screen Body Frame", "스크린 바디 프레임"],
      ["Vibrator Shaft", "바이브레이터 샤프트"],
      ["Side Plate", "사이드 플레이트"],
      ["Spring", "스프링"],
      ["Mesh (각 덱)", "메쉬 (각 덱)"],
    ],
  },
  feeder: {
    overview: "호퍼에서 크러셔로 원석을 정량 공급하는 바이브레이팅 피더. 그리즐리 바(Grizzly bar)를 통해 소경 골재를 사전 분류할 수 있습니다.",
    principles: [
      "전자식/편심식 진동으로 원석 이송",
      "그리즐리 바 간격으로 언더사이즈 분리",
      "속도 조절로 후단 크러셔 부하 제어",
    ],
    cols: ["모델 · Model", "타입 · Type", "비고 · Remark"],
    rows: [
      ["QH-1042", "Electromagnetic", "표준"],
      ["QH-1248", "Electromagnetic", "대형"],
      ["Custom",  "—",               "문의 시 설계"],
    ],
    parts: [
      ["Trough Body", "트로프 본체"],
      ["Grizzly Bar", "그리즐리 바"],
      ["Spring", "스프링"],
      ["Motor / Vibrator", "모터 / 바이브레이터"],
    ],
  },
};

const PLANT_LINEUP = [
  { t: "50",  u: "T/HR", d: "소형 골재 생산 라인", comp: "Hopper · Feeder · Jaw · Screen" },
  { t: "100", u: "T/HR", d: "중·소형 표준 라인",   comp: "+ 1차 Cone" },
  { t: "150", u: "T/HR", d: "중형 라인",           comp: "+ 2단 Screen" },
  { t: "200", u: "T/HR", d: "중·대형 라인",       comp: "+ 2차 Cone" },
  { t: "300", u: "T/HR", d: "대형 라인",           comp: "+ 3단 Screen" },
];

const FACILITIES = [
  ["01", "선반",    "Lathe",            "Ø900 × 4,000", "1"],
  ["02", "밀링",    "Milling Machine",  "6호기",          "1"],
  ["03", "드릴",    "Drilling Machine", "1,500",          "1"],
  ["04", "크레인",  "Crane",            "30 Ton",         "1"],
  ["05", "크레인",  "Crane",            "10 Ton",         "1"],
  ["06", "크레인",  "Crane",            "2.8 Ton",        "1"],
  ["07", "지게차",  "Forklift Truck",   "10 Ton",         "1"],
];

const COMPANY = {
  name_ko: "대석산업(주)",
  name_en: "DAE SUK INDUSTRIAL CO., LTD.",
  ceo_ko: "박강호",
  ceo_en: "PARK, KANG-HO",
  since: "2012",
  tel: "054-933-0936",
  fax: "054-933-0937",
  mobile: "010-3829-3034",
  email: "pkh2000@hanmail.net",
  addr_ko: "경상북도 성주군 용암면 사곡길 35",
  addr_ko2: "(사곡리 934-9)",
  addr_en_1: "35, Sagok-gil, Yongam-myeon,",
  addr_en_2: "Seongju-gun, Gyeongsangbuk-do, Korea",
  plots: [
    { addr: "사곡리 934-9",  role: "HQ · 본사" },
    { addr: "사곡리 934-13", role: "FACTORY · 공장" },
    { addr: "사곡리 934-14", role: "FACTORY · 공장" },
    { addr: "사곡리 940",    role: "FACTORY · 공장" },
  ],
};

/* ================================================================
   New data — references, process, FAQ, parts inventory
   ================================================================ */

const REFERENCES = [
  { yr: "2024", site: "경북 K 골재단지",   scope: "150 T/HR 라인 증설",        eq: "JAW 4840 · CONE 1300 · SCREEN OP-3" },
  { yr: "2023", site: "충북 S 채석장",     scope: "200 T/HR 플랜트 신설",      eq: "JAW 5040 · CONE 1680 · SCREEN OP-3 2470" },
  { yr: "2023", site: "강원 D 골재",       scope: "콘 크러셔 교체",            eq: "CONE 1300" },
  { yr: "2022", site: "경남 H 리사이클링", scope: "순환골재 라인 제작",         eq: "JAW 4230 · SCREEN OP-2 2160" },
  { yr: "2022", site: "경북 M 채석장",     scope: "피더·스크린 증설",          eq: "FEEDER QH-1248 · SCREEN OP-3 2160" },
  { yr: "2021", site: "전북 J 골재",       scope: "100 T/HR 라인 신설",        eq: "JAW 4840 · CONE 1300 · SCREEN OP-2" },
  { yr: "2021", site: "경북 성주 현장",    scope: "맨틀·콘케이브 정기 교체",   eq: "CONE PARTS" },
  { yr: "2020", site: "경기 P 건설폐기물", scope: "파쇄·선별 플랜트",           eq: "JAW 4230 · SCREEN OP-2" },
];

const PROCESS = [
  { n: "01", ko: "의뢰 · 현장 조사",   en: "Inquiry & Site Survey",        d: "전화·이메일 접수 후 필요 시 현장 실측. 원석 경도·요구 입도·처리량 협의." },
  { n: "02", ko: "설계 · 제안",        en: "Design & Proposal",           d: "현장 조건에 맞춘 설비 구성·라인 설계도·견적 제안." },
  { n: "03", ko: "자체 제작",          en: "In-house Fabrication",        d: "자체 가공 설비로 핵심 부품 가공·조립. 중간 검수 제공." },
  { n: "04", ko: "현장 설치",          en: "Site Installation",           d: "30톤 크레인·10톤 지게차로 반입·설치. 전기·배관 연동." },
  { n: "05", ko: "시운전 · 인계",      en: "Commissioning & Handover",    d: "무부하·부하 시운전. \n운전원 교육 및 매뉴얼 제공." },
  { n: "06", ko: "A/S · 부품 공급",    en: "After-Sales & Parts Supply",  d: "정품 부품 상시 공급, \n긴급 출동 정비 대응." },
];

const FAQ = [
  {
    q: "표준 모델이 아닌 현장 맞춤 사양으로도 제작이 가능한가요?",
    a: "네. 대석산업은 카탈로그 치수가 아닌 현장 조건에 맞춰 제작하는 것을 기본 원칙으로 합니다. 투입구 규격·프레임 치수·전동 용량을 현장 요구에 맞춰 설계·제작합니다."
  },
  {
    q: "납기는 어느 정도 걸리나요?",
    a: "표준 라인업 기준 통상 8~14주 수준이며, 부품 수급·사양·현장 일정에 따라 달라집니다. 정확한 납기는 문의 주시면 제안 단계에서 확정해 드립니다."
  },
  {
    q: "소모성 부품(맨틀·콘케이브·죠 등)만 따로 구매 가능한가요?",
    a: "가능합니다. 대석산업은 타사 장비라도 모델·치수를 공유해 주시면 호환 부품을 제작·공급합니다. 정기 소모품은 재주문 고객 대상으로 리드타임을 단축해 드립니다."
  },
  {
    q: "A/S는 어떻게 진행되나요?",
    a: "본사(성주)에서 영남권은 당일 출동, 그 외 지역은 익일 출동을 원칙으로 합니다. 정품 부품은 상시 재고를 유지하며, 긴급 사안은 대표 모바일(010-3829-3034)로 직접 연락 바랍니다."
  },
  {
    q: "플랜트 전체(턴키) 발주도 가능한가요?",
    a: "네. 부지 조사·라인 설계·자체 제작·현장 설치·시운전까지 일괄 수행합니다. 50 T/HR부터 300 T/HR급 이상 대형 라인까지 설계한 실적이 있습니다."
  },
  {
    q: "기존 장비의 개조·업그레이드가 가능한가요?",
    a: "가능합니다. 기존 라인의 병목 공정(피더 속도·스크린 처리량 등) 개선, 모터 교체, 콘 크러셔 타이트너 업그레이드 등의 개조 실적이 있습니다."
  },
];

/* Parts quick-lookup — by equipment model family */
const PARTS_INVENTORY = [
  { family: "JAW 5040 · 4840 · 4230", items: "Fixed Jaw · Moving Jaw · Cheek Plate · Toggle Block/Seat/Plate · Tension Rod/Spring · Wedge/Bolt" },
  { family: "CONE 1300 · 1680",       items: "Mantle · Concave · Distributor · Top Shell Liner · Tightener · Eccentric Bush · Bevel/Pinion Gear · Thrust Plate · Dust Seal Ring" },
  { family: "SCREEN OP-2 · OP-3",     items: "Vibrator Shaft · Side Plate · Spring · Mesh (Deck 1/2/3) · Body Frame" },
  { family: "FEEDER QH-1042 · QH-1248", items: "Trough Body · Grizzly Bar · Spring · Motor/Vibrator" },
];

Object.assign(window, { PRODUCTS, PRODUCT_DATA, PLANT_LINEUP, FACILITIES, COMPANY, REFERENCES, PROCESS, FAQ, PARTS_INVENTORY });
