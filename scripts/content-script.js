// content-script.js is the script that will be injected and run on `current-tab`, for security reason
// the data retrieved from current-tab need to be returned in order to extension to do further processing

var $ = jQuery;

function retrieveJob() {
    console.log("retrieveJob() called")
    let jobtitle, jobDescription

    loc = window.location.toString()
    console.log(loc)

    if (loc.includes('ca.indeed.com')) {
        console.log('this is an indeed page')
        jobtitle = $(".jobsearch-JobInfoHeader-title").text() // get job title
        jobDescription = $("#jobDescriptionText").text() // get job description as plain text

        console.log("retrieved job title and description from indeed", jobtitle, jobDescription)


    } else if (loc.includes('linkedin.com')) {
        console.log('this is a linkedin page')
        jobtitle = $(".jobs-unified-top-card__job-title").text() // get job title
        jobDescription = $(".jobs-description__content").text() // get job description as plain text

        console.log("retrieved job title and description from LinkedIn", jobtitle, jobDescription)


    } else if (loc.includes('glassdoor.ca')) {
        console.log('this is a glassdoor page')
        jobtitle = $(".e1tk4kwz4").text() // get job title
        jobDescription = $("#JobDescriptionContainer").text() // get job description as plain text

        console.log("retrieved job title and description from glassdoor", jobtitle, jobDescription)
    }

    // return data to extension
    return {
        title: jobtitle,
        description: jobDescription
    }
}

// run retrieveJob() each time when executeScript
retrieveJob()