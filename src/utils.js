export const productTypeMatch = (product, type) => product.type.match(type);
export const productNameMatch = (product, keyword) => product.name.match(keyword);
export const productTypeAndNameMatch = (product, keyword, type) => product.name.match(keyword) && product.type.match(type);

export const filterProducts = (product, keywordSearch, typeSearch) => {
    if (keywordSearch && typeSearch) return productTypeAndNameMatch(product, keywordSearch, typeSearch); 
    if (keywordSearch && !typeSearch) return productNameMatch(product, keywordSearch);
    if (typeSearch && !keywordSearch) return productTypeMatch(product, typeSearch);
    return true;
}