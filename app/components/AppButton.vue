<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost'
  size?: 'sm' | 'md' | 'icon'
  to?: string
  type?: 'button' | 'submit'
  block?: boolean
  lift?: boolean
  ariaLabel?: string
}>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  block: false,
  lift: false
})
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="app-btn"
    :class="[variant, size, { block, lift }]"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :type="type"
    class="app-btn"
    :class="[variant, size, { block, lift }]"
    :aria-label="ariaLabel"
  >
    <slot />
  </button>
</template>

<style scoped>
.app-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-weight: 700;
  letter-spacing: .04em;
  border: 0;
  border-bottom: none;
  cursor: pointer;
  white-space: nowrap;
  transition: transform .16s ease, background .16s ease, border-color .16s ease, color .16s ease;
}
.app-btn.block { width: 100%; }

.app-btn.md { font-size: 13px; padding: 15px 22px; }
.app-btn.sm { font-size: 12px; padding: 10px 16px; min-height: 40px; }
.app-btn.icon { font-size: 15px; width: 40px; height: 40px; padding: 0; flex: none; }

.app-btn.primary { color: var(--bg); background: var(--acc); }
.app-btn.primary:hover { background: var(--accH); color: var(--bg); }

.app-btn.secondary { color: var(--ink); background: transparent; border: 1px solid var(--ink); border-bottom: 1px solid var(--ink); }
.app-btn.secondary:hover { background: var(--bg3); color: var(--ink); }

.app-btn.dark { color: var(--bg); background: var(--ink); }
.app-btn.dark:hover { background: var(--acc); color: var(--bg); }

.app-btn.ghost { color: var(--tx2); background: transparent; border: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.app-btn.ghost:hover { border-color: var(--ink); color: var(--ink); }

.app-btn.lift:hover { transform: translateY(-2px); }
</style>
