import { bidAsk, curve, spotUniform } from './liquidityConfig'
import { describe, it, expect } from 'vitest'

describe('LiquidityConfig', () => {
  it('delta ids, distribution X and distribution Y have same length', () => {
    const allConfigs = [spotUniform, curve, bidAsk]
    allConfigs.forEach((config) => {
      expect(config.deltaIds.length).toBe(config.distributionX.length)
      expect(config.deltaIds.length).toBe(config.distributionY.length)
    })
  })
})
