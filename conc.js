


let btn = document.getElementById('buttons');

btn.addEventListener('click', function(){
    const gram = parseInt(document.getElementById('Grams').value);
    const unit =  document.getElementById('unit').value;

    if(gram === "" || isNaN(gram)){
        document.getElementById('Grams').focus();
        document.getElementById('None').innerHTML = 'Enter a valid value';
        document.getElementById('result').innerHTML = "";
    }else{
        document.getElementById('None').innerHTML = "";
        switch(unit){
            case "milligrams" :
                convert_milligrams(gram);
                break;
            case "kilograms" :
                convert_kilograms(gram);
                break;
            case "pounds" :
                convert_pounds(gram);
                break;
            case "ounce" :
                convert_ounce(gram);
                break;
            case "tonnes" :
                convert_tonnes(gram)
                 break;
            default:
                alert('No unit Selected');
        }
        function convert_milligrams(gram){
            let rate = 1000, milligrams;
            milligrams = gram * rate;
            document.getElementById('result').innerHTML = gram + "Grams = " + milligrams.toFixed(3) + "Mg";
        }
        function convert_kilograms(gram){
            let rate = 0.001, kilograms;
            kilograms = gram * rate;
            document.getElementById('result').innerHTML = gram + " Grams = " + kilograms.toFixed(3) + ' Kg.';
        }
        function convert_pounds(gram){
            let rate = 0.002205, pounds;
            pounds = gram * rate;
            document.getElementById('result').innerHTML = gram + " Grams = " + pounds.toFixed(3) + ' Pounds.';
        }
        function convert_ounce(gram){
            let rate = 0.035274, ounces;
            ounce = gram * rate;
            document.getElementById('result').innerHTML = gram + " Grams = " + ounce.toFixed(3) + ' Ounces.';
        }
        function convert_tonnes(gram){
            let rate = 0.000001, tonnes;
            tonnes = gram * rate;
            document.getElementById('result').innerHTML = gram + " Grams = " + tonnes.toFixed(3) + ' Tonnes.';
        }
    }
});