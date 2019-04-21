 //inicijalna vremena sluze za resetovanje
 // neke druge promenljive su ogranicenja, a neke skladiste stanja
 // promeniti imena promenljivih da budu prikladnije


 //initial values, not nulls

 //vremena da se cuvaju u sekundama

 export const initialData = {
    
        minPlayersNo: 2,
        playersNo: 2,
        players: [],

        totalMoves: 0,

        playersTime: [
        {
             seconds:10, 
             playerNo: 0,
             basicTimeOver:false,
             basicTime: 10,
             byoyomiTime: 10,
             byoyomiPeriods: 3,
             pause: true,
             moveNo: 0,
        },
        {
             seconds:10, 
             playerNo: 1,
             basicTimeOver:false,
             basicTime: 10,
             byoyomiTime: 10,
             byoyomiPeriods: 3,
             pause: true,
             moveNo: 0,
        },
        
     ],

     //initial settings
     basicTime: 10,
     byoyomiTime: 10,
     byoyomiPeriods: 3,
     

 }


 export const settings = {

    osnovnoVreme: [
         { "name": '5', "id": 1 },
         { "name": '10', "id": 2 },
         { "name": '15', "id": 3 },
         { "name": '30', "id": 4 },
         { "name": '45', "id": 5 },
         { "name": '60', "id": 6 },
     ],
     byoyomiVreme: [
         { "name": '10', "id": '10s' },
         { "name": '20', "id": '20s' },
         { "name": '30', "id": '30s' },
         { "name": '45', "id": '45s' },
         { "name": '60', "id": '60s' }
     ],

 };