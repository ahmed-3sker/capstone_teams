let requestsList = document.getElementById('requests-list');
if (requestsList) {
    let requests = JSON.parse(localStorage.getItem('team_requests') || '[]');
    requests.forEach(function (req) {
        let entry = document.createElement('div');
        entry.className = 'info';
        req.members.forEach(function (member) {
            let data = document.createElement('div');
            data.className = 'data';
            data.style.display = 'flex';
            data.style.justifyContent = 'space-between';
            data.style.alignItems = 'center';
            data.style.width = '500px';
            let label = document.createElement('label');
            label.style.padding = '20px';
            label.textContent = member.name;
            let phone = document.createElement('input');
            phone.type = 'text';
            phone.value = member.phone;
            phone.className = 'inp';
            phone.readOnly = true;

            data.appendChild(label);
            data.appendChild(phone);
            entry.appendChild(data);
           

        });

        requestsList.appendChild(entry);
    });
}