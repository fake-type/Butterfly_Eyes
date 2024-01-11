import { type Component } from 'solid-js'
import { useSettings } from '@/context/settings/selector'

interface TimeCheckboxInputProps {
  isChecked?: boolean
  label: string
  onInput: (target: HTMLInputElement) => void
}

const TimeCheckboxInput: Component<TimeCheckboxInputProps> = props => {
  return (
    <label style={{ display: 'block', width: '100%' }}>
      <input
        type="checkbox"
        style={{ margin: '.4em' }}
        checked={props.isChecked}
        onInput={event => {
          props.onInput(event.target)
        }}
      />
      {props.label}
    </label>
  )
}

const TimeConfigPanel: Component = () => {
  const [settings, dispatch] = useSettings()

  return (
    <section>
      <div>Time</div>
      <form>
        <fieldset>
          <TimeCheckboxInput
            isChecked={settings.timeFormat?.ishour12}
            label="12-hour"
            onInput={target => {
              dispatch('timeFormat', 'ishour12', target.checked)
            }}
          />
          <TimeCheckboxInput
            isChecked={settings.timeFormat?.displaySeconds}
            label="Display Seconds"
            onInput={target => {
              dispatch('timeFormat', 'displaySeconds', target.checked)
            }}
          />
        </fieldset>
      </form>
    </section>
  )
}

export default TimeConfigPanel
