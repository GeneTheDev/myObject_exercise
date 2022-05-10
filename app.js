// *************ES2015************

function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

// *************ES2015************

let favoriteNumber = 42;

const instructor1 = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

// *************ES2015************

const instructor2 = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

// *************ES2015************

const d = createAnimal("dog", "bark", "Woooof!")
d.bark()

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
s.bleet()

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}