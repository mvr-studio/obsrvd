type Observer<T> = (data: T) => void;
type Subscriber<T> = Observer<T>;

class Observable<T> {
	observers: Observer<T>[];
	value: any;

	constructor(value: T) {
		this.observers = [];
		this.value = value;
	}

	subscribe(subscriber: Subscriber<T>) {
		this.observers.push(subscriber);
	}

	unsubscribe(subscriber: Subscriber<T>) {
		this.observers = this.observers.filter(
			(observer) => observer !== subscriber
		);
	}

	get(): T {
		return this.value;
	}

	set(value: T): void {
		if (this.value === value) return;
		this.value = value;

		for (const observer of this.observers) {
			observer(this.value);
		}
	}
}

export default Observable;
