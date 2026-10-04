const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData(){
	header.innerHTML = '<img src="https://images.unsplash.com/photo-1597673030062-0a0f1a801a31?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3OTExMDM0NTV8&ixlib=rb-4.1.0&q=85" alt="" >'

	title.innerHRTML = 'Lorem ipsum dolor sit amet'

	excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae deserunt!'

	profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'

	name.innerHTML = 'John Doe'
	date.innerHTML = 'Oct 08, 2020'

	animated_bgs.forEach(bg=> bg.classListe.remove('animated-bg'))
	animated_bg_texts.forEach(bg=> bg.classListe.remove('animated-bg-text'))
}
