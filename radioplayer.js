// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'
 async function getRadioChannel() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json",
  );
  const data = await response.json();

  const channelsContainer = document.querySelector("#channels");

  data.channels.forEach((channel) => {
    const div = document.createElement("div");
    div.setAttribute("class", "channels");
    channelsContainer.appendChild(div);

    div.innerHTML = `
    <img src="${channel.image}" alt="${channel.name}" /> <h2>${channel.name}</h2>
    <audio controls> 
    <source src="${channel.liveaudio.url}" type="audio/mpeg" />" 
    </audio>`;
  });
}
getRadioChannel();

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
