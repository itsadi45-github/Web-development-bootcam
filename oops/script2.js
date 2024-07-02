class User {

    constructor(name) {
        // invoke the setter
        this.name = name;
    }
    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too Short.");
            return;
        }
        this._name = value;
    }

}

let user = new User("Aditya");
console.log(user.name);//aditya

// user = new User(""); //name is to short.
user.name = "Sulav" //name is to short.
console.log(user.name);
console.log(user);