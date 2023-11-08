import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('with only first param', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment param click', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const toggleBtn = screen.getByTestId('increment-btn');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement param click', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const toggleBtn = screen.getByTestId('decrement-btn');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
