import { fetchData, handleError } from './utils.js'

const api = 'http://ergast.com/api/f1/current.json'

fetchData(api)
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

