let clickCount = 0;
const redirectURL = "./main/index.html/";
const targetClicks = 5;

document.getElementById("root").addEventListener("click", function() {
  clickCount++;
  console.log("if youre here, stop looking through the console and use the site you burger, click counts are at" + clickCount); // Optional: for debugging

  if (clickCount >= targetClicks) {
    window.location.href = redirectURL;
  }
});