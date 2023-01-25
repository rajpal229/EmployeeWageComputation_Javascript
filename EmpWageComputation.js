const Is_Part_Time=1;
const Is_Full_Time=2;
const part_time_hours=4;
const full_time_hours=8;
const wage_per_hour=20;
const DaysInMonths = 20;
const MaximumHrs = 100;
let DayWorked = 0;
const EmpDailyWage = new Array();

function calcDailyWage(emphrs)
{
    return emphrs * wage_per_hour;
}

class UC1_Attendence
{
    attendence()
    {
        const is_absent = 0;
        let empcheck=Math.floor(Math.random() * 10%2);
        if(empcheck == is_absent)
        {
            console.log("Employee is absent")
            return 0;
        }
        else
        {
            console.log("Employee is present")
            return 1;
        }
    }
}
class UC2_Full_or_Part_Time
{
    Wage()
    {
        let monthlywage = 0;
        let wage = 0;
        let emphrs = 0;
        let TotalHrs = 0;
        for (var i = 1; i <=DaysInMonths; i++)
        {
            console.log("\nDay"+i+"-")
            var obj = new UC1_Attendence();
            var att = obj.attendence();
            if(att == 1)
            {
                DayWorked += 1;
                let empcheck1=Math.floor(((Math.random() * 10 % 2) + 1));
            switch(empcheck1)
            {
                case Is_Part_Time:
                    emphrs=part_time_hours;
                    console.log("Present Part Time")
                    break;
                case Is_Full_Time:
                emphrs=full_time_hours;
                console.log("Present Full Time")
                    break;
            }
            }
            else
            {
                emphrs = 0;
            }
            wage = calcDailyWage(emphrs);
            console.log("Wage of the day" + i + " is: " + wage)
            EmpDailyWage.push(wage)
            TotalHrs = TotalHrs + emphrs;
            if (TotalHrs <= MaximumHrs)
            {
                monthlywage = monthlywage + wage;
            }
            else
            {
                TotalHrs = TotalHrs - emphrs;
                
            }
            console.log("Monthly Wage till now is: " + monthlywage)
            console.log("Hours Worked till now are: " + TotalHrs)
        }
        
        console.log("\nDaily Wage Array: " + EmpDailyWage)
        console.log("Monthly Wage is: " + monthlywage)
        console.log("Total Hours Worked are: " + TotalHrs)
    }
}

var obj1 = new UC2_Full_or_Part_Time();
obj1.Wage()

//UC7 a. Use reduce or Foreach to show sum of Daily Wages
let sumbyreduce = EmpDailyWage.reduce(function (accumulator, curValue) {
            return accumulator + curValue  
          }, 0)

let sumbyforeach = 0;
EmpDailyWage.forEach(element => {
    sumbyforeach += element;
});
console.log("\nUC7-A")
console.log("\nSum using reduce: " + sumbyreduce)
console.log("\nSum using for each: " + sumbyforeach)

//UC7 b. Use map to show Day with Wage
let DailyCntr = 0;
function mapDayWithWage(EmpDailyWage)
{
    DailyCntr++;
    return  "Day " + DailyCntr + " - Wage: " + EmpDailyWage;
}
let mapDayWithWageArray = EmpDailyWage.map(mapDayWithWage); 
console.log("\nUC7-B")
console.log(mapDayWithWageArray)

//UC7 c. Use filter to show Days with Full time wages

function fulltimeWage(EmpDailyWage)
{
    return EmpDailyWage.includes("160");
}
let fullDayWageArray = mapDayWithWageArray.filter(fulltimeWage)
console.log("\nUC7-C")
console.log(fullDayWageArray)

let Days160 = 0;
function FullWage(wage)
{
    if (wage == 160)
    {
        Days160 ++;
        return wage;
    }
}
let FullWageArray = EmpDailyWage.filter(FullWage);
console.log("Days when Full time wage of 160 were earned are " + Days160)


//UC7 d. Use find function to show first day when full time wage is paid
console.log("\nUC7-D")
console.log("Used find: " + mapDayWithWageArray.find(fulltimeWage))
console.log("Used Indexof - first occurrence when Full Time Wage was paid is on Day " + (EmpDailyWage.indexOf(160)+1))
let first160 = EmpDailyWage.findIndex(function FirstFullDay(value)
{
    return value > 80;
});
console.log("Using findIndex - Day " + (first160+1));

//UC7 e. Every Element of Full Time Wage is truly holding Full time wage
console.log("\nUC7-E")
console.log(fullDayWageArray.every(fulltimeWage))

//UC7 f. Check if there is any Part Time Wage
console.log("\nUC7-F")
function parttimeWage(EmpDailyWage)
{
    return EmpDailyWage.includes("80");
}
console.log(mapDayWithWageArray.some(parttimeWage))

//UC7 g. Find the number of days the Employee Worked
console.log("\nUC7-G")

function totaldaysworked(numofdays, EmpDailyWage)
{
    if (EmpDailyWage > 0)
    {
        return numofdays+1;
    }
    return numofdays;
}
console.log("Using Reduce: " + EmpDailyWage.reduce(totaldaysworked, 0))

console.log("The number of days the Employee Worked are " + DayWorked)

