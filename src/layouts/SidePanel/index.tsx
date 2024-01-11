import { createSignal, type Component } from 'solid-js'
import styles from './_sidePanel.css.ts'
import OpenBtn from '../../components/OpenBtn.tsx'
import BackgroundConfigPanel from '@/layouts/SidePanel/Backgrounds/index.tsx'
import TimeConfigPanel from './Time/Time.tsx'

const SidePanelLayout: Component = () => {
  const [isActive, setActive] = createSignal(false)

  return (
    <div class={styles.componentWrapper}>
      <aside
        class={styles.sidePanelContainer}
        style={{ width: isActive() ? '25em' : '0' }}
      >
        <BackgroundConfigPanel />
        <TimeConfigPanel />
      </aside>
      <OpenBtn onClick={() => setActive(prev => !prev)} />
    </div>
  )
}

export default SidePanelLayout
