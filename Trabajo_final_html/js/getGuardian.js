$(document).ready(function() {
    
    var apiKey2 = 'b0f04fea-1b3c-42fe-8796-cc3bef01ad2c';
    var url = `https://content.guardianapis.com/search?api-key=${apiKey2}&show-fields=all&order-by=newest&page-size=5`;

    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            var articles = data.response.results;
            var newsHtml = '';

            if (articles && articles.length > 0) {
                var randomIndex = Math.floor(Math.random() * articles.length);
                var article = articles[randomIndex];

                var imageUrl = '';
                
                if (article.fields && article.fields.thumbnail) {
                    imageUrl = article.fields.thumbnail;
                }

                var articleText = article.fields.bodyText || article.fields.trailText || article.fields.headline;

              
                var truncatedText = '';
                if (articleText) {
                    truncatedText = articleText.length > 200 ? articleText.substring(0, 200) + '...' : articleText;
                }

                newsHtml = `<div class="article-container">
                                <div class="title-image-container">
                                    <h2>${article.webTitle}</h2>
                                    <p class="source2">By: The Guardian</p>
                                    ${imageUrl ? `<img src="${imageUrl}" alt="Imagen del artículo">` : ''}
                                </div>
                                <p>${truncatedText}</p>
                                <a href="${article.webUrl}" target="_blank">Leer más</a>
                            </div>`;
            } else {
                newsHtml = '<p>No hay artículos disponibles.</p>';
            }

            // Actualiza el contenido del contenedor
            $('#Guardian').html(newsHtml);
        },
        error: function(error) {
            console.log('Error al cargar las noticias:', error);
        }
    });
});

