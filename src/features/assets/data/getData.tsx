import { existingUser, taskObject, variables } from "../../assets/data/variables";
import { Task } from "../../../interface";

export const getEpiGraph = async () => {
    const epi = await fetch(variables.covidUrl + "ontario/graphs");
    const epiResponse = await epi.json();
    const epiGraph = []

    for (let i = 0; i < Object.keys(epiResponse).length; i += 1) {
        const epiOject = {
            reported_date: epiResponse[i].reported_date,
            confirmed_negative: epiResponse[i].confirmed_negative,
            confirmed_positive: epiResponse[i].confirmed_positive,
            resolved: epiResponse[i].resolved,
            deaths: epiResponse[i].deaths,
            total_cases: epiResponse[i].total_cases,
            percent_positive_tests_in_last_day: epiResponse[i].percent_positive_tests_in_last_day,
            number_of_patients_hospitalized_with_covid19: epiResponse[i].number_of_patients_hospitalized_with_covid19,
            number_of_patients_in_icu_due_to_covid19: epiResponse[i].number_of_patients_in_icu_due_to_covid19,
            number_of_patients_in_icu_testing_positive_for_covid19: epiResponse[i].number_of_patients_in_icu_testing_positive_for_covid19,
            number_of_patients_in_icu_testing_negative_for_covid19: epiResponse[i].number_of_patients_in_icu_testing_negative_for_covid19,
            number_of_patients_in_icu_on_a_ventilator_due_to_covid19: epiResponse[i].number_of_patients_in_icu_on_a_ventilator_due_to_covid19,
            num_of_patients_in_icu_on_a_ventilator_testing_positive: epiResponse[i].num_of_patients_in_icu_on_a_ventilator_testing_positive,
            num_of_patients_in_icu_on_a_ventilator_testing_negative: epiResponse[i].num_of_patients_in_icu_on_a_ventilator_testing_negative,
            total_positive_ltc_resident_cases: epiResponse[i].total_positive_ltc_resident_cases,
            total_positive_ltc_hcw_cases: epiResponse[i].total_positive_ltc_hcw_cases,
            total_ltc_resident_deaths: epiResponse[i].total_ltc_resident_deaths,
            total_ltc_hcw_deaths: epiResponse[i].total_ltc_hcw_deaths,
            deaths_data_cleaning: epiResponse[i].deaths_data_cleaning
        }
        epiGraph.push(epiOject)
    };
    return epiGraph;
}

export const getDemographyGraphs = async () => {
    const demography = await fetch(variables.covidUrl + "ontario/demography");
    const demographyResponse = await demography.json();
    const ageGraph = []
    const genderGraph = []

    for (let i = 0; i < Object.keys(demographyResponse.age).length; i += 1) {
        const ageDataOject = {
            case_reported_date: demographyResponse.age[i].Case_Reported_Date,
            age_under_20s: demographyResponse.age[i]['<20'],
            age_20s: demographyResponse.age[i]['20s'],
            age_30s: demographyResponse.age[i]['30s'],
            age_40s: demographyResponse.age[i]['40s'],
            age_50s: demographyResponse.age[i]['50s'],
            age_60s: demographyResponse.age[i]['60s'],
            age_70s: demographyResponse.age[i]['70s'],
            age_80s: demographyResponse.age[i]['80s'],
            age_90s: demographyResponse.age[i]['90+'],
        }
        ageGraph.push(ageDataOject)
    };

    for (let i = 0; i < Object.keys(demographyResponse.gender).length; i += 1) {
        const genderDataOject = {
            Case_Reported_Date: demographyResponse.gender[i].Case_Reported_Date,
            female: demographyResponse.gender[i].FEMALE,
            male: demographyResponse.gender[i].MALE,
        }
        genderGraph.push(genderDataOject)
    };

    const demographData = {
        age: ageGraph,
        gender: genderGraph
    }

    return demographData
}

export const getTasks = async () => {
    const taskJson = await fetch(`${variables.urlbase}accounts/${existingUser?.username}/tasks`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    });

    const taskResponse = await taskJson.json();
    
    return taskResponse
}

export const getIncome = async () => {
    const incomeJson = await fetch(`${variables.urlbase}accounts/${existingUser?.username}/income`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    });

    const incomeResponse = await incomeJson.json();
    // console.log(incomeResponse)
    
    return incomeResponse
}


export const getPosts = async () => {
    const postJson = await fetch(`${variables.urlbase}accounts/${existingUser?.username}/posts`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    });

    const postResponse = await postJson.json();    
    return postResponse
}
