import React from 'react';
import { getAllByText, render } from '@testing-library/react';

import Cards from './components/Cards';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    it('Shows "Hello world!"', () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <Cards />
            </Provider>
        );

        expect(getByText('Add to Cart Projects')).not.toBeNull();
    });

    it('should render a button with text "Add to Cart"', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Cards />
            </Provider>
        );
        
        expect(getAllByText('Add to Cart')[0]).not.toBeNull();
    });
});

