import { style } from '@vanilla-extract/css'

export default {
  panel: style({
    display: 'flex',
    flexDirection: 'column',
    gap: '.5em',
    padding: '.6em'
  }),
  inputFileLabel: style({
    display: 'inline-block',
    padding: '.4em',
    border: 'solid 1px',
    cursor: 'pointer'
  }),
  imagesGrid: style({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '.3em'
  })
}
