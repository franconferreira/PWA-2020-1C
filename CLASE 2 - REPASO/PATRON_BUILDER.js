// Patron creacional builder
class Pizza {
    constructor() {
        this.tomate = false;
        this.queso = false;
        this.aceitunas = 0;
        this.panceta = false;
        this.extras = [];
    }

    setTomate() {
        this.tomate = true;
        return this;
    }
    setQueso() {
        this.queso = true;
        return this;
    }
    setAceitunas(x) {
        this.aceitunas = x;
        return this;
    }
    setPanceta() {
        this.panceta = true;
    }
    setExtra(dato) {
        this.extras.push(dato);
    }

    builder() {
        return {
            tomate : this.tomate,
            queso : this.queso,
            aceitunas : this.aceitunas,
            panceta : this.panceta,
            extras : this.extras
        }
    }

}

pizza = new Pizza();
console.log(pizza.builder());
pizzaCompleta = new Pizza()
pizzaCompleta.setTomate();
pizzaCompleta.setAceitunas(4)
console.log(pizzaCompleta.builder());

pizzaEspecial = new Pizza();


pizzaEspecial.setTomate = true;
pizzaEspecial.setQueso = true;
pizzaEspecial.setAceitunas(8);
pizzaEspecial.panceta = true;
pizzaEspecial.setExtra(['PEPPERONI'])
pizzaEspecial.builder()