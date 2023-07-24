interface IconsProps {
  icon: "arrow";
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
  }
}
