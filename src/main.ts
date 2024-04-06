import "./style.css";

const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const textToCopy = link.querySelector(".hyperlink")?.textContent;
    if (textToCopy) navigator.clipboard.writeText(textToCopy);
  });
});
