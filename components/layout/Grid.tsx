interface GridProps {
  children: React.ReactNode;
  className?: string;
}

interface ColProps {
  children: React.ReactNode;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  start?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  className?: string;
}

const spanClasses: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
};

const startClasses: Record<number, string> = {
  1: "col-start-1",
  2: "col-start-2",
  3: "col-start-3",
  4: "col-start-4",
  5: "col-start-5",
  6: "col-start-6",
  7: "col-start-7",
  8: "col-start-8",
  9: "col-start-9",
  10: "col-start-10",
  11: "col-start-11",
  12: "col-start-12",
  13: "col-start-13",
};

export function Grid({ children, className = "" }: GridProps) {
  return (
    <div className={`grid w-full grid-cols-12 gap-5 ${className}`}>
      {children}
    </div>
  );
}

export function Col({ children, span = 12, start, className = "" }: ColProps) {
  const spanClass = spanClasses[span];
  const startClass = start ? startClasses[start] : "";

  return (
    <div className={`${spanClass} ${startClass} ${className}`}>
      {children}
    </div>
  );
}
