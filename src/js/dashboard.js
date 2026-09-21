let solosSection = document.getElementById('solos');

let user_name = localStorage.getItem('user_name');
let numb = localStorage.getItem('phone_number');
let alreadyAdded = localStorage.getItem('entry_added');

if (solosSection && user_name && numb && !alreadyAdded) {
    let info = document.createElement('div');
    info.className = 'info';
    let data = document.createElement('div');
    data.className = 'data';
    data.style.display = 'flex';
    data.style.justifyContent = 'space-between';
    data.style.alignItems = 'center';
    data.style.width = '500px';
    let label = document.createElement('label');
    label.style.padding = '20px';
    label.textContent = user_name;
    let phone = document.createElement('input');
    phone.type = 'text';
    phone.value = numb;
    phone.className = 'inp';
    phone.readOnly = true;
    data.appendChild(label);
    data.appendChild(phone);
    let requestDiv = document.createElement('div');
    requestDiv.className = 'reqest-div';
    let requestButton = document.createElement('button');
    requestButton.className = 'request btn';
    requestButton.textContent = 'request to join the team';
    requestDiv.appendChild(requestButton);
    info.appendChild(data);
    info.appendChild(requestDiv);
    solosSection.appendChild(info);
    localStorage.setItem('entry_added', 'true');
}


document.querySelectorAll('.request').forEach(function (button) {
    button.addEventListener('click', function () {
        let infoBlock = button.closest('.info');
        let dataBlocks = infoBlock.querySelectorAll('.data');

        let members = [];
        dataBlocks.forEach(function (data) {
            let label = data.querySelector('label');
            let input = data.querySelector('input');
            members.push({
                name: label ? label.textContent.trim() : '',
                phone: input ? input.value.trim() : ''
            });
        });

        let requests = JSON.parse(localStorage.getItem('team_requests') || '[]');
        requests.push({
            id: Date.now().toString(),  
            members: members,
            status: 'pending',       
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('team_requests', JSON.stringify(requests));

        alert('Your request to join has been sent.');
    });
});