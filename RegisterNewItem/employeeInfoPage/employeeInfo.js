function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks1, tablinks2;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
     document.getElementsByClassName("employeesInfo1")[0].style.display = "none";
     document.getElementsByClassName("employeesInfo2")[0].style.display = "none";

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks1 = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks1.length; i++) {
        tablinks1[i].className = tablinks1[i].className.replace(" active", "");
    }

    tablinks2 = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks2.length; i++) {
      tablinks2[i].className = tablinks2[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    
 if(evt.currentTarget.className == "tablinks1") {
            document.getElementsByClassName("employeesInfo1")[0].style.display = "block";
 } else {
    document.getElementsByClassName("employeesInfo2")[0].style.display = "block";
 }

    evt.currentTarget.className += " active";

  }
  