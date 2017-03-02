class PostCategories {
    category_id: number;
    category_name: string;
    category_slug: string;
    constructor(
        id: number,
        name: string,
        slug: string
       ) {
        this.category_id = id;
        this.category_name = name;
        this.category_slug = slug;
    }
}

export = PostCategories;
