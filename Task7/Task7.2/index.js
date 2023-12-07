import { Observable, from, fromEvent, mergeWith } from "rxjs";

(function taskOne() {
  const stream$ = from(isPrimes(100));
  stream$.subscribe((val) => console.log(val));
})();

function isPrimes(num) {
  const sort = [];
  const primes = [];

  for (let i = 2; i <= num; i++) {
    if (!sort[i]) {
      primes.push(i);
      for (let j = i * i; j <= num; j += i) {
        sort[j] = true;
      }
    }
  }
  return primes;
}

(function taskTwo() {
  const stream1$ = new Observable((observer) => {
    observer.next(5);
    observer.next(4);
    observer.next(3);
    observer.next(2);
    observer.next(1);
    observer.error("Error!");
  });

  const subscription = stream1$.subscribe({
    next: (v) => alert(v),
    error: (e) => alert(e),
  });

  setTimeout(() => {
    subscription.unsubscribe();
  }, 3000);
})();

(function taskThree() {
  const stream1$ = fromEvent(document.querySelector(".btn-one"), "click");
  const stream2$ = fromEvent(document.querySelector(".btn-two"), "click");
  const stream3$ = fromEvent(document.querySelector(".btn-three"), "click");

  stream1$
    .pipe(mergeWith(stream2$, stream3$))
    .subscribe(
      () =>
        (document.body.style.background =
          "#" +
          (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase())
    );
})();
