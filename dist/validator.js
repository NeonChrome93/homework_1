"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVideoValidation = exports.isEqual = void 0;
const video_routers_1 = require("./routers/video-routers");
const isEqual = (arr1, arr2) => {
    return arr1.every((value) => arr2.includes(value));
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
    if (!(0, exports.isEqual)(resolution, video_routers_1.availableResolutions)) {
        errors.push({
            message: 'invalid availableResolutions',
            field: 'availableResolutions'
        });
    }
    //....
    // ....
    if (errors.length > 0)
        return errors;
    return null;
};
exports.createVideoValidation = createVideoValidation;
