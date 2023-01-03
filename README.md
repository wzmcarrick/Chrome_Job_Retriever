step I:
Retrieve job title and job description based on CSS selector (jQuery)
i.e. for ca.indeed.com, after looking into its html code, we can use below selector to filter out the title and the description

```
$ = jQuery
$(".jobsearch-JobInfoHeader-title").text() // get job title
$("#jobDescriptionText").text() // get job description as plain text
```

Quiz: try retrieve job title/description from linkedin/glassdoor, you may need to look into the html and find how to filter them (based on id? or class)

step II:
build a chrome extension
official example
```
https://developer.chrome.com/docs/extensions/mv2/background_pages/#manifest
https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/
https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/reference/mv3/intro/mv3-migration/content-scripts
```

step III
send an API call to notion
let us make it a homework for you :)