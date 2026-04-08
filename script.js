async function getAdvice
    const data = (await fetch{'	https://api.adviceslip.com/advice'}).json();
}

document.getElementById('text').innerText = data.slip.advice;

getAdvice();
