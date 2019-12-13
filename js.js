	   var pic =document.getElementById('picture');
	   var nav =document.getElementById('nav');
	   var words = document.getElementsByClassName('word'); 
	   var slidertip = document.getElementById('tip2');
	   var Carousel = document.querySelector(".Carousel");   
	   var next = document.querySelector(".arrow_right");
       var prev = document.querySelector(".arrow_left");
       var move=0;
       var flag = 0;
       function speek(){
	   flag--;
	   tip2.style.left=flag + "px";
	   if(flag == -800){
		flag = 700;
	      }
       }
       setInterval(speek,10);
	   var  change=function(x){
		for(var i = 0;i<5;i++){
			nav.children[i].id = '';
		    }
		    nav.children[x].id = 'active';	
	    }
       for (var i = nav.children.length - 1; i >= 0; i--) {   
       	    var value=nav.children[i].getAttribute("value");
       	    nav.children[i].onclick=function(){
       	    animate(pic,{left:-(this.getAttribute("value")-1)*1200});
       	    change(this.getAttribute("value")-1);
       	    move=this.getAttribute("value")-1;
       	}
       }
       next.onclick=function(){ 	
       	 if(move==pic.children.length-1){
            move=0;
            pic.style.left=0+"px";
             
        }
        if(move==pic.children.length-2){
        	change(0);
        }
        else{
           change(move+1);
       }
       move++;
       animate(pic,{left:-move*1200});

       }
       prev.onclick=function(){
       	 if(move==0){           
       	 	move=pic.children.length-1;
       	    pic.style.left=-move*1200+"px";     
       	 }       
       	     change(move-1);
       	     move--;     
       	     animate(pic,{left:-move*1200});
        }
        function autoPlay () {
          timer = setInterval(function () { 
              next.onclick(); 
          },3000);
        }
        autoPlay();
        Carousel.onmouseenter = function () {
        clearInterval(timer);
        }
        Carousel.onmouseleave = function () {
        autoPlay();
         }