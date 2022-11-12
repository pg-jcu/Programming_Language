const url = 'url';

export const get = async (data) => {
    try {
        const response = await fetch(url + `/languages?keyword=${data}`);

        if (!response.ok) {
            throw new Error('API Error');
        }

        const json = await response.json();

        return json;
    } catch (e) {
        console.log(e);
    }
};