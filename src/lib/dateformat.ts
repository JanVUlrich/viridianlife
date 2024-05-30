import { FormatterOption } from "../enums/formatterOption";

export const formatOptionsDate: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}

export const formatOptionsDateAndTime = {

}

export const formatOptionsTime = {

}

export const formatDate = (timestamp: number | string, formatterOption?: FormatterOption) => {
    let useFormatterOptions;

    switch(formatterOption) {
        case(FormatterOption.DATE):
        useFormatterOptions = formatOptionsDate;
            break;
        default:
            useFormatterOptions = formatOptionsDateAndTime;
            break;
    }


    return new Date(timestamp).toLocaleDateString("en-us", useFormatterOptions)
}