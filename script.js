/* ==========================================================
   Day 29 — Animated Skill / Progress Bars
   Vanilla JavaScript · IntersectionObserver · Run once only
   ========================================================== */

(function () {
  "use strict";

  /* ---------- Element references ---------- */
  var section = document.getElementById("skillsSection");
  var fills = document.querySelectorAll(".skill__fill");
  var skills = document.querySelectorAll(".skill");

  if (!section || fills.length === 0) {
    return;
  }

  /* Tracks whether the animation has already run (run-once guard) */
  var hasAnimated = false;

  /**
   * Fill every progress bar to its target percentage.
   *
   * For each bar:
   *  1. Read the target from data-progress (e.g. "95").
   *  2. Clamp the value to 0–100 for safety.
   *  3. Set the fill width — CSS transition animates 0% → target.
   *  4. Update the visible % label and ARIA values.
   */
  function animateBars() {
    fills.forEach(function (fill, index) {
      var target = parseInt(fill.getAttribute("data-progress"), 10);

      // Safety: fall back to 0 for missing / invalid values, clamp 0–100
      if (isNaN(target)) {
        target = 0;
      }
      target = Math.max(0, Math.min(100, target));

      // The CSS transition on .skill__fill animates this width change
      fill.style.width = target + "%";

      // Update the percentage label next to the skill name
      var percentEl = fill.closest(".skill").querySelector(".skill__percent");
      if (percentEl) {
        percentEl.textContent = target + "%";
      }

      // Update the accessible progressbar value
      var track = fill.closest(".skill__track");
      if (track) {
        track.setAttribute("aria-valuenow", String(target));
      }

      // Keep a reference honest for debugging / future extension
      skills[index] && skills[index].classList.add("skill--complete");
    });

    // Mark the section so stagger delays and future checks work
    section.classList.add("is-animated");
  }

  /**
   * IntersectionObserver callback.
   * Fires whenever the section enters / leaves the viewport.
   * We only animate the FIRST time it intersects, then disconnect.
   */
  function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateBars();
        // Stop observing — guarantees the animation runs exactly once
        // and prevents any glitches from repeated triggering.
        observer.disconnect();
      }
    });
  }

  /* ---------- Set up the observer ---------- */
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(handleIntersection, {
      // Start animating when 20% of the section is visible
      threshold: 0.2
    });

    observer.observe(section);
  } else {
    // Fallback for very old browsers: animate immediately on load
    hasAnimated = true;
    animateBars();
  }

  /* Reduced-motion users still see final values (CSS removes transition) */
  if (prefersReducedMotion) {
    // Values are set by the observer immediately; nothing else needed.
    // This keeps behaviour predictable for screen-reader / motion users.
  }
})();
