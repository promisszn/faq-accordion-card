window.addEventListener('load', () => {
    let openedItem = null;
    const questions = document.querySelectorAll('.question');

    questions.forEach((question) =>
        question.addEventListener('click', (event) => {
            const clickedItem = event.currentTarget;
            if (clickedItem !== openedItem) {
                toggleElement(clickedItem);
                toggleElement(openedItem);
                openedItem = clickedItem;
            } else {
                toggleElement(clickedItem);
                openedItem = null;
            }
        })
    )

})

function toggleElement(item) {
    if (item === null) {
        //close right away if null
        return;
    }
    //get the next element of questionContainer (answerContainer)
    const sibling = item.nextElementSibling;
    const siblingStyle = getComputedStyle(sibling);
    //get last element of questionContainer (IMG (arrow down))
    const lastChild = item.lastElementChild;
    const lastChildStyle = getComputedStyle(lastChild);
    //get the first element of questionContainer (heading tag)
    const firstChild = item.firstElementChild;
    const firstChildStyle = getComputedStyle(firstChild);
    lastChild.style.transform =
        lastChildStyle.getPropertyValue("transform") === "none" ?
        "rotate(180deg)" :
        "none";
    lastChild.style.transition = "all 0.3s ease-in";
    firstChild.style.fontWeight =
        firstChildStyle.getPropertyValue("font-weight") === "400" ? "700" : "400";
    firstChild.style.color = "hsl(238, 29%, 16%)"
    sibling.style.margin = "0 0 1rem 0";
    sibling.style.padding = "0 1rem 0 0";
    sibling.style.color = "hsl(240, 6%, 50%)";
    sibling.style.display =
        siblingStyle.getPropertyValue("display") === "none" ? "block" : "none";
}