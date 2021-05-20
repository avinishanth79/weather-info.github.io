//client using fetch request

//glitch URL for express server (using child process)
const URLRef = 'https://easy-rumbling-vanadium.glitch.me/weatherData';
const corsURL = 'https://cors-anywhere.herokuapp.com/';
const fiveHoursURl = corsURL + 'https://easy-rumbling-vanadium.glitch.me/nextFiveHours';

/**fetch get request for current timezone, humidity, temp, precipitation
*/
export async function weatherInfoRef(){
    try{
        const gettingResponse = await fetch(URLRef,{method: 'GET'});
        const collectedData = await gettingResponse.json();
        return collectedData;
    }catch(err) {
        alert(err); 
    }
}

/**fetch post request for next five hours weather info
 * @param {String} - bodyRef - body to be posted in the server which consists of date,time and city name
*/
export async function fiveHoursInfo(bodyRef){
    const postingResponse = await fetch(fiveHoursURl,{
                            method: 'POST',
                            headers : {
                                'Content-Type' : 'application/json'
                            },
                            body: JSON.stringify({
                                city_Date_Time_Name : bodyRef,
                                hours :5
                            })
                        });
    const collectedHoursData = await postingResponse.json();
    return collectedHoursData;
}