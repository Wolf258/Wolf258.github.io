$(document).ready(function() {
  
    var apiKey = 'rcLzDmw0bKXJWGhwtfRNqEu1MonFg0N8';
    var url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${apiKey}`;

    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            var articles = data.results;
            var newsHtml = '';

            
            if (articles && articles.length > 0) {
                
                var randomIndex = Math.floor(Math.random() * articles.length);
                var article = articles[randomIndex];

                
                var imageUrl = '';
                
               
                if (article.media && article.media.length > 0) {
                    var media = article.media[0]; 
                    if (media['media-metadata'] && media['media-metadata'].length > 0) {
                        imageUrl = media['media-metadata'][0].url;  
                    }
                }

                
                var articleText = article.lead_paragraph || article.snippet || article.abstract;

             
                newsHtml = `<div class="article-container">
                                <div class="title-image-container">
                                    <h2>${article.title}</h2>
                                    ${imageUrl ? `<img src="${imageUrl}" alt="Imagen del artículo">` : ''}
                                </div>
                                <p class="source">By: The New York Times</p>
                                <p>${articleText}</p>
                                <a href="${article.url}" target="_blank">Leer más</a>
                            </div>`;
            } else {
                // Mensaje si no hay artículos disponibles
                newsHtml = '<p>No hay artículos disponibles.</p>';
            }

         
            $('#nyt-news-container').html(newsHtml);
        },
        error: function(error) {
            console.log('Error al cargar las noticias:', error);
        }
    });
});
