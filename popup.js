// popup is the script that will be run on the 'extension level', like binding onClick to a button

let retrieveJob = document.getElementById('retrieveJob');

async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

// OnClick function for the button, jquery and our customized code will be injected and executed
// TODO: jquery was injected and parsed every time we click the button and can use a lot of resource,
// Can we inject jquery only once?
let tabVisited = [];

retrieveJob.addEventListener('click', async () => {
    console.log("retrieveJob click called")
    let tab = await getCurrentTab();
    console.log(tab)

    if (tabVisited.includes(tab.id)) {
        console.log('this tab is visited')
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['./scripts/content-script.js']
        })
    } else {
        console.log('this tab is not visited')
        tabVisited.push(tab.id);
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: [
                './scripts/jquery-3.6.3.min.js',
                './scripts/content-script.js'
            ],
        },
            res => {
                console.log("get jobDetails from current-tab", res[0].result)

                // TODO: send API call to notion
            });
    }

});
