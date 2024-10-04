// Loading All posts here
const loadAllPosts = (category) => {
    // fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    fetch (`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}` : ''}`)
    .then(res => res.json())
    .then(data => displayPosts(data.posts))
    .catch(err => console.log(err))
}

// Search
const handleSearchCategory = () => {
    const searchText = document.getElementById('search-value').value;
    loadAllPosts(searchText);
}

// displayPosts
const displayPosts = (posts) => {
    const costumeContainer = document.getElementById('costume-container');
    costumeContainer.innerHTML = '';
    // console.log(costumeContainer)
    // console.log(posts)
    posts.forEach(post => {
        const {image, author, title, description, comment_count, view_count, posted_time, isActive} = post;
        const div = document.createElement('div');
        div.classList = "flex-1 flex flex-col lg:flex-row p-5 gap-4 bg-base-200 rounded-xl";
        div.innerHTML = `
        <div class="">
                    <div class="flex relative">
                    <div>
                      <img class="w-full lg:w-24 rounded-lg object-cover" src=${image} alt="">
                    </div>
                     <div class="absolute -right-1 -top-3">
                     ${isActive === true ?
                        '<i class="fa-solid fa-circle text-green-500"></i>' : 
                        '<i class="fa-solid fa-circle text-red-500"></i>'
                     }
                     </div>
                     </div>
                    </div>
                    <div class="w-full lg:w-3/4 space-y-3">
                       <div class="space-x-2">
                           <span># Music</span>
                           <span>Author : ${author[0]}</span>
                       </div>
                       <h4  class="font-bold text-xl">${title}</h4>
                       <p>${description}</p>
                     <div class="border-b-2 border-dashed"></div>
                     <div class="flex justify-between">
                       <div class="flex gap-4">
                         <div>
                            <i class="fa-solid fa-comment-dots"></i>
                            <span>${comment_count}</span>
                        </div>
                        <div>
                            <i class="fa-regular fa-eye"></i>
                            <span>${view_count}</span>
                        </div>
                        <div>
                            <i class="fa-regular fa-clock"></i>
                            <span>${posted_time}</span>
                        </div>
                       </div>
                       <div>
                         <button onclick="formHandler('${description}', '${view_count}')">
                            <img class="w-6" src="https://img.icons8.com/?size=96&id=19673&format=png" alt="img" />
                         </button>
                       </div>
                     </div>
                    </div>
               </div> 
        `
        costumeContainer.append(div);
        // console.log(post)
    });
}


const formHandler = (description, count) => {
    // console.log(description, count)
    const formShow = document.getElementById('from-show');
    const div = document.createElement('div');
    div.classList = "mt-6 flex justify-between items-center bg-white rounded-lg";
    div.innerHTML = `
        <div class="flex justify-between items-center bg-white rounded-lg">
              <p class="flex-1 text-base font-semibold p-3">${description}</p>
              <p class="flex items-center gap-3 p-3">
                   <i class="fa-regular fa-eye"></i>
                   <span>${count}</span>
              </p>
        </div>
    `   
    formShow.append(div); 
    handleCount();
}
// handleCount
let sum = 0
const handleCount = () =>{
    sum++;
    document.getElementById('count').innerText = sum;
}

loadAllPosts();

// const obj = {
//  author : {name: 'David Brown'},
// category : "Coding",
// comment_count : 620,
// description: "Take your JavaScript skills to the next level with advanced techniques and tips!",
// id: 105,
// image: "https://i.ibb.co/b7GT5nt/pexels-apunto-group-agencia-de-publicidad-7752813.jpg",
// isActive: false,
// posted_time: 7,
// title: "JavaScript Programming: Advanced Techniques",
// view_count: 2015,

// }