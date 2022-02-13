import moment from "moment";

export const dateFormatter = (date: string) => {
    return moment(date).format("YYYY MMM DD");
};

