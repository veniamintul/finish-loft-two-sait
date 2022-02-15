const mesureWidth=function(item){
    const screenWidth =$(window).width();
    const container=item.closest(".products-menu");
    const titlesBlocks =container.find(".slider__text__vloz");
    const titlesWidth = titlesBlocks.width()*titlesBlocks.length;

    //return 500;
    const isMobile =window.matchMedia("(max-width:768px)").matches;

    if(isMobile){
        return screenWidth-titlesWidth ;  
    } else{
        return 500;
    }

    
};


const closeEveryItemInContainer=function(container){         //функция на закрытие
    const items=container.find(".slider__list");
    const content=container.find(".slider__content");


    items.removeClass("active");
    content.width(0);
}




const openItem=function(item){
    const hiddenContent=item.find(".slider__content");
    const reqWidth= mesureWidth(item);   ///ffff


    item.addClass("active")  /////        до этого момента работал!!!!  mesureWidth не распознает почему-то


    hiddenContent.width(reqWidth);
};




$(".slider__text__vloz").on("click",function(event){
    event.preventDefault();

    const $this=$(event.currentTarget);
    const item =$this.closest(".slider__list");
    const itemOpened=item.hasClass("activ");
    const container=$this.closest(".slider__item")  //ul

    if(itemOpened){
        closeEveryItemInContainer()
    }
    else{
        closeEveryItemInContainer()
        openItem(item);
    }

});

$(".slider__button").on("click",function(event){
    closeEveryItemInContainer($('.slider__item'));
})