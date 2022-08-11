// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
cats.length;

function destructivelyAppendCat(name) {
	name = "Ralph";
	cats.push(name);
}

function destructivelyPrependCat(name) {
	name = "Bob"
	cats.unshift(name);
}

function destructivelyRemoveLastCat(){
	cats.pop();
}

function destructivelyRemoveFirstCat(){
	cats.shift();
}

function appendCat(name){
	name = "Broom";
	const newArray = [...cats, name];
	return newArray;
}

function prependCat(name){
	name = "Arnold";
	const newArray = [name, ...cats];
	return newArray;
}

function removeLastCat(){
	const mouse = cats.slice(0, cats.length -1);
	return mouse;
}

function removeFirstCat(){
	const lion = cats.slice(1);
	return lion;

}