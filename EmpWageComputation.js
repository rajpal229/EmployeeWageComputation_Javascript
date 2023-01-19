class UC1_Attendence
{
    attendence()
    {
        const is_absent = 0;
        let empcheck=Math.floor(Math.random() * 10%2);
        if(empcheck == is_absent)
        {
            console.log("UC1-Employee is absent")
            return 0;
        }
        else
        {
            console.log("UC1-Employee is present")
            return 1;
        }
    }
}
class UC2_Full_or_Part_Time
{
    Wage()
    {
        var obj = new UC1_Attendence();
        var att = obj.attendence();
        const Is_Part_Time=1;
        const Is_Full_Time=2;
        const part_time_hours=4;
        const full_time_hours=8;
        const wage_per_hour=20;
        const DaysInMonths = 20;
        let monthlywage = 0;
        let wage = 0;
        let emphrs=0;
        for (var i = 1; i <=DaysInMonths; i++)
        {
            if(att == 1)
            {
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
            wage = emphrs * wage_per_hour;
            console.log("Wage of the day is: " + wage)
            monthlywage = monthlywage + wage;
        }
        console.log("Monthly Wage is: " + monthlywage)
    }
}

var obj1 = new UC2_Full_or_Part_Time();
obj1.Wage()