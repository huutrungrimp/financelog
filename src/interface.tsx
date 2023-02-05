import { any } from "cypress/types/bluebird";

export interface User {
    username: string
}

export interface Customer {
    id: number | string;
    user: User,
    customerName: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    province: string,
    postal: string,
    country: string,
    rate_offer: string|null
}

export interface Task {
    id: number | string;
    isCompleted: boolean;
    customer: Customer;
    title: string;
    date_time_start: string;
    date_time_end: string;
    regular_hours: string | number | null;
    regular_pay: string | number | null;
    overtime: string | number | null;
    evening_hours: string | number | null;
    evening_pay: string | number | null;
    weekend_hours: string | number | null;
    weekend_pay: string | number | null;
    vacation_pay_out: string | number | null;
    ben_lieu: string | number | null;
    overtime_pay: string | number | null;
    stat_holiday: string | number | null;
    floater: string | number | null;
    task_rate: number;
    hours: number;
    task_pay: number;
    week_of_year: number
}


export interface EpiGraph {
    reported_date: string | number | null;
    confirmed_negative: string | number | null;
    confirmed_positive: string | number | null;
    resolved: string | number | null;
    deaths: string | number | null;
    total_cases: string | number | null;
    percent_positive_tests_in_last_day: string | number | null;
    number_of_patients_hospitalized_with_covid19: string | number | null;
    number_of_patients_in_icu_due_to_covid19: string | number | null;
    number_of_patients_in_icu_testing_positive_for_covid19: string | number | null;
    number_of_patients_in_icu_testing_negative_for_covid19: string | number | null;
    number_of_patients_in_icu_on_a_ventilator_due_to_covid19: string | number | null;
    num_of_patients_in_icu_on_a_ventilator_testing_positive: string | number | null;
    num_of_patients_in_icu_on_a_ventilator_testing_negative: string | number | null;
    total_positive_ltc_resident_cases: string | number | null;
    total_positive_ltc_hcw_cases: string | number | null;
    total_ltc_resident_deaths: string | number | null;
    total_ltc_hcw_deaths: string | number | null;
    deaths_data_cleaning: string | number | null;
}

export interface AgeData {
    case_reported_date: string | number | null;
    age_under_20s: string | number | null;
    age_20s: string | number | null;
    age_30s: string | number | null;
    age_40s: string | number | null;
    age_50s: string | number | null;
    age_60s: string | number | null;
    age_70s: string | number | null;
    age_80s: string | number | null;
    age_90s: string | number | null
}

export interface GenderData {
    female: string | number | null;
    male: string | number | null;
}
export interface Demography {
    age: Object,
    gender: Object
}


export interface AppContextProps {
    username: string | null;
    urlbase: string | null;
    covidData: {
        demographyData: any;
        epiGraph: any
    },
    tasks: any,
    income: any,
    posts: any
}

export interface TaskCalendar {
    id: string,
    title: string,
    start: string,
    end: string,
}

export interface Income {
    hours: string | number | null;
    income: string | number | null;
}

export interface WeeklyIncome {
    id: number|string | null;
    date: string;
    task_pay: number | null;
    week_of_year: number | null;
}

export interface WeeklyIncome {
    date: string;
    task_pay: number | null;
    week_of_year: number | null;
}


export interface IncomeOfWeek {
    week_of_year: number;
    income_of_week: number
}

export interface Post {
    id: string;
    title: string;
    content: string;
    dated_on: string;
}