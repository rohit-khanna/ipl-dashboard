import axios from 'axios';

export const fetchTeamInfo = async (teamId) => {
    try {
        //  return { name: "Mumbai Indians", matchesPlayed: 10, wins: 6, matches: [], id: teamId }
        const endpoint = `/teams/${teamId}`
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
