const form = document.querySelector('#searchForm');
//Delete image function
const deleteImg = function(){
    const imgs = document.querySelectorAll('img');
    for (let img of imgs) {
        img.remove();
    }
}

form.addEventListener('submit', async function(e){
    e.preventDefault();
    deleteImg();
    // delete image function running before new search reasults
    const searchTerm = form.elements.search.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`); //Collect data form api 
    makeImage(res.data);
    form.elements.search.value = '';
 })

 // Make  image element in html and append to the body
 const makeImage = function(shows){
    for (let result of shows){
        if (result.show.image){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }

    }
 }