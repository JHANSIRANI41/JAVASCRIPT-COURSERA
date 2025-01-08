const breakfastMenu=['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu=['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu=['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
//using map
const breakfastmenuItems=breakfastMenu.map((item,index)=>`<p>Item ${index+1} :${item}</p>`).join('');
document.getElementById('breakfastTotalItems').innerHTML=breakfastmenuItems;
//using for each loop
//we have to take a empty string
let mainCourseItems='';
mainCourseMenu.forEach((item,index)=>
{
    mainCourseItems+=`<p>Item ${index+1} :${item}</p>`;
})
document.getElementById("maincourseTotalItems").innerHTML=mainCourseItems;

//using for loop
//we have use let while using foreach and for loop
let dessertMenuItems='';

for(let i=0;i<dessertMenu.length;i++)
{
    dessertMenuItems+=`<p>Item ${i+1} :${dessertMenu[i]}</p>`;
}
document.getElementById("dessertTotalItems").innerHTML=dessertMenuItems;