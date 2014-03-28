window.OEREvaluationToolBaseURL = "http://www.oercommons.org/evaluate";

window.OEREvaluationTool = function(container, url) {
  if (url === undefined || url === null) {
    url = window.location.href;
  }
  url = encodeURIComponent(url);
  var iframe = document.createElement("iframe");
  iframe.src = window.OEREvaluationToolBaseURL + "?url=" + url;
  iframe.height = 700;
  iframe.width = 600;
  iframe.scrolling = "no";
  iframe.frameBorder = 0;
  container.appendChild(iframe);
};
