function modifyLink(event) {

    const target = event.currentTarget;
    const parentTarget= target.parentNode.parentNode;
    
    const title=parentTarget.querySelector(".body-text").innerHTML;
    const subtitle=parentTarget.querySelector(".regular-text").innerHTML;
    const imageRoute=parentTarget.parentNode.querySelector("img").src;
    const image=imageRoute.slice(-5).charAt(0);
    const absoluteRoute=`http://127.0.0.1:5500/projects.html?title=${title}&subtitle=${subtitle}&image=${image}`;
    console.log(absoluteRoute);
    window.open(absoluteRoute);
   
}
/* CREO QUE HABRA QUE CAMBAR POR WINDOW.ONCLICK*/
window.addEventListener('load', () => {
const learnMoreButton = document.getElementsByClassName('learn-more');
  for (let i = 0; i < learnMoreButton.length; i++) {
       learnMoreButton[i].addEventListener('click', modifyLink);
    };


});
