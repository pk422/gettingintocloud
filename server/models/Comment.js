var Comment = (function () {
    function Comment(id, userId, postId, authorEmail, author, content, createdAt, approved) {
        this.comment_id = id;
        this.comment_userId = userId;
        this.comment_postId = postId;
        this.comment_authorEmail = authorEmail;
        this.comment_author = author;
        this.comment_content = content;
        this.comment_createdAt = createdAt;
        this.comment_approved = approved;
    }
    return Comment;
})();
module.exports = Comment;
