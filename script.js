const countries = {
  country1: {
    name: "Japan",
    details:
      "Japan is known for its cherry blossoms, traditional tea ceremonies, and advanced technology. Its culture is deeply rooted in respect, with practices like bowing and gift-giving being common. Traditional arts such as calligraphy, ikebana (flower arranging), and sumo wrestling are celebrated.",
    tradition:
      "Traditional Japanese culture places a strong emphasis on respect and etiquette. Major traditions include the tea ceremony, kimono wearing, and annual festivals like the cherry blossom viewing (Hanami) in spring. The Japanese also celebrate New Year's with a mix of spiritual and family-centered practices.",
    image: "images/japan.png",
    traditionImage: "images/japantradition.png",
  },
  country2: {
    name: "India",
    details:
      "India is famous for its rich culture, festivals like Diwali, and traditional attire such as saris. Indian traditions include elaborate rituals for weddings, deep respect for elders, and diverse religious practices like Hinduism, Buddhism, and Sikhism. Traditional dance forms like Bharatanatyam and Kathak are also integral.",
    tradition:
      "Indian traditions are highly diverse, shaped by its numerous cultures, religions, and languages. Some key traditions include celebrating Diwali (Festival of Lights), Holi (Festival of Colors), and wearing traditional attire such as saris and turbans. Family and respect for elders are central to Indian culture.",
    image: "images/india.png",
    traditionImage: "images/indiatradition.png",
  },
  country3: {
    name: "France",
    details:
      "France is renowned for its art, fashion, and cuisine. It’s famous for landmarks like the Eiffel Tower, and traditions like wine-making and haute couture. The French have a deep love for food and dining, with meals often being social and long events. Bastille Day, celebrated on July 14th, is a national holiday.",
    tradition:
      "France has rich cultural traditions such as haute couture fashion, wine-making, and a focus on art and cuisine. Bastille Day marks the beginning of the French Revolution and is celebrated with parades and fireworks. The French also take great pride in their culinary traditions, including cheese, wine, and fine dining.",
    image: "images/france.png",
    traditionImage: "images/francetradition.png",
  },
  country4: {
    name: "China",
    details:
      "China has a long history of arts and crafts, including the use of silk, jade, bronze, wood, and paper. The Chinese New Year is one of the most important traditions, with festivities including dragon dances, fireworks, and family reunions. The practice of Feng Shui and Chinese medicine are also important cultural traditions.",
    tradition:
      "Chinese traditions are heavily influenced by ancient philosophies such as Confucianism and Taoism. Key traditions include the celebration of Chinese New Year with family reunions, dragon and lion dances, and feasts. The Mid-Autumn Festival, with mooncakes, and respect for ancestors during Qingming are also notable.",
    image: "images/china.jpg",
    traditionImage: "images/chinatradition.jpg",
  },
  country5: {
    name: "U.S.A",
    details:
      "The USA is the world's third largest country in size and population. It is bordered by Canada to the north and Mexico to the south. American traditions include Thanksgiving, celebrating the Fourth of July with fireworks, and a strong sports culture, especially in football and baseball. The diversity in traditions is vast due to the country's multicultural heritage.",
    tradition:
      "American traditions are diverse, stemming from its multicultural population. Popular traditions include Thanksgiving (a time for family gatherings), Independence Day celebrations with fireworks, and Memorial Day for honoring veterans. Football (American) is also a major cultural activity, especially during the Super Bowl.",
    image: "images/usa.png",
    traditionImage: "images/usatradition.png",
  },
  country6: {
    name: "Canada",
    details:
      "Canada is the world's second largest country by land area, known for its vast natural beauty and multicultural population. Canadian traditions include celebrating Canada Day on July 1st and observing Thanksgiving in October. The French-speaking region of Quebec also brings unique cultural practices such as Mardi Gras and distinct food traditions.",
    tradition:
      "Canadian traditions reflect the country's multiculturalism. Celebrating Canada Day on July 1st and Thanksgiving in October are key national traditions. In Quebec, French traditions such as Mardi Gras and the Carnaval de Québec are prominent. Ice hockey is another tradition, particularly in the winter months.",
    image: "images/canada.png",
    traditionImage: "images/canadatradition.png",
  },
  country7: {
    name: "Germany",
    details:
      "Germany is famous for its rich history, engineering, and culture. Known for iconic landmarks such as the Brandenburg Gate and the Black Forest. German traditions include Oktoberfest, a beer festival held annually in Munich, and Christmas markets that are famous worldwide. Folk music and dance also have a strong presence.",
    tradition:
      "Germany is known for traditions such as Oktoberfest, where people gather to celebrate Bavarian culture with beer, food, and folk music. Christmas markets are a longstanding tradition, and the German Christmas tree (Tannenbaum) is widely celebrated. German folk music and dances are also an important part of its culture.",
    image: "images/germany.png",
    traditionImage: "images/germanytradition.png",
  },
  country8: {
    name: "Italy",
    details:
      "Italy is renowned for its ancient history, art, architecture, and cuisine. Landmarks like the Colosseum and Leaning Tower of Pisa are globally recognized.",
    tradition:
      "Italy is celebrated for its rich cultural traditions, especially in food, art, and family life. Key traditions include celebrating Ferragosto in August, a national holiday, and numerous religious festivals such as Christmas and Easter. Italy is also known for its Renaissance art and historic landmarks.",
    image: "images/italy.png",
    traditionImage: "images/italytradition.png",
  },
  country9: {
    name: "Australia",
    details:
      "Australia is known for its unique wildlife, the Great Barrier Reef, and landmarks like the Sydney Opera House and Uluru.",
    tradition:
      "Australia celebrates a mix of British traditions and unique local customs. Key holidays include Australia Day on January 26th, and ANZAC Day on April 25th, to honor fallen soldiers. The Melbourne Cup horse race is also a major cultural event, and the tradition of outdoor barbecues is popular.",
    image: "images/australia.png",
    traditionImage: "images/australiatradition.png",
  },
  country10: {
    name: "Brazil",
    details:
      "Brazil is famous for its vibrant culture, Carnival festival, football (soccer), and natural wonders like the Amazon Rainforest and Iguazu Falls.",
    tradition:
      "Brazil is known for its lively traditions, especially the Carnival festival, which is celebrated with parades, samba music, and elaborate costumes. Football (soccer) is a major part of the Brazilian identity, and regional festivals such as Festa Junina and Folklore Day showcase the country's diverse cultural heritage.",
    image: "images/brazil.png",
    traditionImage: "images/braziltradition.png",
  },
  country11: {
    name: "United Kingdom",
    details:
      "The United Kingdom is known for its royal family, historic landmarks like Big Ben, and cultural contributions in literature, theatre, and music.",
    tradition:
      "British traditions include the celebration of Christmas, afternoon tea, and the changing of the guard at Buckingham Palace. The royal family plays a significant role in national life, and holidays like Bonfire Night and Remembrance Day are marked with ceremonies and events.",
    image: "images/uk.png",
    traditionImage: "images/uktradition.png",
  },
  country12: {
    name: "Mexico",
    details:
      "Mexico is known for its rich cultural heritage, including Mayan and Aztec history, colorful festivals, and traditional foods like tacos and enchiladas.",
    tradition:
      "Mexican traditions include celebrating Dia de los Muertos (Day of the Dead) to honor ancestors, and Las Posadas during Christmas time. The Mexican Independence Day on September 16th is widely celebrated, and regional dances, mariachi music, and festive foods are integral to its culture.",
    image: "images/mexico.png",
    traditionImage: "images/mexicotradition.png",
  },
  country13: {
    name: "South Korea",
    details:
      "South Korea is known for its technology, K-pop music, Korean cuisine like kimchi, and modern cities like Seoul.",
    tradition:
      "South Korean traditions include the celebration of Seollal (Lunar New Year) and Chuseok (harvest festival), where families gather for ancestral rites and feasts. Traditional attire such as hanbok is worn on these occasions, and Korean tea ceremonies and calligraphy are valued cultural practices.",
    image: "images/southkorea.png",
    traditionImage: "images/southkoreatradition.png",
  },
  country14: {
    name: "Spain",
    details:
      "Spain is famous for its beautiful beaches, art, architecture, and traditions like flamenco dancing and bullfighting.",
    tradition:
      "Spanish traditions include flamenco dancing in Andalusia, bullfighting in certain regions, and festive holidays like La Tomatina and the Running of the Bulls in Pamplona. Spain also celebrates La Feria, with vibrant parades, and religious holidays like Semana Santa (Holy Week) are marked with processions.",
    image: "images/spain.png",
    traditionImage: "images/spaintradition.png",
  },
  country15: {
    name: "Russia",
    details:
      "Russia is known for its vast size, historical landmarks like the Kremlin, rich literature, and being a major global player in politics and space exploration.",
    tradition:
      "Russian traditions include celebrating Orthodox Christmas and Easter, with special foods like kulich and paska. Maslenitsa, the Russian pancake festival, marks the end of winter, and Victory Day on May 9th commemorates the victory over Nazi Germany in World War II. Folk music and dance play a significant role in cultural expression.",
    image: "images/russia.png",
    traditionImage: "images/russiatradition.png",
  },
};
// Function to show popup with country details
function showDetails(countryKey) {
  const country = countries[countryKey];
  document.getElementById("country-name").textContent = country.name;
  document.getElementById("country-details").textContent = country.details;
  document.getElementById("country-image").src = country.image;
  document.getElementById("country-tradition").textContent = country.tradition;
  document.getElementById("country-tradition-image").src =
    country.traditionImage;

  // Show the popup
  const popup = document.getElementById("popup");
  popup.style.display = "flex";
}

// Function to close the popup
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Close popup when clicking outside of the popup-content
const popup = document.getElementById("popup");
popup.addEventListener("click", function (event) {
  // Check if the click is outside the popup content
  if (event.target === popup) {
    closePopup();
  }
});
