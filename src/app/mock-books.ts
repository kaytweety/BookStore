import { Book } from './book';
import { KeyValuePipe } from '@angular/common';

// export const BOOKS: Book[] = [
//    { id: 1, name: 'Android', author: 'Big Nerd Ranch Guide', isbn: '159-3689-987', no_copies: 0, price: 0 },
//    { id: 2, name: 'C++', author: 'Brian Karnighan', isbn: '160-3690-988', no_copies: 0, price: 0 },
//    { id: 3, name: 'JAVA', author: 'Joshua Bloch', isbn: '161-3691-989', no_copies: 0, price: 0 },
//    { id: 4, name: 'OOP', author: 'Robert Lafore', isbn: '162-3692-990', no_copies: 0, price: 0 }
// ];

export const BOOKS: Book[] = [
   {
      id: 1,
      name: 'Android',
      author: 'Big Nerd Ranch Guide',
      isbn: '159-3689-987',
      no_copies: 0,
      price: 0,
      file_info: {
         file_name: "android pic",
         file_size: 0,
         file_create: '10 - 10 - 2010',
         file_update: '12 - 10 - 2010',
         file_url: 'https://mindbodygreen-res.cloudinary.com/image/upload/w_767,q_auto:eco,f_auto,fl_lossy/org/stocksy_comp_1119597.jpg'
      }
   },
   {
      id: 1,
      name: 'C++',
      author: 'Brian Karnighan',
      isbn: '160-3690-988',
      no_copies: 0,
      price: 0,
      file_info: {
         file_name: "c++ pic",
         file_size: 0,
         file_create: '11 - 9 - 2011',
         file_update: '14 - 9 - 2011',
         file_url: 'https://www.elmastudio.de/wp-content/uploads/2018/04/homeoffice-featured-image.jpg'
      }
   },
   {
      id: 1,
      name: 'JAVA',
      author: 'Joshua Bloch',
      isbn: '161-3691-989',
      no_copies: 0,
      price: 0,
      file_info: {
         file_name: "java pic",
         file_size: 0,
         file_create: '16 - 6 - 2015',
         file_update: '1 - 16 - 2016',
         file_url: 'https://cdn.pixabay.com/photo/2014/05/02/21/49/home-office-336373__340.jpg'
      }
   },
   {
      id: 1,
      name: 'OOP',
      author: 'Robert Lafore',
      isbn: '162-3692-990',
      no_copies: 0,
      price: 0,
      file_info: {
         file_name: "oop pic",
         file_size: 0,
         file_create: '20 - 11 - 2003',
         file_update: '26 - 11 - 2003',
         file_url: 'https://support.content.office.net/en-us/media/c1633a4d-a445-4f6c-87fc-f41fc8f01b69.jpg'
      }
   }
];
