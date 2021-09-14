import React, {
} from 'react';
import { render, screen } from "@testing-library/react";
import mockAxios from 'axios';
import App from "./App";
import Card from "./components/Card";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, shallow, configure } from 'enzyme';
import { axiosResponse } from './mocks';
import { waitFor } from '@testing-library/react';

jest.mock("axios");

describe('App', () => {
    beforeAll(() => {
        configure({ adapter: new Adapter() });
    });

    afterEach(jest.clearAllMocks);

    it('Should render App component and load products', async () => {
        mockAxios.get.mockResolvedValue(axiosResponse);
        render(<App />);
        await waitFor(() => {
            expect(screen.getByTestId('product-results').innerHTML).toBeTruthy();
            const products = screen.getByTestId('product-results');
            //Check the number of Card components added
            expect(products.childElementCount).toEqual(axiosResponse.data.length);
            //Check the name of the first card (product)
            expect(products.firstElementChild.getElementsByTagName('h1')[0].textContent).toEqual(axiosResponse.data[0].name);
            //screen.debug();
        })
    });
});