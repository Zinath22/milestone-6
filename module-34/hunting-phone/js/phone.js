const loadPhones = async (searchText='13', isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll)
}

const displayPhones = (phones, isShowAll) =>{
// console.log(phones)
// 1 
const phoneContainer = document.getElementById('phone-container');
// clear phone container cards before adding new cards 
phoneContainer.textContent = '';
// console.log(phones.length)

// display show all button if there are more than 12 phones
const showAllContainer = document.getElementById('show-all-container') 
if(phones.length > 12 && !isShowAll){
showAllContainer.classList.remove('hidden')
}
else{
    showAllContainer.classList.add('hidden')
}
// console.log('is show all', isShowAll)

// display only first 12 phones if not show all 
if(!isShowAll){
phones = phones.slice(0,12)
}

 
phones.forEach(phones =>{
    // console.log(phones);
    //2 create a div 
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`;
    phoneCard.innerHTML = `
    <figure><img src="${phones.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phones.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-center">
                        <button onclick="handleShowDetail('${phones.slug}')" class="btn btn-primary">Show details</button>
                      </div>
                    </div> 
                    `;

        // 4  append child
        phoneContainer.appendChild(phoneCard);            
});

// hide loading spinner
toggleLoadingSpinner(false); 

} 

// 
const handleShowDetail = async (id) =>{
    // console.log('show', id)
    // load single phone data 
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(data);

    showPhoneDetails(phones)
}

const showPhoneDetails = (phones) =>{
    console.log(phones)
    const phoneName = document.getElementById('phone-name');
    phoneName.innerText = phones.name;
    const showDetailContainer = document.getElementById('show-detail-container');
    showDetailContainer.innerHTML = `
    <img src ="${phones.image}" alt="" />
    <p><span>Storage:</span>${phones?.mainFeatures?.storage}</p>
    <p><span>GPS:</span>${phones.others?.GPS || 'No GPS available'}</p>
    <p><span>GPS:</span>${phones.others?.GPS? phones.others.GPS : 'No GPS available'}</p>
    `
    // show modal 
    show_details_modal.showModal();
}
// handle search button 
const handleSearch = (isShowAll) =>{
    toggleLoadingSpinner(true)
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   console.log(searchText);
   loadPhones(searchText, isShowAll)
}

//  handle search recap
// const handleSearch2 = () =>{
//     toggleLoadingSpinner(true);
//     const searchField = document.getElementById('search-field2')
//     const searchText = searchField.value;
//     loadPhones(searchText);
// }

const toggleLoadingSpinner = (isLoading) =>{
const loadingSpinner = document.getElementById('loading-spinner');
if(isLoading){
    loadingSpinner.classList.remove('hidden')
}
else{
    loadingSpinner.classList.add('hidden')
}
}

// handle show all 
const handleShowAll = () =>{
 handleSearch(true);   
}

loadPhones()