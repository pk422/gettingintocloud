class Comment {
    comment_id: number;
    comment_userId: string;
    comment_postId: string;
    comment_authorEmail: string;
    comment_author: string;
    comment_content: string;
    comment_createdAt: Date;
    comment_approved: boolean;


    constructor(
        id: number,
        userId: string,
        postId: string,
        authorEmail: string,
        author: string,
        content: string,
        createdAt: Date,
        approved: boolean) {
        this.comment_id = id;
        this.comment_userId = userId;
        this.comment_postId = postId;
        this.comment_authorEmail = authorEmail;
        this.comment_author = author;
        this.comment_content = content;
        this.comment_createdAt = createdAt;
        this.comment_approved = approved;
    }
}

export = Comment;
