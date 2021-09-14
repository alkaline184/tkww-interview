import React, {
} from 'react';
import Image from "./Image";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import { productsMock } from '../mocks';

describe('Image', () => {
    beforeAll(() => {
        configure({ adapter: new Adapter() });
    });

    afterEach(() => {
    });

    it('Should render Image component', async () => {
        const wrapper = shallow(
            <Image
                src={productsMock[0].image}
                className="cardImage" />
        );
        expect(wrapper.find('img').length).toEqual(1);
        expect(wrapper.find('img').prop('src')).toEqual(productsMock[0].image);
    });
});