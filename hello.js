exports.handler = async (event) => {
    return {
        statusCode: 200,
        statusDescription: "200 OK",
        body: JSON.stringify('Hello this is from lambda sam plugin!!!!!!!!'),
        headers: {
            "Content-Type" : "text/html"
        }
    };
};