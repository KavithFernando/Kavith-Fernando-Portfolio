//making sure the document body is loaded before the javascript
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}

function ready() {
    
    const titles = Array.from(document.getElementsByClassName("tab-title"));
    const tabs = Array.from(document.getElementsByClassName("tab-content"));

    titles.forEach(title => {
        title.addEventListener('click', function() {
            // Remove active class from all titles and tabs
            titles.forEach(t => t.classList.remove("active-title"));
            tabs.forEach(t => t.classList.remove("active-content"));

            // Add active class to the clicked title and corresponding tab
            this.classList.add("active-title");
            document.getElementById(this.id + "-tab").classList.add("active-content");
        });
    });

}