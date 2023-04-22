const changeThemeBtn = document.querySelector("#change-theme");

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function loadTheme() {
    const darkMode = localStorage.getItem("dark");

    if(darkMode) {
        toggleDarkMode();
    }
}

loadTheme();

changeThemeBtn.addEventListener("change", function(){
    toggleDarkMode();

    // Salva ou remove dark mode
    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    }
});

//Português
$(function() {
    $(".br").click(function(){
        //cabeçalho
        $(".cabecalho__menu__links").children().eq(0).text("Home");
        $(".sobremim").children().eq(0).text("Sobre mim");
        $(".cabecalho__menu__links").children().eq(2).text("Currículo");
        $(".language__selected").text("pt-br");
        $(".language__selected").removeClass("change-en");
        $(".language__selected").removeClass("change-es");
        $(".language__selected").addClass("change-br");
        //apresentação home page
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(1) h2").text("Olá! Meu nome é Juliano Pádua.");
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(2) h1").text("Sou estudante de Engenharia da Computação");
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(3) p").text("Busco ampliar meu conhecimento em diferentes áreas da tecnologia. Apaixonado por Python e Ciência de Dados, hoje também procuro conhecer mais sobre front-end. Em constante evolução!");
        $(".apresentacao__conteudo ul:nth-child(2) li:nth-child(1) h3").text("Onde me encontrar");

        //apresentacao sobre page
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(1) h1").text("Sobre mim");
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(2) p").text("Jovem estudante de Engenharia de Computação na UFSCar e entusiasta da ciência de dados. Meus primeiros algoritmos foram rodados em Linguagem C e em Python, com as quais já possuo familiaridade. Atualmente aprendendo Photoshop, Linux, Figma, outras linguagens de programação, como R e Java Script e uma nova área de conhecimento: o Front-End, em que estou iniciando no estudo e desenvolvimento de projetos com HTML e CSS. Meu objetivo a longo prazo é tornar-me Engenheiro de Computação e Cientista de Dados.");

        $(".apresentacao__informacoes ul:nth-child(1) li:nth-child(1) h2").text("Aniversário:");
        $(".apresentacao__informacoes ul:nth-child(1) li:nth-child(2) p").text("19 de jan. de 2002");
        $(".apresentacao__informacoes ul:nth-child(2) li:nth-child(1) h2").text("Whatsapp:");
        $(".apresentacao__informacoes ul:nth-child(2) li:nth-child(2) p").text("+55 (34) 99681-9610");
        $(".apresentacao__informacoes__ageadress ul:nth-child(1) li:nth-child(1) h2").text("Idade:");
        $(".apresentacao__informacoes__ageadress ul:nth-child(1) li:nth-child(2) p").text("21 anos");
        $(".apresentacao__informacoes__ageadress ul:nth-child(2) li:nth-child(1) h2").text("Endereço:");
        $(".apresentacao__informacoes__ageadress ul:nth-child(2) li:nth-child(2) p").text("Portal do Mediterrâneo - São Carlos, SP");

        //apresentacao cv page
        $(".apresentacao__cv__conteudo ul:nth-child(1) li:nth-child(1) h1").text("Currículo");
         $(".apresentacao__cv__conteudo ul:nth-child(1) li:nth-child(2) p").text("Com ensino médio concluído na escola Olimpo, em 2019, atualmente estudo Engenharia da Computação na UFSCar, onde exercito diariamente meu conhecimento a respeito de linguagens de programação, hardware, software e muito mais.");
         $(".apresentacao__cv__conteudo ul:nth-child(2) li:nth-child(1) h1").text("Experiências Acadêmicas");
         $(".apresentacao__cv__conteudo ul:nth-child(2) li:nth-child(2) p").text("Monitoria de Introdução à Computação; ministrada com a linguagem Python.");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(1) h1").text("Informática e conhecimento");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(2)").text("Linguagens: Python, C, C++, JavaScript");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(3)").text("Domínio Pacote Office");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(4)").text("Inglês Intermediário");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(5)").text("Cursos na plataforma Alura:");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(6)").text(" - Formação Python");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(7)").text(" - Formação Python para Data Science");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(8)").text(" - Linux I e II");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(9)").text(" - Formação HTML e CSS para projetos web");
    })
});

//English
$(function() {
    $(".en").click(function(){
        //cabeçalho
        $(".cabecalho__menu__links").children().eq(0).text("Home");
        $(".sobremim").children().eq(0).text("About");
        $(".cabecalho__menu__links").children().eq(2).text("Curriculum");
        $(".language__selected").text("en");
        $(".language__selected").removeClass("change-br");
        $(".language__selected").removeClass("change-es");
        $(".language__selected").addClass("change-en");

        //apresentação
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(1) h2").text("Hi! I'm Juliano Pádua");
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(2) h1").text("I'm a Computer Engineering student");
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(3) p").text("I seek to expand my knowledge in different areas of technology. Passionate about Python and Data Science, today I also try to learn more about front-end. Constantly evolving!");
        $(".apresentacao__conteudo ul:nth-child(2) li:nth-child(1) h3").text("Find me");

         //apresentacao sobre page
         $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(1) h1").text("About me");
         $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(2) p").text("Young Computer Engineering student at UFSCar and data science enthusiast. My first algorithms were run in C language and in Python, with which I am already familiar. Currently learning Photoshop, Linux, Figma, other programming languages ​​such as R and Java Script and a new area of ​​knowledge: the Front-End, in which I am starting to study and develop projects with HTML and CSS. My long-term goal is to become a Computer Engineer and Data Scientist.");

         $(".apresentacao__informacoes ul:nth-child(1) li:nth-child(1) h2").text("Birthday:");
         $(".apresentacao__informacoes ul:nth-child(1) li:nth-child(2) p").text("19th of January of 2002");
         $(".apresentacao__informacoes ul:nth-child(2) li:nth-child(1) h2").text("Whatsapp:");
         $(".apresentacao__informacoes ul:nth-child(2) li:nth-child(2) p").text("+55 (34) 99681-9610");
         $(".apresentacao__informacoes__ageadress ul:nth-child(1) li:nth-child(1) h2").text("Age:");
         $(".apresentacao__informacoes__ageadress ul:nth-child(1) li:nth-child(2) p").text("21 years");
         $(".apresentacao__informacoes__ageadress ul:nth-child(2) li:nth-child(1) h2").text("Address:");
         $(".apresentacao__informacoes__ageadress ul:nth-child(2) li:nth-child(2) p").text("Portal do Mediterrâneo - São Carlos, SP");

         //apresentacao cv page
         $(".apresentacao__cv__conteudo ul:nth-child(1) li:nth-child(1) h1").text("Curriculum");
         $(".apresentacao__cv__conteudo ul:nth-child(1) li:nth-child(2) p").text("With high school completed at Olimpo school, in 2019, I am currently studying Computer Engineering at UFSCar, where I daily exercise my knowledge about programming languages, hardware, software and much more.");
         $(".apresentacao__cv__conteudo ul:nth-child(2) li:nth-child(1) h1").text("Academic Experiences");
         $(".apresentacao__cv__conteudo ul:nth-child(2) li:nth-child(2) p").text("Tutoring of Introduction to Computing; taught with the Python language.");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(1) h1").text("Informatics and knowledge");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(2)").text("Languages: Python, C, C++, JavaScript");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(3)").text("Microsoft Office");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(4)").text("Intermediate English");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(5)").text("Courses on the Alura platform:");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(6)").text(" - Python Training");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(7)").text(" - Python training for data science");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(8)").text(" - Linux I and II");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(9)").text(" - HTML and CSS training for web projects");
    })
});

//Español
$(function() {
    $(".es").click(function(){
        //cabeçalho
        $(".cabecalho__menu__links").children().eq(0).text("Home");
        $(".sobremim").children().eq(0).text("Acerca");
        $(".cabecalho__menu__links").children().eq(2).text("Currículo");
        $(".language__selected").text("es");
        $(".language__selected").removeClass("change-en");
        $(".language__selected").removeClass("change-br");
        $(".language__selected").addClass("change-es");
        //apresentação
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(1) h2").text("¡Hola! Mi nombre es Juliano Padua.");
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(2) h1").text("Soy estudiante de ingenieria informatica");
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(3) p").text("Busco ampliar mis conocimientos en diferentes áreas de la tecnología. Apasionado por Python y Data Science, hoy también trato de aprender más sobre front-end. ¡Constantemente evolucionando!");
        $(".apresentacao__conteudo ul:nth-child(2) li:nth-child(1) h3").text("Encuentrame");

        //apresentacao sobre page
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(1) h1").text("Sobre mi");
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(2) p").text("Joven estudiante de Ingeniería Informática de la UFSCar y entusiasta de la ciencia de datos. Mis primeros algoritmos se ejecutaron en lenguaje C y en Python, con los que ya estoy familiarizado. Actualmente aprendiendo Photoshop, Linux, Figma, otros lenguajes de programación como R y Java Script y una nueva área de conocimiento: el Front-End, en la cual estoy comenzando a estudiar y desarrollar proyectos con HTML y CSS. Mi objetivo a largo plazo es convertirme en ingeniero informático y científico de datos.");

        $(".apresentacao__informacoes ul:nth-child(1) li:nth-child(1) h2").text("Cumpleaños:");
        $(".apresentacao__informacoes ul:nth-child(1) li:nth-child(2) p").text("19 de enero de 2002");
        $(".apresentacao__informacoes ul:nth-child(2) li:nth-child(1) h2").text("Whatsapp:");
        $(".apresentacao__informacoes ul:nth-child(2) li:nth-child(2) p").text("+55 (34) 99681-9610");
        $(".apresentacao__informacoes__ageadress ul:nth-child(1) li:nth-child(1) h2").text("Edad:");
        $(".apresentacao__informacoes__ageadress ul:nth-child(1) li:nth-child(2) p").text("21 años");
        $(".apresentacao__informacoes__ageadress ul:nth-child(2) li:nth-child(1) h2").text("Dirección:");
        $(".apresentacao__informacoes__ageadress ul:nth-child(2) li:nth-child(2) p").text("Portal do Mediterrâneo - São Carlos, SP");

        //apresentacao cv page
        $(".apresentacao__cv__conteudo ul:nth-child(1) li:nth-child(1) h1").text("Currículo");
        $(".apresentacao__cv__conteudo ul:nth-child(1) li:nth-child(2) p").text("Con el bachillerato terminado en el colegio Olimpo en 2019, actualmente estudio Ingeniería Informática en la UFSCar, donde ejerzo diariamente mis conocimientos sobre lenguajes de programación, hardware, software y mucho más.");
        $(".apresentacao__cv__conteudo ul:nth-child(2) li:nth-child(1) h1").text("Experiencias Académicas");
        $(".apresentacao__cv__conteudo ul:nth-child(2) li:nth-child(2) p").text("Tutoría de Introducción a la Computación; enseñado con el lenguaje Python.");
        $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(1) h1").text("Informática y conocimiento");
        $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(2)").text("Lenguajes: Python, C, C++, JavaScript");
        $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(3)").text("Microsoft Office");
        $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(4)").text("Inglés intermediario");
        $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(5)").text("Cursos en la plataforma Alura:");
        $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(6)").text(" - Entrenamiento de Python");
        $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(7)").text(" - Capacitación de Python para ciencia de datos");
        $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(8)").text(" - Linux I y II");
        $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(9)").text(" - Formación en HTML y CSS para proyectos web");
    })
});
