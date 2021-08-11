const { i18n } = require('./next-i18next.config')

module.exports = {
    i18n,
    images: {
        domains: ["links.papareact.com"] // external domain links
    },
    env: {
        MAPBOX_ACCESS_TOKEN: "<MAPBOX_ACCESS_TOKEN>"
    }
}