parcelRequire = (function (e) { const r = typeof parcelRequire === 'function' && parcelRequire; const n = typeof require === 'function' && require; let i = {}; function u(e, u) { if (e in i) return i[e]; const t = typeof parcelRequire === 'function' && parcelRequire; if (!u && t) return t(e, !0); if (r) return r(e, !0); if (n && typeof e === 'string') return n(e); const o = new Error(`Cannot find module '${e}'`); throw o.code = 'MODULE_NOT_FOUND', o; } return u.register = function (e, r) { i[e] = r; }, i = e(u), u.modules = i, u; }((require) => {
  let a = {}; a = {
    'React lifecycle methods diagram': '\uB798\uC561\uD2B8 \uC0DD\uBA85\uC8FC\uAE30 \uB2E4\uC774\uC544\uADF8\uB7A8', Options: '\uC635\uC158', 'Show less common lifecycles': '\uB35C \uC77C\uBC18\uC801\uC778 \uB77C\uC774\uD504 \uC0AC\uC774\uD074 \uD45C\uC2DC', 'React version': 'React \uBC84\uC804', Language: '\uC5B8\uC5B4', Mounting: '\uC0DD\uC131 \uB420 \uB54C', Updating: '\uC5C5\uB370\uC774\uD2B8 \uD560 \uB54C', Unmounting: '\uC81C\uAC70 \uD560 \uB54C', '\u201C{name} phase\u201D': '\u201C{name} \uB2E8\uACC4\u201D', 'Pure and has no side effects. May be paused, aborted or restarted by React.': '\uC21C\uC218\uD558\uACE0 \uBD80\uC791\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. React\uC5D0 \uC758\uD574 \uC77C\uC2DC \uC911\uC9C0, \uC911\uB2E8 \uB610\uB294 \uC7AC\uC2DC\uC791 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4', 'Can read the DOM.': 'DOM\uC744 \uC77D\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.', 'Can work with DOM, run side effects, schedule updates.': 'DOM\uC744 \uC0AC\uC6A9\uD558\uC5EC \uBD80\uC791\uC6A9\uC744 \uC2E4\uD589\uD558\uACE0 \uC5C5\uB370\uC774\uD2B8\uB97C \uC608\uC57D \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.', 'React updates DOM and refs': 'React DOM \uBC0F refs \uC5C5\uB370\uC774\uD2B8', 'Read docs for {name} (opens in a new tab)': '{name}\uC5D0 \uB300\uD55C \uC124\uBA85\uC11C\uB97C \uC77D\uC2B5\uB2C8\uB2E4 (\uC0C8 \uD0ED\uC5D0\uC11C \uC5F4\uB9BC).', "See project's page on GitHub (opens in a new tab)": 'GitHub\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8 \uD398\uC774\uC9C0\uB97C \uBD05\uB2C8\uB2E4 (\uC0C8 \uD0ED\uC5D0\uC11C \uC5F4\uB9BC).', 'See project on': '\uD504\uB85C\uC81D\uD2B8 \uD398\uC774\uC9C0 \uC5F4\uAE30',
  }; if (typeof exports === 'object' && typeof module !== 'undefined') { module.exports = a; } else if (typeof define === 'function' && define.amd) { define(() => a); } return { Wfds: a };
}));
