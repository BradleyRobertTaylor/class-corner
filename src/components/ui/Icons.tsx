type IconsProps = React.ComponentPropsWithoutRef<'svg'> & {
  icon: 'arrow' | 'teacher' | 'parent' | 'admin' | 'plus' | 'google' | 'apple';
};

const Icons = ({ icon, ...props }: IconsProps) => {
  const icons = {
    arrow: (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
        <path
          fill="currentColor"
          d="M8.293 2.293a1 1 0 011.414 0l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414L11 8.5H1.5a1 1 0 010-2H11L8.293 3.707a1 1 0 010-1.414z"
        ></path>
      </svg>
    ),
    teacher: (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path
          fill="currentColor"
          d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91c-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62C.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38c.33-62.14-49.94-112.62-112-112.62m-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96M592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0"
        />
      </svg>
    ),
    parent: (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
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
    ),
    admin: (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path d="M30.89 7.375c0 4.18-2.65 7.57-5.91 7.57-3.25 0-5.9-3.39-5.9-7.57 0-3.88 2.32-6.39 5.9-6.39 3.59 0 5.91 2.51 5.91 6.39zm5.54 13.75v4.22H13.57v-4.22c0-1.3.76-2.48 1.94-2.99 2.16-.96 4.36-1.58 6.58-1.86.89.43 1.87.67 2.89.67 1.01 0 1.99-.23 2.88-.66 2.2.28 4.42.9 6.62 1.85 1.18.52 1.95 1.69 1.95 2.99zM49 29.345v2.22c0 1.1-.9 2-2 2H3a2 2 0 01-2-2v-2.22a2 2 0 012-2h44c1.1 0 2 .9 2 2zm-4.96 6.22v12.45c0 .55-.45 1-1 1H6.95c-.55 0-1-.45-1-1v-12.45h38.09z"></path>
        <path d="M17.09 7.905c.12 2.69 1.16 5.08 2.74 6.73-1.73.37-3.43.92-5.11 1.66a5.252 5.252 0 00-3.15 4.83v4.22h-1.25l-.7-12.12c-.08-1.44.42-2.85 1.37-3.85.89-.95 2.09-1.47 3.39-1.47h2.71zm23.29 5.32l-.7 12.12h-1.25v-4.22c0-2.09-1.23-3.98-3.16-4.83-1.7-.73-3.41-1.28-5.14-1.66 1.59-1.65 2.63-4.04 2.75-6.73h2.75c1.29 0 2.49.52 3.39 1.47.95 1 1.44 2.41 1.36 3.85z"></path>
      </svg>
    ),
    plus: (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M18 10h-4V6a2 2 0 00-4 0l.071 4H6a2 2 0 000 4l4.071-.071L10 18a2 2 0 004 0v-4.071L18 14a2 2 0 000-4z"></path>
      </svg>
    ),
    google: (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path
          fill="#FFC107"
          d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
        ></path>
        <path
          fill="#FF3D00"
          d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691"
        ></path>
        <path
          fill="#4CAF50"
          d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
        ></path>
        <path
          fill="#1976D2"
          d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
        ></path>
      </svg>
    ),
    apple: (
      <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 15 15">
        <path d="M5.542 3.647L3.106 3l.443-1.63a.505.505 0 0 1 .618-.352l1.46.392a.5.5 0 0 1 .355.613zm-4.52 7.356a.496.496 0 0 1-.005-.276l1.819-6.726l2.435.647l-1.819 6.726a.499.499 0 0 1-.143.237l-1.457 1.347a.152.152 0 0 1-.247-.066zM10 5c-2.25 0-3-.75-3-3c2.25 0 3 .75 3 3m-1.4 7.984c-1.37.21-3.126-1.706-3.52-3.8L5.969 5.9c.399-.35.903-.533 1.419-.533a2.71 2.71 0 0 1 1.564.489a.964.964 0 0 0 1.089-.01a2.438 2.438 0 0 1 1.46-.479c.77 0 1.643.489 2.05 1.201c1.536 2.696-1.194 6.709-3.144 6.417a.867.867 0 0 1-.255-.093a1.427 1.427 0 0 0-1.302 0a.866.866 0 0 1-.25.092" />
      </svg>
    ),
  };

  return icons[icon];
};

export default Icons;
