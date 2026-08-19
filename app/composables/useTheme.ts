const THEME_KEY = 'dhs-cs-theme'

export function useTheme() {
  const dark = useState<boolean>('theme-dark', () => false)

  const apply = (isDark: boolean) => {
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
      document.body.style.background = isDark ? '#131110' : '#E7E5E4'
      localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light')
    }
  }

  const init = () => {
    if (import.meta.client) {
      const stored = localStorage.getItem(THEME_KEY)
      dark.value = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
      apply(dark.value)
    }
  }

  const toggle = () => {
    dark.value = !dark.value
    apply(dark.value)
  }

  return { dark, init, toggle }
}
