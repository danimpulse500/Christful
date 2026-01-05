// components/layout/PageGrid.tsx
import { ReactNode } from "react";

interface PageGridProps {
  left?: ReactNode;
  center: ReactNode;
  right?: ReactNode;
}

export function PageGrid({ left, center, right }: PageGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)_280px] gap-4 py-5">
      
      {/* Left column */}
      <aside className="hidden lg:block">
        {left}
      </aside>

      {/* Center column */}
      <main className="w-full">
        {center}
      </main>

      {/* Right column */}
      <aside className="hidden lg:block">
        {right}
      </aside>

    </div>
  );
}
