
// Eliminar

// ── Mockups ───────────────────────────────────────────────────────────────────

export function CanalEticoMockup() {
  return (
    <div className="relative w-full bg-[#0c0c14] rounded-xl overflow-hidden border border-white/10" style={{ aspectRatio: '16/10' }}>
      <div className="flex items-center gap-2 px-4 h-9 bg-[#07070f] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 mx-6 bg-white/5 rounded-md text-[10px] text-white/25 px-3 py-0.5 text-center font-mono">
          app.canalético.com/dashboard
        </div>
        <div className="w-6 h-6 rounded-full bg-white/10" />
      </div>
      <div className="flex" style={{ height: 'calc(100% - 36px)' }}>
        <div className="w-44 bg-[#070710] border-r border-white/5 p-3 flex flex-col gap-0.5 flex-shrink-0">
          <div className="flex items-center gap-2 px-2 py-2.5 mb-3">
            <div className="w-5 h-5 rounded bg-[#c8f135]/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-sm bg-[#c8f135]" />
            </div>
            <span className="text-[11px] font-semibold text-white/70">Canal Ético</span>
          </div>
          {[
            { label: 'Dashboard', active: false },
            { label: 'Reportes', active: true },
            { label: 'Empresas', active: false },
            { label: 'Usuarios', active: false },
            { label: 'Configuración', active: false },
          ].map(({ label, active }) => (
            <div key={label} className={`text-[10px] px-2.5 py-2 rounded-md ${active ? 'bg-[#c8f135]/15 text-[#c8f135]' : 'text-white/30 hover:text-white/50'}`}>
              {label}
            </div>
          ))}
        </div>
        <div className="flex-1 p-5 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[12px] font-semibold text-white/80">Reportes Activos</div>
            <div className="bg-[#c8f135] text-black text-[9px] px-3 py-1 rounded-full font-semibold">+ Nuevo Reporte</div>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[['24', 'Abiertos', '#c8f135'], ['8', 'En Revisión', '#60a5fa'], ['142', 'Cerrados', 'rgba(255,255,255,0.3)']].map(([n, l, c]) => (
              <div key={l} className="bg-white/5 rounded-lg p-3">
                <div className="text-[18px] font-bold leading-none mb-1" style={{ color: c as string }}>{n}</div>
                <div className="text-white/35 text-[9px]">{l}</div>
              </div>
            ))}
          </div>
          <div className="rounded-lg overflow-hidden border border-white/5">
            <div className="grid text-[9px] text-white/25 px-3 py-2 bg-white/3 border-b border-white/5 font-mono" style={{ gridTemplateColumns: '44px 1fr 72px 64px' }}>
              <span>ID</span><span>Categoría</span><span>Fecha</span><span>Estado</span>
            </div>
            {[
              ['#0241', 'Acoso laboral', '14 Ene 25', 'Abierto', 'lime'],
              ['#0240', 'Fraude financiero', '12 Ene 25', 'En revisión', 'blue'],
              ['#0239', 'Discriminación', '09 Ene 25', 'Cerrado', 'dim'],
              ['#0238', 'Corrupción', '07 Ene 25', 'Cerrado', 'dim'],
            ].map(([id, cat, date, status, type]) => (
              <div key={id} className="grid text-[9px] px-3 py-2.5 border-b border-white/4 text-white/45 hover:bg-white/3" style={{ gridTemplateColumns: '44px 1fr 72px 64px' }}>
                <span className="text-white/60 font-mono">{id}</span>
                <span>{cat}</span>
                <span>{date}</span>
                <span style={{ color: type === 'lime' ? '#c8f135' : type === 'blue' ? '#60a5fa' : 'rgba(255,255,255,0.2)' }}>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function PantteonMockup() {
  return (
    <div className="flex items-center justify-center py-6" style={{ height: 340, position: 'relative' }}>
      {/* Back phone */}
      <div style={{
        width: 138, aspectRatio: '9/19.5', background: '#0e0e1a', borderRadius: 22,
        border: '2px solid rgba(255,255,255,0.1)', overflow: 'hidden', position: 'absolute',
        left: '50%', top: 0, transform: 'translateX(-80%) translateY(8%) rotate(-6deg)', opacity: 0.55, zIndex: 0,
      }}>
        <div style={{ height: 24, background: '#08081a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 36, height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 2 }} />
        </div>
        <div style={{ padding: '10px 10px' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 12, height: 70, marginBottom: 8 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            {[...Array(4)].map((_, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 8, height: 54 }} />
            ))}
          </div>
        </div>
      </div>
      {/* Front phone */}
      <div style={{
        width: 148, aspectRatio: '9/19.5', background: '#0e0e1c', borderRadius: 24,
        border: '2px solid rgba(255,255,255,0.15)', overflow: 'hidden', position: 'relative', zIndex: 1,
        transform: 'rotate(2deg)',
      }}>
        <div style={{ height: 26, background: '#080816', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 38, height: 4, background: 'rgba(255,255,255,0.25)', borderRadius: 2 }} />
        </div>
        <div style={{ padding: '12px 12px', flex: 1 }}>
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 3, fontFamily: 'Outfit, sans-serif' }}>Pantteon</div>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontFamily: 'Outfit, sans-serif' }}>Your digital vault</div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #13132a 0%, #1a1a3e 100%)', borderRadius: 14, height: 86, marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(200,241,53,0.08) 0%, transparent 60%)' }} />
            <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid rgba(200,241,53,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#c8f135' }} />
            </div>
          </div>
          {[['Electronics', '14 items'], ['Documents', '8 items'], ['Collectibles', '23 items']].map(([title, count]) => (
            <div key={title} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)', fontFamily: 'Outfit, sans-serif' }}>{title}</span>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontFamily: 'Outfit, sans-serif' }}>{count}</span>
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 42, background: 'rgba(8,8,20,0.95)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'space-around', borderTop: '1px solid rgba(255,255,255,0.07)', paddingBottom: 4 }}>
          {[true, false, false, false].map((active, i) => (
            <div key={i} style={{ width: 20, height: 20, borderRadius: 6, background: active ? 'rgba(200,241,53,0.2)' : 'rgba(255,255,255,0.08)', border: active ? '1px solid rgba(200,241,53,0.3)' : 'none' }} />
          ))}
        </div>
      </div>
      {/* Third phone barely visible */}
      <div style={{
        width: 130, aspectRatio: '9/19.5', background: '#0a0a16', borderRadius: 20,
        border: '2px solid rgba(255,255,255,0.07)', overflow: 'hidden', position: 'absolute',
        left: '50%', top: 0, transform: 'translateX(20%) translateY(12%) rotate(7deg)', opacity: 0.35, zIndex: 0,
      }}>
        <div style={{ height: 22, background: '#06060e' }} />
        <div style={{ padding: 8 }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, height: 60, marginBottom: 7 }} />
          <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 10, height: 40, marginBottom: 7 }} />
          <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 10, height: 40 }} />
        </div>
      </div>
    </div>
  )
}

export function RSIngenieriaMockup() {
  return (
    <div className="relative w-full bg-[#f2f1ed] rounded-xl overflow-hidden border border-black/10" style={{ aspectRatio: '16/9' }}>
      <div className="flex items-center gap-2 px-4 h-8 bg-[#e4e3df] border-b border-black/8">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-black/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-black/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-black/15" />
        </div>
        <div className="flex-1 mx-5 bg-white/80 rounded text-[9px] text-black/35 px-2 py-0.5 text-center font-mono">
          rsingenieria.com
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between px-6 py-3 border-b border-black/6 bg-white">
          <div className="text-[12px] font-bold text-gray-800 tracking-tight">RS Ingeniería</div>
          <div className="hidden sm:flex gap-5">
            {['Inicio', 'Servicios', 'Proyectos', 'Nosotros'].map(item => (
              <div key={item} className="text-[9px] text-gray-500">{item}</div>
            ))}
          </div>
          <div className="bg-[#1a2234] text-white text-[9px] px-3 py-1.5 rounded font-medium">Contáctenos</div>
        </div>
        <div className="bg-[#1a2234] text-white px-7 py-7">
          <div className="text-[9px] text-blue-300 mb-1.5 uppercase tracking-widest font-mono">Ingeniería de Precisión</div>
          <div className="text-[20px] font-bold leading-tight mb-2.5 tracking-tight">Soluciones de Ingeniería<br />Para el Mundo Real</div>
          <div className="text-[10px] text-white/45 mb-4 max-w-xs leading-relaxed">Diseño, construcción y supervisión de proyectos de ingeniería civil e industrial con más de 15 años de experiencia.</div>
          <div className="flex gap-3">
            <div className="bg-blue-500 text-white text-[9px] px-4 py-1.5 rounded font-medium">Ver Proyectos</div>
            <div className="border border-white/25 text-white/70 text-[9px] px-4 py-1.5 rounded">Contactar</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 px-7 py-5 bg-[#f2f1ed]">
          {[
            ['Diseño Estructural', 'Análisis y diseño de estructuras civiles e industriales de alto rendimiento.'],
            ['Supervisión de Obra', 'Control de calidad y supervisión técnica especializada en campo.'],
            ['Consultoría Técnica', 'Asesoría especializada para proyectos complejos y de gran escala.'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white rounded-xl p-4 shadow-sm border border-black/5">
              <div className="w-7 h-7 bg-blue-50 rounded-lg mb-3 flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-400 rounded-sm" />
              </div>
              <div className="text-[10px] font-semibold text-gray-800 mb-1.5">{title}</div>
              <div className="text-[8px] text-gray-500 leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
