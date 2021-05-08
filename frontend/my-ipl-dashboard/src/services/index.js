import axios from 'axios';

export const fetchTeamInfo = async (teamId) => {
    try {

        const endpoint = `/team/${teamId}`
        const result = await axios.get(endpoint);
        return result;
    } catch (error) {
        console.error("Error while fetching Team Info");
        return {}
    }
}

export const fetchAllTeams = async () => {
    try {
        const endpoint = `/teams/`
        const result = await axios.get(endpoint);
        return result;
    } catch (error) {
        console.error("Error while fetching Teams");
        return {}
    }
}
