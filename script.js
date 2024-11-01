// Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu

// jmeno.prijmeni@domena
// Tedy například:
// -petr.novak@gmail.com
// -romana.nejedla@czechitas.cz
// -slavomir.ponuchalek@yahoo.com
// Postupujte dle následujících kroků.

// 1.Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
// 2.Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.
// 3.Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
// 4.Pomocí metody slice získejte z e-mailu první část představující uživatelské jméno uživatele.
// 5.Dále z e-mailu získejte název domény tedy například gmail.com.
// 6.Ze získaných informací vytvořte objekt, který bude vypadat například takto:
// const parsedEmail = {
//   userName: 'slavomir.ponuchalek',
//   domain: 'yahoo.com',
// };
// 7.Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište jako odstavec.

const email = prompt("Zadej svůj e-mail:");
const atIndex = email.indexOf("@");
const parsedEmail = {
    userName: email.slice(0, atIndex),
    domain: email.slice(atIndex + 1, email.length),   
};

document.body.innerHTML += 
"<p>Uživatelské jméno: " + parsedEmail.userName + "</p>";

document.body.innerHTML += "<p>Doména: " + parsedEmail.domain + "</p>";


// Reseni dle lektora:
// const email = prompt('Zadejte e-mail:');
// const atIndex = email.indexOf('@');
// const parsedEmail = {
//   userName: email.slice(0, atIndex),
//   domain: email.slice(atIndex + 1),
// };
// document.body.innerHTML =
//   '<p>Uživatelské jméno: ' + parsedEmail.userName + '</p>';
// document.body.innerHTML += '<p>Doména: ' + parsedEmail.domain + '</p>';
