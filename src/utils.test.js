import * as Utils from './utils';
import {productsMock} from './mocks';

describe('Utils', () => {
    const { filterProducts, productTypeMatch, productNameMatch, productTypeAndNameMatch } = Utils;
    describe('productTypeMatch', () => {
        it('Should return value', () => {
            expect(productTypeMatch(productsMock[0], "RETAIL")).not.toBeNull();
        });
        it('Should return null', () => {
            expect(productTypeMatch(productsMock[0], "TEST")).toBeNull();
        });
    })
    describe('productNameMatch', () => {
        it('Should return value', () => {
            expect(productNameMatch(productsMock[0], "Honey")).not.toBeNull();
        });
        it('Should return false', () => {
            expect(productNameMatch(productsMock[0], "TEST")).toBeNull();
        });
    })
    describe('productTypeAndNameMatch', () => {
        it('Should return value', () => {
            expect(productTypeAndNameMatch(productsMock[0], "Honey", "RETAIL")).not.toBeNull();
        });
        it('Should return false', () => {
            expect(productTypeAndNameMatch(productsMock[0], "TEST","TEST")).toBeNull();
        });
    })
    describe('filterProducts', () => {
        it('Should return true when search keyword and type are not set', () => {
            expect(filterProducts(productsMock[0],'','')).toBe(true);
        });
        it('Should return value when matching both keyword and type', () => {
            expect(filterProducts(productsMock[0],'Honey','RETAIL')).not.toBeNull();
        })
        it('Should return value when matching just keyword and type is not set', () => {
            expect(filterProducts(productsMock[0],'Honey','')).not.toBeNull();
        })
        it('Should return value when matching just type and keyword is not set', () => {
            expect(filterProducts(productsMock[0],'','RETAIL')).not.toBeNull();
        })
        it('Should return null when not matching', () => {
            expect(filterProducts(productsMock[0],'TEST','RETAIL')).toBeNull();
        })
    })
})