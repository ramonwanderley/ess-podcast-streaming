class User {
    constructor(obj) {
        obj =  obj || {};
        this.email = obj.email || '';
        this.username = obj.username || '';
        this.password = obj.password || '';
        this.created_at = obj.created_at || (new Date.now()).toString();
        this.followers = obj.followers || [];
        this.following = obj.following || [];
        this.following = obj.history || [];
    }
}

module.exports = Podcast;