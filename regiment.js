function show(element){
    const regiment = element.className;
    hide();
    switch(regiment){
        case "gp":
            document.getElementById("gp").style.display = "flex";
            document.getElementById("gp").scrollIntoView({ behavior: "smooth", block: "start" });
            break;
        case "4e":
            document.getElementById("4e").style.display = "flex";
            document.getElementById("4e").scrollIntoView({ behavior: "smooth", block: "start" });
            break;
        case "24e":
            document.getElementById("24e").style.display = "flex";
            document.getElementById("24e").scrollIntoView({ behavior: "smooth", block: "start" });
            break;
        case "9e":
            document.getElementById("9e").style.display = "flex";
            document.getElementById("9e").scrollIntoView({ behavior: "smooth", block: "start" });
            break;
        case "ac":
            document.getElementById("ac").style.display = "flex";
            document.getElementById("ac").scrollIntoView({ behavior: "smooth", block: "start" });
            break;
    }
}
function hide(){
    document.querySelectorAll(".regWrap").forEach((reg) => {
        reg.style.display = "none";});
}