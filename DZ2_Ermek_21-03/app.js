// 1
var marvel = {
    name: 'Мстители финал',
    releaseDate:2604.2019,
    mainActor: 'Железный человек, Капитан Америка, Человек паук, Танос: ',
    episodes: {
        movie: 'Около 30-полно метражных фильмов ,бюджетом примерно 27млрд '
    }
}
console.log('Название фильма: ' + marvel.name + ' дата выхода: ' + marvel.releaseDate + ' Главных ролях ' + marvel.mainActor + ' Фильм: ' + marvel.episodes.movie )

// 2
var week = prompt('введите день недели: ')
switch (week) {
    case 'Monday':
    case 'monday':
        console.log('Панидельник')
        break
    case 'Tuesday':
    case 'tuesday':
        console.log('Вторник')
        break
    case 'Wednesday':
    case 'wednesday':
        console.log('Среда')
        break
    case 'Thursday':
    case 'thursday':
        console.log('Четверг')
        break
    case 'Friday':
    case 'friday':
        console.log('Пятница')
        break
    case 'Saturday':
    case 'saturday':
        console.log('Суботта')
        break
    case 'Sunday':
    case 'sunday':
        console.log('Воскресенье')
        break
    default:
        console.log('Ошибка')
}