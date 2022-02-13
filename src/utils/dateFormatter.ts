import moment from "moment";

export const dateFormatter = (date: string | Date) => {
    return moment(date).format("YYYY MMM DD");
};

