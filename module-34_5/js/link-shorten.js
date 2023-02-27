const loadData = async (link) => {
    const url = `https://api.shrtco.de/v2/shorten?url=${link}`;
    const res = await fetch(url);
    const data = await res.json();
    DisplayShortLink(data.result);
}

const getInputLink = () => {
    const inputLinkElement = document.getElementById('link-field');
    const inputLink = inputLinkElement.value;
    loadData(inputLink);
    inputLinkElement.value = '';
};

const DisplayShortLink = (data) => {
    const linkDetails = document.getElementById('linkDetailsBody');
    console.log(data);
    linkDetails.innerHTML = `
    <p>${data.short_link}     <button onclick="copyText('${data.full_short_link}')" class="btn btn-primary">copy</button></p> 
    <p>${data.short_link2}    <button onclick="copyText('${data.full_short_link2}')" class="btn btn-primary">copy</button></p>
    <p>${data.short_link3}    <button onclick="copyText('${data.full_short_link3}')" class="btn btn-primary">copy</button></p> 
    `;
};

const copyText = (link) => {
    navigator.clipboard.writeText(link);
}