export function dateFunc(dateAndTimeRef){
    const currentDate = new Date(dateAndTimeRef.split(",")[0]);
    const myDate = currentDate.getDate();
    const myMonth = currentDate.getMonth();
    let myYear = currentDate.getYear();
    if(myYear<1000){
        myYear+=1900;
    }
    const monthArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return `${myDate}-${monthArray[myMonth]}-${myYear}`;
}