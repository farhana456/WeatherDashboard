// function getFormattedDate(value, type, inMS) {
//     if(!type) return value;

//     if (!inMS) {
//         value = value * 1000;
//     }

//     const date = new Date(value);
//     let options;

//     if (type === 'date') {
//         options = {
//             weekday: "long",
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//         };
//     } else if(type === 'time') {
//         options = {
//             hour: "numeric",
//             minute: "numeric",
//           };
//     }


//     return new Intl.DateTimeFormat("en-us", options).format(date);
// }

// export {getFormattedDate};
function getFormattedDate(value, type, inMS) {
    if (!value || !type) return "Invalid";

    try {
        // যদি millisecond না হয়, তাহলে 1000 দিয়ে গুণ
        if (!inMS) {
            value = value * 1000;
        }

        const date = new Date(value);
        if (isNaN(date.getTime())) {
            return "Invalid Date";
        }

        let options;

        if (type === 'date') {
            options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            };
        } else if (type === 'time') {
            options = {
                hour: "numeric",
                minute: "numeric",
            };
        } else {
            return "Invalid type";
        }

        return new Intl.DateTimeFormat("en-US", options).format(date);
    } catch (error) {
        console.error("Error in getFormattedDate:", error);
        return "Invalid Date";
    }
}

export { getFormattedDate };
