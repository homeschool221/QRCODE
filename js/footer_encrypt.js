(function() {
    // Encrypted content (Base64 encoding for simple obfuscation)
    var encryptedContent = "PGEgaHJlZj0iaHR0cHM6Ly9jYW1wY29kZXMuY29tIj5Qb3dlcmVkIGJ5IENhbXBDb2RlczwvYT4=";

    // Decrypt the content (Base64 decoding)
    var decodedContent = atob(encryptedContent);

    // Inject the decoded content into the appropriate location in the footer
    var footerContainer = document.querySelector('.col-6.text-end');
    if (footerContainer) {
        footerContainer.innerHTML += decodedContent;
    }
})();
