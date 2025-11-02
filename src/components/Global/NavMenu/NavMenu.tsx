import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./NavMenu.module.css";

const menuItems = [
  { label: "Home", link: "/" },
  { label: "Community", link: "/community" },
  { label: "Competition", link: "/competition" },
  { label: "CampFerno", link: "/campferno" },
  { label: "Contact", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com/ramferno3756" },
  { label: "Instagram", link: "https://www.instagram.com/3756ramferno/" },
  { label: "Facebook", link: "https://www.facebook.com/3756RamFerno/" },
  { label: "GitHub", link: "https://github.com/FRCTeam3756" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/ramferno/" },
];

export interface NavMenuItem {
  label: string;
  link: string;
}

export interface NavMenuSocialItem {
  label: string;
  link: string;
}

const menuButtonColor = "#fff";
const openMenuButtonColor = "#000000ff";
const colors = ["#003399", "#ff7700"];
const logoUrl = "/src/assets/images/navbar/brand.webp";
const accentColor = "#ff6b6b";

export const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);
  const plusHRef = useRef<HTMLSpanElement | null>(null);
  const plusVRef = useRef<HTMLSpanElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);
  const textInnerRef = useRef<HTMLSpanElement | null>(null);
  const textWrapRef = useRef<HTMLSpanElement | null>(null);
  const [textLines, setTextLines] = useState<string[]>(["Menu", "Close"]);

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);
  const spinTweenRef = useRef<gsap.core.Tween | null>(null);
  const textCycleAnimRef = useRef<gsap.core.Tween | null>(null);
  const colorTweenRef = useRef<gsap.core.Tween | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const busyRef = useRef(false);
  const itemEntranceTweenRef = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;
      if (!panel || !plusH || !plusV || !icon || !textInner) return;

      let preLayers: HTMLElement[] = [];
      if (preContainer) {
        preLayers = Array.from(
          preContainer.querySelectorAll(`.${styles.prelayer}`)
        ) as HTMLElement[];
      }
      preLayerElsRef.current = preLayers;

      gsap.set([panel, ...preLayers], { xPercent: 100 });
      gsap.set(plusH, { transformOrigin: "50% 50%", rotate: 0 });
      gsap.set(plusV, { transformOrigin: "50% 50%", rotate: 90 });
      gsap.set(icon, { rotate: 0, transformOrigin: "50% 50%" });
      gsap.set(textInner, { yPercent: 0 });
      if (toggleBtnRef.current)
        gsap.set(toggleBtnRef.current, { color: menuButtonColor });
    });
    return () => ctx.revert();
  }, []);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(
      panel.querySelectorAll(`.${styles.panelItemLabel}`)
    ) as HTMLElement[];
    const numberEls = Array.from(
      panel.querySelectorAll(
        `.${styles.panelList}[data-numbering] .${styles.panelItem}`
      )
    ) as HTMLElement[];
    const socialTitle = panel.querySelector(
      `.${styles.socialsTitle}`
    ) as HTMLElement | null;
    const socialLinks = Array.from(
      panel.querySelectorAll(`.${styles.socialsLink}`)
    ) as HTMLElement[];

    const layerStates = layers.map((el) => ({
      el,
      start: Number(gsap.getProperty(el, "xPercent")),
    }));
    const panelStart = Number(gsap.getProperty(panel, "xPercent"));

    if (itemEls.length) {
      gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    }
    if (numberEls.length) {
      gsap.set(numberEls, { "--num-opacity": 0 });
    }
    if (socialTitle) {
      gsap.set(socialTitle, { opacity: 0 });
    }
    if (socialLinks.length) {
      gsap.set(socialLinks, { y: 25, opacity: 0 });
    }

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(
        ls.el,
        { xPercent: ls.start },
        { xPercent: 0, duration: 0.5, ease: "power4.out" },
        i * 0.07
      );
    });
    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;
    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: "power4.out" },
      panelInsertTime
    );

    if (itemEls.length) {
      const itemsStartRatio = 0.15;
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;
      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: "power4.out",
          stagger: { each: 0.1, from: "start" },
        },
        itemsStart
      );
      if (numberEls.length) {
        tl.to(
          numberEls,
          {
            duration: 0.6,
            ease: "power2.out",
            "--num-opacity": 1,
            stagger: { each: 0.08, from: "start" },
          },
          itemsStart + 0.1
        );
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4;
      if (socialTitle) {
        tl.to(
          socialTitle,
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          socialsStart
        );
      }
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power3.out",
            stagger: { each: 0.08, from: "start" },
            onComplete: () => {
              gsap.set(socialLinks, { clearProps: "opacity" });
            },
          },
          socialsStart + 0.04
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback("onComplete", () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const all: HTMLElement[] = [...layers, panel];
    closeTweenRef.current?.kill();

    closeTweenRef.current = gsap.to(all, {
      xPercent: 100,
      duration: 0.32,
      ease: "power3.in",
      overwrite: "auto",
      onComplete: () => {
        const itemEls = Array.from(
          panel.querySelectorAll(`.${styles.panelItemLabel}`)
        ) as HTMLElement[];
        if (itemEls.length) {
          gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        }
        const numberEls = Array.from(
          panel.querySelectorAll(
            `.${styles.panelList}[data-numbering] .${styles.panelItem}`
          )
        ) as HTMLElement[];
        if (numberEls.length) {
          gsap.set(numberEls, { "--num-opacity": 0 });
        }
        const socialTitle = panel.querySelector(
          `.${styles.socialsTitle}`
        ) as HTMLElement | null;
        const socialLinks = Array.from(
          panel.querySelectorAll(`.${styles.socialsLink}`)
        ) as HTMLElement[];
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });
        busyRef.current = false;
      },
    });
  }, []);

  const animateIcon = useCallback((opening: boolean) => {
    const icon = iconRef.current;
    if (!icon) return;
    spinTweenRef.current?.kill();
    if (opening) {
      spinTweenRef.current = gsap.to(icon, {
        rotate: 225,
        duration: 0.8,
        ease: "power4.out",
        overwrite: "auto",
      });
    } else {
      spinTweenRef.current = gsap.to(icon, {
        rotate: 0,
        duration: 0.35,
        ease: "power3.inOut",
        overwrite: "auto",
      });
    }
  }, []);

  const animateColor = useCallback((opening: boolean) => {
    const btn = toggleBtnRef.current;
    if (!btn) return;
    colorTweenRef.current?.kill();
    const targetColor = opening ? openMenuButtonColor : menuButtonColor;
    colorTweenRef.current = gsap.to(btn, {
      color: targetColor,
      delay: 0.18,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  React.useEffect(() => {
    if (toggleBtnRef.current) {
      const targetColor = openRef.current
        ? openMenuButtonColor
        : menuButtonColor;
      gsap.set(toggleBtnRef.current, { color: targetColor });
    }
  }, []);

  const animateText = useCallback((opening: boolean) => {
    const inner = textInnerRef.current;
    if (!inner) return;
    textCycleAnimRef.current?.kill();

    const [from, to] = opening ? ["Menu", "Close"] : ["Close", "Menu"];
    const cycles = 3;
    const seq = Array.from({ length: cycles + 1 }, (_, i) =>
      i % 2 ? to : from
    );
    if (seq.at(-1) !== to) seq.push(to);
    seq.push(to);
    setTextLines(seq);

    const lineCount = seq.length;
    gsap.set(inner, { yPercent: 0 });
    textCycleAnimRef.current = gsap.to(inner, {
      yPercent: -((lineCount - 1) / lineCount) * 100,
      duration: 0.5 + lineCount * 0.07,
      ease: "power4.out",
    });
  }, []);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);
    if (target) {
      playOpen();
    } else {
      playClose();
    }
    animateIcon(target);
    animateColor(target);
    animateText(target);
  }, [playOpen, playClose, animateIcon, animateColor, animateText]);

  return (
    <div
      className={`${styles.navMenuWrapper} ${styles.fixedWrapper}`}
      style={
        accentColor
          ? { ["--accent" as keyof React.CSSProperties]: accentColor }
          : undefined
      }
      data-open={open || undefined}
    >
      <div ref={preLayersRef} className={styles.prelayers}>
        {(() => {
          const raw = colors.slice(0, 4);
          const arr = [...raw];
          if (arr.length >= 3) {
            const mid = Math.floor(arr.length / 2);
            arr.splice(mid, 1);
          }
          return arr.map((c, i) => (
            <div
              key={i}
              className={styles.prelayer}
              style={{ background: c }}
            />
          ));
        })()}
      </div>

      <header className={styles.navMenuHeader}>
        <div className={styles.logo}>
          <img
            src={logoUrl}
            alt="Logo"
            className={styles.logoImg}
            draggable={false}
            width={110}
            height={24}
          />
        </div>
        <button
          ref={toggleBtnRef}
          className={styles.toggle}
          onClick={toggleMenu}
          type="button"
        >
          <span ref={textWrapRef} className={styles.toggleTextWrap}>
            <span ref={textInnerRef} className={styles.toggleTextInner}>
              {textLines.map((l, i) => (
                <span className={styles.toggleLine} key={i}>
                  {l}
                </span>
              ))}
            </span>
          </span>
          <span ref={iconRef} className={styles.icon}>
            <span ref={plusHRef} className={styles.iconLine} />
            <span
              ref={plusVRef}
              className={`${styles.iconLine} ${styles.iconLineV}`}
            />
          </span>
        </button>
      </header>

      <aside
        id="staggered-menu-panel"
        ref={panelRef}
        className={styles.navMenuPanel}
      >
        <div className={styles.panelInner}>
          <ul className={styles.panelList} role="list">
            {menuItems && menuItems.length ? (
              menuItems.map((it, idx) => (
                <li className={styles.panelItemWrap} key={it.label + idx}>
                  <a
                    className={styles.panelItem}
                    href={it.link}
                    data-index={idx + 1}
                  >
                    <span className={styles.panelItemLabel}>{it.label}</span>
                  </a>
                </li>
              ))
            ) : (
              <li className={styles.panelItemWrap}>
                <span className={styles.panelItem}>
                  <span className={styles.panelItemLabel}>No items</span>
                </span>
              </li>
            )}
          </ul>
          {socialItems && socialItems.length > 0 && (
            <div className={styles.socials}>
              <h3 className={styles.socialsTitle}>Socials</h3>
              <ul className={styles.socialsList} role="list">
                {socialItems.map((s, i) => (
                  <li key={s.label + i}>
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialsLink}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};
