/* @refresh reload */
import { render } from 'solid-js/web'
import App from './App.tsx'

render(() => <App />, document.querySelector('#root') ?? document.body)
