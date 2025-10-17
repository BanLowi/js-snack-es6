const bikes = [

    {
        name: "AeroBlade SLR",
        weigth: 7.1
    },

    {
        name: "TrailHunter X9",
        weigth: 13.4
    },

    {
        name: "UrbanRide500",
        weigth: 11.2
    },

    {
        name: "GravelOne Pro",
        weigth: 9.6
    },

    {
        name: "ClimbMaster 29",
        weigth: 12.8
    },

    {
        name: "SpeedWing RS",
        weigth: 6.9
    },

    {
        name: "TourCity Comfort",
        weigth: 14.3
    },

    {
        name: "EnduroMax 800",
        weigth: 15.5
    }

];

function weightCalculator(value) {

    let lightestBike = value[0];


    for (let i = 0; i < value.length; i++) {

        if (value[i].weigth < lightestBike.weigth) {
            lightestBike = value[i]
        }

    }

    return `${lightestBike.name} ${lightestBike.weigth}`
}

document.getElementById("result").innerHTML = weightCalculator(bikes)