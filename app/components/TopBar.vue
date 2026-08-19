<script setup lang="ts">
const { dark, toggle } = useTheme()
const { toggle: toggleDrawer } = useDrawer()
const route = useRoute()

const paths: Record<string, string> = {
  '/': 'overview',
  '/events': 'schedule',
  '/honor-hall': 'honor-hall',
  '/join': 'join'
}

const path = computed(() => paths[route.path] ?? '')
const themeIcon = computed(() => (dark.value ? '☀' : '☾'))
const themeLabel = computed(() => (dark.value ? 'Switch to light mode' : 'Switch to dark mode'))
</script>

<template>
  <div style="border-bottom: 1px solid var(--line); padding: 12px 30px; display: flex; align-items: center; justify-content: space-between; gap: 16px; background: var(--bg2); position: sticky; top: 0; z-index: 20;">
    <div style="display: flex; align-items: center; gap: 14px; min-width: 0;">
      <button class="hamburger" aria-label="Open menu" @click="toggleDrawer">☰</button>
      <div style="font-size: 12px; color: var(--tx2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span style="color: var(--acc);">~/dhs-cs</span>/{{ path }}<span class="cursor" style="color: var(--ink);">_</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 10px;">
      <AppButton variant="ghost" size="icon" :aria-label="themeLabel" @click="toggle">{{ themeIcon }}</AppButton>
      <AppButton to="/join" variant="dark" size="sm" class="join-cta">JOIN THE CLUB →</AppButton>
    </div>
  </div>
</template>

<style scoped>
.hamburger {
  display: none;
}

@media (max-width: 780px) {
  .hamburger {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    flex: none;
    font-size: 16px;
    color: var(--ink);
    background: transparent;
    border: 1px solid var(--line);
    cursor: pointer;
  }
  .hamburger:hover { border-color: var(--ink); }

  .join-cta {
    display: none;
  }
}
</style>
