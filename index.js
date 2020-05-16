console.log('My JS File');

let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
let country = 'in';
let category = 'sports';
let apiKey = '90bc4e90df5744bcb4424945a2d91597';
xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let articles = JSON.parse(this.responseText).articles;
        let newsHTML = "";
        console.log(articles);
        articles.forEach(function (element, index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="true" aria-controls="collapse${index}">
                                    <b>Breaking News ${index+1}</b>: ${element['title']}
                                </button>
                                </h2>
                            </div>

                         <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                data-parent="#newsAccordion">
                            <div class="card-body">
                               ${element['content']}. <a href="${element['url']}" target="_blank"> Read more here</a>
                            </div>
                         </div>
                        </div>`
            newsHTML += news;
        });
        newsAccordion.innerHTML = newsHTML;
    }
    else {
        console.log('Some Error Occured!');
    }
}
xhr.send();
