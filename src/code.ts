import { Observable } from 'rxjs';

const addItem = (val: string) => {
    const node = document.createElement('li');
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}

var obs: Observable<string> = Observable.create((o: any) => {
    try {
        o.next('Hello');
        o.next('World');
        setInterval(() => {
            o.next('Event!');
        }, 2000)
    } catch (err) {
        o.error(err);
    }
}); 

let observer = obs.subscribe(
    (x: string) => addItem(x),
    (error: any) => addItem(error),
    () => addItem('complete')
);

let observer2 = obs.subscribe(
    (x: string) => addItem(x)
);

setTimeout(() => {
    observer.unsubscribe();
}, 6001);