import React, {
} from 'react';
import Card from "./Card";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import { productsMock } from '../mocks';
import { v4 as uuidv4 } from 'uuid';

describe('Card', () => {
    beforeAll(() => {
        configure({ adapter: new Adapter() });
    });

    it('Should render Card component', async () => {
        const wrapper = shallow(
            <Card
                cardResults={productsMock[0]}
                key={uuidv4()}
            />,
        );
        expect(wrapper.find('h1').at(0).text()).toEqual(productsMock[0].name);
    });
    it('Should simulate click on Card Component', async () => {
        const setClicked = jest.fn();
        const handleClick = jest.spyOn(React, "useState");
        handleClick.mockImplementation(clicked => [clicked, setClicked]);
        const wrapper = shallow(
            <Card
                cardResults={productsMock[0]}
                key={uuidv4()}
            />,
        );
        //Before button click Product Price is not visible
        expect(wrapper.find('div').at(1).find('p').at(0).exists()).toBe(false);

        //Click the card to display price
        wrapper.find('div').at(0).simulate('click');
        wrapper.update();
        expect(setClicked).toBeTruthy();
        expect(wrapper.find('div').at(1).find('p').at(0).text()).toEqual('Price: ' + productsMock[0].price);
        expect(wrapper.find('div').at(1).find('p').at(1).text()).toEqual(productsMock[0].storeName);

        //Click the card again to hide the price
        wrapper.find('div').at(0).simulate('click');
        wrapper.update();
        expect(wrapper.find('div').at(1).find('p').at(0).exists()).toBe(false);
    });
});