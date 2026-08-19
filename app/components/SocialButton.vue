<script setup lang="ts">
const props = defineProps<{
  icon: object
  label: string
  url?: string
  copyValue?: string
  color?: string
}>()

const copied = ref(false)
const disabled = computed(() => !props.url && !props.copyValue)

const rootClasses = computed(() => [
  'group flex items-center gap-3 text-[13px] font-bold border border-line bg-bg text-ink py-[18px] px-[22px] no-underline transition duration-[160ms]',
  disabled.value
    ? 'opacity-[.55] cursor-default'
    : 'cursor-pointer hover:bg-[var(--hover-color,var(--acc))] hover:border-[var(--hover-color,var(--acc))] hover:shadow-[0_0_0_1px_var(--hover-color,var(--acc))] hover:text-white'
])

const iconClasses = computed(() => [
  'text-acc flex-none transition-colors duration-[160ms]',
  !disabled.value && 'group-hover:text-white'
])

async function handleClick() {
  if (!props.copyValue) return
  await navigator.clipboard.writeText(props.copyValue)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<template>
  <component
    :is="disabled ? 'div' : (url ? 'a' : 'button')"
    :class="rootClasses"
    :style="color ? { '--hover-color': color } : undefined"
    :href="!disabled && url ? url : undefined"
    :target="!disabled && url ? '_blank' : undefined"
    :rel="!disabled && url ? 'noopener' : undefined"
    :type="!disabled && !url ? 'button' : undefined"
    @click="handleClick"
  >
    <component :is="icon" :class="iconClasses" :size="18" />
    <span>{{ copied ? 'Copied!' : label }}</span>
    <span v-if="disabled" class="ml-auto text-[10px] tracking-[.1em] uppercase text-mut font-normal">coming soon</span>
  </component>
</template>
