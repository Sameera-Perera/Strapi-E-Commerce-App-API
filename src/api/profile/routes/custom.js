module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/profile/me',
            handler: 'profile.getMe',
            config: {}
        },
        {
            method: 'POST',
            path: '/profile/me',
            handler: 'profile.createMe',
            config: {}
        }
    ]
}