<script setup lang="ts">
defineProps<{
    title: string;
    text: string;
    color: string;
}>();
</script>

<template>
    <div :class="`bg-card p-8 rounded-2xl transition-all hover:shadow-lg shadow-hackclub-${color}/50 cursor-pointer  duration-300`">
        <div :class="`w-12 h-12 bg-hackclub-${$props.color}/10 rounded-full flex items-center justify-center mb-4`">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                :class="`lucide text-hackclub-${$props.color}`">
                <path d="m18 16 4-4-4-4"></path>
                <path d="m6 8-4 4 4 4"></path>
                <path d="m14.5 4-5 16"></path>
            </svg>
        </div>
        <h3 class="mb-3">{{ $props.title }}</h3>
        <p class="text-muted">{{ $props.text }}</p>
    </div>
</template>