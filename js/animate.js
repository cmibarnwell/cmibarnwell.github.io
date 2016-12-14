//For the projects section
(function() {

                var aboutEl = $('h1, h2, h3, p, img, figcaption'),
                    aboutElOffset = 1450,
                    aboutElOffset1 = 1650,
                    aboutElOffset2 = 2300,
                    aboutElOffset3 = 2600,
                    aboutElOffset4 = 3250,
                    aboutElOffset5 = 3700,
                    aboutElOffset6 = 4150,
                    documentEl = $(document);

                documentEl.on('scroll', function() {
                    if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hiddenPro') ) aboutEl.removeClass('hiddenPro');
                    if ( documentEl.scrollTop() > aboutElOffset1 && aboutEl.hasClass('hidden') ) aboutEl.removeClass('hidden');
                    if ( documentEl.scrollTop() > aboutElOffset2 && aboutEl.hasClass('hidden1') ) aboutEl.removeClass('hidden1');
                    if ( documentEl.scrollTop() > aboutElOffset3 && aboutEl.hasClass('hidden2') ) aboutEl.removeClass('hidden2');
                    if ( documentEl.scrollTop() > aboutElOffset4 && aboutEl.hasClass('hidden3') ) aboutEl.removeClass('hidden3');
                    if ( documentEl.scrollTop() > aboutElOffset5 && aboutEl.hasClass('hidden4') ) aboutEl.removeClass('hidden4');
                    if ( documentEl.scrollTop() > aboutElOffset6 && aboutEl.hasClass('hidden5') ) aboutEl.removeClass('hidden5');
                });
            })();


//for the Skills section
(function() {

                var aboutEl = $('h1, h2, h3, p, ul, ol'),
                    aboutElOffset = 450,
                    documentEl = $(document);

                documentEl.on('scroll', function() {
                    if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hiddenSki') ) aboutEl.removeClass('hiddenSki');
                });
            })();

//for the Courses section
(function() {

                var aboutEl = $('h1, h2, h3, table'),
                    aboutElOffset = 5550,
                    documentEl = $(document);

                documentEl.on('scroll', function() {
                    if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hiddenCo') ) aboutEl.removeClass('hiddenCo');
                });
            })();

//for the Employment section
(function() {

                var aboutEl = $('h1, h2, h3, p, img, figcaption'),
                    aboutElOffset = 7000,
                    documentEl = $(document);

                documentEl.on('scroll', function() {
                    if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hiddenEmp') ) aboutEl.removeClass('hiddenEmp');
                });
            })();