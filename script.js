const select = document.querySelector("select");
const iframe = document.querySelector("iframe");

select.addEventListener("change", setIframe)

function setIframe() {
    const choice = select.value;

    if (choice === "default/index.html") {
        iframe.src = this.value;
        iframe.style.height = "550px";
    } else if (choice === "border-bottom/index.html") {
        iframe.src = this.value;
        iframe.style.height = "650px";
    } else if (choice === "link-icon/index.html") {
        iframe.src = this.value;
        iframe.style.height = "750px";
    } else if (choice === "navigation/index.html") {
        iframe.src = this.value;
        iframe.style.height = "800px";
    } else {
        iframe.src = "";
    }
}