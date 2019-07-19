const salon = {
    name: 'Fashion Pets',
    phone: '123-456-7890',
    address: {
        street: 'W 5th Ave',
        number: '25-A',
    },
    workingHours: {
        open: '8:00 am',
        close: '5:00 pm'
    },
    pets: [],
    numberOfPets: function () {
        document.getElementById('info').innerHTML += `<h2>Number of pets in the salon: ${salon.pets.length}</h2>`;
    },
    printAllPets: function () {
        for (let i = 0; i < salon.pets.length; i++) {
            const element = salon.pets[i];
            document.getElementById('info').innerHTML += `<h2>${element.name}</h2>`;
        }
    }
};

let {
    address: {
        street,
        number
    },
    workingHours: {
        open,
        close
    },
    name,
    phone,
    pets
} = salon;

document.getElementById('info').innerHTML = `<h2>${name} (${phone}), ${street} ${number} <br> Open from ${open} to ${close}</h2>`;

function Pet(name, age, service, ownerName, contactPhone) {
    this.hunger = 10;
    this.happiness = 5;
    this.name = name;
    this.age = age;
    this.ownerName = ownerName;
    this.contactPhone = contactPhone;
    this.service = service;
    this.feed = function () {
        this.hunger -= 10;
        this.happiness += 10;
    };
    this.status = function () {
        console.log(this.name + ' hunger level: ' + this.hunger + ' and happiness level is: ' + this.happiness);
    };
    this.ownerContact = function () {
        console.log('Owner Name: ' + this.ownerName + '\n' + 'Phone: ' + this.contactPhone);
    }
}

const zoey = new Pet('Zoey', 2, 'shower', 'Travis', '123-456-7890');
const janis = new Pet('Janis', 2, 'haircut', 'Sabrina', '321-474-4534');
const ozzy = new Pet('Ozzy', 6, 'shower', 'Yair', '232-567-2121');

zoey.feed();
zoey.feed();
zoey.status();
zoey.ownerContact();

pets.push(zoey, janis, ozzy);

console.table(pets);

salon.numberOfPets();

salon.printAllPets();