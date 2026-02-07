/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

export default function AnnouncementsBar() {
  const text = "Envíos disponibles 24/7 · Sin límites · Sin fronteras";

  return (
    <div className="overflow-hidden bg-white/5 border-y border-white/10 py-3">
      <div className="flex gap-20 animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="text-sm font-semibold uppercase tracking-wider text-white/80"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
