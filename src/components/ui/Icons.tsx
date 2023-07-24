interface IconsProps {
  icon: "arrow" | "teacher" | "parent" | "admin";
  className: string;
}

export default function Icons({ icon, className }: IconsProps) {
  switch (icon) {
    case "arrow":
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            d="M8.293 2.293a1 1 0 011.414 0l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414L11 8.5H1.5a1 1 0 010-2H11L8.293 3.707a1 1 0 010-1.414z"
          ></path>
        </svg>
      );
    case "teacher":
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 64 64"
        >
          <path d="M5 60h14a1 1 0 001-1 8 8 0 00-16 0 1 1 0 001 1z"></path>
          <circle cx="12" cy="45" r="5"></circle>
          <path d="M24 59a1 1 0 001 1h14a1 1 0 001-1 8 8 0 00-16 0z"></path>
          <circle cx="32" cy="45" r="5"></circle>
          <path d="M52 51a8 8 0 00-8 8 1 1 0 001 1h14a1 1 0 001-1 8 8 0 00-8-8z"></path>
          <circle cx="52" cy="45" r="5"></circle>
          <circle cx="13" cy="9" r="5"></circle>
          <path d="M5 27h3v10a1 1 0 001 1h3V28a1 1 0 012 0v10h3a1 1 0 001-1V21h7a1 1 0 001-1v-4a1 1 0 00-1-1H8a4 4 0 00-4 4v7a1 1 0 001 1z"></path>
          <path d="M59 4H21a1 1 0 00-1 1v9h5a2 2 0 012 2v4a2 2 0 01-2 2h-5v9a1 1 0 001 1h38a1 1 0 001-1V5a1 1 0 00-1-1zm-6 22H43a1 1 0 010-2h10a1 1 0 010 2zm0-7H29a1 1 0 010-2h24a1 1 0 010 2zm0-7H27a1 1 0 010-2h26a1 1 0 010 2z"></path>
        </svg>
      );
    case "parent":
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 7.5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 019.5 7.5zM14.27 4h-2.54A1.73 1.73 0 0010 5.73V9a1 1 0 001 1v6h4v-6a1 1 0 001-1V5.73A1.73 1.73 0 0014.27 4z"
            className="color444444 svgShape"
          ></path>
          <path
            d="M15 2a2 2 0 11-3.999.001A2 2 0 0115 2zM4.27 5H1.73a1.73 1.73 0 10.001 3.461A1.73 1.73 0 001.73 5 1.73 1.73 0 000 6.73V9a1 1 0 001 1l-1 3h1v3h4v-3h1l-1-3a1 1 0 001-1V6.73A1.73 1.73 0 004.27 5z"
            className="color444444 svgShape"
          ></path>
          <path
            d="M5 3a2 2 0 11-3.999.001A2 2 0 015 3zm2 10v3h2v-3a1 1 0 001-1v-1.54A1.46 1.46 0 008.54 9H7.46A1.46 1.46 0 006 10.46V12a1 1 0 001 1z"
            className="color444444 svgShape"
          ></path>
        </svg>
      );
    case "admin":
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
        >
          <path d="M30.89 7.375c0 4.18-2.65 7.57-5.91 7.57-3.25 0-5.9-3.39-5.9-7.57 0-3.88 2.32-6.39 5.9-6.39 3.59 0 5.91 2.51 5.91 6.39zm5.54 13.75v4.22H13.57v-4.22c0-1.3.76-2.48 1.94-2.99 2.16-.96 4.36-1.58 6.58-1.86.89.43 1.87.67 2.89.67 1.01 0 1.99-.23 2.88-.66 2.2.28 4.42.9 6.62 1.85 1.18.52 1.95 1.69 1.95 2.99zM49 29.345v2.22c0 1.1-.9 2-2 2H3a2 2 0 01-2-2v-2.22a2 2 0 012-2h44c1.1 0 2 .9 2 2zm-4.96 6.22v12.45c0 .55-.45 1-1 1H6.95c-.55 0-1-.45-1-1v-12.45h38.09z"></path>
          <path d="M17.09 7.905c.12 2.69 1.16 5.08 2.74 6.73-1.73.37-3.43.92-5.11 1.66a5.252 5.252 0 00-3.15 4.83v4.22h-1.25l-.7-12.12c-.08-1.44.42-2.85 1.37-3.85.89-.95 2.09-1.47 3.39-1.47h2.71zm23.29 5.32l-.7 12.12h-1.25v-4.22c0-2.09-1.23-3.98-3.16-4.83-1.7-.73-3.41-1.28-5.14-1.66 1.59-1.65 2.63-4.04 2.75-6.73h2.75c1.29 0 2.49.52 3.39 1.47.95 1 1.44 2.41 1.36 3.85z"></path>
        </svg>
      );
  }
}
