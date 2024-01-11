import {
  type Component,
  createSignal,
  onCleanup,
  Show,
  createEffect
} from 'solid-js'
import { useSettings } from '@/context/settings/selector.ts'
import * as styles from './styles.css.ts'

const Clock: Component = () => {
  const [settings] = useSettings()
  const [time, setTime] = createSignal<number>(Date.now())
  const [formater, setFormater] = createSignal<Intl.DateTimeFormat>()
  const timeInterval = setInterval(() => setTime(Date.now()), 400)

  createEffect(() => {
    setFormater(
      Intl.DateTimeFormat(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
        second:
          settings.timeFormat?.displaySeconds !== false ? 'numeric' : undefined,
        hour12: settings.timeFormat?.ishour12
      })
    )
  })

  onCleanup(() => {
    clearInterval(timeInterval)
  })

  return (
    <Show when={formater()}>
      {formater => (
        <div>
          <b class={styles.text}>{formater().format(time())}</b>
        </div>
      )}
    </Show>
  )
}

export default Clock
