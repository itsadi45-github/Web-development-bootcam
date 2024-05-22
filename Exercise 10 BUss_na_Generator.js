//  Create a Bussinesss name Generator By Combining list of Adjectives and Shop name and Another word.
 
/*
Adjectives:
Crazy
Amazing
Fire 

Shop name :
Engine 
Foods
Garments

Another word :
Bros 
Limited
Hub
*/

// Adjectives:
const Adjective1="crazy"
const Adjective2="Amazing"
const Adjective3="Fire"

// Shop name :
const Shopname1="Engine"
const Shopname2="Foods"
const Shopname3="Garments"

// Another word :
const Anotherword1="Bros"
const Anotherword2="Limited"
const Anotherword3="Hub"

function generateBussinessName() {
      const randomAdjective = Math.floor(Math.random() *3) + 1;
      const randomShopname = Math.floor(Math.random() *3) + 1;
      const randomAnotherword = Math.floor(Math.random() *3) + 1;
         
      const businessName = `${eval('adjective' + randomAdjective)} ${eval('shopName' + randomShopname)} ${eval('anotherWord' + randomAnotherword)}`;
     
      return businessName;
}
  const generatedName = generateBussinessName();
  console.log(generatedName)
