import { type JSX, type Component, createEffect } from 'solid-js'
import { makeSettingsContext, SettingsContext } from './makeSettings.ts'
import { settingsScheme } from '@/models/settings.ts'

export const SettingsProvider: Component<{ children: JSX.Element }> = props => {
  const [state, dispatch] = makeSettingsContext()
  const settings = settingsScheme.safeParse(
    JSON.parse(localStorage.getItem('settings') ?? '{}')
  )

  if (settings.success) dispatch(settings.data)
  createEffect(() => {
    localStorage.setItem('settings', JSON.stringify(state))
  })

  return (
    <SettingsContext.Provider value={[state, dispatch]}>
      {props.children}
    </SettingsContext.Provider>
  )
}
