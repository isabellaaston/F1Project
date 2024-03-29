import { fetchData } from './providers/f1DataProvider.js'

const data = await fetchData();
// check if data present, show alternative if error
const races = data.MRData.RaceTable.Races
var str = ""
races.forEach(r => {
    str += `<div class="raceInfo"><h5>Round: ${r.round}</h5><h2>${r.raceName}</h2><h3>${r.date}</h3></div>`
})
document.getElementById("calendar").innerHTML = str
