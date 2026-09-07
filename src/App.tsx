import { useState } from 'react';
import { Lang } from './types';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { PantteonPage } from './pages/projects/PantteonPage';
import { CanalEticoPage } from './pages/projects/CanalEticoPage';
import { RsIngenieriaPage } from './pages/projects/RsIngenieriaPage';

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <Routes>
      <Route 
      path='/'
      element={
        <HomePage  lang={lang} setLang={setLang} />
      }
      />

      <Route 
      path='/projects/canal-etico'
      element={
        <CanalEticoPage lang={lang} setLang={setLang} />
      }
      />

      <Route 
      path='/projects/pantteon'
      element={
        <PantteonPage lang={lang} setLang={setLang} />
      }
      />

      <Route 
      path='/projects/rs-ingenieria'
      element={
        <RsIngenieriaPage lang={lang} setLang={setLang} />
      }
      />

    </Routes>
  );
}
