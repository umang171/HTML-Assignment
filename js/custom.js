var cnt=0;
function togglesidebar(){
    if(cnt++%2==0)
    {
        document.getElementById("dashsidebar").style.display="flex";
    }
    else
    {
        document.getElementById("dashsidebar").style.display="none";
    }
}