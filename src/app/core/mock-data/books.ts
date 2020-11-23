import { IBook } from '../models/book';

const synopsis: string = "Vivamus aliquam egestas sem in ornare. In sed bibendum augue"

export const books: IBook[] = [
    { title: 'Heart of Darkness' , coverImage: 'cover-cust-1843.jpg', synopsis: synopsis , language: 'English' , author: 'Lorem', genres: ['lorem', 'lorem'] },
    { title: 'Iron Mask' , coverImage: 'cover-cust-3354.jpg', synopsis: synopsis , language: 'English' , author: 'Lorem', genres: ['lorem', 'lorem'] },
    { title: 'Treasure Island' , coverImage: 'cover-cust-6666.jpg', synopsis: synopsis , language: 'English' , author: 'Lorem', genres: ['lorem', 'lorem'] },
    { title: 'The Island of Dr. Moreau' , coverImage: 'cover-orig-7341.jpg', synopsis: synopsis , language: 'English' , author: 'Lorem', genres: ['lorem', 'lorem'] },
    { title: 'Astounding Stories' , coverImage: 'cover-orig-13235.jpg', synopsis: synopsis , language: 'English' , author: 'Lorem', genres: ['lorem', 'lorem'] },
    { title: 'Worlds Unseen' , coverImage: 'cover-orig-28930.jpg', synopsis: synopsis , language: 'English' , author: 'Lorem', genres: ['lorem', 'lorem'] }
]
