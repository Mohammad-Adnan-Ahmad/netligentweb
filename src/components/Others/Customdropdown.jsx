import React, { useState, useRef, useEffect } from "react";
import '../../CSS/Customdropdown.css'

export default function CustomDropdown({ icon, placeholder, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selected = options.find(o => o.value === value);

  return (
    <div className={`cc-dropdown${open ? " cc-dropdown--open" : ""}`} ref={ref}>
      <button
        type="button"
        className={`cc-dropdown__trigger${value ? " cc-dropdown__trigger--filled" : ""}`}
        onClick={() => setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="cc-field-icon-wrap">{icon}</span>
        <span className="cc-dropdown__label">
          {selected ? (
            <span className="cc-dropdown__selected">
              <span className="cc-dropdown__emoji">{selected.icon}</span>
              {selected.value}
            </span>
          ) : (
            <span className="cc-dropdown__placeholder">{placeholder}</span>
          )}
        </span>
        <span className="cc-dropdown__chevron" aria-hidden="true">
          <svg viewBox="0 0 20 20" fill="none">
            <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      {open && (
        <div className="cc-dropdown__menu" role="listbox">
          <div className="cc-dropdown__menu-inner">
            {options.map(opt => (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={value === opt.value}
                className={`cc-dropdown__option${value === opt.value ? " cc-dropdown__option--active" : ""}`}
                onClick={() => { onChange(opt.value); setOpen(false); }}
              >
                <span className="cc-dropdown__opt-emoji">{opt.icon}</span>
                <span className="cc-dropdown__opt-label">{opt.value}</span>
                {value === opt.value && (
                  <span className="cc-dropdown__check" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}