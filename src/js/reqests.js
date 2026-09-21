function renderRequests() {
    let requestsList = document.getElementById('requests-list');
    if (!requestsList) return;

    requestsList.innerHTML = '';
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

        let statusText = document.createElement('p');
        statusText.className = 'status-text';
        statusText.textContent = req.status.charAt(0).toUpperCase() + req.status.slice(1);
        statusText.style.fontWeight = 'bold';
        statusText.style.margin = '10px 20px';
        if (req.status === 'pending') statusText.style.color = '#e6a817';
        if (req.status === 'accepted') statusText.style.color = 'green';
        if (req.status === 'rejected') statusText.style.color = 'red';
        entry.appendChild(statusText);

        if (req.status === 'pending') {
            let actionsDiv = document.createElement('div');
            actionsDiv.className = 'reqest-div';

            let acceptBtn = document.createElement('button');
            acceptBtn.className = 'btn accept';
            acceptBtn.textContent = 'Accept';
            acceptBtn.addEventListener('click', function () {
                updateRequestStatus(req.id, 'accepted');
            });

            let rejectBtn = document.createElement('button');
            rejectBtn.className = 'btn reject';
            rejectBtn.textContent = 'Reject';
            rejectBtn.addEventListener('click', function () {
                updateRequestStatus(req.id, 'rejected');
            });

            actionsDiv.appendChild(acceptBtn);
            actionsDiv.appendChild(rejectBtn);
            entry.appendChild(actionsDiv);
        }

        requestsList.appendChild(entry);
    });
}

function updateRequestStatus(id, newStatus) {
    let requests = JSON.parse(localStorage.getItem('team_requests') || '[]');
    requests = requests.map(function (req) {
        if (req.id === id) req.status = newStatus;
        return req;
    });
    localStorage.setItem('team_requests', JSON.stringify(requests));
    renderRequests(); 
}

renderRequests();