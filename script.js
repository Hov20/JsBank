IDcard();

function IDcard() {
    const users = ['Abo', 'Hovo', 'Davo', 'Hayk'];
    const user = prompt('Your name please');
    const filterUser = users.filter(elem => elem === user);
    if(filterUser.length){
        return;
    }
    const usage = prompt('Please your age');
    if(usage < 18) {
        alert('You cant complete, because you small');
        return;
    }
    const nation = prompt('Please your nation');
    if(nation === 'Armenian') {
        alert('Your card is in process');
    } else{
        alert('Go Away!!!');
    }
}

const vark = prompt('How much credit do you want to get?');
if(vark < 50000) {
    alert('Your credit very small');
} else {
    alert(`Check the amount ${vark}`);
}

const take = prompt('Please confirm the transaction');
if(take === 'yes','Yes') {
    alert('You have successfully completed the transaction,thank you very much :)');
} else {
    alert('Please Go Away :(');
}