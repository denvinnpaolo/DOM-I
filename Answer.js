DOM I (REDO)


const ctaIMG=document.querySelector("#cta-img"); //circular image on the top right

ctaIMG.src="img/header-img.png";

var ctaH1=document.querySelector('.cta .cta-text h1'); //DOM IS AWESOME text next to the circular image

ctaH1.textContent="DOM is Awesome";

const ctaBtn=document.querySelector('.cta .cta-text button');

ctaBtn.textContent="Get Started"

var topConH4=document.querySelectorAll('.top-content .text-content h4');

var topConP=document.querySelectorAll('.top-content .text-content p');

var topConText=[{h4:"Features", p:"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."}, {h4:"About", p:"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."}];

topConText.forEach((text,i)=>{
	topConH4[i].textContent=topConText[i].h4;
	topConP[i].textContent=topConText[i].p;
});

const midImg=document.querySelector('#middle-img');

midImg.src="img/mid-page-accent.jpg";

var botConH4=document.querySelectorAll('.bottom-content .text-content h4');

var botConP=document.querySelectorAll('.bottom-content .text-content p');

const botConText=[{h4:"Services", p:"Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."}, {h4:"Product", p:"Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."}, {h4:"Vision", p:"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."}];

botConText.forEach((text,i)=>{
	botConH4[i].textContent=botConText[i].h4;
	botConP[i].textContent=botConText[i].p;
});

const contactH4=document.querySelector(".contact h4");

contactH4.textContent="Contact";

var contactP=document.querySelectorAll('.contact p')

const contP=["123 Way 456 Street, Somewhere, USA", "1 (888) 888-8888", "sales@greatidea.io"];

contP.forEach((text,i)=>{
	contactP[i]=contP[i];
});

contP.forEach((text,i)=>{
	contactP[i].textContent=contP[i];
});

var extraA=document.createElement('a')

extraA.href="#";

let nav=document.querySelector('nav');

nav.appendChild(extraA);

var otherExtraA=document.createElement('a')

otherExtraA.href="#";

nav.prepend(otherExtraA);

const navArr=["Home", "Services", "Product", "Vision", "Features", "About", "Contact", "Misc"];

let navA=document.querySelectorAll('header nav a');

navArr.forEach((navText, i)=>{
	navA[i].textContent=navArr[i];
    navA[i].style.color="green";
});

ctaH1.style.color="slategrey";

ctaBtn.style.backgroundColor="darkblue"

