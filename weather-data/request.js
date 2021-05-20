//client using XML HTTP request

//glitch URL for express server (using child process)
const URLRef = 'https://easy-rumbling-vanadium.glitch.me/weatherData';
const fiveHoursURl = 'https://easy-rumbling-vanadium.glitch.me/nextFiveHours';

/**http get request for current timezone, humidity, temp, precipitation
*/
export async function weatherInfoRef(){
    
    return new Promise((response,reject) =>{
        const getResponse = new XMLHttpRequest();
        getResponse.open('GET',URLRef);
        getResponse.responseType = 'json';
        getResponse.send();
        getResponse.onload =(() => {
            response(getResponse.response);
        });
        getResponse.onerror = (err) => {
            reject(err);
        };
    }); 
    
};

/**http post request for next five hours weather info
 * @param {String} - bodyRef - body to be posted in the server which consists of date,time and city name
*/
export function fiveHoursInfo(bodyRef){

    return new Promise((response,reject) =>{
        const postResponse = new XMLHttpRequest();
        postResponse.open('POST',fiveHoursURl);
        postResponse.responseType = 'json';
        postResponse.setRequestHeader('Content-Type', 'application/json');
        const body = JSON.stringify({
            city_Date_Time_Name : bodyRef,
            hours :5
        });
        console.log(body);
        postResponse.send(body);
        postResponse.onload =(() => {
            console.log(postResponse.response);
            response(postResponse.response);
        });
        postResponse.onerror = (err) => {
            reject(err);
        };
    }); 

};