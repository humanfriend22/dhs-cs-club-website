<script setup lang="ts">
import { grades, levels, interests } from '~/data/club'

const name = ref('')
const email = ref('')
const grade = ref(grades[2])
const level = ref(levels[0].label)
const picks = ref<string[]>(['web apps', 'game dev'])

function toggleInterest(label: string) {
  const idx = picks.value.indexOf(label)
  if (idx === -1) picks.value.push(label)
  else picks.value.splice(idx, 1)
}

function onSubmit() {
  // no backend wired up yet — placeholder for future submit handler
}
</script>

<template>
  <form style="display: flex; flex-direction: column; gap: 24px; margin-top: 32px; max-width: 620px;" @submit.prevent="onSubmit">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr)); gap: 14px;">
      <label style="display: flex; flex-direction: column; gap: 7px;">
        <span style="font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--mut);">Full name</span>
        <input v-model="name" type="text" placeholder="avery rodriguez" class="field">
      </label>
      <label style="display: flex; flex-direction: column; gap: 7px;">
        <span style="font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--mut);">School email</span>
        <input v-model="email" type="email" placeholder="you@dublinusd.org" class="field">
      </label>
    </div>

    <div style="display: flex; flex-direction: column; gap: 9px;">
      <span style="font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--mut);">Grade</span>
      <div style="display: flex; gap: 8px;">
        <button
          v-for="g in grades"
          :key="g"
          type="button"
          class="grade-btn"
          :class="{ active: grade === g }"
          @click="grade = g"
        >{{ g }}</button>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 9px;">
      <span style="font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--mut);">Experience</span>
      <div style="display: flex; flex-direction: column; gap: 7px;">
        <button
          v-for="l in levels"
          :key="l.label"
          type="button"
          class="level-btn"
          :class="{ active: level === l.label }"
          @click="level = l.label"
        >
          <span class="dot" :class="{ active: level === l.label }" />
          <span style="font-weight: 700;">{{ l.label }}</span>
          <span style="color: var(--mut); font-size: 12px;">{{ l.hint }}</span>
        </button>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 9px;">
      <span style="font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--mut);">Interests — pick any</span>
      <div style="display: flex; flex-wrap: wrap; gap: 7px;">
        <button
          v-for="i in interests"
          :key="i"
          type="button"
          class="interest-btn"
          :class="{ active: picks.includes(i) }"
          @click="toggleInterest(i)"
        >{{ picks.includes(i) ? '[x] ' : '[ ] ' }}{{ i }}</button>
      </div>
    </div>

    <AppButton type="submit" variant="primary" block>SUBMIT →</AppButton>
    <p style="margin: 0; font-size: 11px; color: var(--mut);">Your email is used for meeting reminders only.</p>
  </form>
</template>

<style scoped>
.field {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: var(--ink);
  background: var(--bg2);
  border: 1px solid var(--line);
  padding: 12px;
  outline: none;
  width: 100%;
  min-width: 0;
}
.field:focus { border-color: var(--acc); background: var(--bg2); }

.grade-btn {
  flex: 1;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  color: var(--tx2);
  background: var(--bg2);
  border: 1px solid var(--line);
  padding: 13px 0;
  cursor: pointer;
  min-height: 44px;
}
.grade-btn.active { color: var(--bg); background: var(--ink); border-color: var(--ink); }

.level-btn {
  display: flex;
  align-items: center;
  gap: 11px;
  text-align: left;
  font-family: inherit;
  font-size: 13px;
  color: var(--ink);
  background: var(--bg2);
  border: 1px solid var(--line);
  padding: 13px;
  cursor: pointer;
  min-height: 44px;
}
.level-btn.active { border-color: var(--acc); }
.level-btn .dot {
  width: 13px;
  height: 13px;
  flex: none;
  border: 1px solid var(--mut);
  background: transparent;
}
.level-btn .dot.active { border-color: var(--acc); background: var(--acc); }

.interest-btn {
  font-family: inherit;
  font-size: 12px;
  color: var(--tx2);
  background: var(--bg2);
  border: 1px solid var(--line);
  padding: 10px 12px;
  cursor: pointer;
  min-height: 40px;
  white-space: nowrap;
}
.interest-btn.active { color: var(--ink); background: var(--bg3); border-color: var(--ink); }
</style>
