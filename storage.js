class Storage {
    constructor() {
        this.city;
        this.defaultCity = "Dhaka";
    }

    setCity(city) {
        localStorage.setItem("city", city);
    }

    getCity() {
       const city = localStorage.getItem("city");
       if(city === null) {
           this.city = this.defaultCity;
       } else {
           this.city = city;
       }
       return this.city;
    }
}