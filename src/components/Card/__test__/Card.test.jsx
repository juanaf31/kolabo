import { cleanup, getByTestId, getByText, render } from '@testing-library/react'
import React from 'react'
import CardComponent from '../index'
import renderer from 'react-test-renderer'

afterEach(() => {
    cleanup()
})

describe('testing card component', () => {
    const val = 'anyValue'

    test('render components correctly', () => {
        const { getByTestId } = render(<CardComponent />)
        getByTestId('card_component')
    })

    test('render props correctly', () => {
        const { getByTestId } = render(<CardComponent title={val} className={val} />)

        getByTestId('card_component').hasAttribute('title')
        getByTestId('card_component').hasAttribute('className')
    })

    test('card matches snapshot', () => {
        const tree = renderer.create(<CardComponent />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})