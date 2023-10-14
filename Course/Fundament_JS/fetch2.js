fetch('examples/example.json')
    .then(function(responsive){
        if(!responsive.ok){
            throw Error(response.statusText); 
        }
        return response.json(); 
        console.log(responsiveAsJson);
    })
    .then(function(responsiveAsJson){
        console.log(responsiveAsJson);
    })
    .catch(function(error){
        console.log('Looks like there was a problem: \n', error); 
    }); 