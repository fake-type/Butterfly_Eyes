import { createContext } from 'solid-js'
import { type Store, type SetStoreFunction, createStore } from 'solid-js/store'
import { type Settings } from '@/models/settings.ts'

export type SettingsContextType = readonly [
  state: Store<Settings>,
  setState: SetStoreFunction<Settings>
]

export const makeSettingsContext = (): SettingsContextType => {
  const [state, setState] = createStore<Settings>({})

  return [state, setState]
}

export const SettingsContext = createContext<SettingsContextType>(
  makeSettingsContext()
)
