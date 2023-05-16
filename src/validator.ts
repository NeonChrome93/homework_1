import {availableResolutions} from "./routers/video-routers";

export const isEqual = (arr1: string[]) => {
    return arr1.every((value) => availableResolutions.includes(value))
}

type ValidationErrorType = {
    message: string,
    field: string
}

export const createVideoValidation = (title: any, author: any, resolution: any, ) => {
    const errors: ValidationErrorType[] = []

    if (!title || typeof title !== 'string' || !title.trim() || title.length > 40) {
        errors.push({
            message: 'invalid title',
            field: 'title'
        })
    }

    if (!author || typeof author !== 'string' || !author.trim() || author.length > 20) {
        errors.push({
            message: 'invalid author',
            field: 'author'
        })
    }

    if(!isEqual(resolution)) {
        errors.push({
            message: 'invalid availableResolutions',
            field: 'availableResolutions'
        })
    }

    if (errors.length > 0) return errors
    return null
}

export const updateVideoValidation = (title: any, author: any,
                                      resolution: any, canBeDownloaded: any, minAgeRestriction: any, publicationDate: any) => {

    const arrErrors: ValidationErrorType[] = []

    if (!title || typeof title !== 'string' ||  title.trim().length > 40) {
        arrErrors.push({
            message: 'invalid title',
            field: 'title'
        })
    }

    if (!author || typeof author !== 'string' || author.trim().length > 20) {
        arrErrors.push({
            message: 'invalid author',
            field: 'author'
        })
    }

    if(!isEqual(resolution)) {
        arrErrors.push({
            message: 'invalid availableResolutions',
            field: 'availableResolutions'
        })
    }

    if((typeof canBeDownloaded !== "boolean" )) {
        arrErrors.push({
            message: 'the field canBeDownloaded must be a boolean',
            field: 'canBeDownloaded'
        })
    }

    if(typeof  minAgeRestriction !== "number" || minAgeRestriction > 18 || minAgeRestriction < 1) {
        arrErrors.push({
            message: 'the field  minAgeRestriction must be max 18 and min 1',
            field: ' minAgeRestriction'
        })
    }

    if(typeof  publicationDate !== "string") {
        arrErrors.push({
            message: 'the field  publicationDate must be a string',
            field: ' publicationDate'
        })
    }

    if (arrErrors.length > 0) return arrErrors
    return null
}