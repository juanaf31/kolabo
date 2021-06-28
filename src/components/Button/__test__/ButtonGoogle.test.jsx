import { cleanup, getByText, render } from '@testing-library/react'
import React from 'react'
import ButtonGoogle from '../ButtonGoogle'
import renderer from 'react-test-renderer'

afterEach(() => {
    cleanup()
})

describe('testing button google', () => {
    const val = 'anyValue'

    test('render component correnctly', () => {

        const { getByTestId } = render(<ButtonGoogle />)

        getByTestId('google_btn')
        getByTestId('google_image')
        getByTestId('text')
    })

    test('render title correctly', () => {
        const { getByText } = render(<ButtonGoogle title={val} />)

        getByText(val)
    })

    test('render all possible props', () => {
        const { getByTestId } = render(<ButtonGoogle title={val} className={val} />)

        const google_btn = getByTestId('google_btn')

        expect(google_btn).toHaveClass(val)
        getByTestId('text')

    })

    test('button matches snapshot', () => {
        const tree = renderer.create(<ButtonGoogle />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})