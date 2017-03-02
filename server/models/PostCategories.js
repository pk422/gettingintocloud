var PostCategories = (function () {
    function PostCategories(id, name, slug) {
        this.category_id = id;
        this.category_name = name;
        this.category_slug = slug;
    }
    return PostCategories;
})();
module.exports = PostCategories;
