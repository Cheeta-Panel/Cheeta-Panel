let baseURL = 'http://localhost:3000'
if(process.browser) {
    baseURL = window.origin;
}
let api = "https://api.astrofiles.cloud";
//api = "http://localhost:3001";
const ID = "917593898048704522";

const getOauth = function (state) {
    let re = "/dashboard"
    if (state) {
        re = state
    }
    const url = new URL("https://discordapp.com/oauth2/authorize");
    url.search = new URLSearchParams([
        ["redirect_uri", baseURL + "/callback"],
        ["response_type", "code"],
        ["scope", ["identify", "email"].join(" ")],
        ["client_id", ID],
        ["prompt", "none"],
        ["state", re]
    ]);

    return url.href;
};

const user = async function (code) {
    if (!code || code === "n/a") return;
    const user = await fetch(`${api}/login/callback?code=${code}&redirect=${baseURL}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"}
    }).then(res => res.json());

    localStorage.setItem("user", JSON.stringify(user));
    return user;
};

const tokenCheck = async function (ID, userToken) {
    return await fetch(`${api}/user/${ID}/token-check`, {
        method: "GET",
        headers: {
            "Authorization": userToken
        }
    }).then(res => res.json());
};

export {
    getOauth,
    user,
    tokenCheck
};

export default api;