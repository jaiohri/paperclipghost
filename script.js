(() => {
  const field = document.getElementById("fall-field");
  if (!field) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  const spawn = () => {
    const clip = document.createElement("span");
    clip.className = "fall-clip";
    clip.style.left = `${Math.random() * 100}%`;
    clip.style.animationDuration = `${8 + Math.random() * 10}s`;
    clip.style.animationDelay = `${Math.random() * 2}s`;
    field.appendChild(clip);
    clip.addEventListener("animationend", () => clip.remove());
  };

  // Sparse, industrial — not a cartoon blizzard
  for (let i = 0; i < 4; i += 1) {
    setTimeout(spawn, i * 900);
  }

  setInterval(spawn, 3200);

  // Duplicate strip content for seamless marquee
  const strip = document.querySelector(".strip-inner");
  if (strip) {
    strip.innerHTML = `${strip.innerHTML}${strip.innerHTML}`;
  }

  // Soft header contrast after leaving hero
  const header = document.querySelector(".site-header");
  const hero = document.querySelector(".hero");
  if (header && hero) {
    const io = new IntersectionObserver(
      ([entry]) => {
        header.style.borderBottomColor = entry.isIntersecting
          ? "transparent"
          : "var(--line)";
      },
      { threshold: 0.55 }
    );
    io.observe(hero);
  }
})();
