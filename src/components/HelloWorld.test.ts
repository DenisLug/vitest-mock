import { mount } from '@vue/test-utils'
import { expect, vi, test } from 'vitest'
import HelloWorld from './HelloWorld.vue'

vi.mock('./module', () => ({
  default: () => ({
    mockme: () => 'I am mocked'
  })
}))

function createWrapper() {
  return mount(HelloWorld, {
    props: {
      msg: 'Passed Prop Message'
    }
  })
}

test('should match snapshot', () => {
  expect(createWrapper().element).toMatchSnapshot()
})
