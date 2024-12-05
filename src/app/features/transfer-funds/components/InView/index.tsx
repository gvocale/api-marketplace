import { Id } from "@/app/features/types";
import { useInView } from "motion/react";
import { useContext, useEffect, useRef } from "react";
import { InViewContext } from "../../context/in-view";

export function InView({
  children,
  id,
}: {
  children: React.ReactNode;
  id: Id;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const { inView, setInView } = useContext(InViewContext);

  useEffect(() => {
    if (isInView) {
      setInView(id);
    } else if (inView === id) {
      setInView(null);
    }
  }, [isInView, id, inView, setInView]);

  return <div ref={ref}>{children}</div>;
}
