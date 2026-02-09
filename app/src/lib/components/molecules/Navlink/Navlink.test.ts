import { render } from 'vitest-browser-svelte'
import { expect, test } from 'vitest'
import Navlink from './Navlink.svelte'

test('counter button increments the count', async () => {
  const screen = render(Navlink, {
  })

  await screen.getByRole('href', { name: '/servicos' }).click()

  await expect.element(screen.getByText('Count is 2')).toBeVisible()
})
