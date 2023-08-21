// var dataArr = [];
// var data = new Date();
// var year = data.getFullYear();
// data.setMonth(data.getMonth() + 1, 1)//获取到当前月份,设置月份
// for (var i = 0; i < 12; i++)
// {
//     data.setMonth(data.getMonth() - 1);//每次循环一次 月份值减1
//     var m = data.getMonth() + 1;
//     m = m < 10 ? "0" + m : m;
//     dataArr.push(data.getFullYear() + "-" + (m))
// }

// console.log(dataArr)



var last_year_month = function ()
{
    var d = new Date();
    console.log(d);
    var result = [];
    for (var i = 0; i < 12; i++)
    {
        d.setMonth(d.getMonth() - 1);
        console.log(d.getMonth());
        var m = d.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        //在这里可以自定义输出的日期格式
        // result.push(d.getFullYear() + "-" + m);
        result.push(d.getFullYear() + "年" + m + '月');
    }
    return result;
}

//测试输出结果
// document.write(last_year_month());
console.log(last_year_month());