import { Id } from "@/app/features/types";
import { useContext, useEffect, useRef } from "react";
import { InViewContext } from "../../context/in-view";

export function InView({
  children,
  id,
  type,
}: {
  children?: React.ReactNode;
  id: Id;
  type: "regular" | "timeline" | "footer";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { setInView } = useContext(InViewContext);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    function getRootMargin() {
      switch (type) {
        default:
        case "regular":
          return "-24.99% 0% -74.99% 0%";
        case "timeline":
          return "-44.99% 0% -54.99% 0%";
        case "footer":
          return "0px 0px 0px 0px";
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(id);
      },
      {
        rootMargin: getRootMargin(),
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [id, setInView, type]);

  return <div ref={ref}>{children}</div>;
}
