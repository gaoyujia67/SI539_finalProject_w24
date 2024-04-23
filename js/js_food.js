
// This variable tracks whether the event handlers have been set
var eventHandlersSet = false;
var eventHandlersSet_l = false;
let previousWidth = window.innerWidth;

function smallScreen() {
  if (!eventHandlersSet) {
    var img1 = document.getElementById("img1");
    var div1 = document.getElementById("div1");
    img1.addEventListener("click", function() {
      toggleVisibility(div1, img1);
    });

    var img2 = document.getElementById("img2");
    var div2 = document.getElementById("div2");
    img2.addEventListener("click", function() {
      toggleVisibility(div2, img2);
    });

    var img3 = document.getElementById("img3");
    var div3 = document.getElementById("div3");
    img3.addEventListener("click", function() {
      toggleVisibility(div3, img3);
    });

    var img4 = document.getElementById("img4");
    var div4 = document.getElementById("div4");
    img4.addEventListener("click", function() {
      toggleVisibility(div4, img4);
    });

    var img5 = document.getElementById("img5");
    var div5 = document.getElementById("div5");
    img5.addEventListener("click", function() {
      toggleVisibility(div5, img5);
    });

    var img6 = document.getElementById("img6");
    var div6 = document.getElementById("div6");
    img6.addEventListener("click", function() {
      toggleVisibility(div6, img6);
    });

    var img7 = document.getElementById("img7");
    var div7 = document.getElementById("div7");
    img7.addEventListener("click", function() {
      toggleVisibility(div7, img7);
    });

    var img8 = document.getElementById("img8");
    var div8 = document.getElementById("div8");
    img8.addEventListener("click", function() {
      toggleVisibility(div8, img8);
    });

    var img9 = document.getElementById("img9");
    var div9 = document.getElementById("div9");
    img9.addEventListener("click", function() {
      toggleVisibility(div9, img9);
    });

    var button = document.getElementById("expandAllButton");

    button.addEventListener("click", function() {
      var images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
      var divs = [div1, div2, div3, div4, div5, div6, div7, div8, div9];
      if (this.textContent === "Expand All") {
        for (var i = 0; i < divs.length; i++) {
          divs[i].style.display = "block";
          images[i].style.gridColumn = 1;
        }
        this.textContent = "Collapse All";
      } else {
        for (var i = 0; i < divs.length; i++) {
          divs[i].style.display = "none";
          images[i].style.gridColumn = 2;
        }
        this.textContent = "Expand All";
      }
    });

    eventHandlersSet = true;
  }

}

function largeScreen(){
    if( !eventHandlersSet_l){

        var img1_l = document.getElementById("img1");
        var div1_l = document.getElementById("div1");
        
        img1_l.addEventListener("click", function() {
            if (div1_l.style.display === "none") {
            div1_l.style.display = "block";
            img1_l.style.gridColumn = 1;
            } else {
            div1_l.style.display = "none";
            img1_l.style.gridColumn = 3;
            }
        });
    
        var img2_l = document.getElementById("img2");
        var div2_l = document.getElementById("div2");
    
        img2_l.addEventListener("click", function() {
            if (div2_l.style.display === "none") {
                div2_l.style.display = "block";
                img2_l.style.gridColumn = 6;
            } else {
                div2_l.style.display = "none";
                img2_l.style.gridColumn = 4;
            }
            });
    
        var img3_l = document.getElementById("img3");
        var div3_l = document.getElementById("div3");
        
        img3_l.addEventListener("click", function() {
            if (div3_l.style.display === "none") {
            div3_l.style.display = "block";
            img3_l.style.gridColumn = 1;
            } else {
            div3_l.style.display = "none";
            img3_l.style.gridColumn = 3;
            }
        });
    
        var img4_l = document.getElementById("img4");
        var div4_l = document.getElementById("div4");
        
        img4_l.addEventListener("click", function() {
            if (div4_l.style.display === "none") {
                div4_l.style.display = "block";
                img4_l.style.gridColumn = 6;
            } else {
                div4_l.style.display = "none";
                img4_l.style.gridColumn = 4;
            }
            });
    
        var img5_l = document.getElementById("img5");
        var div5_l = document.getElementById("div5");
    
        img5_l.addEventListener("click", function() {
            if (div5_l.style.display === "none") {
            div5_l.style.display = "block";
            img5_l.style.gridColumn = 1;
            } else {
            div5_l.style.display = "none";
            img5_l.style.gridColumn = 3;
            }
        });
    
        var img6_l = document.getElementById("img6");
        var div6_l = document.getElementById("div6");
    
        img6_l.addEventListener("click", function() {
            if (div6_l.style.display === "none") {
                div6_l.style.display = "block";
                img6_l.style.gridColumn = 6;
            } else {
                div6_l.style.display = "none";
                img6_l.style.gridColumn = 4;
            }
            });
    
        var img7_l = document.getElementById("img7");
        var div7_l = document.getElementById("div7");
    
        img7_l.addEventListener("click", function() {
            if (div7_l.style.display === "none") {
                div7_l.style.display = "block";
                img7_l.style.gridColumn = 1;
            } else {
                div7_l.style.display = "none";
                img7_l.style.gridColumn = 3;
            }
        });
    
        var img8_l = document.getElementById("img8");
        var div8_l = document.getElementById("div8");
    
        img8.addEventListener("click", function() {
            if (div8_l.style.display === "none") {
                div8_l.style.display = "block";
                img8_l.style.gridColumn = 6;
            } else {
                div8_l.style.display = "none";
                img8_l.style.gridColumn = 4;
            }
        });
    
        var img9_l = document.getElementById("img9");
        var div9_l = document.getElementById("div9");
    
        img9_l.addEventListener("click", function() {
            if (div9_l.style.display === "none") {
                div9_l.style.display = "block";
                img9_l.style.gridColumn = 1;
            } else {
                div9_l.style.display = "none";
                img9_l.style.gridColumn = 3;
            }
        });
    
        var button_l = document.getElementById("expandAllButton");
    
        button_l.addEventListener("click", function(){
            if (this.textContent === "Expand All") {
                div1_l.style.display = "block";
                img1_l.style.gridColumn = 1;
                div2_l.style.display = "block";
                img2_l.style.gridColumn = 6;
                div3_l.style.display = "block";
                img3_l.style.gridColumn = 1;
                div4_l.style.display = "block";
                img4_l.style.gridColumn = 6;
                div5_l.style.display = "block";
                img5_l.style.gridColumn = 1;
                div6_l.style.display = "block";
                img6_l.style.gridColumn = 6;
                div7_l.style.display = "block";
                img7_l.style.gridColumn = 1;
                div8_l.style.display = "block";
                img8_l.style.gridColumn = 6;
                div9_l.style.display = "block";
                img9_l.style.gridColumn = 1;
                this.textContent = "Collapse All"
            } else{
                div1_l.style.display = "none";
                img1_l.style.gridColumn = 3;
                div2_l.style.display = "none";
                img2_l.style.gridColumn = 4;
                div3_l.style.display = "none";
                img3_l.style.gridColumn = 3;
                div4_l.style.display = "none";
                img4_l.style.gridColumn = 4;
                div5_l.style.display = "none";
                img5_l.style.gridColumn = 3;
                div6_l.style.display = "none";
                img6_l.style.gridColumn = 4;
                div7_l.style.display = "none";
                img7_l.style.gridColumn = 3;
                div8_l.style.display = "none";
                img8_l.style.gridColumn = 4;
                div9_l.style.display = "none";
                img9_l.style.gridColumn = 3;
                this.textContent = "Expand All"
            }
        });
        }

        eventHandlersSet_l = true;
    }


function toggleVisibility(div, img) {
  if (div.style.display === "none") {
    div.style.display = "block";
    img.style.gridColumn = 1;
  } else {
    div.style.display = "none";
    img.style.gridColumn = 2;
  }
}


function checkScreenSizeAndReload(){
    const currentWidth = window.innerWidth;
    if (previousWidth >= 768 && currentWidth < 768){
        console.log(window.innerWidth)
        window.location.reload();
    }
    else if (previousWidth < 768 && currentWidth >= 768){
        window.location.reload();
    }
    previousWidth = currentWidth;
}

function checkScreenSize() {
    var win_size = window.innerWidth; 
    if (win_size < 768) {
        smallScreen();
    } else {
        largeScreen();
    }
  }

// Initial call on page load
checkScreenSize();

// Event listener for window resize
window.addEventListener("resize", function(){
    checkScreenSizeAndReload();
    checkScreenSize();
})

