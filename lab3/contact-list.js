const deleteContact = (contact_id) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/contact/".concat(contact_id), false);
    xhttp.send();
    location.reload();
}

const setEditModal = (contact_id) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/contact/".concat(contact_id), false);
    xhttp.send();
    const contact = JSON.parse(xhttp.responseText);
    document.getElementById('contact_id').value = contact["contact_id"];
    document.getElementById('contact_name').value = contact["contact_name"];
    document.getElementById('contact_profession').value = contact["contact_profession"];
    document.getElementById('contact_tel_number').value = contact["contact_tel_number"];
    document.getElementById('contact_mobile_number').value = contact["contact_mobile_number"];
    document.getElementById('editForm').action = `http://localhost:3000/contact/${contact["contact_id"]}`;

}

const loadContacts = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/contact", false);
    xhttp.send();

    const contacts = JSON.parse(xhttp.responseText);

    for (let contact of contacts) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${contact.contact_name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${contact.contact_id}</h6>

                        <div>Profession: ${contact.contact_profession}</div>
                        <div>Contact Tel Number: ${contact.contact_tel_number}</div>
                        <div>Contact Mobile Number: ${contact.contact_mobile_number}</div>

                        <hr>

                        <button confirm="Are you sure?" onclick="deleteContact(${contact.contact_id})" type="button" class="btn btn-primary" data-toggle="modal">
                            Delete
                        </button>
                        <button type="button" class="btn btn-primary" onclick="setEditModal(${contact.contact_id})" data-toggle="modal" data-target="#editContactModal">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `

        document.getElementById('contacts').innerHTML = document.getElementById('contacts').innerHTML + x;
    }
}

loadContacts();