const topics = document.querySelectorAll('section');
const topicsnavlist = document.getElementById('navbar__list');
const reservoir = document.createDocumentFragment();

/* passing through each section and creating a link to it in the navigation menu, the link has the section's name and when you click on it the page scrolls to its related section */
topics.forEach(item => {
  const topicli = document.createElement('li');
  const topiclink = document.createElement('a');
  const topicname = item.getAttribute('data-nav');
  let linktext = document.createTextNode(topicname);
  topiclink.appendChild(linktext);
  topiclink.classList.add("menu__link");
  topiclink.addEventListener('click', function() {
    item.scrollIntoView({behavior: "smooth"});
  });
  topicli.appendChild(topiclink);
  reservoir.appendChild(topicli);
}); /* closing topics.foreach */
topicsnavlist.appendChild(reservoir);

/* adding an event listener for scrolling when the window shows a certain section it highlights it and makes it the active section and also the corrisponding link in the menu bas is highlighted */
document.onscroll = function () {
topics.forEach(topic => {
const rect = topic.getBoundingClientRect();
if (rect.top < 251) {
  topics.forEach(unactivetopic => {
    unactivetopic.classList.remove('your-active-class');
  }); /* closing topics.foreach (unactivetopics) */
  topic.classList.add('your-active-class');
  const AllNavLinks = document.querySelectorAll('.navbar__menu a');
  AllNavLinks.forEach(NavLink => {
    if (NavLink.textContent == topic.getAttribute('data-nav')) {
      NavLink.classList.add('active__link');
    } /* closing if NavLink.textcontent */
    else {
      NavLink.classList.remove('active__link');
    } /* closing else */
  });  /* closing  AllNavLinks.foreach */
}  /* closing if rect */
}); /* closing topics.foreach */

}; /* closing onscroll */
