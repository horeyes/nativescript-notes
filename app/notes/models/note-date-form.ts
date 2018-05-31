import * as moment from 'moment';

interface IDateForm{
    day: Date;
    time: Date;
}

export class DateForm implements IDateForm{
    constructor(public day: Date = new Date(new Date(2018, 0, 1)),
        public time: Date = new Date(new Date().setHours(8, 0,))){
    }
}