var queries = [
    {
        context: 'mobile',
        match: function() {
            $("body").addClass("mobile");
            // Your mobile specific logic can go here. 
        },
        unmatch: function() {
            $("body").removeClass("mobile");
    
        }
    },
    {
        context: 'skinny',
        match: function() {
            console.log('skinny callback! Swap the class on the body element.');
            // Your tablet specific logic can go here.
        },
        unmatch: function() {
            console.log('leaving skinny context!');
        }

    },
    {
        context: 'wide-screen',
        match: function() {
            console.log('wide-screen callback woohoo! Load some heavy desktop JS badddness.');
            // your desktop specific logic can go here.
        }
    }
];
// Go!
MQ.init(queries);