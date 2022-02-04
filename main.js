const LinksSocialMidia = {
  github: 'lucasvlf',
  youtube: 'channel/UCkwQB2T0gTR96_8uH6o250g',
  facebook: 'maykbrito',
  instagram: 'jakeliny.gracielly',
  twitter: 'jakelinytec'
}

function changeSocialMidiaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMidia[social]}`
  }
}

changeSocialMidiaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMidia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.texteContent = data.login
    })
}
getGitHubProfileInfos()
