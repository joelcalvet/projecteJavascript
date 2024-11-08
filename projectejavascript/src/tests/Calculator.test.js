import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Calculator from '../views/Calculator.vue'

describe('Calculator.vue', () => {
  it('renders calculator component', () => {
    const wrapper = mount(Calculator)
    expect(wrapper.exists()).toBe(true)
  })

  it('has clear button', () => {
    const wrapper = mount(Calculator)
    const clearButton = wrapper.find('button')
    expect(clearButton.text()).toContain('Esborrar')
  })
})