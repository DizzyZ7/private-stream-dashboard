const viewersEl = document.getElementById('viewers');
const totalViewsEl = document.getElementById('total_views');
const videoEl = document.getElementById('stream');

const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

if(!token){
    alert('Нет токена доступа!');
    throw new Error('No token');
}

async function fetchData(){
    try{
        const res = await fetch(`http://localhost:3000/api/stream?token=${token}`);
        const data = await res.json();

        viewersEl.textContent = data.viewers;
        totalViewsEl.textContent = data.total_views;

        if(videoEl.src !== data.stream_url){
            videoEl.src = data.stream_url;
        }
    }catch(err){
        console.error(err);
    }
}

setInterval(fetchData, 3000);
fetchData();
