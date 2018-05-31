interface INotes {
    noteId: number;
    title: string;
    note: string;
    date: Date;
    hasDateChecked: boolean;
    isSelected: boolean;
}

export class Notes implements INotes {
    constructor(public noteId: number = 0,
        public title: string = "",
        public note: string = "",
        public date: Date = null,
        public hasDateChecked: boolean = false,
        public isSelected: boolean = false) {
    }
}