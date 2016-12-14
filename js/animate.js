(function() {

                var aboutEl = $('h1, h2, h3, p, img, figcaption'),
                    aboutElOffset = 1500,
                    documentEl = $(document);

                documentEl.on('scroll', function() {
                    if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden') ) aboutEl.removeClass('hidden'); 
                });



            })();