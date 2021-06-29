function copyText(text) {
  // window.clipboardData is IE-specific
  const ieClipboard = window.clipboardData

  if (ieClipboard) {
    const success = ieClipboard.setData('Text', text)

    if (success) {
      return Promise.resolve()
    }

    return Promise.reject()
  }

  // navigator.clipboard can be undefined according to the security context is
  // (http and not localhost for example)
  const standardClipboard = navigator.clipboard

  if (standardClipboard) {
    return standardClipboard
      .writeText(text)
      .catch((err) => {
        console.log(err)
      })
  }

  return Promise.reject('')
}

jQuery(($) => {
  $('.email-icon').click((e) => {
    e.preventDefault()

    copyText('yuyangyyy@gmail.com')
    alert('Mon adresse email a été copiée dans votre presse-papier !')
  })
})
