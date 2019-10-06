;(function(){

    var FPS=100;

    function Carousel(parentELement, isLeft){
        this.parentELement = parentELement;
        this.wrapper = null;
        this.left = null;
        this.right = null;
        this.images = [];
        this.selectorWrapper = null;
        this.selectors = [];
        this.imageWidth = null;
        this.imageHeight = null;
        this.imagecount = null;
        this.wrapperPosition = null;
        this.isLeft = isLeft;
        this.autoInterval=null;
        
        

        this.init = function(){
            
            this.wrapper = this.parentELement.getElementsByClassName('carousel-wrapper')[0];
            this.left = document.createElement('button');
            this.left.innerHTML = '<';
            this.left.classList.add("left");
            // this.left.opacity = 1;

            this.right = document.createElement('button');
            this.right.innerHTML = '>';
            this.right.classList.add("right");

            this.selectorWrapper = document.createElement('div');
            this.selectorWrapper.classList.add("selector-wrapper");

            this.images = this.wrapper.children;
            this.imagecount = this.images.length;
            this.imageWidth = this.images[0].width;
            this.imageHeight = this.images[0].height;

            this.createSelectors();  
            this.setSelWrapperProperty();

            this.setParentProperty();
            this.setWrapperProperty();
            this.checkActiveSelect();
            this.wrapperPosition=this.getWrapperPosition();
            this.appendNewImage();
            this.setImagePositions();
            this.setLeftButtonProperty();
            this.setRightButtonProperty();

            // this.selectImage();
            // this.slideLeft();
            if(this.isLeft){
                this.autoLeft();
            }

            else{
                // this.autoRight();
            }
            

            this.parentELement.appendChild(this.left);
            this.parentELement.appendChild(this.right);
            this.parentELement.appendChild(this.selectorWrapper);

            
        }.bind(this);

        this.setParentProperty= function(){
            Object.assign(this.parentELement.style,{
                position:'relative',
                overflow:'hidden'
            });
        }.bind(this);

        this.setWrapperProperty= function(){
            Object.assign(this.wrapper.style,{
                position : 'absolute',
                left: '0px',
                top: '0px'
            });
        }.bind(this);

        this.getWrapperPosition = function(){
            var str = this.wrapper.style.left;
            return (parseInt((str.substring(0,str.length-2))));
        }.bind(this);
        
        this.appendNewImage = function(){
            imageadded=document.createElement('img');
            source=this.images[0].src;
            imageadded.src=`${source}`;
            this.wrapper.appendChild(imageadded);

        }.bind(this);

        this.setImagePositions = function(){
            for(i=0;i<(this.imagecount + 1);i++){
                Object.assign(this.images[i].style,{
                    position : 'absolute',
                    left : `${i*this.imageWidth}px`,
                });
            }
        }.bind(this);

        this.createSelectors = function (){
            var i;
            for(i = 0; i < (this.imagecount); i++){
                // images[i].classList.add('image'+(i+1));
                this.selectors[i] = document.createElement('button');
                this.selectors[i].innerHTML= 'O'+'';
                var str= `${i+1}`;
                this.selectors[i].setAttribute("id",i);
                Object.assign(this.selectors[i].style,{
                    marginLeft:'10px',
                    marginRight: '10px',
                    backgroundColor: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    color: 'white'
                });
                this.selectorWrapper.appendChild(this.selectors[i]);

            }
        }.bind(this);

        this.selectImage = function(){

        }


        this.setSelWrapperProperty = function(){
            Object.assign(this.selectorWrapper.style,{
                position : 'absolute',
                left:`${0.38 * this.imageWidth}px`,
                top : '250px',
            });
            
        }


        this.checkActiveSelect = function(){
            activeIndex = Math.abs(Math.round(this.wrapperPosition/this.imageWidth));
            // console.log(activeIndex);
            for(i = 0; i < (this.imagecount); i++){
                if(i==activeIndex){
                    Object.assign(this.selectors[i].style,{
                        color: '#ce6f78',
                        backgroundColor : '#ce6f78'
                    });
                }
                else{
                    Object.assign(this.selectors[i].style,{
                        color: 'white',
                        backgroundColor : 'white'
                    });
                }
            }   

        }.bind(this);
        

        this.slideRight = function(){
            this.right.onclick =  function(){
                clearInterval(this.autoInterval);
                var counter=0;
                var that=this;
                var interval = setInterval(function() {
                    that.left.style.display = 'none';
                    that.right.style.display = 'none';
                    var toCheckValue = that.imageWidth/(1000/FPS); 
                    var targetValue = -(that.imagecount * that.imageWidth) + (that.imageWidth/(10));
                    if(parseInt(that.wrapperPosition) == 0){
                        that.wrapper.style.left = -4000 + 'px';
                        that.wrapperPosition = that.getWrapperPosition();
                    }
                    that.wrapperPosition += (that.imageWidth/(1000/FPS));
                    that.checkActiveSelect();
                    that.wrapper.style.left=`${that.wrapperPosition}px`;
                    counter++;
                    if(counter==10){
                        that.left.style.display = 'block';
                        that.right.style.display = 'block';
                        clearInterval(interval);
                        that.autoLeft();
                    }
                },100);
            }.bind(this);
            
        }.bind(this);


        this.autoslideRight = function(){
           
            var counter=0;
            var that=this;
            var interval = setInterval(function() {
                that.left.style.display = 'none';
                var toCheckValue = that.imageWidth/(1000/FPS); 
                var targetValue = -(that.imagecount * that.imageWidth) + (that.imageWidth/(1000/FPS));
                if(parseInt(that.wrapperPosition) == 0){
                    that.wrapper.style.left = -4000 + 'px';
                    that.wrapperPosition = that.getWrapperPosition();
                }
                that.wrapperPosition += (that.imageWidth/(1000/FPS));
                that.checkActiveSelect();
                that.wrapper.style.left=`${that.wrapperPosition}px`;
                counter++;
                if(counter==10){
                    clearInterval(interval);
                }
            },FPS);
            
        }.bind(this);





        this.autoRight = function(){
            var that=this;
            var interval1 = setInterval(function(){
                
                 that.autoslideRight();   
                //  console.log('value');
            },4000);
        }.bind(this);

        
        

        this.slideLeft = function(){
            this.left.onclick= function(){
                    clearInterval(this.autoInterval);
                    var counter=0;
                    var that=this;
                    var interval = setInterval(function() {
                        that.left.style.display = 'none';
                        that.right.style.display = 'none';
                        var toCheckValue= -(that.imagecount * that.imageWidth) + (that.imageWidth/(1000/FPS)); 
                        if(parseInt(that.wrapperPosition) == -4000){
                            that.wrapper.style.left=`${0}px`;
                            that.wrapperPosition=that.getWrapperPosition();
                        } 
                        
                        
                        that.wrapperPosition -= (that.imageWidth/(1000/FPS));
                        that.checkActiveSelect();
                        // console.log(that.wrapperPosition);
                        
                        that.wrapper.style.left=`${that.wrapperPosition}px`;
                        counter++;
                        if(counter==10){
                            that.left.style.display = 'block';
                            that.right.style.display = 'block';
                            clearInterval(interval);
                            that.autoLeft()
                        }
                    },FPS);

                }.bind(this);
                
        }.bind(this);

        this.autoslideLeft = function(){
                    var counter=0;
                    var that=this;
                    // that.left.display = 'none';
                    var interval = setInterval(function() {
                        that.left.style.display = 'none';
                        that.right.style.display = 'none';
                        // console.log(1);
                        var toCheckValue= -(that.imagecount * that.imageWidth) + (that.imageWidth/(1000/FPS)); 
                        if(parseInt(that.wrapperPosition) == -4000){
                            that.wrapper.style.left=`${0}px`;
                            that.wrapperPosition=that.getWrapperPosition();
                        } 
                        
                        
                        that.wrapperPosition -= (that.imageWidth/(1000/FPS));
                        that.checkActiveSelect();
                        // console.log(that.wrapperPosition);
                        
                        that.wrapper.style.left=`${that.wrapperPosition}px`;
                        counter++;
                        if(counter==10){
                            that.left.style.display = 'block';
                            that.right.style.display = 'block';
                            clearInterval(interval);
                        }
                    },FPS);

                    
                
        }.bind(this);

        this.setleftshow = function(){
            var that=this;
            var interval1 = setInterval(function(){
                
                // that.autoslideLeft(); 
                that.left.style.display = 'block';
                that.right.style.display = 'block';
            //    console.log(2);  
            //     console.log('value');
           },3000);
        }.bind(this)

        this.autoLeft = function(){
            var that=this;
            this.autoInterval = setInterval(function(){
                
                 that.autoslideLeft(); 
                //  that.left.style.opacity = 1;
                 that.setleftshow();
            },4000);
        }.bind(this);


        this.setLeftButtonProperty = function(){
            // this.left.onclick = this.slideLeft();
            // this.left.setAttribute('onclick',`${this.slideLeft()}`);
            Object.assign(this.left.style,{
                fontSize: '50px',
                fontWeight : 'bold',
                border: 'none',
                color: 'white',
                top: `${(this.imageHeight)/2}px`,
                position: 'absolute',
                cursor: 'pointer',
                backgroundColor: 'Transparent'
            });
            this.slideLeft();
        }.bind(this);
        

        this.setRightButtonProperty = function(){ 
            // this.right.setAttribute('onclick',`${this.slideRight()}`);
            Object.assign(this.right.style,{
                fontSize: '50px',
                fontWeight : 'bold',
                border: 'none',
                color: 'white',
                top: `${(this.imageHeight)/2}px`,
                right: '0px',
                position: 'absolute',
                cursor: 'pointer',
                backgroundColor: 'Transparent'
            });
            this.slideRight();
        }.bind(this);

    }



    var container1 = document.getElementsByClassName('carousel')[0];
    carousel1 = new Carousel(container1, true);
    carousel1.init();

})()

