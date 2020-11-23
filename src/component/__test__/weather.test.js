import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { act, render,fireEvent } from '@testing-library/react';
import Weather from './../weather'
it(`Testing 100 Celsius`, () => {
    const {queryByTestId} = render(
        <Weather />
    );
    fireEvent.change(queryByTestId('Celsius'), {
        target: { value: 100 },
      });
      expect(queryByTestId('Fahrenheit')).toHaveValue('212')
      expect(queryByTestId('h1t')).toHaveTextContent('The Water Would Boil')

}
)

it(`Testing 10 Celsius`, () => {
    const {queryByTestId} = render(
        <Weather />
    );
    fireEvent.change(queryByTestId('Celsius'), {
        target: { value: 10 },
      });
      expect(queryByTestId('Fahrenheit')).toHaveValue('50')
      expect(queryByTestId('h1t')).toHaveTextContent('The Water Would Not Boil')

}
)

it(`Testing 32 Fahrenheit`, () => {
    const {queryByTestId} = render(
        <Weather />
    );
    fireEvent.change(queryByTestId('Fahrenheit'), {
        target: { value: 32 },
      });
      expect(queryByTestId('Celsius')).toHaveValue('0')
      expect(queryByTestId('h1t')).toHaveTextContent('The Water Would Not Boil')

}
)