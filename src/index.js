///import { interval } from "rxjs";

const observable = setTimeout(1000);

const subscription = observable.subscribe(x => console.log(x));
