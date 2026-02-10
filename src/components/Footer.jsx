import React from 'react'

const Footer = ({ logo }) => {
  return (
    <footer className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-4 text-white/90 backdrop-blur-md sm:px-6">
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="flex items-center gap-3">
          <img src={logo} alt="EasyTip mark" className="h-9 w-9 rounded-xl bg-white/10 p-1" />
          <div>
            <p className="text-sm font-semibold">EasyTip</p>
            <p className="text-xs text-white/70">Designing simple, modern bill splitting experiences.</p>
          </div>
        </div>

        <div className="text-center text-xs text-white/80 sm:text-right">
          <p>© Anil Kumar - 2026</p>
          <p className="mt-1">
            <a
              href="https://linkedin.com/in/anil-putta"
              target="_blank"
              rel="noreferrer"
              className="mr-3 transition-colors hover:text-white hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Anilkumarputta"
              target="_blank"
              rel="noreferrer"
              className="mr-3 transition-colors hover:text-white hover:underline"
            >
              GitHub
            </a>
            <a href="/LICENSE" className="transition-colors hover:text-white hover:underline">
              License
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer