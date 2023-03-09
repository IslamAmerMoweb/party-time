'use strict'

let sidenav = $('.sidenav').innerWidth()
let title = $('.text').innerWidth()

$('.sidenav > button').click(function () {
    $('.sidenav').animate({ left: -sidenav }, 500)
    $('.menu + button').animate({ left: '0' }, 500)
    $('.text').animate({ right: -title + '500px' }, 500)
})



$('.menu + button').click(function () {
    if ($('.sidenav').css('left') == '0px') {
        $('.sidenav').animate({ left: -sidenav }, 500)
        $('.menu + button').animate({ left: '0' }, 500)
        $('.text').animate({ right: -title + '500px' }, 500).css('font-size', '60px')
        $('.text p').animate({ right: -title + '500px' }, 500).css('font-size', '16px')
    } else {

        $('.sidenav').animate({ left: '0' }, 500)
        $('.menu + button').animate({ left: +sidenav }, 500)
        $('.text').animate({ right: +title + '500px' }, 500)
        $('.text p').animate({ right: -title + '500px' }, 500).css('font-size', '35px')
    }
})


$('#duration h3').click(function () {
    $(this).siblings().slideToggle(500)
    $('#duration .detail').not($(this).next()).slideUp(500)
})

let countDown = new Date('Mars 25, 2023 20:20:20')

let partyTime = setInterval(function () {
    let now = new Date().getTime()

    let spendTime = countDown - now

    let day = Math.floor(spendTime / (1000 * 60 * 60 * 24))
    let hours = Math.floor(spendTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let minute = Math.floor(spendTime % (1000 * 60 * 60) / (1000 * 60))
    let second = Math.floor(spendTime % (1000 * 60) / (1000))

    $('#details .day').html(day + ' days')
    $('#details .hour').html(hours + ' hours')
    $('#details .minute').html(minute + ' minutes')
    $('#details .second').html(second + ' seconds')
    $('#details')

    if (spendTime < 0) {
        clearInterval(partyTime)
        $('#details .day').html('')
        $('#details .hour').html('')
        $('#details .minute').html('')
        $('#details .second').html('')
        $('#details .up').html('Time Up!!')
    }
}, 1000)



let x = 100


let word = /^[a-zA-z]{4,100}$/
let text = $('textarea').val()

let cahrc = $('textarea + p').html(150)

function countChar() {
    let len = $('textarea').val().length
    if (len <= 150) {
        $('textarea + p').html(150 - len)
        if (len >= 150) {
            console.log('wd');
            return true
        }
    }
};

function writeMsg() {
    if (countChar() == true) {
        $('textarea').keydown(function (e) {
            e.preventDefault()
        })
    } else {
        return true
    }
}

function reWriteMsg() {
    $('textarea').keyup(function (e) {
        if (e.key == "Backspace") {
            $('textarea').unbind('keydown').keydown()
            countChar()
        } else {
            return true
        }
    })
}

$('textarea').keypress(function () {
    reWriteMsg()
    writeMsg()
})

function reg() {
    return word.test($('input').val())
}

$('form button').click(function (e) {
    reg() ? $('form button').unbind('click').click() : e.preventDefault(), $('input').css('border', '2px solid red')
})