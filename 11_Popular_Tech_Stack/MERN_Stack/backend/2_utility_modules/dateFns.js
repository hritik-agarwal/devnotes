const dateFns = require("date-fns");
const newDate = dateFns.format(new Date(), "dd-mm-yyyy\thh:mm:ss");
console.log(newDate);
