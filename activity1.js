score=0
function ubdet()
{
    score=score+1000000
document.getElementById("ghosttt").innerHTML="score:"+score
}
function sacvesore(){
    localStorage.setItem("mon.key",score)
}
function next()
{
    window.location="activity_2.html"
}