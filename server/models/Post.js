var Post = (function () {
    function Post(id, title, content, category, createAt, status) {
        this.post_id = id;
        this.post_title = title;
        this.post_content = content;
        this.post_category = category;
        this.post_createAt = createAt;
        this.post_status = status;
    }
    return Post;
})();
module.exports = { Post: Post };
