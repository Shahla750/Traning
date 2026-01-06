/* ---------- USERS (Simulated file) ---------- */
let users = {
    "admin": "shahla123"
};

/* ---------- GLOBALS ---------- */
let operations = 0;//count how many actions the user performs

const MAX_OPS = 10;//max  allow operation

/* ---------- ENCRYPTION ---------- */
function encrypt(text) {
    return btoa(text);//convert text to base64 encoded format
}
function decrypt(text) {
    return atob(text);// convert it back to normal text
}

/* ---------- LOGIN ---------- */
function login() {
    let u = username.value;//take u & p from input 
    let p = password.value;

    if (users[u] === p) {
        localStorage.setItem("user", u);
        localStorage.setItem("pwd", p);
        loginBox.classList.add("hidden");
        menuBox.classList.remove("hidden");
        updateOps();
    } else {
        loginMsg.innerText = "Invalid Login!";
    }
}

/* ---------- SCREEN CONTROL ---------- */
function showSection(id) {
    document.querySelectorAll(".container > div")
        .forEach(d => d.classList.add("hidden"));
    menuBox.classList.remove("hidden");
    document.getElementById(id).classList.remove("hidden");
    updateOps();
}

/* ---------- GET DIARY ---------- */
function getDiary() {
    return JSON.parse(localStorage.getItem("diary") || "{}");
}

/* ---------- SAVE DIARY ---------- */
function saveDiary(diary) {
    localStorage.setItem("diary", JSON.stringify(diary));
}

/* ---------- ADD NOTE ---------- */
function addNote() {
    let date = addDate.value;
    let text = addText.value;
    let diary = getDiary();

    if (diary[date]) {
        if (!confirm("Note exists. Update?")) return;
    }

    diary[date] = encrypt(text);
    saveDiary(diary);
    alert("Note Saved");
    updateOps();
}

/* ---------- UPDATE NOTE ---------- */
function updateNote() {
    let date = updateDate.value;
    let pwd = confirmPwd.value;
    let diary = getDiary();

    if (pwd !== localStorage.getItem("pwd")) {
        alert("Wrong Password!");
        return;
    }

    diary[date] = encrypt(updateText.value);
    saveDiary(diary);
    alert("Note Updated");
    updateOps();
}

/* ---------- SEARCH NOTE ---------- */
function searchNote() {
    let date = searchDate.value;
    let diary = getDiary();

    if (diary[date]) {
        searchResult.innerText = decrypt(diary[date]);
        localStorage.setItem("searchDate", date);
        searchUpdateBtn.classList.remove("hidden");
    } else {
        searchResult.innerText = "No note found!";
        searchUpdateBtn.classList.add("hidden");
    }
    updateOps();
}

/* ---------- PREPARE UPDATE FROM SEARCH ---------- */
function prepareUpdate() {
    let date = localStorage.getItem("searchDate");
    let diary = getDiary();

    showSection("updateBox");
    updateDate.value = date;
    oldNote.innerText = decrypt(diary[date]);
    updateText.value = decrypt(diary[date]);
}

/* ---------- RANGE DISPLAY ---------- */
function showRange() {
    let from = fromDate.value;
    let to = toDate.value;
    let diary = getDiary();
    rangeResult.innerHTML = "";

    for (let d in diary) {
        if (d >= from && d <= to) {
            let day = new Date(d).toLocaleDateString("en-US", { weekday: "long" });
            rangeResult.innerHTML +=
                `<h4>${d} (${day})</h4><p>${decrypt(diary[d])}</p>`;
        }
    }
    updateOps();
}

/* ---------- OPERATIONS & LOGOUT ---------- */
function updateOps() {
    operations++;
    opCount.innerText = `Operations: ${operations} / ${MAX_OPS}`;
    if (operations >= MAX_OPS) logout();
}

function logout() {
    alert("Logged out!");
    localStorage.clear();
    location.reload();
}