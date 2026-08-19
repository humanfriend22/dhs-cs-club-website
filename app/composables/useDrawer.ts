export function useDrawer() {
  const open = useState('nav-drawer-open', () => false)
  const toggle = () => { open.value = !open.value }
  const close = () => { open.value = false }
  return { open, toggle, close }
}
