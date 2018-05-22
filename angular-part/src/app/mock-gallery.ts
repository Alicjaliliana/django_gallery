import { AWGallery } from './gallery/gallery';
import { Picture } from './picture';

export const Pictures: Picture[] = [
   {picture: 'https://create.adobe.com/content/dam/2018/03/cosmic-nuggets/zzhome.jpg'},
   {picture: 'https://image.freepik.com/free-vector/vector-illustration-cosmonaut_1441-11.jpg'},
   {picture: 'http://www.missled.co.uk/wp-content/uploads/2015/10/Miss-Led-Miss-you-fashion-illustration.png'},
   {picture: 'https://i.pinimg.com/736x/4c/46/8d/4c468d9b400490a67980e2f974fb17be--illustrations-vectorielles-illustration-vector.jpg'},
   {picture: 'https://i.pinimg.com/736x/c6/d9/f3/c6d9f3016b2272fa0b879f35ad7d70b2--flat-design-vector-illustrations.jpg'},
   {picture: 'https://www.oca.ac.uk/wp-content/uploads/2017/02/Final-illustration-adjusted-in-Illustrator-375x400.jpg'},
];

export const GALLERIES: AWGallery[] = [
  { id: 11, 
      title: 'Mr. Nice', 
      creation_date: '12.04.2018', 
      category: 'Digital Painting', 
      thumbnail: 'https://create.adobe.com/content/dam/2018/03/cosmic-nuggets/zzhome.jpg', 
      Pictures: [
         {picture: 'https://create.adobe.com/content/dam/2018/03/cosmic-nuggets/zzhome.jpg'},
         {picture: 'https://image.freepik.com/free-vector/vector-illustration-cosmonaut_1441-11.jpg'},
         {picture: 'http://www.missled.co.uk/wp-content/uploads/2015/10/Miss-Led-Miss-you-fashion-illustration.png'},
      ], 
      update_date: '' },
  { id: 12, title: 'Narco', creation_date: '18.05.2018', category: 'Illustration', thumbnail: 'https://i.pinimg.com/736x/4c/46/8d/4c468d9b400490a67980e2f974fb17be--illustrations-vectorielles-illustration-vector.jpg', Pictures: [{picture: 'https://i.pinimg.com/736x/4c/46/8d/4c468d9b400490a67980e2f974fb17be--illustrations-vectorielles-illustration-vector.jpg'}], update_date: ''  },
  { id: 13, title: 'Bombasto', creation_date: '2.04.2018', category: 'Coś innego', thumbnail: 'https://i.pinimg.com/736x/c6/d9/f3/c6d9f3016b2272fa0b879f35ad7d70b2--flat-design-vector-illustrations.jpg', Pictures: [{picture: 'https://i.pinimg.com/736x/c6/d9/f3/c6d9f3016b2272fa0b879f35ad7d70b2--flat-design-vector-illustrations.jpg'},], update_date: ''  },
  { id: 14, title: 'Celeritas', creation_date: '12.03.2018', category: 'Character Design', thumbnail: 'https://www.oca.ac.uk/wp-content/uploads/2017/02/Final-illustration-adjusted-in-Illustrator-375x400.jpg', Pictures: [{picture: 'https://www.oca.ac.uk/wp-content/uploads/2017/02/Final-illustration-adjusted-in-Illustrator-375x400.jpg'}], update_date: ''  },
];
