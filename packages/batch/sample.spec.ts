import { describe, it } from 'vitest'

// The two tests marked with concurrent will be run in parallel
describe('suite', () => {
  it('serial test', async () => { /* ... */ })
  it.concurrent('concurrent test 2', async () => { console.log (2)})
  it.concurrent('concurrent test 1', async () => { console.log (1)})
})