function showForm(form) {
    $('form').hide()
    $(`#${form}`).show()
}

function onSubmit(form, callback) {
    $(`#${form}`).on('submit', e => {
        e.preventDefault()
        const data = new FormData(e.target)

        callback(data)
    })
}

onSubmit('check-gravity-signs', data => {
    if (data.get('has-gravity-signs') === 'yes') {
        showForm('has-gravity-signs')
    } else {
        showForm('has-no-gravity-signs')
    }
})

onSubmit('has-no-gravity-signs', data => {
    if (data.get('age') === '<70' && data.get('fdr') === 'none') {
        showForm('is-young-without-fdr')
    } else {
        showForm('is-old-or-with-fdr')
    }
})

onSubmit('is-old-or-with-fdr', data => {
    if (data.get('sample') === '-') {
        showForm('sample-negative')
    } else {
        showForm('sample-positive')
    }
})
