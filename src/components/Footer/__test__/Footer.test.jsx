import { cleanup, render } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '../index'

afterEach(() => {
    cleanup()
})

describe('testing footer component', () => {

    test('footer matches snapshot', () => {
        const tree = renderer.create(<Footer />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})