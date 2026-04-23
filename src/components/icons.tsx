type IconProps = {
  name: string;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  if (name === "menu") {
    return (
      <svg {...common}>
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "close") {
    return (
      <svg {...common}>
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg {...common}>
        <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg {...common}>
        <path d="M7.6 3.5 5.2 5.9c-.8.8-.9 2-.3 3 2.3 4.3 5.8 7.8 10.2 10.2 1 .5 2.2.4 3-.4l2.4-2.4-4-4-2 2a13.4 13.4 0 0 1-4.8-4.8l2-2-4.1-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg {...common}>
        <path d="M7 3v4M17 3v4M4.5 9h15M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "monitor") {
    return (
      <svg {...common}>
        <path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2ZM9 21h6M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "stethoscope") {
    return (
      <svg {...common}>
        <path d="M6 4v5a4 4 0 0 0 8 0V4M4 4h4M12 4h4M10 13v2a5 5 0 0 0 10 0v-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (name === "timer") {
    return (
      <svg {...common}>
        <path d="M12 7v6l4 2M9 2h6M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M3 12h5l2-5 4 10 2-5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 21s7-4.4 7-10A5 5 0 0 0 12 6a5 5 0 0 0-7 5c0 5.6 7 10 7 10Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
