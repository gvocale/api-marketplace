"use client";

import { useContext, useLayoutEffect, useRef } from "react";
import { TooltipContext } from "../../context/tooltip-context";
import styles from "./index.module.scss";
import { TooltipId } from "@/app/features/types";

export function CodeTooltip({
  children,
  id,
}: {
  children: React.ReactNode;
  id: TooltipId;
}) {
  const { tooltipId, setTooltipId } = useContext(TooltipContext);

  useLayoutEffect(() => {
    if (tooltipId === id) {
      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setTooltipId(null);
          window.removeEventListener("keydown", handleEscapeKey);
        }
      };
      window.addEventListener("keydown", handleEscapeKey);

      return () => {
        window.removeEventListener("keydown", handleEscapeKey);
      };
    }
  }, [tooltipId, setTooltipId, id]);

  useLayoutEffect(() => {
    if (tooltipId === id) {
      function handleClickOutside(event: MouseEvent) {
        const target = event.target as HTMLElement;
        console.log(
          "target",
          target,
          "ref.current",
          ref.current,
          ref.current?.contains(target)
        );
        if (!ref.current?.contains(target)) {
          setTooltipId(null);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [tooltipId, setTooltipId, id]);

  const ref = useRef<HTMLDivElement>(null);

  if (tooltipId === id) {
    return (
      <div
        ref={ref}
        className={styles.tooltip}
        style={
          {
            positionAnchor: `--${tooltipId}`,
            opacity: tooltipId ? 1 : 0,
            transform: tooltipId
              ? "translateX(-50%) scale(1)"
              : "translateX(-50%) scale(0.9)",
          } as React.CSSProperties
        }
      >
        <span className={styles.arrow} />
        {children}
      </div>
    );
  }

  return null;
}
