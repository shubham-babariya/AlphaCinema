function confirmDownload(event, url) {
    event.preventDefault();
    if (confirm("Do you want to download this file?")) {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop();
        link.click();
    }
}
function goToPage(number) {
    // You can change this to any logic you need, like redirecting to a specific page
    window.location.href = `page${number}.html`; // Replace 'page1.html' with actual page names
  }
  window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    }, 4000);
});
const menuButton = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.side-menu');

// Add event listener to the button
menuButton.addEventListener('click', () => {
    sideMenu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});