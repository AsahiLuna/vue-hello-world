import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import MoneyExample from '@/components/tdd/MoneyExample.vue'

describe('MoneyExample.vue', () => {
  /* We need to be able to add amounts in two different currencies and convert the
    result given a set of exchange rates. */
  it('renders add amounts in two different currencies and get the results when passed', () => {
    const dollar = 5
    const rate = 2
    const franc = 5
    const wrapper = shallowMount(MoneyExample, {
      propsData: {
        dollar: dollar,
        rate: rate,
        franc: franc
      }
    })
    expect(wrapper.text()).to.include((dollar + (franc * rate)))
  })

  /* We need to be able to multiply an amount (price per share) by a number
   (number of shares) and receive an amount. */
  it('renders multiply an amount (price per share) by a number and get results when passed', () => {
    const dollar = 5
    const times = 2
    const wrapper = shallowMount(MoneyExample, {
      propsData: {
        dollar,
        times
      }
    })
    expect(wrapper.text()).to.include(dollar * times)
  })
})
