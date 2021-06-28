import { cleanup, render } from '@testing-library/react'
import React from 'react'
import Loading from '../index'
import renderer from 'react-test-renderer'

afterEach(() => {
    cleanup()
})

describe('testing card component', () => {

    test('render components correctly', () => {
        const { getByTestId } = render(<Loading />)
        getByTestId('loading')
    })

    test('loading matches snapshot', () => {
        const tree = renderer.create(<Loading />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})