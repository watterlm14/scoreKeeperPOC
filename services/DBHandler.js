
var fs = require('fs');
const path = require('path');
const Enumerable = require('linq');


exports.GetAllContestants = function(){
    var data = fs.readFileSync(path.resolve(__dirname, '../mockDB/ContestantsTable.json'));
    return JSON.parse(data);
}

exports.GetContestantsByEvent = function(eventId){
    var data = fs.readFileSync(path.resolve(__dirname, '../mockDB/ContestantsTable.json'));
    var contestantList = JSON.parse(data);
    return Enumerable.from(contestantList).where(x => x.Events.includes(parseInt(eventId))).toArray();
}

exports.GetEventById = function(eventId){
    var data = fs.readFileSync(path.resolve(__dirname, '../mockDB/EventsTable.json'));
    var eventList = JSON.parse(data);
    return Enumerable.from(eventList).where(x => x._id === parseInt(eventId)).firstOrDefault();
}

exports.GetEvents = function(){
    var data = fs.readFileSync(path.resolve(__dirname, '../mockDB/EventsTable.json'));
    return JSON.parse(data);
}

exports.GetScoresByContestant = function(contestantId){
    var data = fs.readFileSync(path.resolve(__dirname, '../mockDB/ScoresTable.json'));
    var scoresList = JSON.parse(data);
    return Enumerable.from(scoresList).where(x => x.Contestant._id = contestantId);
}