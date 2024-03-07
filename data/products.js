export function getProduct(productId) {
    let matchingProduct;

    produse.forEach((product) => {
        if (productId === product.id) {
            matchingProduct = product;
        }
    });

    return matchingProduct;
}

export const produse = [{
    id: '111',
    image: './barbati/Blazer slim cu guler sal barbati.webp',
    name: 'Blazer slim cu guler sal barbati',
    priceCents: 28900,
}, {
    id: '112',
    image: './barbati/Ghete iarna barbati.webp',
    name: 'Ghete Iarna barbati',
    priceCents: 34000,
}, {
    id: '113',
    image: './barbati/Jacheta casual barbati.webp',
    name: 'Jacheta casual barbati',
    priceCents: 19900,
}, {
    id: '114',
    image: './barbati/Jacheta cu gluga si snur, impermeabila barbati.webp',
    name: 'Jacheta cu gluga si snur, impermeabila barbati',
    priceCents: 39900,
}, {
    id: '115',
    image: './barbati/Jacheta matlasata barbati.webp',
    name: 'Jacheta matlasata barbati',
    priceCents: 41900,
}, {
    id: '116',
    image: './barbati/Palton Casual barbati.webp',
    name: 'Palton Casual barbati',
    priceCents: 32500,  
}, {
    id: '117',
    image: './barbati/Pantofi sport pentru barbati.webp',
    name: 'Pantofi sport pentru barbati',
    priceCents: 23900,
}, {
    id: '118',
    image: './barbati/Set de 2 Piese C-est La Vie Paris.webp',
    name: 'Set de 2 Piese C-est La Vie Paris',
    priceCents: 35900,
}, {
    id: '119',
    image: './barbati/Set De Hanorac si Pantaloni cu imprimeu barbati.webp',
    name: 'Set De Hanorac si Pantaloni cu imprimeu barbati',
    priceCents: 29900,
}, {
    id: '120',
    image: './barbati/Set formal format din 3 piese, Sacou, Vesta si Pantaloni.webp',
    name: 'Set formal format din 3 piese, Sacou, Vesta si Pantaloni',
    priceCents: 48900,
}, {
    id: '121',
    image: './femei/Geanta Crossbody Cu Lant Fashion.webp',
    name: 'Geanta Crossbody Cu Lant Fashion',
    priceCents: 11900,
}, {
    id: '122',
    image: './femei/Geanta de dama cu model Argyle.webp',
    name: 'Geanta de dama cu model Argyle',
    priceCents: 11900,
}, {
    id: '123',
    image: './femei/Geanta Tote.webp',
    name: 'Geanta Tote',
    priceCents: 18900,
}, {
    id: '124',
    image: './femei/Mini Geanta Tip Crossbody Matlasata.webp',
    name: 'Mini Geanta Tip Crossbody Matlasata',
    priceCents: 10900,
}, {
    id: '125',
    image: './femei/Palton Casual cu nasturi.webp',
    name: 'Palton Casual cu nasturi',
    priceCents: 39900,
}, {
    id: '126',
    image: './femei/Palton de plus cu snur.webp',
    name: 'Palton de plus cu snur',
    priceCents: 23500,
}, {
    id: '127',
    image: './femei/Palton parka cu gluga din blana artificiala.webp',
    name: 'Palton parka cu gluga din blana artificiala',
    priceCents: 49900,
}, {
    id: '128',
    image: './femei/Rochie Casual.webp',
    name: 'Rochie Casual',
    priceCents: 17900,
}, {
    id: '129',
    image: './femei/Rochie Cu Bretele Subtiri si Paiete.webp',
    name: 'Rochie Cu Bretele Subtiri si Paiete',
    priceCents: 25900,
}, {
    id: '130',
    image: './femei/Rochie Eleganta Cu Maneci Lungi.webp',
    name: 'Rochie Eleganta Cu Maneci Lungi',
    priceCents: 37500,
}, {
    id: '131',
    image: './femei/Rochie in Linie A Cu Imprimeu Floral.webp',
    name: 'Rochie in Linie A Cu Imprimeu Floral',
    priceCents: 21900,
}, {
    id: '132',
    image: './femei/rochie lejera cu maneca lunga bodycon.webp',
    name: 'rochie lejera cu maneca lunga bodycon',
    priceCents: 20900,
}, {
    id: '133',
    image: './femei/Salopeta cu maneci lungi.webp',
    name: 'Salopeta cu maneci lungi',
    priceCents: 19900,
}, {
    id: '134',
    image: './femei/Set din doua piese trening casual.webp',
    name: 'Set din doua piese trening casual',
    priceCents: 23900,
}];