export default function Logo({name}: {name?: string}) {
  return (
    <div className="flex items-center font-bold text-2xl gap-4">
      <svg
        className="w-14 h-14"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
      >
        <g data-name="graduation cap-pen-pencil-education">
          <path fill="#64c37d" d="M40 32H46V51H40z"></path>
          <path fill="#ff5023" d="M29 34H35V40H29z"></path>
          <path
            fill="#d80027"
            d="M59 23v4h-4v-4a2.006 2.006 0 012-2 2.015 2.015 0 012 2z"
          ></path>
          <path
            fill="#ffda44"
            d="M61 11L61 13 32 19 3 13 3 11 32 3 61 11z"
          ></path>
          <path
            fill="#ff9811"
            d="M51 15.07V29c0 2.97-5 5.5-12.07 6.52A48.763 48.763 0 0132 36c-10.49 0-19-3.13-19-7V15.07L32 19z"
          ></path>
          <path
            fill="#9bfbff"
            d="M15 32.13c1.92 1.41 5.1 2.55 9 3.22V57h-9V32.13z"
          ></path>
          <path
            fill="#ff5023"
            d="M35 43L35 56 33 54 32 55 31 54 29 56 29 43 35 43z"
          ></path>
          <path fill="#e0e0e2" d="M29 40H35V43H29z"></path>
          <path
            fill="#2d2d30"
            d="M35 56L35 57 32 61 29 57 29 56 31 54 32 55 33 54 35 56z"
          ></path>
          <path fill="#00665a" d="M46 51L43 57 40 51 46 51z"></path>
          <path d="M61.27 10.04l-29-8a.991.991 0 00-.54 0l-29 8A1 1 0 002 11v2a1 1 0 00.8.98l9.2 1.9V29a4.744 4.744 0 002 3.64V57a1 1 0 001 1h9a1 1 0 001-1V36.51c.98.14 1.99.25 3 .33V57a.984.984 0 00.2.6l3 4a1 1 0 001.6 0l3-4a.984.984 0 00.2-.6V36.84c1.01-.08 2.02-.19 3-.33V51a1 1 0 00.11.45l3 6a1 1 0 001.78 0l3-6A1 1 0 0047 51V34.41c3.03-1.32 5-3.14 5-5.41V15.88l4-.82v5.12A3.01 3.01 0 0054 23v4a1 1 0 001 1h4a1 1 0 001-1v-4a3.01 3.01 0 00-2-2.82v-5.54l3.2-.66A1 1 0 0062 13v-2a1 1 0 00-.73-.96zM23 56h-7v-4h4v-2h-4v-5h2v-2h-2v-5h4v-2h-4v-2.07a26.539 26.539 0 007 2.25zm11 .67l-2 2.66-2-2.66v-.26l1-1 .29.3a1.008 1.008 0 001.42 0l.29-.3 1 1zm0-3.08l-.29-.3a1.008 1.008 0 00-1.42 0l-.29.3-.29-.3a1.008 1.008 0 00-1.42 0l-.29.3V44h4zM34 42h-4v-1h4zm0-3h-4v-2.04c.67.03 1.33.04 2 .04s1.33-.01 2-.04zm9 15.76L41.62 52h2.76zM45 50h-4V36.18a31.117 31.117 0 004-1.02zm5-21c0 2.84-7.39 6-18 6s-18-3.16-18-6V16.3l17.8 3.68a1.01 1.01 0 00.4 0L50 16.3zm8-3h-2v-3a1 1 0 012 0zm2-13.81l-2 .41V12h-2v1.01l-24 4.97-28-5.79v-.43l28-7.72 28 7.72z"></path>
          <path d="M42 37H44V48H42z"></path>
        </g>
      </svg>
      <span>
        {
          name ?
          <span className="text-3xl">{name}</span> :
          <>
            <span className="text-4xl">C</span>lass
            <span className="text-4xl">C</span>orner
          </>
        }
      </span>
    </div>
  );
}
