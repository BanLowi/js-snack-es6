const bikes = [

    {
        name : "AeroBlade SLR",
        weigth : 7.1
    },

    {
        name : "TrailHunter X9",
        weigth : 13.4
    },

    {
        name : "UrbanRide500",
        weigth : 11.2
    },

    {
        name : "GravelOne Pro",
        weigth : 9.6
    },

    {
        name : "ClimbMaster 29",
        weigth : 12.8
    },

    {
        name : "SpeedWing RS",
        weigth : 6.9
    },

    {
        name : "TourCity Comfort",
        weigth : 14.3
    },

    {
        name : "EnduroMax 800",
        weigth : 15.5
    }

];


let indexWeight = [];

for (let i = 0; i < bikes.length; i++) {
    indexWeight.push(bikes[i].weigth)
    console.log(indexWeight);
}

const lightestBike = Math.min(indexWeight)
console.log(lightestBike);
