import React from 'react';

type TOCProps = {
  activeSection: string;
  sections: { id: string; title: string }[];
  onNavigate: (id: string) => void;
};

export function TableOfContents({ activeSection, sections, onNavigate }: TOCProps) {
  return (
    <nav className="sticky top-24 hidden lg:block w-72 pr-8 border-r border-black/10">
      <h3 className="text-[10px] font-bold text-[#888] uppercase tracking-[0.2em] mb-8">Table of Contents</h3>
      <ul className="space-y-4">
        {sections.map((sec) => (
          <li key={sec.id}>
            <button
              onClick={() => onNavigate(sec.id)}
              className={`text-[13px] tracking-wide w-full text-left transition-all duration-300 font-sans ${
                activeSection === sec.id
                  ? 'text-gray-900 font-bold translate-x-2'
                  : 'text-gray-500 hover:text-gray-900 hover:translate-x-1'
              }`}
            >
              {sec.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
