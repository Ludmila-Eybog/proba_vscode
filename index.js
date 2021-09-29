// document.addEventListener >  document.ae :
document.addEventListener('click', (event) => { // глобальный объект
  event.preventDefault(); // метод
})

// window.scroll // глобальный объект

Math.E // глобальный объект, с константой Е

document.querySelector('h1').style.color = 'darkred'

console.log();

const el = document.querySelector('#el')


const getUser = async () => {
  try {
    const res = await fetch('vk.com')
    const data = await res.json()
  } catch (e) {
    console.log(e)
  }
}

getUser() // вызов переменной