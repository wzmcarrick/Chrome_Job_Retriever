// content-script.js is the script that will be injected and run on `current-tab`, for security reason
// the data retrieved from current-tab need to be returned in order to extension to do further processing

var $ = jQuery;

function retrieveJob() {
    console.log("retrieveJob() called")

    // TODO: need to use chrome API to find the website name, for now I assume the website is ca.indeed.com

    const jobtitle = $(".jobsearch-JobInfoHeader-title").text() // get job title
    const jobDescription = $("#jobDescriptionText").text() // get job description as plain text

    console.log("retrieved job title and description from current-tab", jobtitle, jobDescription)

    // return data to extension
    return {
        title: jobtitle,
        description: jobDescription
    }
}

// run retrieveJob() each time when executeScript
retrieveJob()