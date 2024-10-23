
function Monster(name, leg, arm, head) {
    this.name = name;
    this.leg = leg;
    this.arm = arm;
    this.head = head;

    this.getProperties = function() {
        return `A ${this.name} has ${this.leg} legs, ${this.arm} arms, and ${this.head} heads.`;
    };
    console.log('Monster function')
}

function generateMash() {
    const cat = new Monster('Cat', '4', '0', '1');
    const hydra = new Monster('Hydra', '2', '2', '7');
    const worm = new Monster('Worm', '0', '0', '1?');

    // Display the monster descriptions in the respective paragraph tags
    document.getElementById('cat').innerText = cat.getProperties();
    document.getElementById('hydra').innerText = hydra.getProperties();
    document.getElementById('worm').innerText = worm.getProperties();
    console.log('generateMash function');
}


const getInputValue = (id) => {
    const input = document.getElementById(id);
    return input.value;
}

function generateUserMonster() {
    const monsterName = getInputValue('userMonster');

    const userText = document.getElementById('userMonster');
    userText.textContent =  `Your monster, ${monsterName}`;
    console.log('user');
}

