var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search'

function getDataFromApi(searchTerm, callback) {
    var query = {
        part: 'snippet',
        key: 'AIzaSyA99_eoFVJGLnFRgcuSPmgs-a1qh-ZALDQ',
        q: searchTerm
    }
    $.getJSON(YOUTUBE_BASE_URL, query, callback)
}

function displaySearchData(data) {
    console.log(data);
    var resultElement = ''
    if (data.items) {
        data.items.forEach(function(item) {
            var thumbnail = item.snippet.thumbnails.medium.url
            resultElement += `<img src='${thumbnail}'></img>`;
        })
    } else {
        resultElement += '<p>No results</p>'
    }
    $('.js-results').html(resultElement)
}

function watchSubmit() {
    $('.js-searchForm').submit(function(event) {
        event.preventDefault()
        var query = $(this).find('.js-query').val()
        getDataFromApi(query, displaySearchData)
    })
}

$(document).ready(function() {
    watchSubmit()
})
