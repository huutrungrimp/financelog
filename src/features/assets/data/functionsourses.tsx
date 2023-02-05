import { createAsyncThunk } from "@reduxjs/toolkit";
import { IncomeOfWeek } from "../../../interface";

export const weekOfYear = (date: any) => {
    const currentDate: any = new Date(date);
    const startDate: any = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    return Math.ceil(days / 7);
};


// create a function which slit weeks of a year into biweekly period

export function sliceIntoChunks(arr: any, chunkSize: number) {

    for (let i = 0; i <= 6; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        // console.log(chunk)
        const periodArray = [];
        for (let j = 0; j <= Object.keys(chunk).length; j += 1) {
            if (chunk[j]?.week_of_year % 2 === 0) {
                // console.log(chunk[j]?.week_of_year / 2)
                const payPeriod: any = {
                    period: chunk[j]?.week_of_year / 2,
                    pay: parseFloat(chunk[j]?.pay).toFixed(2)
                }
                periodArray.push(payPeriod);
            } else {
                // console.log((chunk[j]?.week_of_year + 1) / 2)
                const payPeriod: any = {
                    period: (chunk[j]?.week_of_year + 1) / 2,
                    pay: parseFloat(chunk[j]?.pay).toFixed(2)
                }
                periodArray.push(payPeriod);
            }
        }
        return periodArray;
    }


}

export const weekArray = new Array()
for (let i = 1; i <= 52; i = i + 1) {
    weekArray.push(i)
}


export function chunkingYear(arr: any, chunkSize: number, weeklyIncome: any) {
    // console.log(weeklyIncome)
    const result = []
    for (let i = 0; i <= 52; i += chunkSize) {
        const chunk = weekArray.slice(i, i + chunkSize);
        for (let j = 0; j <= Object.keys(weeklyIncome).length; j += 1) {
            if (chunk.includes(weeklyIncome[j]?.week_of_year)) {
                chunk.push(weeklyIncome[j])
            }
        }
        // console.log(chunk)
        const periodArray = chunk.slice(2)
        if (Object.keys(periodArray).length === 0) {
            const periodIndictor = {
                period: (i+2)/2,
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
                hours: 0,
                pay: 0,
            }
            result.push(periodIndictor);
        } else if (Object.keys(periodArray).length === 1) {
            const periodIndictor = {
                period: (i+2)/2,
                regular_hours: periodArray[0].regular_hours,
                regular_pay: periodArray[0].regular_pay,
                overtime: periodArray[0].overtime,
                overtime_pay: periodArray[0].overtime_pay,
                evening_hours: periodArray[0].evening_hours,
                evening_pay: periodArray[0].evening_pay,
                weekend_hours: periodArray[0].weekend_hours,
                weekend_pay: periodArray[0].weekend_pay,
                vacation_pay_out: periodArray[0].vacation_pay_out,
                ben_lieu: periodArray[0].ben_lieu,
                stat_holiday: periodArray[0].stat_holiday,
                floater: periodArray[0].floater,
                hours: periodArray[0].total_hours,
                pay: periodArray[0].pay,
            }
            result.push(periodIndictor);
        } else if (Object.keys(periodArray).length === 2) {
            const periodIndictor = {
                period: (i+2)/2,
                regular_hours: periodArray[0].regular_hours + periodArray[1].regular_hours,
                regular_pay: periodArray[0].regular_pay + periodArray[1].regular_pay,
                overtime: periodArray[0].overtime + periodArray[1].overtime,
                overtime_pay: periodArray[0].overtime_pay + periodArray[1].overtime_pay,
                evening_hours: periodArray[0].evening_hours + periodArray[1].evening_hours,
                evening_pay: periodArray[0].evening_pay + periodArray[1].evening_pay,
                weekend_hours: periodArray[0].weekend_hours + periodArray[1].weekend_hours,
                weekend_pay: periodArray[0].weekend_pay + periodArray[1].weekend_pay,
                vacation_pay_out: periodArray[0].vacation_pay_out + periodArray[1].vacation_pay_out,
                ben_lieu: periodArray[0].ben_lieu + periodArray[1].ben_lieu,
                stat_holiday: periodArray[0].stat_holiday + periodArray[1].stat_holiday,
                floater: periodArray[0].floater + periodArray[1].floater,            
                hours: periodArray[0].total_hours + periodArray[1].total_hours,
                pay: periodArray[0].pay + periodArray[1].pay
            }
            result.push(periodIndictor);
        } else {
            const periodIndictor = {
                period: i+1,
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
                pay: 0,
                week_of_year: 0
            }
            result.push(periodIndictor);
        }

    }
    return result.slice(0,-1)
}

