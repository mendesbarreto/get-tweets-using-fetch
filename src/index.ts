const twitterToken = process.env.TWITTER_API_TOKEN;

interface Tweet {
    id: string;
    text: string;
}

fetch('https://api.twitter.com/2/lists/1530602256525041665/tweets', {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${twitterToken}`
    },
}).then((response) => response.json())
    .then((json) => {
        const tweets: Tweet[] = json.data;
        console.log(tweets);
    })
