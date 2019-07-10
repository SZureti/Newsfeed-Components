// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement;
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton;
    this.expandButton = this.domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    let expand = this.expandButton;
    this.expandButton.innerText = "Click To Expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));
  }
// console.log(article);

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open')
    if (this.expandButton.textContent === "Click To Expand"){
      this.expandButton.textContent = "Click To Close"
    } else {
      this.expandButton.textContent = "Click To Expand"
    }
    };
  }


/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

// let articles;
let articles = document.querySelectorAll('.article').forEach(function(item){
  return new Article(item);
})

//New Article Components -- STRETCH -- DIDN'T GET IT TO WORK//

// const accordion = document.querySelector('.accordion');

// accordion.classList.add('article');
// articleData.forEach(event => {
//   accordion.appendChild(createPanel(title, date, content) {
//     const article = document.createElement('div'),
//     const articleTitle = document.createElement('h2'),
//     const articleDate = document.createElement('p'),
//     const articleContent = document.createElement('div'),
//     const expandButton = document.createElement('span'),
//   }
//     panel.appendChild(articleTitle),
//     panel.appendChild(articleDate),
//     panel.appendChild(articleContent),
//     panel.appendChild(expandButton),
  
//     panel.classList.add('article'),
//     expandButton.classList.add('expandButton'),

//     expandButton.textContent = 'expand',
//     articleContent.textContent = content,
//     articleDate.textContent = date,
//     articleTitle.textContent = title,

//     expandButton.addEventListener('click', event => {
//       console.log('button clicked', event.target);
//       panel.classList.toggle('article-open');
//     }),
//     return article;
//   })