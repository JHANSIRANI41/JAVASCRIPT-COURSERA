let count=0;

function increaseCount()
{
    count++;
    displayCount();
    checkCountValue()
}
function displayCount()
{
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue()
{
    if(count===10)
    {
        alert("your Instagram has gained 10 followers");
    }
    else if(count===20)
    {
        alert("Your Instagram post gained 20 followers");
    }
}