export interface Name {
    title: string;
    frequency: string;
}

export interface Cat {
    category: string;
}

export class Dued {
    public due_date: string;
    public name: string;
    public freq: string;
    public cat: string;

    constructor(dd: string, n: string, f: string, c: string) {
        this.due_date = dd;
        this.name = n;
        this.freq = f;
        this.cat = c;
    }
    public static createBlank() {
        return new Dued(' ', ' ', ' ', ' ');
    }
}
