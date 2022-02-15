//$('.form').submit(function(event){
 // event.preventDefault();

 // $.fancybox.open({
 //   src : "#modal",
 //   type : "inline"

 // })
  
//});

//пытался сам код написать ибо jQery  у меня здесь не работает
const btn = document.querySelector('.zacaz__one');
const modal = document.querySelector('#modal');
const form = document.querySelector('.form__row');
const phone = document.querySelector('#phone');
phone.addEventListener("keydown",function(event){
  let isDigit=false;   // нажали ли мы цифру .По умолчанию всегда false
  if(event.key>=0||event.key<=9 ||event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Delete' || event.key == 'Backspace')
  {
      isDigit=true;
  }
  else{
      event.preventDefault();
  }

  let isDash=false;   // нажали ли мы тире .По умолчанию всегда false

  if(event.key=="-"){
    isDash=true; 
  }

  if(isDigit=false &&!isDash){    //&& исключая
    event.preventDefault();
}


});

btn.addEventListener('click', function(event) {
  event.preventDefault();

  if (validateForm(form__row)) {
      const data = {
          name: form__row.elements.name.value,
          phone: form__row.elements.phone.value,
          ulica: form__row.elements.ulica.value,
          house: form__row.elements.house.value,
          korpus: form__row.elements.korpus.value,
          kvartira: form__row.elements.kvartira.value,
          itazh: form__row.elements.itazh.value
      }

      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
      
      const path = "https://webdev-api.loftschool.com/sendmail"
      const isHtml=function(path){
      const start="https"

      const pathone=path.slice(5);

      if(pathone==start){
        return true
      }else{
        return false
      }

  }

      xhr.send(JSON.stringify(data));
      xhr.addEventListener('load', () => {
          if (xhr.response.status) {
            modal.classList.toggle("activ");
          }
      });
  }

  nameInput.value='';
});



