document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        splashScreen.style.display = 'none'; 
        mainContent.style.display = 'block'; 
    }, 2000);
});


function showProject(projectId) {
    const projectDetails = document.getElementById("project-details");
    const projectVideo = document.getElementById("project-video");
    const githubLink = document.getElementById("github-link");

    
    if (projectId === "project1") {
        projectVideo.src = "img_vid/to-do-web-video.mp4"; 
        githubLink.href = "https://github.com/vivek-jain-17/to-do-list.git";
    } else if (projectId === "project2") {
        projectVideo.src = "img_vid/blog-web-video.mp4"; 
        githubLink.href = "https://github.com/vivek-jain-17/Bloggigng-Site.git";
    } else if (projectId === "project3") {
        projectVideo.src = "img_vid/tictac-web-video.mp4"; 
        githubLink.href = "https://github.com/vivek-jain-17/tic-tac-toe.git";
    } else if (projectId === "project4") {
        projectVideo.src = "img_vid/portfoliowbubble.mp4"; 
        githubLink.href = "https://github.com/vivek-jain-17/Portfolio.git";
    } else if (projectId === "project5") {
        projectVideo.src = "img_vid/alien_game1.mp4"; 
        githubLink.href = "https://github.com/vivek-jain-17/Alien-Attack.git"; 
    } 

    projectDetails.classList.remove("hidden");
}


function closeProject() {
    const projectDetails = document.getElementById("project-details");
    const projectVideo = document.getElementById("project-video");

    projectVideo.pause(); 
    projectVideo.src = ""; 
    projectDetails.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
    const bubbleContainer = document.querySelector(".bubbles");

    for (let i = 0; i < 50; i++) {
        const bubble = document.createElement("span");
        const size = Math.random() * 50 + 10; 
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`; 
        bubble.style.animationDuration = `${Math.random() * 10 + 5}s`; 
        bubble.style.animationDelay = `${Math.random() * 5}s`; 
        bubbleContainer.appendChild(bubble);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const aboutLink = document.getElementById("about-link");
    const aboutText = document.getElementById("about-text");

    aboutLink.addEventListener("click", (e) => {
        e.preventDefault(); 
        if (aboutText.style.display === "block") {
            aboutText.style.display = "none";
        } else {
            aboutText.style.display = "block"; 
        }
    });
});





