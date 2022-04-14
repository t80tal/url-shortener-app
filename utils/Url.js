import { UnprocessableEntity } from '../errors/index.js'

class Link {
    constructor(longUrl) {
        // -------Check if a valid url was given---------
        // Example for a valid link: c.im


        const urlParts = longUrl.split(".")
        // If there is no '.' in the url and the url length is less than 3 and at least 2 parts have 1 char and url is not ending with a dot.
        if (!((urlParts.length > 1) && (longUrl.length > 2) && (longUrl.slice(-1) !== '.') && (urlParts[0].length > 0) && (urlParts[1].length > 0))) {
            throw new UnprocessableEntity('URL is not valid.')
        }

        // Avoid case of http://.com
        // But dismiss if it is ending with **http.**
        if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(urlParts[0].slice(-1))) {
            throw new UnprocessableEntity('URL is not valid.')
        }
        this.longUrl = longUrl
    }
}

export default Link