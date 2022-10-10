enum DayOfTheWeek {
    MONDAY = "monday",
    TUESDAY = "tuesday",
    WEDNESDAY = "wednesday",
    THURSDAY = "thursday",
    FRIDAY = "friday",
    SATURDAY = "saturday",
    SUNDAY = "sunday",
}

interface HoursData {
    type: "open" | "close";
    value: number;
}

export type OpeningHoursData = {
    [key in DayOfTheWeek]: HoursData[];
}
