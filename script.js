const api = 'http://ergast.com/api/f1/current.json'
// const f1 = fetch(api)
//     .then((res) => {
//         return res.json()
//     }).then((data) => {
//         return data
//     })

// const f1 = fetchData(api)

// function fetchData(url) {
//     const response = fetch(url)
//     .then(res => {
//         res.json()
//     }).then(data => {
//         data
//     })
//     return response
// }
// console.log(f1)
function handleError(err) {
    console.log("OH NO!")
    console.log(err)
}

const f1Promise = fetch(api)
f1Promise
    .then((res) => {
    return res.json()
    })
    .then((data) => {
        const races = data.MRData.RaceTable.Races
        var str = ""
        races.forEach(r => {
          str += `<div class="raceInfo"><h5>Round: ${r.round}</h5><h2>${r.raceName}</h2><h3>${r.date}</h3></div>`
        })
        document.getElementById("calendar").innerHTML = str
    })
    .catch(() => {
        handleError()
    })
const f1Data = {
    "MRData": {
        "xmlns": "http:\/\/ergast.com\/mrd\/1.5",
        "series": "f1",
        "url": "http://ergast.com/api/f1/current.json",
        "limit": "30",
        "offset": "0",
        "total": "22",
        "RaceTable": {
          "season": "2022",
          "Races": [
            {
              "season": "2022",
              "round": "1",
              "url": "http:\/\/en.wikipedia.org\/wiki\/2022_Bahrain_Grand_Prix",
              "raceName": "Bahrain Grand Prix",
              "Circuit": {
                "circuitId": "bahrain",
                "url": "http:\/\/en.wikipedia.org\/wiki\/Bahrain_International_Circuit",
                "circuitName": "Bahrain International Circuit",
                "Location": {
                  "lat": "26.0325",
                  "long": "50.5106",
                  "locality": "Sakhir",
                  "country": "Bahrain"
                }
              },
              "date": "2022-03-20",
              "time": "15:00:00Z",
              "FirstPractice": {
                "date": "2022-03-18",
                "time": "12:00:00Z"
              },
              "SecondPractice": {
                "date": "2022-03-18",
                "time": "15:00:00Z"
              },
              "ThirdPractice": {
                "date": "2022-03-19",
                "time": "12:00:00Z"
              },
              "Qualifying": {
                "date": "2022-03-19",
                "time": "15:00:00Z"
              }
            },
            {
              "season": "2022",
              "round": "2",
              "url": "http:\/\/en.wikipedia.org\/wiki\/2022_Saudi_Arabian_Grand_Prix",
              "raceName": "Saudi Arabian Grand Prix",
              "Circuit": {
                "circuitId": "jeddah",
                "url": "http:\/\/en.wikipedia.org\/wiki\/Jeddah_Street_Circuit",
                "circuitName": "Jeddah Corniche Circuit",
                "Location": {
                  "lat": "21.6319",
                  "long": "39.1044",
                  "locality": "Jeddah",
                  "country": "Saudi Arabia"
                }
              },
              "date": "2022-03-27",
              "time": "17:00:00Z",
              "FirstPractice": {
                "date": "2022-03-25",
                "time": "14:00:00Z"
              },
              "SecondPractice": {
                "date": "2022-03-25",
                "time": "17:00:00Z"
              },
              "ThirdPractice": {
                "date": "2022-03-26",
                "time": "14:00:00Z"
              },
              "Qualifying": {
                "date": "2022-03-26",
                "time": "17:00:00Z"
              }
            },
            {
              "season": "2022",
              "round": "3",
              "url": "http:\/\/en.wikipedia.org\/wiki\/2022_Australian_Grand_Prix",
              "raceName": "Australian Grand Prix",
              "Circuit": {
                "circuitId": "albert_park",
                "url": "http:\/\/en.wikipedia.org\/wiki\/Melbourne_Grand_Prix_Circuit",
                "circuitName": "Albert Park Grand Prix Circuit",
                "Location": {
                  "lat": "-37.8497",
                  "long": "144.968",
                  "locality": "Melbourne",
                  "country": "Australia"
                }
              },
              "date": "2022-04-10",
              "time": "05:00:00Z",
              "FirstPractice": {
                "date": "2022-04-08",
                "time": "03:00:00Z"
              },
              "SecondPractice": {
                "date": "2022-04-08",
                "time": "06:00:00Z"
              },
              "ThirdPractice": {
                "date": "2022-04-09",
                "time": "03:00:00Z"
              },
              "Qualifying": {
                "date": "2022-04-09",
                "time": "06:00:00Z"
              }
            }
            ]
        }
    }
}
// const f1Races = f1Data.MRData.RaceTable.Races
// var str = ''
// f1Races.forEach(r => {
//   str += `<div class="raceInfo"><h5>Round:${r.round}</h5><h2>${r.raceName}</h2><h3>${r.date}</h3></div>`
// });
// document.getElementById("calendar").innerHTML = str
