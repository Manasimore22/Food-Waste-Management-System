function showProfileOptions() {
    var profileOptions = document.getElementById("profileOptions");
    if (profileOptions.style.display === "block") {
      profileOptions.style.display = "none";
    } else {
      profileOptions.style.display = "block";
    }
  }
  
  function editProfile() {
    
    alert("Edit profile clicked!");
  }
  
 
  function logout() {
    
    window.location.href = "index.html";
  }