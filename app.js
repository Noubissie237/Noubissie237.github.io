str = new String("Salut, je suis NOUBISSIE KAMGA WILFRIED");
let i = 0;
dir = "D"

function autoWrite()
{
    t = setTimeout("autoWrite()", 40);
    document.getElementById("Text").innerHTML = str.substring(0, i);
    if(dir == "D")
    {
        if(i < str.length)
            i++;
        else
            dir = "G"
    }
}