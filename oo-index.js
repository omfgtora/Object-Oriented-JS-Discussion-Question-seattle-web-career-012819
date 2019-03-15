class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = "One Kajillion"
  }

  
  displayAction(text, className) {
    var div = document.createElement("div");
    const eventArea = document.getElementById('event_area')
    div.appendChild(document.createTextNode(text));
    eventArea.prepend(div);
    imageArea.className = className;
  }
  
  restart() {
    const eventArea = document.getElementById('event_area')
    while (eventArea.hasChildNodes()) {
      eventArea.removeChild(eventArea.lastChild);
    }
    this.displayAction("Out on the street, ready to go!", 'new')
  }
  
  attack() {
    this.useMove("'ATTAAAAAAAAAK!''", 'attack')
  }

  defend() {
    this.usemove("You put sunglasses on.", 'defend')
  }

  heal() {
    this.useMove("You feel refreshed after yoga.", 'heal')
  }

  breakdance() {
    this.useMove("It's really spinning class", 'breakdance')
  }

  eatCronut() {
    this.useMove("You've gained one billion health points.", 'eat')
  }
}

function setListeners(unicorn) {
  const eventArea = getElement('event_area')
  const imageArea = getElement('image_area')
  const restartButton = addListener('restart', () => unicorn.restart())
  const attackButton = addListener('attack', () => unicorn.attack())
  const defendButton = addListener('defend', () => unicorn.defend())
  const healButton = addListener('heal', () => unicorn.heal())
  const breakdanceButton = addListener('breakdance', () => unicorn.breakdance())
  const eatButton = addListener('eat', () => unicorn.eatCronut())
}

function getElement(id) {
  return document.getElementById(id)
}

function addListener(id, callback) {
  let element = getElement(id)
  element.addEventListener('click', callback)
  return element
}

const dave = new Unicorn("Dave McMuffin", "The Bank")
setListeners(dave)