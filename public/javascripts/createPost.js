$('#jobPost').submit(function(e){
    e.preventDefault();

    alert("form submitted");

    api.post('/createPost', xhrData, function(response){
       alert('Video has been added!');
    });
});