const openAdminBtn = document.querySelector(".openAdminBtn");

const closeOverlay = document.querySelector(".closeAdminOverlayBtn");

const adminPopupContainer = document.querySelector(".adminPopupContainer");

//open admin overlay
openAdminBtn.addEventListener("click", () => {
  //check for admin password to continue
  let adminPrompt = prompt("what is the admin password");
  if (adminPrompt === "cnb92316") {
    //opens admin overlay
    adminPopupContainer.style.transform = "translateY(0)";
  } else {
    alert("sorry wrong password you will be redirected to the main page");
    location.reload;
  }
});
//close admin overlay
closeOverlay.addEventListener("click", () => {
  adminPopupContainer.style.transform = "translateY(-1000px)";
});
