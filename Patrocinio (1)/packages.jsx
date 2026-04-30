// VOID:LIVE — Packages: single horizontal comparison table card
const { useState, useEffect } = React;

const TIERS = [
  { id: 'basic', name: 'BÁSICO', price: '$15K', priceFull: '$15,000', unit: 'MXN / sesión', tagline: 'Presencia visible', pill: null },
  { id: 'inter', name: 'INTERMEDIO', price: '$35K', priceFull: '$35,000', unit: 'MXN / sesión', tagline: 'Más popular', pill: 'Recomendado' },
  { id: 'premium', name: 'PREMIUM', price: '$80K', priceFull: '$80,000', unit: 'MXN / sesión', tagline: 'Patrocinador único', pill: 'Exclusivo' },
];

const FEATURES = [
  { group: 'Visibilidad básica', label: 'Logo en end card de YouTube', basic: true, inter: true, premium: true },
  { group: 'Visibilidad básica', label: 'Mención en descripción de videos', basic: true, inter: true, premium: true },
  { group: 'Visibilidad básica', label: 'Tag en publicaciones de redes', basic: true, inter: true, premium: true },
  { group: 'Visibilidad ampliada', label: 'Logo en TODAS las plataformas', basic: false, inter: true, premium: true },
  { group: 'Visibilidad ampliada', label: 'Logo al inicio del contenido', basic: false, inter: true, premium: true },
  { group: 'Visibilidad ampliada', label: 'Mención en múltiples publicaciones', basic: false, inter: true, premium: true },
  { group: 'Contenido dedicado', label: '1 Reel o TikTok dedicado a tu marca', basic: false, inter: true, premium: true },
  { group: 'Contenido dedicado', label: 'Logo al final del contenido', basic: false, inter: false, premium: true },
  { group: 'Contenido dedicado', label: 'Product placement en la sesión', basic: false, inter: false, premium: true },
  { group: 'Contenido dedicado', label: 'Segmento branded en la sesión', basic: false, inter: false, premium: true },
  { group: 'Exclusividad', label: 'Licencia de uso del contenido', basic: false, inter: false, premium: true },
  { group: 'Exclusividad', label: 'Patrocinador único · sin competencia', basic: false, inter: false, premium: true },
];

function Check({ on }) {
  if (on) {
    return (
      <span className="check check-on" aria-label="Incluido">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="14" height="14">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </span>
    );
  }
  return <span className="check check-off" aria-label="No incluido">—</span>;
}

function ComparisonTable() {
  // Group rows by .group
  const grouped = [];
  let current = null;
  FEATURES.forEach((f) => {
    if (!current || current.group !== f.group) {
      current = { group: f.group, items: [] };
      grouped.push(current);
    }
    current.items.push(f);
  });

  return (
    <div className="cmp-card">
      {/* Header row with tier columns */}
      <div className="cmp-head">
        <div className="cmp-head-cell cmp-head-spacer">
          <span className="eyebrow" style={{color: 'var(--void-muted)'}}>Comparativa de paquetes</span>
        </div>
        {TIERS.map((t) => (
          <div
            key={t.id}
            className={`cmp-head-cell cmp-tier ${t.id === 'inter' ? 'cmp-tier-featured' : ''} ${t.id === 'premium' ? 'cmp-tier-premium' : ''}`}
          >
            {t.pill && <span className="cmp-pill">{t.pill}</span>}
            <span className="cmp-tier-name">{t.name}</span>
            <span className="cmp-tier-price">{t.price}</span>
            <span className="cmp-tier-unit">{t.unit}</span>
            <span className="cmp-tier-tagline">{t.tagline}</span>
          </div>
        ))}
      </div>

      {/* Body — grouped feature rows */}
      <div className="cmp-body">
        {grouped.map((g, gi) => (
          <React.Fragment key={gi}>
            <div className="cmp-group-row">
              <div className="cmp-cell cmp-group-label">{g.group}</div>
              <div className="cmp-cell"></div>
              <div className="cmp-cell cmp-tier-col-featured"></div>
              <div className="cmp-cell cmp-tier-col-premium"></div>
            </div>
            {g.items.map((f, i) => (
              <div className="cmp-row" key={`${gi}-${i}`}>
                <div className="cmp-cell cmp-feat">{f.label}</div>
                <div className="cmp-cell cmp-check-cell"><Check on={f.basic} /></div>
                <div className="cmp-cell cmp-check-cell cmp-tier-col-featured"><Check on={f.inter} /></div>
                <div className="cmp-cell cmp-check-cell cmp-tier-col-premium"><Check on={f.premium} /></div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      {/* Footer CTAs */}
      <div className="cmp-foot">
        <div className="cmp-cell"></div>
        {TIERS.map((t) => (
          <div key={t.id} className={`cmp-cell ${t.id === 'inter' ? 'cmp-tier-col-featured' : ''} ${t.id === 'premium' ? 'cmp-tier-col-premium' : ''}`}>
            <a
              href={`https://wa.me/523322064275?text=${encodeURIComponent('Hola VOID:LIVE — me interesa el paquete ' + t.name)}`}
              className={`cmp-cta ${t.id === 'inter' ? 'cmp-cta-primary' : ''}`}
              target="_blank"
              rel="noopener"
            >
              Elegir {t.name.charAt(0) + t.name.slice(1).toLowerCase()}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="12" height="12">
                <path d="M7 17L17 7M17 7H8M17 7v9"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "showFeaturedHighlight": true
}/*EDITMODE-END*/;

function PackagesApp() {
  return (
    <>
      <ComparisonTable />
      <TweaksPanel title="Tweaks">
        <TweakSection title="Sobre los paquetes">
          <p style={{fontSize: 12, color: '#666', lineHeight: 1.5}}>
            Comparativa horizontal · una sola card. La columna Intermedio destaca como recomendada con tinte azul eléctrico.
          </p>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('pkg-render'));
root.render(<PackagesApp />);
