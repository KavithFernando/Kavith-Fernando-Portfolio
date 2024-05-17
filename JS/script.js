//making sure the document body is loaded before the javascript
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}

function ready() {

    // ------------------------------------------------------------------------------------
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
    // ------------------------------------------------------------------------------------
    
    // ------------------------------------------------------------------------------------
    const lightButton = document.getElementById("light");
    const darkButton = document.getElementById("dark");

    lightButton.addEventListener('click', function() {
        this.style.display = 'none';
        darkButton.style.display = 'block';

        document.documentElement.style.setProperty('--primary-color', '#F9F9F9');
        document.documentElement.style.setProperty('--secondary-color', '#2AD882');
        document.documentElement.style.setProperty('--primary-text-color', '#191D23');
        document.documentElement.style.setProperty('--subtext-color', '#38414E');
        document.documentElement.style.setProperty('--special-subtext-color', '#1D8F56');

        document.documentElement.style.setProperty('--astro-brightness-level', '20%');
    })

    darkButton.addEventListener('click', function() {
        this.style.display = 'none';
        lightButton.style.display = 'block';

        document.documentElement.style.setProperty('--primary-color', '#191D23');
        document.documentElement.style.setProperty('--secondary-color', '#2AD882');
        document.documentElement.style.setProperty('--primary-text-color', '#FFFFFF');
        document.documentElement.style.setProperty('--subtext-color', '#D7D7D7');
        document.documentElement.style.setProperty('--special-subtext-color', '#24ad68');

        document.documentElement.style.setProperty('--astro-brightness-level', '100%');

    })
    // ------------------------------------------------------------------------------------

}