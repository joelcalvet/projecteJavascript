import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Comments from '../views/Comments.vue'

describe('Comments.vue', () => {
  it('renders comments component', () => {
    const wrapper = mount(Comments)
    expect(wrapper.exists()).toBe(true)
  })

  it('shows loading state initially', () => {
    const wrapper = mount(Comments)
    expect(wrapper.text()).toContain('Carregant')
  })
})