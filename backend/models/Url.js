import mongoose from 'mongoose'

// Url (urlCode, longUrl, views, createdBy) schema.
const UrlSchema = new mongoose.Schema({
    urlCode: {
        type: String,
        minLength: 5,
        unique: true
    },
    longUrl: {
        type: String,
        required: [true, 'Please provide url'],
        minlength: 3
    },
    views: {
        type: Object,
        default: {}
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
    }
}, { timestamps: true })

export default mongoose.model('Url', UrlSchema)
