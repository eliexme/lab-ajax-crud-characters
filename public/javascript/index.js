const charactersAPI = new APIHandler('http://localhost:8000');
const characterContainer = document.querySelector('.characters-container')
const characterIdInput = document.querySelector('#character-id')
const characterIdDelete = document.querySelector('#character-id-delete')

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    event.preventDefault()
    const {data} = await charactersAPI.getFullList()
    //console.log(data)
    characterContainer.innerHTML = ''
    data.forEach((eachChar)=>{
      const newDiv = document.createElement('div')
      newDiv.classList.add('character-info')
      newDiv.innerHTML = `
      <div class="name">Character Name: ${eachChar.name}</div>
      <div class="occupation">Character Occupation: ${eachChar.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${eachChar.cartoon}</div>
      <div class="weapon">Character Weapon: ${eachChar.weapon}</div>`
      characterContainer.appendChild(newDiv)
    })
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    //console.log(characterIdInput.value)
    event.preventDefault()
    const {data} = await charactersAPI.getOneRegister(characterIdInput.value)
    if(data){
      characterContainer.innerHTML = ''
      const newDiv = document.createElement('div')
      newDiv.classList.add('character-info')
      newDiv.innerHTML = `
      <div class="name">Character Name: ${data.name}</div>
      <div class="occupation">Character Occupation: ${data.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${data.cartoon}</div>
      <div class="weapon">Character Weapon: ${data.weapon}</div>`
      characterContainer.appendChild(newDiv)
    }
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    event.preventDefault()
    const deletedChar = await charactersAPI.deleteOneRegister(characterIdDelete.value)
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault()
    const editCharacterId = document.querySelector("#character-id-edit").value;
    const editCharacterName = document.querySelector("#character-name-edit").value;
    const editCharacterOccupation = document.querySelector("#character-occupation-edit").value;
    const editCharacterWeapon = document.querySelector("#character-weapon-edit").value;
    const editCharacterCartoon = document.querySelector("#character-cartoon-edit").checked;
    const updatedChar = 
      {
        "id": editCharacterId,
        "name": editCharacterName,
        "occupation": editCharacterOccupation,
        "weapon": editCharacterWeapon,
        "cartoon": editCharacterCartoon
      }
    await charactersAPI.updateOneRegister(editCharacterId, updatedChar)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
