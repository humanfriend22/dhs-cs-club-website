<script setup lang="ts">
const { to } = defineProps<{
    to: string;
}>();

const route = useRoute();
const active = computed(() => route.path === to);
</script>

<template>
    <NuxtLink :to="$props.to" class="no-underline px-4 py-2 rounded-full font-semibold transition-all text-foreground" :class="active ? 'bg-primary' : 'hover:bg-hackclub-steel'">
        <slot />
    </NuxtLink>
</template>