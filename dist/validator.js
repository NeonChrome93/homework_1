"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVideoValidation = exports.createVideoValidation = exports.isEqual = void 0;
const video_routers_1 = require("./routers/video-routers");
const isEqual = (arr1) => {
    return arr1.every((value) => video_routers_1.availableResolutions.includes(value));
};
exports.isEqual = isEqual;
const createVideoValidation = (title, author, resolution) => {
    const errors = [];
    if (!title || typeof title !== 'string' || !title.trim() || title.length > 40) {
        errors.push({
            message: 'invalid title',
            field: 'title'
        });
    }
    if (!author || typeof author !== 'string' || !author.trim() || author.length > 20) {
        errors.push({
            message: 'invalid author',
            field: 'author'
        });
    }
    if (!(0, exports.isEqual)(resolution)) {
        errors.push({
            message: 'invalid availableResolutions',
            field: 'availableResolutions'
        });
    }
    if (errors.length > 0)
        return errors;
    return null;
};
exports.createVideoValidation = createVideoValidation;
const updateVideoValidation = (title, author, resolution, canBeDownloaded, minAgeRestriction, publicationDate) => {
    const arrErrors = [];
    if (!title || typeof title !== 'string' || !title.trim() || title.length > 40) {
        arrErrors.push({
            message: 'invalid title',
            field: 'title'
        });
    }
    if (!author || typeof author !== 'string' || !author.trim() || author.length > 20) {
        arrErrors.push({
            message: 'invalid author',
            field: 'author'
        });
    }
    if (!(0, exports.isEqual)(resolution)) {
        arrErrors.push({
            message: 'invalid availableResolutions',
            field: 'availableResolutions'
        });
    }
    if ((typeof canBeDownloaded !== "boolean")) {
        arrErrors.push({
            message: 'the field canBeDownloaded must be a boolean',
            field: 'canBeDownloaded '
        });
    }
    if (typeof minAgeRestriction !== "number" || minAgeRestriction > 18 || minAgeRestriction < 1) {
        arrErrors.push({
            message: 'the field  minAgeRestriction must be max 18 and min 1',
            field: ' minAgeRestriction'
        });
    }
    if (typeof publicationDate !== "string") {
        arrErrors.push({
            message: 'the field  publicationDate must be a string',
            field: ' publicationDate'
        });
    }
    if (arrErrors.length > 0)
        return arrErrors;
    return null;
};
exports.updateVideoValidation = updateVideoValidation;
