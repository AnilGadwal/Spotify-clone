export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://spotify-clone-8dbf1.web.app/";
const clientId = "4b469d106b894dfa9b91010af9be8d31";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial;
    },{}); 
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialogue=true`;
 