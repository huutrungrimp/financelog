const user = localStorage.getItem('userDetail');
export const existingUser = (user === null ? "" : (JSON.parse(localStorage.getItem('userDetail') || '')));


export const variables = {
    customer: ['name', 'phone', 'email', 'address', 'city', 'province', 'postal', 'country'],
    user: ['username', 'password', 'password2'],
    urlbase: 'https://backfinance.up.railway.app/',
    // urlbase: 'http://127.0.0.1:8001/',
    covidUrl: 'https://covid19.up.railway.app/',
    // covidUrl: 'http://127.0.0.1:8000/'
}

export const customerObject = {
    id: '',
    user: {
        username: ''
    },
    customerName: '',
    address: '',
    phone: '',
    email: '',
    city: '',
    province: '',
    postal: '',
    country: '',
    rate_offer: '',
}

export const taskObject = {
    id: '',
    isCompleted: false,
    customer: customerObject,
    title: '',
    date_time_start: '',
    date_time_end: '',
    regular_hours: 0, 
    regular_pay: 0, 
    overtime: 0, 
    overtime_pay: 0,  
    evening_hours: 0, 
    evening_pay: 0, 
    weekend_hours: 0, 
    weekend_pay: 0, 
    vacation_pay_out: 0, 
    ben_lieu: 0,            
    stat_holiday: 0, 
    floater: 0, 
    task_rate: 0,
    hours: 0,
    task_pay: 0,
    week_of_year: 0
}

export const ageDataObject = {
    Case_Reported_Date: '',
    age_under_20s: '',
    age_20s: '',
    age_30s: '',
    age_40s: '',
    age_50s: '',
    age_60s: '',
    age_70s: '',
    age_80s: '',
    age_90s: '',
}

export const statusDict = {
    confirmed_positive: 'Confirmed Positive',
    resolved: 'Resolved',
    deaths: 'Deaths',
    total_cases: 'Total Cases',
    percent_positive_tests_in_last_day: '% positive tests',
    number_of_patients_hospitalized_with_covid19: 'No of patients hospitalized with covid-19',
    number_of_patients_in_icu_due_to_covid19: 'No of patients in icu due to covid-19',
    number_of_patients_in_icu_testing_positive_for_covid19: 'No of patients in icu testing positive for covid-19',
    number_of_patients_in_icu_testing_negative_for_covid19: 'No of patients in icu testing negative for covid-19',
    number_of_patients_in_icu_on_a_ventilator_due_to_covid19: 'No of patients in icu on a ventilator due to covid19',
    num_of_patients_in_icu_on_a_ventilator_testing_positive: 'No of patients in icu on a ventilator testing positive',
    num_of_patients_in_icu_on_a_ventilator_testing_negative: 'No of patients in icu on a ventilator testing negative',
    total_positive_ltc_resident_cases: 'Total positive long term care residents',
    total_positive_ltc_hcw_cases: 'Total positive long term care health care workers',
    total_ltc_resident_deaths: 'Total long term care resident deaths',
    total_ltc_hcw_deaths: 'Total long term care health care worker deaths',
}


export const ageObject = {
    case_reported_date: '',
    ageunder20s: '',
    age20s: '',
    age30s: '',
    age40s: '',
    age50s: '',
    age60s: '',
    age70s: '',
    age80s: '',
    age90s: '',
}

export const genderObject = {
    female: '',
    male: '',
}
export const postObject = {
    id: '',
    title: '',
    content: '',
    dated_on: '',
}