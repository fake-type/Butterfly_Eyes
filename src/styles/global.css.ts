import { globalStyle } from '@vanilla-extract/css'

globalStyle('*, :after, :before', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box'
})

globalStyle('body', {
  color: 'white',
  fontFamily: 'system-ui',
  minHeight: '100dvh',
  fontVariantNumeric: 'tabular-nums lining-nums'
})

globalStyle('h1, h2, h3, h4', {
  textWrap: 'balance'
})

globalStyle('p', {
  textWrap: 'pretty'
})
