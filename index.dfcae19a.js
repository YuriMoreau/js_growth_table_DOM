var e=document.querySelector("table"),t=document.querySelector(".append-row"),n=document.querySelector(".remove-row"),r=document.querySelector(".append-column"),o=document.querySelector(".remove-column");function l(){var l=e.rows.length,c=e.rows[0].cells.length;t.disabled=l>=10,n.disabled=l<=2,r.disabled=c>=10,o.disabled=c<=2}t.addEventListener("click",function(){if(e.rows.length<10)for(var t=e.insertRow(),n=0;n<e.rows[0].cells.length;n++)t.insertCell().textContent="";l()}),n.addEventListener("click",function(){e.rows.length>2&&e.deleteRow(-1),l()}),r.addEventListener("click",function(){e.rows[0].cells.length<10&&Array.from(e.rows).forEach(function(e){e.insertCell().textContent=""}),l()}),o.addEventListener("click",function(){e.rows[0].cells.length>2&&Array.from(e.rows).forEach(function(e){e.deleteCell(-1)}),l()});
//# sourceMappingURL=index.dfcae19a.js.map
