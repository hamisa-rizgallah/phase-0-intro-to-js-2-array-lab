// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    const broom = [...cats, "Broom"];
    return broom;
}

function prependCat(){
    const arnold = ["Arnold", ...cats];
    return arnold;
}

function removeLastCat(){
    const last = [...cats.slice(0,2)];
    return last;
}

function removeFirstCat(){
    const first = [...cats.slice(1)];
    return first;
}
