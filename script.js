// Job Data

const jobs = [
    {
        id: 1,
        companyName: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$120,000 - $150,000",
        description:
            "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: "not-applied"
    },

    {
        id: 2,
        companyName: "WebFlow Agency",
        position: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salary: "$50,000 - $70,000",
        description:
            "Create modern websites and web applications. Work with designers and developers to build user-friendly digital products.",
        status: "not-applied"
    },

    {
        id: 3,
        companyName: "DataViz Solutions",
        position: "Data Visualization Specialist",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$75,000 - $105,000",
        description:
            "Transform complex data into meaningful visualizations. Experience with JavaScript, React, and data analysis is preferred.",
        status: "not-applied"
    },

    {
        id: 4,
        companyName: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$140,000 - $180,000",
        description:
            "Design and maintain scalable backend systems using Python and APIs. Work with modern cloud infrastructure.",
        status: "not-applied"
    },

    {
        id: 5,
        companyName: "Innovation Labs",
        position: "UI/UX Engineer",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$100,000 - $130,000",
        description:
            "Create beautiful and functional user interfaces for digital products. Strong design and frontend development skills are required.",
        status: "not-applied"
    },

    {
        id: 6,
        companyName: "MegaCorp Solutions",
        position: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-time",
        salary: "$130,000 - $170,000",
        description:
            "Build enterprise applications using JavaScript and modern frameworks. Work with a talented development team.",
        status: "not-applied"
    },

    {
        id: 7,
        companyName: "StartupXYZ",
        position: "Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "$120,000 - $160,000",
        description:
            "Join our fast-growing startup and work on our core platform. Experience with Node.js and React is required.",
        status: "not-applied"
    },

    {
        id: 8,
        companyName: "TechCorp Industries",
        position: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description:
            "Build scalable web applications using React and TypeScript. Work with an experienced engineering team.",
        status: "not-applied"
    }
];
const jobsContainer = document.getElementById("jobs-container");

const noJobs = document.getElementById("no-jobs");

const totalCount = document.getElementById("total-count");

const interviewCount = document.getElementById("interview-count");

const rejectedCount = document.getElementById("rejected-count");

const jobCount = document.getElementById("job-count");

const allTab = document.getElementById("all-tab");

const interviewTab = document.getElementById("interview-tab");

const rejectedTab = document.getElementById("rejected-tab");


let currentTab = "all";




function displayJobs() {

    
    jobsContainer.innerHTML = "";


  
    let filteredJobs = jobs.filter(function (job) {

        if (currentTab === "all") {
            return true;
        }

        return job.status === currentTab;

    });


    jobCount.innerText = filteredJobs.length;


    
    if (filteredJobs.length === 0) {

        noJobs.style.display = "flex";

    } else {

        noJobs.style.display = "none";

    }


   
    filteredJobs.forEach(function (job) {

        const card = document.createElement("div");

        card.classList.add("job-card");


        card.innerHTML = `

            <div class="job-card-header">

                <div>

                    <h3 class="company-name">
                        ${job.companyName}
                    </h3>

                    <p class="position">
                        ${job.position}
                    </p>

                </div>


                <button 
                    class="delete-btn"
                    onclick="deleteJob(${job.id})"
                >
                    🗑
                </button>

            </div>


            <div class="job-info">

                <span> ${job.location}</span>

                <span>• ${job.type}</span>

                <span>• ${job.salary}</span>

            </div>


            <p class="description">
                ${job.description}
            </p>


            <span class="status">
                ${getStatusText(job.status)}
            </span>


            <div class="job-actions">

                <button
                    class="interview-btn"
                    onclick="setInterview(${job.id})"
                >
                    INTERVIEW
                </button>


                <button
                    class="rejected-btn"
                    onclick="setRejected(${job.id})"
                >
                    REJECTED
                </button>

            </div>

        `;


        jobsContainer.appendChild(card);

    });



    updateDashboard();

}




function getStatusText(status) {

    if (status === "interview") {

        return "INTERVIEW";

    }

    if (status === "rejected") {

        return "REJECTED";

    }

    return "NOT APPLIED";

}




function setInterview(id) {

    const job = jobs.find(function (job) {

        return job.id === id;

    });


    if (job) {

        job.status = "interview";

    }


    displayJobs();

}




function setRejected(id) {

    const job = jobs.find(function (job) {

        return job.id === id;

    });


    if (job) {

        job.status = "rejected";

    }


   
    displayJobs();

}




function deleteJob(id) {

    const index = jobs.findIndex(function (job) {

        return job.id === id;

    });


    if (index !== -1) {

        jobs.splice(index, 1);

    }


    displayJobs();

}



function updateDashboard() {

    const totalJobs = jobs.length;


    const interviewJobs = jobs.filter(function (job) {

        return job.status === "interview";

    }).length;


    const rejectedJobs = jobs.filter(function (job) {

        return job.status === "rejected";

    }).length;


    totalCount.innerText = totalJobs;

    interviewCount.innerText = interviewJobs;

    rejectedCount.innerText = rejectedJobs;

}




allTab.addEventListener("click", function () {

    currentTab = "all";


    allTab.classList.add("active");

    interviewTab.classList.remove("active");

    rejectedTab.classList.remove("active");


    displayJobs();

});




interviewTab.addEventListener("click", function () {

    currentTab = "interview";


    interviewTab.classList.add("active");

    allTab.classList.remove("active");

    rejectedTab.classList.remove("active");


    displayJobs();

});




rejectedTab.addEventListener("click", function () {

    currentTab = "rejected";


    rejectedTab.classList.add("active");

    allTab.classList.remove("active");

    interviewTab.classList.remove("active");


    displayJobs();

});



displayJobs();