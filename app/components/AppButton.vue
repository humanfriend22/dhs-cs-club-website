<script setup lang="ts">
const props = withDefaults(defineProps<{
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

const sizeClasses = {
  md: 'text-[0.8125rem] px-[1.375rem] py-[0.9375rem]',
  sm: 'text-xs px-4 py-2.5 min-h-10',
  icon: 'text-[0.9375rem] w-10 h-10 p-0 flex-none'
}

const variantClasses = {
  primary: 'text-bg bg-acc hover:bg-accH hover:text-bg',
  secondary: 'text-ink bg-transparent border border-ink hover:bg-bg3 hover:text-ink',
  dark: 'text-bg bg-ink hover:bg-acc hover:text-bg',
  ghost: 'text-tx2 bg-transparent border border-line hover:border-ink hover:text-ink'
}

const btnClasses = computed(() => [
  'inline-flex items-center justify-center font-bold tracking-[.04em] border-0 cursor-pointer whitespace-nowrap transition duration-[160ms] ease-out',
  sizeClasses[props.size],
  variantClasses[props.variant],
  props.block && 'w-full',
  props.lift && 'hover:-translate-y-0.5'
])
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="btnClasses">
    <slot />
  </NuxtLink>
  <button v-else :type="type" :class="btnClasses" :aria-label="ariaLabel">
    <slot />
  </button>
</template>
