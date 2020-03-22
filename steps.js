$('form[data-step=check-gravity-signs]').on('submit', e => {
    e.preventDefault()
    const data = new FormData(e.target)

    $('form[data-step]').hide()
    if (data.get('has-gravity-signs') === 'yes') {
        $('form[data-step=has-gravity-signs]').show()
    } else {
        $('form[data-step=has-no-gravity-signs]').show()
    }
})

$('form[data-step=has-no-gravity-signs]').on('submit', e => {
    e.preventDefault()
    const data = new FormData(e.target)

    $('form[data-step]').hide()
    if (data.get('age') === '<70' && data.get('fdr') === 'none') {
        $('form[data-step=is-young-without-fdr]').show()
    } else {
        $('form[data-step=is-old-or-with-fdr]').show()
    }
})
