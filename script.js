//header toggle

let Menubtn = document.getElementById('Menubtn')

Menubtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


//typing effect

let typed = new Typed('.auto-input',{
    strings: ['Student!','UI Designer!','Front end Developer!'],
    typeSpeed:160,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})
