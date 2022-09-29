const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '外の温度が２５度だったので,:insertx:と一緒にお出かけしました。 彼らが:inserty:についた時,恐怖のあまり驚きすぎて固まってしまいました。なぜならば:insertx:が:insertz:からです。 Bob は彼らの一部始終をずっと見ていましたが、驚きませんでした — :insertx:の体重はりんご3個分で、とても暑い日でした';
const insertX = ['教授', '友達', '幽霊'];
const insertY = ['PayPayドーム', '渋谷', '津田塾大学'];
const insertZ = ['たぬきになった', 'はちに刺された', 'ご飯を食べた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
