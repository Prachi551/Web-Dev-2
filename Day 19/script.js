async function fetchData(city) {
    try {
        const API_key = "42d4c19e18f290a22f39b299e913a20c";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);

        const data = await response.json();
        console.log(city);
        console.log(data.main.temp);
        console.log(data.main.humidity); 
    } catch (err) {
        console.error(err);
    }
}
fetchData("delhi") 
// local storage it is a browser storage mechanism that allows us to store data in the form of key-value pairs 
// the data stored in in local storage does not expire and remains available even after the browser is closed or the system is restarted

// key characteristics 
// 1. data is stored per domain 

// session storage - it is similar to local storage but the data is only for one browser session 
// once the browser tab or window 
