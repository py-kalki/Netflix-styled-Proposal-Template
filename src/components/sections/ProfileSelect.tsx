"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILES, SITE_CONFIG } from "@/data/content";
import { getBirthdayStatus, getDaysUntil, getAge } from "@/lib/birthday";
import {
  profileContainerVariants,
  profileCardVariants,
  fadeIn,
} from "@/lib/animations";
import { sleep } from "@/lib/utils";

interface ProfileSelectProps {
  onSelect: () => void;
}

const CONFETTI_COLORS = ["#E50914", "#E91E8C", "#F5C518", "#FF6B9D", "#fff"];

export default function ProfileSelect({ onSelect }: ProfileSelectProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [status, setStatus] = useState<"today" | "future" | "past" | null>(null);

  useEffect(() => {
    setStatus(getBirthdayStatus());
  }, []);

  const handleSelect = async (profileId: string) => {
    if (selected) return;
    setSelected(profileId);

    const profile = PROFILES.find((p) => p.id === profileId);

    if (profile?.isMain) {
      const confetti = (await import("canvas-confetti")).default;

      // Burst 1 — center
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { x: 0.5, y: 0.6 },
        colors: CONFETTI_COLORS,
      });

      // Burst 2 — left (300ms)
      setTimeout(() => {
        confetti({
          particleCount: 60,
          spread: 50,
          origin: { x: 0.3, y: 0.5 },
          colors: CONFETTI_COLORS,
        });
      }, 300);

      // Burst 3 — right (600ms)
      setTimeout(() => {
        confetti({
          particleCount: 60,
          spread: 50,
          origin: { x: 0.7, y: 0.5 },
          colors: CONFETTI_COLORS,
        });
      }, 600);
    }

    await sleep(1800);
    setIsExiting(true);
    await sleep(600);
    onSelect();
  };

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="profile-select"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-intro flex flex-col items-center justify-center bg-netflix-dark"
        >
          {/* ── Birthday Card ────────────────────────────────────────── */}
          {status === "today" && (
            <motion.div
              className="mb-10 mx-4 max-w-sm text-center"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              style={{
                background: "rgba(229, 9, 20, 0.08)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(229, 9, 20, 0.25)",
                borderRadius: "16px",
                padding: "20px 24px",
              }}
            >
              <p style={{ fontSize: 32, marginBottom: 8 }}>🎂</p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(18px, 5vw, 26px)",
                  color: "#ffffff",
                  letterSpacing: "0.08em",
                  marginBottom: 6,
                }}
              >
                HAPPY BIRTHDAY, {SITE_CONFIG.herName.toUpperCase()}!
              </p>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.5)",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                You&apos;re {getAge()} today and more loved than ever.
              </p>
            </motion.div>
          )}

          {status === "future" && (
            <motion.div
              className="mb-8 mx-4 max-w-xs text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "12px 20px",
              }}
            >
              <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.25)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                🗓️ {getDaysUntil()} days until something special
              </p>
            </motion.div>
          )}

          {/* ── Header ─────────────────────────────────────────────── */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mb-12 font-display text-3xl tracking-widest text-white md:text-4xl"
          >
            WHO&apos;S WATCHING?
          </motion.h2>

          {/* ── Profile Cards ──────────────────────────────────────── */}
          <motion.div
            variants={profileContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-row gap-8"
          >
            {PROFILES.map((profile) => {
              const isSelected = selected === profile.id;

              return (
                <motion.button
                  key={profile.id}
                  variants={profileCardVariants}
                  onClick={() => handleSelect(profile.id)}
                  disabled={!!selected}
                  className="group flex flex-col items-center gap-3 focus:outline-none"
                  whileHover={!selected ? { scale: 1.05 } : undefined}
                  whileTap={!selected ? { scale: 0.97 } : undefined}
                >
                  {/* Avatar */}
                  <motion.div
                    className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-md"
                    style={{
                      background: `linear-gradient(135deg, ${profile.color}33, ${profile.color}11)`,
                      border: `2px solid ${profile.color}70`,
                    }}
                    animate={
                      isSelected
                        ? {
                            borderColor: profile.color,
                            boxShadow: `0 0 30px ${profile.color}60, 0 0 60px ${profile.color}30`,
                            scale: 1.05,
                          }
                        : {}
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {/* Emoji */}
                    <span className="text-6xl">{profile.emoji}</span>

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0"
                      style={{ backgroundColor: `${profile.color}26` }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>

                  {/* Name */}
                  <motion.span
                    className="text-sm font-medium uppercase tracking-widest"
                    animate={{
                      color: isSelected ? profile.color : "rgba(255,255,255,0.5)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {profile.name}
                  </motion.span>

                  {/* Hint — show only when selected */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.span
                        initial={{ opacity: 0, y: 6, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -4, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs tracking-wider"
                        style={{ color: `${profile.color}cc` }}
                      >
                        {profile.hint}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </motion.div>

          {/* ── Footer Hint ────────────────────────────────────────── */}
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
            className="mt-16 text-xs uppercase tracking-widest text-white/20"
          >
            Choose your profile to continue
          </motion.p>

          {/* ── Bottom Credit ──────────────────────────────────────── */}
          <p className="absolute bottom-8 text-xs" style={{ color: "#333" }}>
            Made with ♥ for {SITE_CONFIG.herName} · {new Date().getFullYear()}
          </p>
        </motion.div>
      ) : (
        /* Exiting overlay */
        <motion.div
          key="profile-exit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-intro bg-netflix-dark"
        />
      )}
    </AnimatePresence>
  );
}
