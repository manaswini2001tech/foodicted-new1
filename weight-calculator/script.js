//hide output and reset converted values        
        hideAndReset();
        

/*     SET UP BUTTON LISTENERS
         *  - set event listener for button inputs
        */
        document.getElementById('lbsButton').addEventListener('click', setPounds);
        document.getElementById('gramsButton').addEventListener('click', setGrams);
        document.getElementById('kilogramsButton').addEventListener('click', setKilograms);
        document.getElementById('ouncesButton').addEventListener('click', setOunces);

    
        /*  hideAndReset() - hide and reset form and output cards
        */
        function hideAndReset(){
            document.getElementById('output').style.visibility = 'hidden';
            document.getElementById('myForm').reset();
            setOutputValues(0,0,0,0);
        }
       
        function setPounds() {
            //hide output and reset converted values 
            hideAndReset();
            
            //set input box to pounds
            document.getElementById('genericInput').setAttribute('placeholder', 'Enter pounds...');
        
            //add event listener for lbs
            document.getElementById('genericInput').addEventListener('input', function(e){
                
                //show unit conversions div
                document.getElementById('output').style.visibility = 'visible';

                // define lbs as event target value
                let lbs = e.target.value;

                // define units based on lbs
                let grams = lbs * 453.59237;
                let kilograms = grams / 1000;
                let ounces = lbs * 16;

                // change innerHTML to respective units
                setOutputValues(ounces, lbs, grams, kilograms);
                
                
            });
        }
        
        /*  setGrams() function - sets input box, hides grams output, 
        *               sets input listener + output function
        */
        function setGrams(){
            //hide output and reset converted values 
            hideAndReset();
            
            //set input box to grams
            document.getElementById('genericInput').setAttribute('placeholder', 'Enter grams...');

            //add event listener for grams
            document.getElementById('genericInput').addEventListener('input', function(e){

                //show unit conversions div
                document.getElementById('output').style.visibility = 'visible';

                // define grams as event target value
                let grams = e.target.value;

                // define units based on grams
                let lbs = grams / 453.59237;
                let kilograms = grams / 1000;
                let ounces = grams / 28.34952;

                // change output cards' innerHTML to respective units
                setOutputValues(ounces, lbs, grams, kilograms);
                
                
            });
        }
        
        
        /*  setKilograms() function - sets input box, hides kilograms output, 
        *                  sets input listener + output function
        */
        function setKilograms(){
            //hide output and reset converted values 
            hideAndReset();
            
            //set input box to kilograms
            document.getElementById('genericInput').setAttribute('placeholder', 'Enter kilograms...');

            //add event listener for kilograms
            document.getElementById('genericInput').addEventListener('input', function(e){
        
                //show unit conversions div
                document.getElementById('output').style.visibility = 'visible';

                // define kilograms as event target value
                let kilograms = e.target.value;

                // define units based on kgs
                let grams = kilograms * 1000;
                let lbs = kilograms / .45359237;
                let ounces = kilograms / .02834952;

                // change innerHTML to respective units
                setOutputValues(ounces, lbs, grams, kilograms);
            });
        }
        
        
        /*  setOunces() function - sets input box, hides ounces output, 
        *               sets input listener + output function
        */
        function setOunces(){
            //hide output and reset converted values 
            hideAndReset();
            
            //set input box to ounces
            document.getElementById('genericInput').setAttribute('placeholder', 'Enter ounces...');
            
            //add event listener for ounces
            document.getElementById('genericInput').addEventListener('input', function(e){
        
                //show unit conversions div
                document.getElementById('output').style.visibility = 'visible';

                // define ounces as event target value
                let ounces = e.target.value;

                // define units based on oz
                let lbs = ounces / 16;
                let grams = lbs * 453.59237;
                let kilograms = grams / 1000;

                setOutputValues(ounces, lbs, grams, kilograms);
            });
        }

        /*  setOutputValues() - takes 4 values, one for each
        *   of the output divs. Can be used to reset to 0
        *   or set all of them to specific values.
        */  
        function setOutputValues(ounces, lbs, grams, kilograms) {
            
            // change innerHTML to respective units
            document.getElementById('ouncesOutput').innerHTML = ounces;
            document.getElementById('lbsOutput').innerHTML = lbs;
            document.getElementById('gramsOutput').innerHTML = grams;
            document.getElementById('kilogramsOutput').innerHTML = kilograms;
            
        }