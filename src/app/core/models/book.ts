export  interface IBook {
    id: number;
    title: string;
    coverImage: string;
    synopsis: string;
    language: string;
    author: string;
    publishDate: number;
    pages: number;
    downloadsNumber: number;
    genres: string[];
};