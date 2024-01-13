import { type Component } from 'solid-js'
import { OpenBtnStyle } from './openModalBtn.css.ts'
import SVGIcon from '@/assets/gear.svg'

interface OpenBtnProps {
  onClick: () => void
}

const Button: Component<OpenBtnProps> = props => {
  return (
    <button
      type="button"
      class={OpenBtnStyle}
      onClick={() => {
        props.onClick()
      }}
    >
      <img src={SVGIcon} alt="" />
    </button>
  )
}

export default Button
