var User = (function () {
    //user_displayImage: 
    function User(id, name, username, email, password, phone, street, suite, city, zipcode, website) {
        this.user_id = id;
        this.user_name = name;
        this.user_username = username;
        this.user_email = email;
        this.user_password = password;
        this.user_phone = phone;
        this.user_street = street;
        this.user_suite = suite;
        this.user_city = city;
        this.user_zipcode = zipcode;
        this.user_website = website;
    }
    return User;
})();
module.exports = User;
