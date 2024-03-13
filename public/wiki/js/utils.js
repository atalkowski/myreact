/**
 * Common utilities for processing files etc
 * Version 1.0.0 - basic yaml file loads supported.
 * @TODO - add methods to support other extensions.
 * Depends on the CSS config for how to display.
 */

const jsonmap = { 
    "yaml" : { "space" : "&nbsp;", "lf" : "\n<br/>", "clazz" : "yamltext"},
    "job"  : { "space" : "&nbsp;", "lf" : "\n",      "clazz" : "htmltext grayback"},
    "html" : { "space" : " ",      "lf" : "\n",      "clazz" : "htmltext grayback"},
    "htm2" : { "space" : " ",      "lf" : "\n",      "clazz" : "htmltext2" },
    "htm"  : { "space" : " ",      "lf" : "\n",      "clazz" : "htmltext grayback"}, 
}

function getHTS(ext) {
   if (ext) {
    ext = ext.toLowerCase();
    var result = jsonmap[ext];
    if (result) return result;
   }
   return jsonmap.html;
}

function isHTML(ext) {
  if (ext) {
    switch (ext.toLowerCase()) {
    case 'htm': case 'html': case 'htm2': return true;
    default:
    }
  }
  return false;
}

function mapToHTML(text, ext) {
   var res = "";
   var state = "";
   var MAP = getHTS(ext);
   var linefeed = MAP.lf;
   var space = MAP.space;
   var clazz = MAP.clazz;
   var is_htm = isHTML(ext);
   var pos = 0;
   var i = 0;
   console.log("Got map as follows for " + ext + " as this:\n", MAP);
   console.log(jsonmap);

   while (i < text.length) {
      var ch = text.charAt(i++);
      pos = pos + 1;
      if (!is_htm) {
        switch(ch) {
        case ' ': ch = space; break;
        case '<': ch = "&lt;"; break;
        case '>': ch = "&gt;"; break;
        // Handle * and ** as H2 and H3 in jobs:
        case '*': if (ext == "job" && state == "" && pos == 1) {
           if (i < text.length && text.charAt(i) == '*') {
              res = res + "<h2>";
              state = "</h2>";
              i++;
           }
           else {
              res = res + "<h3>";
              state = "</h3>";
           }
           ch = "";
        }
        break;
        case '-': if (ext == "job" && state == "" && pos == 1) {
           res = res + "<ul><li>";
           state = "</li></ul>";
           ch = "";
        }
        break;
        
        //case '\'': ch = "&quot;"; break;
        //case '\"': ch = "&dquot;"; break;  
        case ':':
          if (state != "" && ext == "yaml") { 
            res += state; // Close the current span
            ch = '"<span class="comment">:</span><span class="yamltext">';
          }
          break;
        case '#':
          if (state == "" && ext == "yaml") { 
            ch = `<span class="comment">#`;
            state = "</span>";
          }
          break;
        case '\n':
          if (state != "") {
            res = res + state;
          }
          ch = linefeed;
          state = "";
          pos = 0;
          break;
          default: break;
        }
      }
      res = res + ch;
   }
   if (state != "") {
     res = res + state;
   }

   return "<div class='" + clazz + "'>" + res + "</div>";
}

function getFileExtension(file) {
  var inx = file.lastIndexOf(".");
  if (inx > 0)
    return file.substr(inx+1);
  return file;
}


function loadTextFileToElement(file, name) { 
  var rawFile = new XMLHttpRequest();
  var ext = getFileExtension(file)
  rawFile.open("GET", file, false); 
  rawFile.onreadystatechange = function () { 
    if (rawFile.readyState === 4) { 
      if (rawFile.status === 200 || rawFile.status == 0) { 
        var allText = rawFile.responseText; 
        document.getElementById(name).innerHTML = mapToHTML(allText, ext); 
      } 
    } 
  } 
  rawFile.send(null); 
}

function clearInnerHtml(name) {
  var elt = document.getElementById(name);
  if (elt) {
    console.log("clearing content of " + name);
    elt.innerHTML = "";
  } 
}

function resetButton(button, text) {
  if (button) {
    console.log("resetting button to " + text, button);
    button.value = text;
    button.innerHTML = text;
  }
}

function toggleTextFile(file, name, button) {
  var ext = getFileExtension(file);
  var htm = document.getElementById(name);
  var label = name + "-label";
  if (htm.innerHTML.length > 0) {
    clearInnerHtml(name);
    resetButton(button, "View " + ext);
  } else {
    loadTextFileToElement(file, name);
    resetButton(button, "Hide " + ext);
  }
  var labelElt = document.getElementById(label);
  if (labelElt) {
    console.log("Got labelElt for " + label + " ok!");
    var contents = `<div>${file}</div>`;
    console.log("Setting contents to " + contents);
    labelElt.innerHtml = contents;
    console.log("The content is now :" + labelElt.innerHTML);
  }
}

/*
   export testable function here:
*/
module.exports = {
  mapToHTML,
  toggleTextFile
}
// module.exports.mapToHTML = mapToHTML;
// module.exports.toggleTextFile = toggleTextFile;

