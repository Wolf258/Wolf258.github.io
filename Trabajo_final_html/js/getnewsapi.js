$(document).ready(function() {
    var apiKey = "7c3ea0efaef2470a90e520e5cbc44d4c";
    var url = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${apiKey}`;

    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('API Response:', data); //debug
            var articles = data.articles;
            var newsHtml = '';

            if (articles && articles.length > 0) {
                var randomIndex = Math.floor(Math.random() * articles.length);
                var article = articles[randomIndex];

                var imageUrl = article.urlToImage || '';

                var articleText = article.description || article.content || article.title;

                newsHtml = `<div class="article-container">
                                <div class="title-image-container">
                                    <h2>${article.title}</h2>
                                    ${imageUrl ? `<img src="${imageUrl}" alt="Imagen del artículo">` : ''}
                                </div>
                                <p class="source">By: ${article.source.name}</p>
                                <p>${articleText}</p>
                                <a href="${article.url}" target="_blank">Leer más</a>
                            </div>`;
            } else {
                console.log('No articles available'); //D E BU G
                newsHtml = '<p>No hay artículos disponibles.</p>';
            }

            $('#newsapi').html(newsHtml);
        },
        error: function(error) {
            console.log('Error al cargar las noticias:', error); //otro degbug
        }
    });
});
