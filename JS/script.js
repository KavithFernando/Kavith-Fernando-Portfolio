//making sure the document body is loaded before the javascript
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}

function ready() {

    // const tabTitles = document.getElementsByClassName("tab-title");
    // const tabContents = document.getElementsByClassName("tab-content");

    // for (let i = 0; i < tabTitles.length; i++) {
    //     const tabTitle = array[i];
    //     const contentId = tabTitle.id + "-tab";
    //     tabTitle.addEventListener('click', function() {

    //         for (let j = 0; j < tabContents.length; j++) {
    //             const tabContent = array[j];
    //             tabContent.classList.remove("active-content");
    //         }

    //         const visibleTab = document.getElementById(contentId);
    //         visibleTab.classList.add("active-content");

    //     })  
    // }

    const educationTitle = document.getElementById("education");
    const skillsTitle = document.getElementById("skills");
    const experienceTitle = document.getElementById("experience");

    const educationTab = document.getElementById("education-tab");
    const skillsTab = document.getElementById("skills-tab");
    const experienceTab = document.getElementById("experience-tab");
    

    educationTitle.addEventListener('click', function() {
        this.classList.add("active-title");
        skillsTitle.classList.remove("active-title");
        experienceTitle.classList.remove("active-title");

        educationTab.classList.add("active-content");
        skillsTab.classList.remove("active-content");
        experienceTab.classList.remove("active-content");
    });

    skillsTitle.addEventListener('click', function() {
        educationTitle.classList.remove("active-title");
        this.classList.add("active-title");
        experienceTitle.classList.remove("active-title");

        educationTab.classList.remove("active-content");
        skillsTab.classList.add("active-content");
        experienceTab.classList.remove("active-content");
    });

    experienceTitle.addEventListener('click', function() {
        educationTitle.classList.remove("active-title");
        skillsTitle.classList.remove("active-title");
        this.classList.add("active-title");

        educationTab.classList.remove("active-content");
        skillsTab.classList.remove("active-content");
        experienceTab.classList.add("active-content");
    });

}