
//*THIS IS THE ARRAYS FOR PIZZA AND FOR THE AMOUNT OF PIZZA*/ 
var numArray = [ '1','2','3','4','5','6','7','8','9','10'];
var pizzasArray = ['Peperoni','Cheese', 'Meat Lovers', 'Supreme', 'Hawaiian'];



window.addEventListener('load', intializePage);
function intializePage(){
    document.getElementById("order").addEventListener('click', info);
     
    addDropPizza();
    addDropNum();
    buttonClick();
    
}

//! ************** UNUSED FUNCTION FIGURE IT OUT************************ 
function addToList(){
    document.getElementById('doubleClick').addEventListener('click', function(e){
        var newPizza = document.createElement('li');
       newPizza.innerHTML = document.getElementById('textArea');

       pizzasArray.push(newPizza);
    });
    
}


//* THIS IS THE CODE FOR THE DROPDOWN FOR THE NUMBER OF PIZZAS*/ 
function addDropNum()
{
    for (let i = 0; i < numArray.length; i++)
    {
        console.log(numArray[i]);
        var liItem1 = document.createElement('option');
        liItem1.innerHTML = numArray[i];
        liItem1.value = i;
        
        document.getElementById('pizzaNum').appendChild(liItem1);
        addToList();
        
    }
    

}
//*: THIS IS THE CODE FOT THE PIZZA CHOICE THE FUNCTION ADD TO LIST WILL RUN HERE?
function addDropPizza()
{
    for (let i = 0; i < pizzasArray.length; i++)
    {
        console.log(pizzasArray[i]);
        var liItem2 = document.createElement('option');
        liItem2.innerHTML = pizzasArray[i];
        liItem2.value = i;
        
        document.getElementById('pizza').appendChild(liItem2);
    }
    

}

function buttonClick(){
    document.getElementById('pizzaNum').addEventListener('change', function(e){
        var tot = (e.target.value * 7.95 +1);
        alert((tot * 0.076) );
        console.log(e.target.value);
        var tax = (tot * .076);
        document.write("<p>your pizza(s) cost: </p>");
        document.write(tot);
        document.writeln("<p>your tax is: </p>");
        document.write(tax);
        document.writeln("<p> Your gran total is: </p>")
        document.write((tot + tax));
        info();
    });

}


//* suposed to get pull info form users inputs  
function info(){
    var name = document.getElementById('names');
    var phone = document.getElementById('phone');
    document.write(document.getElementById('names'));
        
    document.write(phone);
}
//var.innerHtml out a <p