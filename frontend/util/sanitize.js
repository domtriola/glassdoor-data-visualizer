export const esc = (text) => {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
};
