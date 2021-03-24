let Text = document.getElementById("text1")
let i = 0
function postFunction() 
{
    comment = Text.value
    
    if(i==0)
    {
        document.getElementById("topic1").innerHTML = comment
        Text.value = null
        i++
    }
    else if(i==1)
    {
        document.getElementById("comment1").innerHTML = comment
        Text.value = null
        i++
    }
    else if(i==2)
    {
        document.getElementById("comment2").innerHTML = comment
        Text.value = null
        i++
    }
    else
    {
        alert("Click clear")
    }
} 
function clearFunction()
{
    document.getElementById("topic1").innerHTML = null
    document.getElementById("comment1").innerHTML = null
    document.getElementById("comment2").innerHTML = null
    Text.value = null
    i=0
}