import avatarPath from 'images/263ec435b123bbb5318e70fe81700254a940d9a7.png';

import pic1 from 'images/5e994a78aee1fb16342014976380cead345d648c.png';
import pic2 from 'images/3d704f7e5e067856183c00912fca82303c560c1b.png';
import pic3 from 'images/faf9cb11335f63a521c0a18c88286ab92ef6bbcc.png';
import pic4 from 'images/b4e075b4267562d209f7f2df0afa6c4719b431b2.png';
import pic5 from 'images/231e2d44418e0daedd3caaf8db1aeab6413dfa4a.png';
import pic6 from 'images/c98c54b4d824d7327c8f4eca96ef04a50031e537.png';

const articles = [{
    id: 1,
    icon: '',
    caption: 'Nun ce sta\' mammà là dint\'!',
    title: 'Quann steva là in Honduras, steva rint a na capanna e nziemm a me ce steva.',
    description: 'E intant\' e sord tuoj nunn arrivavan. \'Na sera gli honduregni me mettetter\' nu macete n\'man e gridavan\': \'Accirel\'! Accirel\'! Je pregav\', pregav\' ca corcrun\' me venev\' a salva\', ca tu me veniv\' a salva\'! ',
    hasDetails: false,
    author: 1,
    images: [
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic6
    ]
}, {
    id: 2,
    icon: 'pig',
    caption: 'Sapeva pure ca oggi je e te stevema inda \'sta machina',
    title: 'Quann\' tu me purtast\' a spara\' chillu cristian\' p\'a prima vota.',
    description: '',
    hasDetails: true,
    author: 1,
    images: [
        pic4,
        pic4,
        pic4,
        pic4,
        pic4
    ]
}, {
    id: 3,
    icon: '',
    caption: '',
    title: 'Quann\' Salvatore Conte è turnat\', quann\' Danielino è muort\', iss \'o sapeva.',
    description: '',
    hasDetails: false,
    author: 1,
    images: []
}, {
    id: 4,
    icon: '',
    caption: '',
    title: 'Mammà se n\'è ghiuta! Tu ci credi in Dio?',
    description: '',
    hasDetails: false,
    author: 1,
    images: []
}];

const users = [{
    id: 1,
    name: 'Lorem',
    surname: 'Ipsum',
    avatar: avatarPath
}];

export { users, articles };
