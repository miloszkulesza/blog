export interface PostInterface {
    id: number;
    text: string;
    createdDateTime: string;
    author: string;
    scope: string;
    status?: string;
    comments: PostCommentInterface[];
    version?: number;
    publicationDate?: string;
}

export interface PostCommentInterface {
    id: number;
    text: string;
    createdDateTime: string;
    author: string;
}

export interface PageableInterface {
    offset: number;
    unpaged: boolean;
    paged: boolean;
    pageNumber: number;
    pageSize: number;
    sort: SortInterface;
}

export interface SortInterface {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
}

export interface GetPostsResponseInterface {
    totalPages: number;
    totalElements: number;
    size: number;
    content: PostInterface[];
    number: number;
    numberOfElements: number;
    pageable: PageableInterface;
    first: boolean;
    last: boolean;
    sort: SortInterface;
    empty: boolean;
}