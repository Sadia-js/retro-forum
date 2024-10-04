// Load VIdeos from Api
const loadLatestVIdeos = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    displayVideoCards(data);
}

// displayVideoCards
const displayVideoCards = (videos) => {
    videos.forEach(vid => {
        const videosContainer = document.getElementById('videos-container');
        const {cover_image, title, description, profile_image, author} = vid;
        const div = document.createElement('div');
        div.classList = "card border-2";
        div.innerHTML = `
              <figure class="px-6 pt-10">
              <img
                src=${cover_image}
                alt="cover_image"
                class="rounded-xl"
              />
            </figure>
            <div class="flex items-center gap-3 px-6 pt-4">
              <i class="fa-solid fa-calendar-days"></i>
              <span>${author?.posted_date || 'No Posted Date'}</span>
            </div>
            <div class="card-body py-4 px-6">
              <h2 class="font-bold">${title}</h2>
              <p class="flex-grow-0">${description}</p>
              <div class="pt-4 flex items-center gap-3">
                <div class="flex items-center gap-3">
                     <div class="border-blue-600 border-4 rounded-full p-[3px]">
                       <img class="w-10 h-10 rounded-full object-cover" src=${profile_image} alt="profile_image" />
                     </div>
                     <div>
                       <p class="font-bold">${author.name}</p>
                        <p>${author?.designation || 'Unknown'}</p>
                     </div>
              </div>
            </div>
        `
        videosContainer.append(div);
        
    });
}


loadLatestVIdeos();