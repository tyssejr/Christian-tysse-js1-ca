function replaceText() {
    const replaceP = document.querySelectorAll("p");
    const h1 = document.querySelector("h1");

    let replaceTextH1 = h1.innerText;
    replaceTextH1 = replaceTextH1.replace(/The /g, "Replaced ");
    replaceTextH1 = replaceTextH1.replace(/the /g, "replaced ");
    h1.innerText = replaceTextH1;

    replaceP.forEach(paragraphText => {
        let replaceParagraph = paragraphText.innerText;
        replaceParagraph = replaceParagraph.replace(/the /g, "replaced ");
        replaceParagraph = replaceParagraph.replace(/The /g, "Replaced ");
        paragraphText.innerText = replaceParagraph;
    });
}

setTimeout(replaceText, 4000);