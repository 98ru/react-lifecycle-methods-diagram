parcelRequire = (function (e) { const r = typeof parcelRequire === 'function' && parcelRequire; const n = typeof require === 'function' && require; let i = {}; function u(e, u) { if (e in i) return i[e]; const t = typeof parcelRequire === 'function' && parcelRequire; if (!u && t) return t(e, !0); if (r) return r(e, !0); if (n && typeof e === 'string') return n(e); const o = new Error(`Cannot find module '${e}'`); throw o.code = 'MODULE_NOT_FOUND', o; } return u.register = function (e, r) { i[e] = r; }, i = e(u), u.modules = i, u; }((require) => {
  let a = {}; a = {
    'React lifecycle methods diagram': 'Diagramma dei cicli di vita di React', Options: 'Opzioni', 'Show less common lifecycles': 'Mostra cicli di vita meno comuni', 'React version': 'Versione React', Language: 'Lingua', Mounting: 'Montaggio', Updating: 'Aggiornamento', Unmounting: 'Smontaggio', '\u201C{name} phase\u201D': '\u201CFase {name}\u201D', 'Pure and has no side effects. May be paused, aborted or restarted by React.': 'Pura e senza side-effects, pu\xF2 essere messa in pausa, abortita o re-iniziata da React', 'Can read the DOM.': 'Pu\xF2 leggere il DOM.', 'Can work with DOM, run side effects, schedule updates.': 'Pu\xF2 agire sul DOM, eseguire side-effects, pianificare aggiornamenti.', 'React updates DOM and refs': 'React aggiorna il DOM ed i riferimenti', 'Read docs for {name} (opens in a new tab)': 'Leggi la documentazione per {name} (si apre in una nuova tab)', "See project's page on GitHub (opens in a new tab)": 'Visualizza la pagina del progetto su GitHub (si apre in una nuova tab)', 'See project on': 'Guarda il progetto su',
  }; if (typeof exports === 'object' && typeof module !== 'undefined') { module.exports = a; } else if (typeof define === 'function' && define.amd) { define(() => a); } return { WZbe: a };
}));
