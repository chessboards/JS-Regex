// validation script here
//var reg2 = new RegExp(/[a-z]/,'i'); 2nd way (c# like)
const patterns = {
    username: /^\w{5,13}$/i, //dagunterman1
    email: /^[\w\._]+@[\w.]+\.[\w]+$/, //user@domain.co.uk, user@domain.international, etc.
    password: /^.{8,20}$/, // p$$w04dD! (maybe somehow require symbols)
    telephone: /^\d{11}$/, //19382755829, etc
    slug: /^[a-z-]+$/i, //this-just-in-csharp-testing, etc.
};

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        //console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);
    })
});

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}