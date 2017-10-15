$(document).ready(function(){

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyClvEHy6PkuQbXgtltYAjRoxYPokDCqdxk",
        authDomain: "ship-24bb7.firebaseapp.com",
        databaseURL: "https://ship-24bb7.firebaseio.com",
        projectId: "ship-24bb7",
        storageBucket: "",
        messagingSenderId: "878599092289"
    };
    firebase.initializeApp(config);

    //Firebase for hosting only!

    // On click functions
    $('.circle-1').add('.year-1').on('click', function () {
        insertText(text1, '.year-1', title1, date1);
        moveToPoint(startPoint, points[0]);
    });
    $('.circle-2').add('.year-2').on('click', function () {
        insertText(text2, '.year-2', title2, date2);
        moveToPoint(startPoint, points[2]);
    });
    $('.circle-3').add('.year-3').on('click', function () {
        insertText(text3, '.year-3', title3, date3);
        moveToPoint(startPoint ,points[4]);
    });
    $('.circle-4').add('.year-4').on('click', function () {
        insertText(text4, '.year-4', title4, date4);
        moveToPoint(startPoint, points[6]);
    });
    $('.circle-5').add('.year-5').on('click', function () {
        insertText(text5, '.year-5', title5, date5);
        moveToPoint(startPoint, points[8]);
    });
    $('.circle-6').add('.year-6').on('click', function () {
        insertText(text6, '.year-6', title6, date6);
        moveToPoint(startPoint, points[10]);
    });
    $('.circle-7').add('.year-7').on('click', function () {
        insertText(text7, '.year-7', title7, date7);
        moveToPoint(startPoint, points[12]);
    });
    $('.circle-8').add('.year-8').on('click', function () {
        insertText(text8, '.year-8', title8, date8);
        moveToPoint(startPoint, points[14]);
    });

    // Points array
    var points = [
            {
                'id': 1,
                'x' : '185px',
                'y' : '420px',
                'deg': '-20',
                'main': true
            },
            {
                'id': 2,
                'x' : '285px',
                'y' : '425px',
                'deg': '-8',
                'main': false
            },
            {
                'id': 3,
                'x' : '395px',
                'y' : '410px',
                'deg': '-3',
                'main': true
            },
            {
                'id': 4,
                'x' : '450px',
                'y' : '415px',
                'deg': '-25',
                'main': false
            },
            {
                'id': 5,
                'x' : '535px',
                'y' : '465px',
                'deg': '-37',
                'main': true
            },
            {
                'id': 6,
                'x' : '605px',
                'y' : '515px',
                'deg': '-28',
                'main': false
            },
            {
                'id': 7,
                'x' : '675px',
                'y' : '543px',
                'deg': '-18',
                'main': true
            },
            {
                'id': 8,
                'x' : '750px',
                'y' : '540px',
                'deg': '-14',
                'main': false
            },
            {
                'id': 9,
                'x' : '810px',
                'y' : '525px',
                'deg': '-3',
                'main': true
            },
            {
                'id': 10,
                'x' : '860px',
                'y' : '515px',
                'deg': '5',
                'main': true
            },
            {
                'id': 11,
                'x' : '910px',
                'y' : '515px',
                'deg': '-15',
                'main': true
            },
            {
                'id': 12,
                'x' : '970px',
                'y' : '545px',
                'deg': '-32',
                'main': false
            },
            {
                'id': 13,
                'x' : '1005px',
                'y' : '585px',
                'deg': '-48',
                'main': true
            },
            {
                'id': 14,
                'x' : '1070px',
                'y' : '645px',
                'deg': '-28',
                'main': false
            },
            {
                'id': 15,
                'x' : '1135px',
                'y' : '665px',
                'deg': '-14',
                'main': true
            }
        ],

        // Set start point as firts one from points array
        startPoint = points[0],

        // Texts for points
        text1 = 'Теперь пользователям интернет- и мобильного банка доступен новый продукт' +
            ' – «Вклад-копилка». Это специальный вариант оформления депозита, созданный на' +
            ' базе вклада «Накопительный». Он открывается только с помощью дистанционных' +
            ' каналов для накопления средств на определенную цель.',
        text2 = ' ВЛБАНК (ОАО) перешёл на промышленную эксплуатацию'+
            'автоматизированной банковской системы ЦФТ-Банк, современного' +
            'масштабируемого решения, позволившего банку перестроить свой' +
            'технологический цикл и расширить потенциальные возможности' +
            'для развития.',
        text3 = 'В рамках развития программы по участию банков-партнеров в платежных ' +
            'системах Мир, Visa и MasterCard под спонсорством банка ВТБ завершено' +
            ' тестирование новой услуги. У владельцев платежных карт банков, которые ' +
            'являются участниками спонсорской программы, появилась возможность пополнять' +
            ' свои счета в банкоматах «Почта Банка». Проект реализован при поддержке ' +
            'процессинговой компании «МультиКарта».',
        text4 = '21-22 января в Москве, Санкт-Петербурге и Нижнем Новгороде состоялся' +
            ' образовательный форум «Навигатор поступления», на котором были представлены' +
            ' ведущие вузы России, а также компании, специализирующиеся на подготовке' +
            ' школьников к сдаче экзаменов ЕГЭ и ОГЭ.',
        text5 = 'В прошедшем году банк привлек 25,6 млрд рублей на вклады, а также 7 млрд рублей' +
            ' на сберегательные счета, выполнив план на 131% и 155% соответственно. Портфель' +
            ' привлеченных клиентских средств за год вырос более чем в 10 раз и достиг 32,6 млрд рублей.' +
            ' Общий объем привлечения средств населения банк выполнил на 36%.',
        text6 = 'Президент «Почта Банка» Дмитрий Руденко вместе с командой топ-менеджеров с дружеским' +
            ' визитом посетил Почтово-сберегательный банк Китая. Стороны обменялись' +
            ' опытом, обсудили перспективы дальнейшего развития бизнеса' +
            ' и договорились о расширении сотрудничества.',
        text7 = 'Главной темой XV Всероссийского конкурса «Лучший урок письма-2017» оргкомитетом определена' +
            ' совместная номинация Почты России и МГУ им. М.В. Ломоносова «Отечество славлю,' +
            ' которое есть, но трижды - которое будет». Также Почта России совместно с' +
            ' Министерством природных ресурсов и экологии Российской Федерации объявила новую' +
            ' тему, посвященную Году экологии.',
        text8 = '2 февраля в Москве руководители «Почта Банка» и Республики Дагестан подписали соглашение о ' +
            'сотрудничестве, которое предусматривает тесное взаимодействие сторон в целях повышения' +
            ' доступности, качества банковских услуг и увеличения доли безналичных' +
            ' платежей в экономике Республики.',
        // Titles for points
        title1 = 'Новые горизонты',
        title2 = 'Расширение возможностей',
        title3 = 'Филиалы в регионах страны',
        title4 = 'Наращивание клантской базы',
        title5 = 'Усиление позиций',
        title6 = 'Успешные ивестиции',
        title7 = 'Торжественное открытие',
        title8 = 'Довольные клиенты',
        date1 = '1 марта 2013 г.',
        date2 = '24 августа 2002 г.',
        date3 = '4 апреля 2006 г.',
        date4 = '8 мая 2012 г.',
        date5 = '28 июня 2010 г.',
        date6 = '7 июля 2006 г.',
        date7 = '19 сентября 1990 г.',
        date8 = '29 декабря 2013 г.';

    // Insert text function
    function insertText(text, selector, title, date){
        $('.year').css('background-color','transparent');
        $(selector).css('background-color','#f1844f');
        $('.about-text .title').text(title);
        $('.about-text .date').text(date);
        $('.about-text .main-text').text('');

        var c = text.length, i=0;
        setInterval(function(){
            if(i<c){
                $('.about-text .main-text').text($('.about-text .main-text').text()+text[i]);
                i++;
            }
        },6);
    }

    // Function which create ship route
    function shipRoute(from, to){
        var startId = parseInt(from.id),
            finishId = parseInt(to.id),
            newArray;

        if( startId - finishId < 0 ){
            newArray = points.slice(startId - 1, finishId);
            $('#ship').css('background-image','url("img/ship.png")');
        } else{
            newArray = points.slice(finishId - 1, startId).reverse();
            $('#ship').css('background-image','url("img/shipRevert.png")');
        }
        return newArray;
    }

    // Function which move ship to points, step by step
    function moveToPoint(from, to){ // The ship passes different segments at one time.
                                    // Depending on the number of iterations, the time does NOT change.
                                   // Both from 2002 to 2006, and from 2002 to 1990, the time will be the same.
        // Root is array of control points
        var routeArray = shipRoute(from, to),
        // Animation loop duration
        duration = 2700/ (routeArray.length -1);

        // Animation loop
        for(var i = 1; i < routeArray.length; i++){ // i = 1, because the first (array [0]) element of the array is the starting point.
            $("#ship").animate(                     // We do not need to animate the standing on the ground.
                {
                    'left': routeArray[i].x,
                    'bottom' : routeArray[i].y,
                    ' borderSpacing': routeArray[i].deg
                },
                {
                    step: function(now,fx) {
                        $(this).css('-webkit-transform','rotate('+now+'deg)');
                        $(this).css('-moz-transform','rotate('+now+'deg)');
                        $(this).css('transform','rotate('+now+'deg)');
                    },
                    easing: 'linear',
                    duration: duration
                },
                800
            );
        }
        startPoint = to;
    }
    /* function moveToPoint(from, to){ // The ship passes each of the segments for the same time.
                                     // Depending on the number of iterations, the time changes.
                                     // From 2002 to 2006 or from 2002 to 1990, the time will be different.
         var routeArray = shipRoute(from, to),
            duration = 1000;

    
    
         for(var i = 1; i < routeArray.length; i++){ //  i = 1, because the first (array [0]) element of the array is the starting point.
             $("#ship").animate(                     // We do not need to animate the standing on the ground.
                 {
                     'left': routeArray[i].x,
                     'bottom' : routeArray[i].y,
                     ' borderSpacing': routeArray[i].deg
                 },
                 {
                     step: function(now,fx) {
                         $(this).css('-webkit-transform','rotate('+now+'deg)');
                         $(this).css('-moz-transform','rotate('+now+'deg)');
                         $(this).css('transform','rotate('+now+'deg)');
                     },
                     easing: 'linear',
                     duration: duration
                 },
                 800
             );
         }
         startPoint = to;
     } */
});