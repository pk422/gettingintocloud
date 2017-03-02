class Post {

    post_id: number;
    post_title: string;
    post_content: string;
    post_category: string;
    post_createAt: Date;
    post_status: boolean;

    constructor(
        id: number,
        title: string,
        content: string,
        category: string,
        createAt: Date,
        status: boolean) {
        this.post_id = id;
        this.post_title = title;
        this.post_content = content;
        this.post_category = category;
        this.post_createAt = createAt;
        this.post_status = status;

    }
}

export = {Post};
