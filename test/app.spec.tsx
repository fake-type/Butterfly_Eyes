import App from '@/App.tsx'
import { render } from '@solidjs/testing-library'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

describe('<App />', () => {
  beforeEach(() => {
    vi.mock('@/core/services/readFiles.ts', () => ({
      default: async () => []
    }))
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('render', async () => {
    const { container, unmount } = render(() => <App />)
    expect(container.firstElementChild?.tagName).toBe('DIV')
    unmount()
  })
})
