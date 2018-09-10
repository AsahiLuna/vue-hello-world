import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Render from '@/components/Render.vue'

describe('Render.vue', () => {
  it('renders h1 tag when passed', () => {
    const level = 1
    const wrapper = shallowMount(Render, {
      propsData: { level },
      slots: {
        default: 'Test'
      }
    })
    expect(wrapper.text()).to.equal('Test')
    expect(wrapper.html()).to.have.string('</h1>')
  })
})
