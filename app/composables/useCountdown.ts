export function useCountdown(target: Date) {
  const now = ref(Date.now())
  let timer: ReturnType<typeof setInterval> | undefined

  onMounted(() => {
    timer = setInterval(() => { now.value = Date.now() }, 1000)
  })
  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })

  const pad = (n: number) => String(n).padStart(2, '0')

  const remaining = computed(() => {
    const ms = Math.max(0, target.getTime() - now.value)
    return {
      d: pad(Math.floor(ms / 86400000)),
      h: pad(Math.floor((ms % 86400000) / 3600000)),
      m: pad(Math.floor((ms % 3600000) / 60000)),
      s: pad(Math.floor((ms % 60000) / 1000))
    }
  })

  return { remaining }
}
