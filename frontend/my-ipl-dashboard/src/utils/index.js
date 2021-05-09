export const getShortNames = (teamName) => {
    if (teamName) {
        const words = teamName.split(" ");
        const result = words.map(word => word.substring(0, 1).toString().toUpperCase());
        return result.join("");
    }
    return "";
}