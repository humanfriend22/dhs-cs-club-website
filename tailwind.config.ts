import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        bg2: 'var(--bg2)',
        bg3: 'var(--bg3)',
        line: 'var(--line)',
        line2: 'var(--line2)',
        ink: 'var(--ink)',
        tx: 'var(--tx)',
        tx2: 'var(--tx2)',
        mut: 'var(--mut)',
        acc: 'var(--acc)',
        accH: 'var(--accH)',
        ok: 'var(--ok)',
        link: 'var(--link)',
        warn: 'var(--warn)'
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        jetbrains: ['"JetBrains Mono"', 'monospace']
      }
    }
  }
} satisfies Config
