import {availableResolutions} from "./routers/video-routers";

export const isEqual = (arr1: string[]) => {
    return arr1.every((value) => availableResolutions.includes(value))
}

type ValidationErrorType = {
    message: string,
    field: string
}

export const createVideoValidation = (title: any, author: any, resolution: any) => {
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