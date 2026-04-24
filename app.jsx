/* ================================================================
   Root app — SIMPLIFIED 3-section structure
   Hero · Equipment · Company · Contact (+ Footer)
   ================================================================ */

const { useState, useEffect } = React;

function App() {
  const [toast, setToast] = useState(null);
  const [active, setActive] = useState("top");
  const [prefill, setPrefill] = useState(null);
  const [eqTab, setEqTab] = useState("all");
  const [eqProduct, setEqProduct] = useState("jaw");

  const onJump = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: id === "top" ? 0 : y, behavior: "smooth" });
  };

  const onJumpToProduct = (productId) => {
    setEqTab("crushers");
    setEqProduct(productId);
    setTimeout(() => onJump("equipment"), 30);
  };

  useEffect(() => {
    const ids = ["equipment","company","contact"];
    const onScroll = () => {
      const pos = window.scrollY + 200;
      let cur = "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-paper min-h-screen">
      <Masthead active={active} onJump={onJump}/>
      <main>
        <Hero onJump={onJump} onPrefill={setPrefill} onJumpToProduct={onJumpToProduct}/>
        <Equipment onJump={onJump} onPrefill={setPrefill} tab={eqTab} setTab={setEqTab} activeProduct={eqProduct} setActiveProduct={setEqProduct}/>
        <Company onJump={onJump}/>
        <Contact onSubmitted={() => setToast(Date.now())} prefill={prefill} clearPrefill={() => setPrefill(null)}/>
      </main>
      <MapStrip/>
      <Footer onJump={onJump}/>
      <StickyCTA onJump={onJump} visible={active !== "top" && active !== "contact"}/>
      <Toast message={toast} onClose={() => setToast(null)}/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
