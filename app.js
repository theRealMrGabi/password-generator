document.addEventListener('DOMContentLoaded', () => {
    window.onload = () =>{
        let generateButton = document.querySelector('#generate');
        generateButton.addEventListener('click', () => {
            document.querySelector('#password').value = generate();
        });
    };
    
    
    generate = (length = 15) =>{
        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '01234567890';
        const symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
    
        const all = upperCase + lowerCase + numbers + symbols;
        let password = '';
        for(let index = 0; index < length; index++){
            let character = Math.floor(Math.random() * all.length);
            password += all.substring(character , character + 1);
        }
    
        return password;
    };

    copyToClipboard = () => {
        var copyText = document.getElementById("password");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
        };
});