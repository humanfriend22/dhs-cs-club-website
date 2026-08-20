<script setup lang="ts">
import { steps, faq } from '~/data/club'
</script>

<template>
  <main class="wipe w-5/6">
    <div class="pt-11 px-[1.875rem] pb-[3.75rem] border-r border-line">
      <div class="text-[0.6875rem] tracking-[.14em] uppercase text-mut">// membership form</div>
      <h2 class="mt-3.5 text-3xl font-bold tracking-[-.035em] text-ink">Fill this out and we'll let you know soon.</h2>
      <div class="mt-6 flex flex-wrap gap-2.5">
          <span>Sorry! We're still figuring things out.</span>
        <!-- <AppButton
          to="https://forms.gle/qYY5cq1FMK5nxDcT9"
          target="_blank"
          rel="noopener"
          variant="primary"
          lift
        >OPEN THE FORM →</AppButton> -->
      </div>
    </div>
  </main>
</template>
