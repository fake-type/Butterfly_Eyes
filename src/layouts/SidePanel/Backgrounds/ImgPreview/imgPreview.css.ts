import { style } from '@vanilla-extract/css'

export const ImgPreviewContainer = style({
  position: 'relative',
  display: 'flex',
  overflow: 'hidden'
})

export const image = style({
  height: '10em',
  width: '100%',
  objectFit: 'cover',
  transition: '200ms',

  selectors: {
    [`${ImgPreviewContainer}:hover &`]: {
      filter: 'brightness(50%)',
      cursor: 'pointer',
      scale: '1.1'
    }
  }
})

export const deleteBtn = style({
  all: 'unset',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
})

export const deleteBtnIcon = style({
  display: 'none',

  selectors: {
    [`${ImgPreviewContainer}:hover &`]: {
      display: 'block'
    }
  }
})
