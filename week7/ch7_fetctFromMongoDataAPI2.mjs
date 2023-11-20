
const api_endpoint = "https://us-west-2.aws.data.mongodb-api.com/app/data-nxwbg/endpoint/data/v1/action/findOne";

const myBody = {
    "collection": "listingsAndReviews",
    "database": "sample_airbnb",
    "dataSource": "Cluster0",
    "filter": {
        "property_type": "Apartment"
    },
    "projection": {
        "listing_url": 1,
        "name": 1,
        "summary": 1,
        "property_type": 1,
        "cancellation_policy": 1
    }
};

const response = await fetch(api_endpoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'api-key': 'ugh9x2ucBBE1cChlmuQu8EW1RfC7KhkdRXKW36omZZXUtzE4ROKODWYlSESG9hIV',
    },
    body: JSON.stringify(myBody)
});

const json_response = await response.json();
console.log(json_response);